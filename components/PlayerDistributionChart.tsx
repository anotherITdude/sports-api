'use client'
import React from "react";
import { Player } from "@prisma/client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface PlayerDistributionChartProps {
  playerData: Player[];
}

const PlayerDistributionChart: React.FC<PlayerDistributionChartProps> = ({
  playerData,
}) => {
  const batsmanCount = playerData.filter(
    (player) => player.position === "Batsman",
  ).length;
  const bowlerCount = playerData.filter(
    (player) => player.position === "Bowler",
  ).length;
  const wicketKeeper = playerData.filter(
    (player) => player.position === "Wicketkeeper",
  ).length;
  const allRounder = playerData.filter(
    (player) => player.position === "Allrounder",
  ).length;

  console.log( batsmanCount, bowlerCount, wicketKeeper);

  const chartOptions = {
    xaxis: {
      categories: ["Batters", "Bowlers", "Wicketkeepers", "All Rounders"],
    },
  };

  const chartSeries = [
    {
      name: "Total Count",
      data: [batsmanCount, bowlerCount, wicketKeeper, allRounder],
    },
  ];

  

  

  return (
    <div>
      <h2 className="text-sm">
        Player Distribution Chart (Total players: {playerData.length} )
      </h2>
      <div className="mt-8 max-w-[800px]">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default PlayerDistributionChart;
