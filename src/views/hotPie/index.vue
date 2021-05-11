<template>
  <div class="home">
    <el-container>
      <el-aside width="360px">
        <datatree></datatree>
      </el-aside>
      <el-main>
        <div class="home-header">
          <div class="home-header-title">
            火电
          </div>
        </div>
        <div class="home-cen">
          <div class="home-cen-left" id="zuo">123</div>
          <div class="home-cen-rg" id="you">456</div>
        </div>
        <div class="home-zh">
          <div class="home-zh-left" id="zuox">123</div>
          <div class="home-zh-rg" id="youx">456</div>
        </div>
        <div class="home-dibu">
          <div class="home-dibu-biao" id="dio">123</div>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import ChinaMap from '../../components/ChinaMap/index.vue'
  import * as echarts from "echarts";
  import "echarts-wordcloud";
  import datatree from './components/firePie'
  export default {
    components: {
      datatree,
    },
    data() {
      return {}
    },
    methods:{
      zuo() {
        var chartDom = document.getElementById('zuo');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip:{
          	trigger:'axis',
          	show:true
          },
            xAxis: {
                type: 'category',
                data: ['2016年','2017年','2018年','2019年','2020年']
            },
            title: {
                    text: '火电机组产量(按发电机计) (万千瓦)',
                },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [8384.63,8001.52,7456.09,4997.6,5027.29],
                type: 'line',
                itemStyle: {
                  color: '#4a7ebb'
                }
            }]
        };

        option && myChart.setOption(option);
      },
      you() {
        var chartDom = document.getElementById('you');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip:{
          	trigger:'axis',
          	show:true
          },
            xAxis: {
                type: 'category',
                data: ['2016年','2017年','2018年','2019年','2020年']
            },
            legend: {
                    data: ['火电汽轮机', '电站锅炉']
                },
            title: {
                    text: '30万千瓦级以上超超临界、超临界机组产量（万千瓦）',
                },
            yAxis: {
                type: 'value'
            },
            series: [
              {
                data: [5540.4,4322.8,4547,3147,2723.2],
                type: 'line',
                itemStyle: {
                  color: '#4f81bd',
                },
                name: '火电气轮机',
              },
              {
                name: '电站锅炉',
                type: 'line',
                data: [4978.2,4753.2,4700,3113,2305]
              },
            ]
        };

        option && myChart.setOption(option);
      },
      zuox() {
        var myChart = echarts.init(document.getElementById('zuox'), 'shine');
        var option = {
          color: ['#3c82c2', '#d04548', '#93bc47','#8562a6','#0cafca'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            orient: 'horizontal',
            width: '100px',
            data: ['空冷，CFB机组（台）2016年 ', '空冷，CFB机组（台）2017年', '空冷，CFB机组（台）2018年', '空冷，CFB机组（台）2019年', '空冷，CFB机组（台）2020年'],
            x: 'left',      //可设定图例在左、右、居中
            y: 'top',     //可设定图例在上、下、居中
            padding: [10, 20, 0, 50]   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          },
          grid: {
            left: '0%',
            right: '0%',
            bottom: '10%',
            top:'10%',
            containLabel: true
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: ['空冷','CFB']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '空冷，CFB机组（台）2016年',
              type: 'bar',
              barGap: 0,
              data: [30,83]
            },
            {
              name: '空冷，CFB机组（台）2017年',
              type: 'bar',
              data: [30,68]
            },
            {
              name: '空冷，CFB机组（台）2018年',
              type: 'bar',
              data: [18,70]
            },
            {
              name: '空冷，CFB机组（台）2019年',
              type: 'bar',
              data: [35,93]
            },
            {
              name: '空冷，CFB机组（台）2020年',
              type: 'bar',
              data: [0,68]
            }
          ]
        };
        myChart.setOption(option, true)
      },
      youx() {
         var chartDom = document.getElementById('youx');
         var myChart = echarts.init(chartDom);
         var option;

         option = {
           tooltip:{
           	trigger:'axis',
           	show:true
           },
             xAxis: {
                 type: 'category',
                 data: ['2016年','2017年','2018年','2019年','2020年']
             },
             legend: {
                     data: ['火电汽轮机', '电站锅炉']
                 },
             title: {
                     text: '30万千瓦级以上超超临界、超临界机组产量（万千瓦）',
                 },
             yAxis: {
                 type: 'value'
             },
             series: [
               {
                 data: [6890.3,6315.1,5600,3301.41,2950.6],
                 type: 'line',
                 itemStyle: {
                   color: '#4f81bd',
                 },
                 name: '30万千瓦级以上汽轮发电机产量（万千瓦）',
               },
               {
                 name: '30万千瓦级以上火电汽轮机产量（万千瓦）',
                 type: 'line',
                 data: [6225,4775.2,4805.4,3314.9,2988.7]
               },
               {
                 name: '30万千瓦级以上电站锅炉产量（万千瓦）',
                 type: 'line',
                 itemStyle: {
                   color:'#93bc47'
                 },
                 data: [5663.2,5414.7,4859,3458,2708.1]
               },
             ]
         };

         option && myChart.setOption(option);
      },
      dio() {
        var myChart = echarts.init(document.getElementById('dio'), 'shine')
        var option = {
          color: ['#3c82c2', '#d04548', '#93bc47', '#8562a6', '#0cafca'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            orient: 'horizontal',
            width: '100px',
            data: ['100万千瓦级以上机组（台）2016年', '100万千瓦级以上机组（台）2017年',
              '100万千瓦级以上机组（台）2018年', '100万千瓦级以上机组（台）2019年',
              '100万千瓦级以上机组（台）2020年'],
            x: 'right',      //可设定图例在左、右、居中
            y: 'center',
            itemGap: 30,//可设定图例在上、下、居中
            padding: [10, 100, 0, 50]   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          },
          grid: {
            left: '0%',
            right: '3%',
            bottom: '10%',
            top: '10%',
            containLabel: true
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              axisTick: { show: false },
              max :3,
              min : 0,
              splitNumber : 5,
              boundaryGap : [ 0.4, 0.2 ],
              data: ['汽轮发电机', '水电汽轮机', '电站锅炉']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '100万千瓦级以上机组（台）2016年',
              type: 'bar',
              barGap: 0,
              barWidth : 60,
              data: [80,80,60]
            },
            {
              name: '100万千瓦级以上机组（台）2017年',
              type: 'bar',
              data: [63, 30,63]
            },
            {
              name: '100万千瓦级以上机组（台）2018年',
              type: 'bar',
              data: [80, 73,100]
            },
            {
              name: '100万千瓦级以上机组（台）2019年',
              type: 'bar',
              data: [40, 63,33]
            },
            {
              name: '100万千瓦级以上机组（台）2020年',
              type: 'bar',
              data: [50, 60,43]
            }
          ]
        }
        option && myChart.setOption(option);
      }
    },
    mounted() {
      this.zuo()
      this.you()
      this.zuox()
      this.youx()
      this.dio()
    }
  }
