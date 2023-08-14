import { Player } from "@prisma/client";
import React, { useEffect, useState } from "react";
import Box from "./Box";
import PlayerCard from "./PlayerCard";

interface PlayerSectionInterface {
  players: Player[];
  searchQuery: string;
}
const PlayerSection: React.FC<PlayerSectionInterface> = ({
  players,
  searchQuery,
}) => {
  const filteredPlayers = players.filter((player) =>
    player.fullname.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <div
        className="flex flex-wrap 
      gap-x-4 gap-y-4 justify-start
       items-center p-4"
      >
        <div>
          {filteredPlayers.length === 0 ? (
            <div className="text-center py-4">No search results found. Please try searching a different player</div>
          ) : (
            <div className="flex flex-wrap gap-x-4 gap-y-4 justify-evenly items-center p-4">
              {filteredPlayers.map((player) => (
                <PlayerCard key={player.id} info={player} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
