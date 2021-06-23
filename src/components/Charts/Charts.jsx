import React from "react";
import { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Bar, Line } from "react-chartjs-2";
import styles from "./Charts.module.css";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  //Line Chart
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),

        datasets: [
          {
            label: "Infected",
            data: dailyData.map((data) => data.confirmed),
            borderColor: "blue",
            fill: true,
            backgroundColor: "rgba(0,0,255,0.3)",
          },
        ],
      }}
    />
  ) : null;

  //Bar Charts
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: `Country : ${country}`,
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: ["#4285f4", "#8aca2b", "red"],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: "Bar Chart" },
      }}
    />
  ) : null;

  return <div className={styles.charts}>{country ? barChart : lineChart}</div>;
};

export default Charts;