</script>

<style scoped lang="scss">
 .home {
   width: 100%;
   height: 100%;
   margin: auto;
   display: flex;
   flex-direction: column;

   &-header {
     width: 100%;
     height: 100px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     &-title {
       width: 321px;
       margin-left: 70px;
       height: 35px;
       font-size: 36px;
       font-family: Microsoft YaHei;
       font-weight: bold;
       color: #333333;
     }
   }
   &-cen {
     width: 1520px;
     margin-top: 30px;
     display: flex;
     margin-left: 20px;
     justify-content: space-between;

     &-left {
       width: 740px;
       height: 360px;
       padding-left: 15px;
       padding-top: 15px;
       border: 1px solid #ccc;
     }

     &-rg {
       width: 740px;
       height: 360px;
       padding-left: 15px;
       padding-top: 15px;
       border: 1px solid #ccc;
     }
   }

   &-zh {
     width: 1520px;
     margin-top: 30px;
     display: flex;
     margin-left: 20px;
     justify-content: space-between;

     &-left {
       width: 740px;
       height: 360px;
       padding-left: 15px;
       padding-top: 15px;
       border: 1px solid #ccc;
     }

     &-rg {
       width: 740px;
       height: 360px;
       padding-left: 15px;
       padding-top: 15px;
       border: 1px solid #ccc;
     }
   }

   &-dibu {
     width: 1520px;
     margin-left: 20px;
     margin-top: 30px;
     margin-bottom: 30px;
     padding-left: 15px;
     padding-top: 15px;
     height: 360px;
     border: 1px solid #ccc;

     &-biao {
       height: 360px;
     }
   }
 }
</style>
