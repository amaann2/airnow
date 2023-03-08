import React from "react";
import "./piechart.css";
import Chart from "react-apexcharts";
const Piechart = () => {
  return (
    <div className="pie-chart">
      <h4>Balance statistics</h4>
      <Chart
        type="donut"
        width={320}
        height={300}
        series={[122, 414]}
        options={{
          labels: ["Spent", "Referral"],
          colors: ["#4424a7", "#09c0d7", "#e4e9f2"],
        }}
      />
    </div>
  );
};

export default Piechart;
