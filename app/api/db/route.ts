import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }
    const players = await prismadb.player.findMany({ take: 50 });
    return NextResponse.json(players);
  } catch (error) {
    console.log("[Players not found]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
