<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import DataSet from "@antv/data-set";
import { Chart, registerShape, Util } from "@antv/g2";

export default {
  // mixins: [resize],
  data() {
    return {
      echarts05Data: [
        {
          name: "十九大精神",
          value: 15000,
        },
        {
          name: "两学一做",
          value: 10081,
        },
        {
          name: "中华民族",
          value: 9386,
        },
        {
          name: "马克思主义",
          value: 7500,
        },
        {
          name: "民族复兴",
          value: 7500,
        },
        {
          name: "社会主义制度",
          value: 6500,
        },
        {
          name: "国防白皮书",
          value: 6500,
        },
        {
          name: "创新",
          value: 6000,
        },
        {
          name: "民主革命",
          value: 4500,
        },
        {
          name: "文化强国",
          value: 3800,
        },
        {
          name: "国家主权",
          value: 3000,
        },
        {
          name: "武装颠覆",
          value: 2500,
        },
        {
          name: "领土完整",
          value: 2300,
        },
        {
          name: "安全",
          value: 2000,
        },
        {
          name: "从严治党",
          value: 1900,
        },
        {
          name: "现代化经济体系",
          value: 1800,
        },
        {
          name: "国防动员",
          value: 1700,
        },
        {
          name: "信息化战争",
          value: 1600,
        },
        {
          name: "局部战争",
          value: 1500,
        },
        {
          name: "教育",
          value: 1200,
        },
        {
          name: "职业教育",
          value: 1100,
        },
        {
          name: "兵法",
          value: 900,
        },
        {
          name: "一国两制",
          value: 800,
        },
        {
          name: "特色社会主义思想",
          value: 700,
        },
      ],
      title: "123",
      width: "200px",
      height: "80px",
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      function getTextAttrs(cfg) {
        return {
          ...cfg.defaultStyle,
          ...cfg.style,
          fontSize: cfg.data.size,
          text: cfg.data.text,
          textAlign: "center",
          fontFamily: cfg.data.font,
          fill: cfg.color || cfg.defaultStyle.stroke,
          textBaseline: "Alphabetic",
        };
      }
      // 给point注册一个词云的shape
      registerShape("point", "cloud", {
        draw(cfg, container) {
          const attrs = getTextAttrs(cfg);
          const textShape = container.addShape("text", {
            attrs: {
              ...attrs,
              x: cfg.x,
              y: cfg.y,
            },
          });
          if (cfg.data.rotate) {
            Util.rotate(textShape, (cfg.data.rotate * Math.PI) / 180);
          }
          return textShape;
        },
      });
      let data = [
        {
          x: "China",
          value: 1383220000,
          category: "asia",
        },
        {
          x: "India",
          value: 1316000000,
          category: "asia",
        },
        {
          x: "United States",
          value: 324982000,
          category: "america",
        },
        {
          x: "Indonesia",
          value: 263510000,
          category: "asia",
        },
        {
          x: "Brazil",
          value: 207505000,
          category: "america",
        },
        {
          x: "Pakistan",
          value: 196459000,
          category: "asia",
        },
      ];
      const dv = new DataSet.View().source(data);
      const range = dv.range("value");
      const min = range[0];
      const max = range[1];
      dv.transform({
        type: "tag-cloud",
        fields: ["x", "value"],
        size: [600, 500],
        font: "Verdana",
        padding: 0,
        timeInterval: 5000, // max execute time
        rotate() {
          return 0; // 0, 90, 270
        },
        fontSize(d) {
          if (d.value) {
            return ((d.value - min) / (max - min)) * (80 - 24) + 24;
          }
          return 0;
        },
      });
      const chart = new Chart({
        container: "container",
        autoFit: false,
        width: 330,
        height: 300,
        padding: 0,
      });
      chart.data(dv.rows);
      chart.scale({
        x: { nice: false },
        y: { nice: false },
      });
      chart.legend(false);
      chart.axis(false);
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
      });
      chart.coordinate().reflect("x");
      chart
        .point()
        .position({
          fields: ["x", "y"],
        })
        .color("x", "#fabf23-#abcadd-#d4e4ee")
        .shape("cloud")
        .tooltip("value*category");
      chart.interaction("element-active");
      chart.render();
    },
  },
};
</script>
<style lang="scss" scoped></style>
