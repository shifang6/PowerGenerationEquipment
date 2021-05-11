<template>
  <div class="home">
    <el-container>
      <el-aside width="360px">
        <datatree></datatree>
      </el-aside>
      <el-main>
        <div class="home-header">
          <div class="home-header-title">发电设备产量</div>
        </div>
        <div class="home-nav">
          <div class="home-nav-box" v-for="(item, index) in dangQianZhi" :key="index">
            <div class="home-nav-box-left">{{ item.left }}</div>
            <div class="home-nav-box-rg">
              <div class="home-nav-box-rg-title">{{ item.title }}</div>
              <div class="home-nav-box-rg-time">{{ item.time }}</div>
            </div>
          </div>
        </div>
        <div class="home-cen">
          <div class="home-cen-left">
            <div class="home-cen-left-top">
              <div class="home-cen-left-top-title">2020年发电设备产量构成</div>
              <!-- <img :src="img1" alt=""> -->
              <div class="home-cen-left-top-box">
                <div class="home-cen-left-top-box-ts">
                  <div class="home-cen-left-top-box-ts-title">万(千瓦)</div>
                  <img :src="bing" alt="">
                </div>
                <div class="home-cen-left-top-box-dibu">
                  <img :src="dibu" alt="" style="width: 100%; height: 100%;">
                </div>
              </div>
            </div>
            <div class="home-cen-left-bottom">
              <div class="home-cen-left-bottom-title">2010年发电设备产量构成</div>
              <!-- <img :src="img1" alt=""> -->
              <div class="home-cen-left-bottom-box">
                <div class="home-cen-left-bottom-box-ts">
                  <div class="home-cen-left-bottom-box-ts-title">万(千瓦)</div>
                  <img :src="bing" alt="">
                </div>
                <div class="home-cen-left-bottom-box-dibu">
                  <img :src="dibu" alt="" style="width: 100%; height: 100%;">
                </div>
              </div>
            </div>
          </div>
          <div class="home-cen-right">
            <div class="home-cen-right-top">
              <div class="home-cen-right-top-title">2015-2020年发电设备产量（单位：万千瓦）</div>
              <div class="home-cen-right-top-botoom" id="main">
              </div>
            </div>
            <div class="home-cen-right-bottom">
              <div class="home-cen-right-bottom-title">2010-2015年发电设备产量（单位：万千瓦）</div>
              <div class="home-cen-right-bottom-botoom" id="main2">
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import ChinaMap from '../../components/ChinaMap/index.vue'
  import * as echarts from "echarts";
  import "echarts-wordcloud";
  import datatree from '@/views/datatree'
  export default {
    components: {
      datatree,
      ChinaMap
    },
    data() {
      return {
        // 首页的四个数据盒子
        dangQianZhi: [{
            left: '5027.29',
            title: '火电机组( 万千瓦 )',
            time: '2020年'
          },
          {
            left: '1706.57',
            title: '水电机组（万千瓦）',
            time: '2020年'
          },
          {
            left: '4585.06',
            title: '风电机组（万千瓦）',
            time: '2020年'
          },
          {
            left: '170',
            title: '核电机组（万千瓦）',
            time: '2020年'
          }
        ],
        img1: require("@/assets/home/机器人销量.png"),
        bing: require("@/assets/home/chart.png"),
        dibu: require("@/assets/home/1620478571(1).png"),
      }
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
      jiQi() {
        this.$router.push('/home-dynamic')
      },
      loadEchart(id) {
        let myChart = this.$echarts.init(document.getElementById(id))
        myChart.setOption(this[id])
      },
      drawoneLineTable() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          grid: {
             left: '3%',
             right: '14%',
             bottom: '3%',
             containLabel: true,
          },
          legend: {
            x: '850px',
            y: '158px',
            orient: 'item',
            itemGap: 20 ,
            data: ['总量', '水电', '火电', '风电', '核电',],
            textStyle: {
              color: '#333'
            }
          },
          xAxis: [{
            type: 'category',
            data: ['2015', '2016', '2017', '2018', '2019', '2020'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              textStyle: {
                color: '#333'
              }
            }
          }],
          yAxis: [{
              type: 'value',
              min: 0,
              max: 14000,
              interval: 2000,
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: 'block',
                }
              }
            },
            {
              type: 'value',
              min: 0,
              max: 14000,
              interval: 2000,
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: '#F5F5F5'
                }
              }
            }
          ],
          series: [{
              name: '发电设备产量',
              symbolSize: 14,
              type: 'line',
              itemStyle: {
                color: '#953735',
              },
              data: [11031.41, 11453.74, 10994, 9808.2, 8419.16, 11488.92]
            },
            {
              name: '水电',
              type: 'bar',
              itemStyle: {
                color: '#50BEA3'
              },
              data: [1544.25, 867.48, 871.34, 765.28, 1050.15, 1706.57]
            },
            {
              name: '火电',
              type: 'bar',
              itemStyle: {
                color: '#8064A2'
              },
              data: [7327.58, 8384.63, 8001.52, 7456.09, 4997.6, 5027.29]
            },
            {
              name: '风电',
              type: 'bar',
              itemStyle: {
                color: '#2C7664'
              },
              data: [2051.58, 1861.63, 1545.14, 1370.83, 1933.41, 4585.06]
            },
            {
              name: '核电',
              type: 'bar',
              itemStyle: {
                color: '#DE9C3C'
              },
              yAxisIndex: 1,
              data: [108, 340, 576, 216, 438, 170]
            }
          ]
        };

        option && myChart.setOption(option);
      },
      drawoneLineTabla() {
        var chartDom = document.getElementById('main2');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          grid: {
             left: '3%',
             right: '14%',
             bottom: '3%',
             containLabel: true,
          },
          legend: {
            x: '850px',
            y: '158px',
            orient: 'item',
            itemGap: 20 ,
            data: ['总量', '水电', '火电', '风电', '核电'],
            textStyle: {
              color: '#333'
            }
          },
          xAxis: [{
            type: 'category',
            data: ['2010', '2011', '2012', '2013', '2014', '2015'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              textStyle: {
                color: '#333'
              }
            }
          }],
          yAxis: [{
              type: 'value',
              min: 0,
              max: 16000,
              interval: 2000,
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: 'block',
                }
              }
            },
            {
              type: 'value',
              min: 0,
              max: 14000,
              interval: 2000,
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: '#F5F5F5'
                }
              }
            }
          ],
          series: [{
              name: '发电设备产量',
              symbolSize: 14,
              type: 'line',
              itemStyle: {
                color: '#953735',
              },
              data: [12260.97, 13998.67, 12683.22, 12183.15, 13325.9, 11031.41]
            },
            {
              name: '水电',
              type: 'bar',
              itemStyle: {
                color: '#50BEA3'
              },
              data: [1915.76, 2598.63, 2322.31, 2087.79, 2289.57, 1544.25]
            },
            {
              name: '火电',
              type: 'bar',
              itemStyle: {
                color: '#8064A2'
              },
              data: [8472.07, 9388.15, 8115.31, 7901.71, 8773.36, 7327.58]
            },
            {
              name: '风电',
              type: 'bar',
              itemStyle: {
                color: '#2C7664'
              },
              data: [1643.14, 1471.89, 1124.6, 1595.65, , 2051.58]
            },
            {
              name: '核电',
              type: 'bar',
              itemStyle: {
                color: '#DE9C3C'
              },
              yAxisIndex: 1,
              data: [230, 540, 1121, 598, 375, 108]
            }
          ]
        };

        option && myChart.setOption(option);
      },
    },
    // 生命周期 - 创建之前
    beforeCreate() {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载之前
    beforeMount() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.drawoneLineTable()
      this.drawoneLineTabla()
    },
    // 生命周期 - 更新之前
    beforeUpdate() {},
    // 生命周期 - 更新之后
    updated() {},
    // 生命周期 - 销毁之前
    beforeDestroy() {},
    // 生命周期 - 销毁完成
    destroyed() {},
    // 如果页面有keep-alive缓存功能，这个函数会触发
    activated() {}
  }
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-header {
      width: 1520px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-title {
        width: 321px;
        height: 35px;
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
    }

    &-nav {
      display: flex;
      width: 1520px;
      height: 100px;
      margin-top: 31px;
      justify-content: space-between;

      &-box {
        display: flex;
        justify-content: space-between;
        padding: 26px;
        width: 360px;
        height: 95px;
        background: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 3px 3px 3px 3px;

        &-left {
          width: 128px;
          height: 26px;
          font-size: 36px;
          margin-right: 19px;
          font-family: Helvetica Neue LT Std;
          font-weight: normal;
          color: #777777;
        }

        &-rg {
          &-title {
            width: 155px;
            height: 17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #5591f2;
          }

          &-time {
            width: 85px;
            height: 9px;
            margin-top: 7px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
          }
        }
      }
    }

    &-cen {
      width: 1520px;
      display: flex;
      margin-top: 18px;
      justify-content: space-between;

      &-left {
        width: 360px;

        &-top {
          width: 360px;
          height: 500px;
          border: 1px solid #DADADA;
          border-radius: 5px;

          &-title {
            width: 100%;
            height: 45px;
            background-color: #F6F8FB;
            line-height: 45px;
            padding-left: 15px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #777777;
          }

          &-box {
            &-ts {
              width: 360px;
              padding: 25px;
              height: 360px;

              &-title {
                width: 60px;
                height: 14px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
                line-height: 20px;
              }

              img {
                margin-top: 55px;
                margin-left: 45px;
              }
            }

            &-dibu {
              margin-top: 18px;
              width: 358px;
              height: 80px;
            }
          }
        }

        &-bottom {
          width: 360px;
          margin-top: 21px;
          height: 500px;
          border: 1px solid #DADADA;
          border-radius: 5px;

          &-title {
            width: 100%;
            background-color: #F6F8FB;
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #777777;
          }

        &-box {
          &-ts {
            width: 360px;
            padding: 25px;
            height: 360px;
        
            &-title {
              width: 60px;
              height: 14px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              line-height: 20px;
            }
        
            img {
              margin-top: 55px;
              margin-left: 45px;
            }
          }
        
          &-dibu {
            margin-top: 18px;
            width: 358px;
            height: 80px;
          }
        }
        }
      }
      &-right {
        width: 1132px;

        &-top {
          width: 100%;
          padding: 30px;
          background-color: #f5f5f5;
          border: 1px solid #DADADA;
          border-radius: 5px;
          height: 500px;

          &-title {
            width: 409px;
            height: 28px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
          }

          &-botoom {
            width: 1002px;
            height: 400px;
            margin-top: 18px;
          }
        }

        &-bottom {
          width: 100%;
          background-color: #f5f5f5;
          padding: 30px;
          margin-top: 20px;
          border: 1px solid #DADADA;
          border-radius: 5px;
          height: 500px;

          &-title {
            width: 409px;
            height: 28px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
          }

          &-botoom {
            width: 1002px;
            height: 400px;
            margin-top: 18px;
          }
        }
      }
    }
  }

  element.style {
    width: 1200px;
    height: 500px;
  }

  .progress-radial {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    // border: 2px solid #2f3439;
    background-color: #409eff;
  }

  .progress-radial .overlay {
    position: absolute;
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    vertical-align: middle;
  }

  .overlay>div {
    margin: 13px 0;
  }

  .overlay>div>div {
    line-height: 28px;
  }

  .progress-1 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(144deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-2 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(180deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-3 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(224deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-4 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      #409eff),
      linear-gradient(180deg, #409eff 50%, #409eff 50%, #409eff);
  }
</style>
