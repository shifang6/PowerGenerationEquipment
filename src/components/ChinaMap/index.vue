<template>
  <div style="width: 1200px; height: 800px;">
    <div
      id="china_map"
      :style="{ height: '400px', width: '500px' }"
      ref="myEchart"
    ></div>
  </div>
</template>

<script>
//引入echarts
import echarts from "echarts";
//引入世界地图
import "echarts/map/js/china";
//echart虚拟世界地图
import "echarts/lib/component/visualMap";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      this.chart = echarts.init(document.getElementById("china_map"));
      window.onresize = echarts.init(this.$refs.myEchart).resize;
      // 把配置和数据放这里
      this.chart.setOption({
        //标题设置
        tooltip: {
          //提示框数据
          formatter: function (params) {
            return `${params.name}:${params.value}`;
          },
        },
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["#000", "#ffdead"],
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)",
              },
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#eeeeee",
              borderColor: "#000",
            },
            emphasis: {
              areaColor: "#999",
            },
          },
        },
        series: [
          {
            type: "map",
            name: "国家/地区",
            emphasis: {
              label: {
                show: true,
              },
            },
            mapLocation: {
              y: 100,
            },
            data: [
              {
                name: "陕西",
                value: 2,
              },
              {
                name: "浙江",
                value: 3,
              },
              {
                name: "云南",
                value: 5,
              },
            ],
            nameMap: "地图", //汉化名称
            symbolSize: 1,
            label: {
              //普通模式
              normal: { show: false },
              //鼠标移入激活样式
              emphasis: { show: true },
            },
            //设置地图激活样式
            itemStyle: {
              normal: {
                areaColor: "#c9c9c9",
                borderWidth: 0.5,
              },
              emphasis: {
                borderColor: "transparent",
                borderWidth: 1,
              },
            },
          },
        ],
      });
    },
  },
};
</script>
