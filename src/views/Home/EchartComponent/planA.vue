<template>
  <div id="main" style="width: 184px; height: 184px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "planA",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let chartDom = document.getElementById("main");
      let myChart = echarts.init(chartDom);
      let option;

      option = {
        xAxis: {
          type: "category",
          data: ["11", "12", "1", "2", "3", "4"],
        },
        yAxis: {
          type: "value",
          name: "",
          nameTextStyle: {
            padding: [0, 0, 0, 100],
          },
          axisLabel: {
            interval: 4,
          },
        },
        grid: {
          left: 30, // 调整这个属性
        },
        series: [
          {
            data: [2, 4, 24, 8, 3, 12, 14],
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped></style>
