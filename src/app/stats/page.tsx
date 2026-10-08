"use client";

import { FriendContext } from "@/context/FriendContext";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, TooltipIndex } from "recharts";

const StatPage = ({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) => {
  const { history } = useContext(FriendContext);

  const data = [
    { name: "Call", value: 0, fill: "#244D3F" },
    { name: "Text", value: 0, fill: "#842BFC" },
    { name: "Video", value: 0, fill: "#2E9A61" },
  ];

  for (const h of history) {
    if (h.action === "call") data[0].value++;
    if (h.action === "text") data[1].value++;
    if (h.action === "video") data[2].value++;
  }

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-2xl font-bold text-[#1F2937] mb-10">
        Friendship Analytics
      </h1>

      <div className="bg-base-100 shadow rounded-2xl p-10">
        <h1 className="font-semibold text-[#244D3F] text-xl mb-5">
          By Interection Type
        </h1>
        <div className="flex justify-center">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "200px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={isAnimationActive}
            />

            <Tooltip defaultIndex={defaultIndex} />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StatPage;
