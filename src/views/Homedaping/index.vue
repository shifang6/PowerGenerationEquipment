<template>
  <div class="home">
    <el-container>
      <el-aside width="360px">
        <datatree></datatree>
      </el-aside>
      <el-main>
        <div class="home-header">
          <div class="home-header-title">全国全社会用电量</div>
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
            <div class="home-cen-left-top" id="zuoshang"></div>
            <div class="home-cen-left-bottom" id="zuoxia"></div>
          </div>
          <div class="home-cen-rg">
            <div class="home-cen-rg-top" id="youshang"></div>
            <div class="home-cen-rg-bottom">
              <div class="home-cen-rg-bottom-top">
                <div class="home-cen-rg-bottom-top-di">
                  <div class="toubu" style="margin-bottom: 20px; margin-top: 30px; cursor: pointer;">第一产业用电量</div>
                  <div class="progress-radial progress-1">
                    <div class="overlay">
                      <div>
                        <div style="font-size: 10px;;">↑ 10.20%</div>
                      </div>
                    </div>
                  </div>
                  <div class="toubu" style="margin-top: 40px; margin-bottom: 20px; cursor: pointer;">第二产业用电量</div>
                  <div class="progress-radial progress-2">
                    <div class="overlay">
                      <div>
                        <div style="font-size: 12px;">51215亿千瓦时</div>
                        <div style="color: #0f0; font-size: 10px;">↑ 2.50%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="home-cen-rg-bottom-bu">

                <div class="home-cen-rg-bottom-bu-xia">
                  <div class="toubu" style=" margin-bottom: 20px; margin-top: 30px; cursor: pointer;">第三产业用电量</div>
                  <div class="progress-radial progress-3">
                    <div class="overlay">
                      <div>
                        <div style="font-size: 12px;">12087亿千瓦时</div>
                        <div style="color: #0f0; font-size: 10px;">↑ 1.90%</div>
                      </div>
                    </div>
                  </div>
                  <div class="toubu" style="margin-left: -14px; margin-top: 40px; margin-bottom: 20px; cursor: pointer;">城乡居民生活用电量</div>
                  <div class="progress-radial progress-4">
                    <div class="overlay">
                      <div>
                        <div style="font-size: 12px;">10950亿千瓦时</div>
                        <div style="color: #0f0; font-size: 10px;">↑ 6.90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-bottom">
          <div class="home-bottom-left" id="zuoz"></div>
          <div class="home-bottom-rg" id="zuoy"></div>
        </div>
        <div class="home-xia">
          <div class="home-xia-left" id="xiaz"></div>
          <div class="home-xia-rg" id="xiay"></div>
        </div>
        <div class="home-footer" id="diu"></div>
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
            left: '75110',
            title: '当前期值( 亿千瓦 )',
            time: '2020年'
          },
          {
            left: '3.1',
            title: '同比增长（%）',
            time: '2020年'
          },
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
      zuoshang() {
        var chartDom = document.getElementById('zuoshang');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                    text: '制造业用电量增速(%)',
                },
            xAxis: {
                type: 'category',
                data: ['高技术及装备制造业', '四大高载能行业', '其他制造业行业', '消费品制造业']
            },
            color: '#4f81bd',
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [4, 3.6, 3.3, -1.8],
                type: 'bar',
                barWidth : 60,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: 'red'
                      }
                    }
                  }
                },
            }]
        };

        option && myChart.setOption(option);
      },
      zuoxia() {
        var chartDom = document.getElementById('zuoxia');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                    text: '地区用电量增速(%)',
                },
            xAxis: {
                type: 'category',
                data: ['东部', '中部', '西部', '东北地区']
            },
            color: '#4f81bd',
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [2.1, 2.4, 5.6, 1.6],
                type: 'bar',
                barWidth : 60,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: 'red'
                      }
                    }
                  }
                },
            }]
        };

        option && myChart.setOption(option);
      },
      youshang() {
        var chartDom = document.getElementById('youshang');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                x:"550px",
                y:'120px',
                itemGap: 30,
                orient: 'item',
                data: [ '城乡居民生活', '第三产业', '第二产业', '第一产业']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    max : 6,
                    min : 0,
                    splitNumber : 5,
                    boundaryGap : [ 0.2, 0.2 ],
                    data: ['2016年', '2017年', '2018年', '2019年', '2020年']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                }
            ],
            series: [
              {
                  name: '第一产业',
                  type: 'bar',
                  stack: '广告',
                  itemStyle: {
                    color: '#4f81bd',
                  },
                  barWidth: "30px",
                  barGap:"1",
                  emphasis: {
                      focus: 'series'
                  },
                  data: [1092, 1175, 746, 779, 859]
              },
              {
                  name: '第二产业',
                  type: 'bar',
                  stack: '广告',
                  itemStyle: {
                    color: '#c0504d'
                  },
                  emphasis: {
                      focus: 'series'
                  },
                  data: [42615, 44922, 47733, 49595, 51215]
              },
                {
                    name: '第三产业',
                    type: 'bar',
                    stack: '广告',
                    itemStyle: {
                      color: '#9bbb59'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [7970, 8825, 10831, 11861, 12087]
                },


                {
                    name: '城乡居民生活',
                    type: 'bar',
                    stack: '广告',
                    emphasis: {
                        focus: 'series'
                    },

                    itemStyle: {
                       color: '#8064a2',
                      normal: {
                        label: {
                          show: true,
                          position: 'top',
                          textStyle: {
                            color: 'red'
                          }
                        }
                      }
                    },
                    data: [8071, 8703, 9692, 10250, 10950]
                },
            ]
        };

        option && myChart.setOption(option);

      },
      zuoz() {
        var chartDom = document.getElementById('zuoz');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['一季度','二季度','三季度','四季度']
            },
            title: {
                    text: '第一产业用电量季度增速(%)',
                },
            yAxis: {
                type: 'value'
            },
            color: '#4f81bd',
            series: [{
                data: [4,11.9,11.6,12],
                type: 'bar',
                barWidth : 60,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: 'red'
                      }
                    }
                  }
                }
            }]
        };

        option && myChart.setOption(option);
        },
       zuoy() {
         var chartDom = document.getElementById('zuoy');
         var myChart = echarts.init(chartDom);
         var option;

         option = {
             xAxis: {
                 type: 'category',
                 data: ['一季度','二季度','三季度','四季度']
             },
             title: {
                     text: '第二产业用电量季度增速(%)',
                 },
                 color: '#4f81bd',
             yAxis: {
                 type: 'value'
             },
             series: [{
                 data: [-8.8,3.3,5.8,7.6],
                 type: 'bar',
                 barWidth : 60,
                 itemStyle: {
                   normal: {
                     label: {
                       show: true,
                       position: 'top',
                       textStyle: {
                         color: 'red'
                       }
                     }
                   }
                 }
             }]
         };

         option && myChart.setOption(option);
         },
      xiaz() {
        var chartDom = document.getElementById('xiaz');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['一季度','二季度','三季度','四季度']
            },
            title: {
                    text: '第三产业用电量季度增速(%)',
                },
                color: '#4f81bd',
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [-8.3,0.5,5.9,8.4],
                type: 'bar',
                barWidth : 60,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: 'red'
                      }
                    }
                  }
                }
            }]
        };

        option && myChart.setOption(option);
        },
      xiay() {
        var chartDom = document.getElementById('xiay');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['一季度','二季度','三季度','四季度']
            },
            title: {
                    text: '城乡居民生活用电量季度增速(%)',
                },
                color: '#4f81bd',
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [3.5,10.6,5,10],
                type: 'bar',
                barWidth : 60,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: 'red'
                      }
                    }
                  }
                }
            }]
        };

        option && myChart.setOption(option);
        },
     diu() {
       var chartDom = document.getElementById('diu');
       var myChart = echarts.init(chartDom);
       var option;

       option = {
           xAxis: {
               type: 'category',
               axisLabel: {
               					interval:0,
                                   rotate:-30  //倾斜的程度
                               },
               data: ['宁夏','青海','内蒙古','新疆','甘肃','山西','河北','辽宁','山东','广西','贵州','云南','浙江','黑龙江','陕西','海南','吉林','江西','安徽','广东','天津','江苏','河南','四川','福建','湖北','重庆','湖南','西藏','上海','北京']
           },
           grid: {
              left: '3%',
              right: '3%',
              bottom: '3%',
              containLabel: true,
           },
           title: {
                   text: '分地区单位GDP电耗(千瓦时/万元)',
               },
               color: '#4f81bd',
           yAxis: {
               type: 'value',
               axisLabel: {
                               // 字体配置，是否显示
                             show: true,
                             textStyle: {
                               color: '#000',
                               fontSize: '12'
                             }
                           }
           },
           series: [{
               data: [2647.59,2468.46,2246.54,2172.84,1526.06,1326.77,1086.53,964.76,949.01,913.95,889.68,826.2,747.53,740.23,664.96,654.33,653.87,633.28,627.7,625.31,621.28,620.53,616.76,589.52,565.55,493.52,474.75,461.69,430.96,407.23,315.77],
               type: 'bar',
               itemStyle: {
                 normal: {
                   label: {
                     show: true,
                     position: 'top',
                     textStyle: {
                       color: 'red'
                     }
                   }
                 }
               }
           }]
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
      this.zuoshang()
      this.zuoxia()
      this.youshang()
      this.zuoz()
      this.zuoy()
      this.xiaz()
      this.xiay()
      this.diu()
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

    &-header {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-title {
        width: 321px;
        height: 35px;
        margin-left: -100px;
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
    }

    &-nav {
      display: flex;
      width: 1520px;
      margin-left: 30px;
      height: 100px;
      margin-top: 31px;

      &-box {
        display: flex;
        justify-content: space-between;
        padding: 26px;
        width: 360px;
        height: 95px;
        margin-right: 20px;
        background: #ffffff;
        border: 1px solid #cccccc;
        cursor: pointer;
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
      margin-left: 30px;
      display: flex;
      margin-top: 18px;
      justify-content: space-between;

      &-left {
        width: 740px;
        height: 720px;

        &-top {
          width: 100%;
          height: 360px;
          padding-top: 15px;
          padding-left: 15px;
          border: 1px solid #CCCCCC;
          border-radius: 3px 3px 3px 3px;
        }

        &-bottom {
          width: 100%;
          height: 360px;
          padding-top: 15px;
          margin-top: 20px;
          padding-left: 15px;
          border: 1px solid #CCCCCC;
          border-radius: 3px 3px 3px 3px;
        }
      }

      &-rg {
        width: 740px;
        height: 854px;
        padding-top: 15px;
        padding-left: 15px;
        margin-top: -118px;
        border: 1px solid #ccc;
        border-radius: 3px 3px 3px 3px;

        &-top {
          width: 100%;
          height: 360px;
        }

        &-bottom {
          display: flex;
          height: 360px;
          padding-top: 20px;
          justify-content: space-around;
        }
      }
    }

    &-bottom {
      width: 1520px;
      margin-left: 30px;
      display: flex;
      margin-top: 20px;
      justify-content: space-between;

      &-left {
        width: 740px;
        height: 360px;
        padding-top: 15px;
        padding-left: 15px;
        border: 1px solid #CCCCCC;
        border-radius: 3px 3px 3px 3px;
      }

      &-rg {
        width: 740px;
        height: 360px;
        padding-top: 15px;
        padding-left: 15px;
        border: 1px solid #CCCCCC;
        border-radius: 3px 3px 3px 3px;
      }
    }

    &-xia {
      display: flex;
      margin-left: 30px;
      width: 1520px;
      margin-top: 20px;
      justify-content: space-between;

      &-left {
        width: 740px;
        height: 360px;
        padding-top: 15px;
        padding-left: 15px;
        border: 1px solid #CCCCCC;
        border-radius: 3px 3px 3px 3px;
      }

      &-rg {
        width: 740px;
        height: 360px;
        padding-top: 15px;
        padding-left: 15px;
        border: 1px solid #CCCCCC;
        border-radius: 3px 3px 3px 3px;
      }
    }

    &-footer {
      width: 1520px;
      height: 360px;
      margin-top: 20px;
      border: 1px solid #ccc;
      margin-left: 30px;
      padding-top: 15px;
      padding-left: 15px;
      margin-bottom: 30px;
      border-radius: 3px 3px 3px 3px;
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
    padding-top: 18px;
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
    cursor: pointer;
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(144deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-2 {
    cursor: pointer;
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(180deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-3 {
    cursor: pointer;
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(260deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-4 {
    cursor: pointer;
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      #409eff),
      linear-gradient(180deg, #409eff 50%, #409eff 50%, #409eff);
  }
</style>
