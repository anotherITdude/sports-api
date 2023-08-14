import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Player } from "@prisma/client";

interface PlayerCardProps {
  info: Player;
}
const PlayerCard: React.FC<PlayerCardProps> = ({ info }) => {
  return (
    <Card className="bg-neutral width-full min-w-[200px] text-center">
      <CardHeader>
        <CardTitle>{info.fullname}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="rounded-2xl relative flex justify-center h-36">
            <Image
              fill
              priority={true}
              quality={80}
              alt={info.firstname}
              src={info.image_path}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="w-full">{info.position}</p>
      </CardFooter>
    </Card>
  );
};

export default PlayerCard;
