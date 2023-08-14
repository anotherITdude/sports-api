import { Player } from "@prisma/client";
import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

interface PlayerSectionInterface {}
const PlayerSection: React.FC<PlayerSectionInterface> = ({}) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function fetchPlayers() {
      const response = await fetch("/api/db");
      const data = await response.json();
      setPlayers(data);
    }
    fetchPlayers();
  }, []);

  return (
    <div>
      <div
        className="flex flex-wrap 
      gap-x-4 gap-y-4 justify-evenly
       items-center p-4"
      >
        {players.map((player) => (
          <PlayerCard key={player.id} info={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerSection;
