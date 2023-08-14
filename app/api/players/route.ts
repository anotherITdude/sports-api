import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { Player as ApiPlayer } from "@/type_d";

const prisma = new PrismaClient();
export async function GET() {
  try {
    const res = await fetch(
      `${process.env.SPORTSMONK_URL}/players?api_token=
      ${process.env.SPORTSMONK_TOKEN}`,
      {
        cache: "no-store", // Disable caching
      },
    );
    const apiData: { data: ApiPlayer[] } = await res.json();

    // Insert data into Prisma database in batches of 1000
    const batchSize = 1000;
    for (let i = 0; i < apiData.data.length; i += batchSize) {
      const batch = apiData.data.slice(i, i + batchSize);

      const prismaPlayers = batch.map((apiPlayer) => {
        const { position, ...rest } = apiPlayer;
        return {
          ...rest,
          position: position?.name,
        };
      });

      await prisma.$transaction(async (transaction) => {
        return transaction.player.createMany({
          data: prismaPlayers,
          skipDuplicates: true,
        });
      });
    }

    return NextResponse.json({ message: "Successfully inserted 1000 entries" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error fetching or saving data",
      error,
    });
  }
}
