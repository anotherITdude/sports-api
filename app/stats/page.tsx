"use client";
import React from "react";
import Box from "@/components/Box";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { Player } from "@prisma/client";

import { useEffect, useState } from "react";
import PlayerDistributionChart from "@/components/PlayerDistributionChart";

const Stats = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
      <Container>
        <Navbar onSearchQueryChange={setSearchQuery} />
        <div className="flex gap-x-3 h-full">
          <SideBar />
          <div className="w-full">
            <Box className=" h-auto min-h-[100vh] p-4">
              <h1 className="text-purple-800 text-2xl font-semibold">Stats</h1>
              <PlayerDistributionChart playerData={players} />
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
