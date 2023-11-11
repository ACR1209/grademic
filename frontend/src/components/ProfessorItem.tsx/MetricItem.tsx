import { inter, notoSerif } from "@/utils/fonts";
import React from "react";

function MetricItem({ metric, text }: { metric: any; text: string }) {
  return (
    <div className="select-none">
      <p className={`${inter.className}`}>
        <span className={`${notoSerif.className} font-bold text-3xl`}>{metric ? metric : "N/A"}</span> {text}
      </p>
    </div>
  );
}

export default MetricItem;
