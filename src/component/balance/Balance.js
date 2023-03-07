import React from "react";
import "./balance.css";
import Chart from "react-apexcharts";
import { AiOutlineBell } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
const Balance = () => {
  return (
    <div className="balance">
      <div className="heading">
        <div className="name">Balance</div>
        <div className="profile">
          <AiOutlineBell className="user-icon" />
          <FaUserAlt className="user-icon" />
        </div>
      </div>

      <hr />
      <div className="main">
        <p>Daily balance overiview</p>
        <Chart
          type="bar"
          width={800}
          height={200}
          series={[
            {
              name: "Referal",
              data: [10, 34, 25, 39, 42, 2, 10, 12, 13, 14, 15, 16, 50],
              color: "#4424a7",
            },
            {
              name: "spent",
              data: [30, 22, 12, 22, 42, 22, 13, 14, 15, 16, 35, 53, 50],
              color: "#09c0d7",
            },
          ]}
          options={{
            chart: {
              stacked: true,
            },
            xaxis: {
              categories: [
                "1 march",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "14 march",
              ],
              align: "left",
              labels: {
                align: "left",
              },
            },
            yaxis: {
              min: 0,
              max: 100,
              tickAmount: 3,
            },
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              bar: {
                columnWidth: "13%",
                borderRadius: 5,
              },
            },
            tooltip: {
              followCursor: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Balance;
