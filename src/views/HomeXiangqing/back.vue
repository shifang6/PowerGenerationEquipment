<template>
  <div>
    <div class="home">
      <div class="home-header">
        <div class="home-header-left">
          <div class="home-header-left-fh">!</div>
          <div class="home-header-left-title">数据新闻</div>
        </div>
        <div class="home-right">
          <div class="home-right-top">相关预测</div>
          <div class="home-right-bottom">
            <div class="home-right-bottom-box" v-for="(item, index) in youCe" :key='index'>
              <div class="home-right-bottom-box-title">
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-nav">
        <div class="home-nav-title">
          1-3月份全国电力工业统计数据
        </div>
        <div class="home-nav-bottom">
          <div class="home-nav-bottom-time"></div>
          <div class="home-nav-bottom-zs"> 机械工业发电设备中心  4月21日</div>
          <div class="home-nav-bottom-rg"></div>
        </div>
      </div>
      <div class="home-top">
        <div class="home-top-sj">
          {{wenzhang}}
        </div>
        <div class="home-top-hot">
          <div class="home-top-hot-title"></div>
          <div class="home-top-hot-title"></div>
          <div class="home-top-hot-title"></div>
          <div class="home-top-hot-cen" style="display: flex;justify-content: center">
            <img :src="imgs" />
          </div>
          <!--          <div class="home-top-hot-le">-->
          <!--            一、原煤、原油和天然气生产及相关情况-->
          <!--          </div>-->
          <!--          <div class="home-top-hot-cen2">-->
          <!--            原煤生产同比较快增长，日均环比略有下降。1—2月份，生产-->
          <!--            原煤6.2亿吨，同比增长25.0%，比2019年1—2月份增长17.1-->
          <!--            %，两年平均增长8.2%；日均产量1047万吨，比上年12月份-->
          <!--            减少88万吨。进口煤炭4113万吨，同比下降39.5%。-->
          <!--          </div>-->
          <!--          <div class="home-top-hot-cen">-->
          <!--            港口煤炭综合交易价格高位回落。2月26日秦皇岛港5500、5000-->
          <!--            和4500大卡煤炭价格分别为每吨613元、550元和494元，比1月-->
          <!--            22日最高价分别下降132元、124元和89元。-->
          <!--          </div>-->
        </div>
      </div>
      <!--      <div class="home-cen">-->
      <!--        <div class="home-cen-echarts"-->
      <!--             id="main">-->
      <!--        </div>-->
      <!--        <div class="home-cen-echarts2" id="main2"></div>-->
      <!--      </div>-->
      <div class="home-footer">
        <!--        <div class="home-footer-top">-->
        <!--          原油生产同比保持稳定增长，日均环比增产。1—2月份，生产原油3208万吨，-->
        <!--          同比增长0.4%，比2019年1—2月份增长4.1%，两年平均增长2.0%；日均产-->
        <!--          量54.4万吨，比上年12月份增加1.9万吨。加工原油11424万吨，同比增长-->
        <!--          15.0%，比2019年1—2月份增长10.6%，两年平均增长5.2%；日均加工193.6-->
        <!--          万吨，比上年12月份增加0.1万吨。-->
        <!--        </div>-->
        <!--        <div class="home-footer-cen">-->
        <!--          原油进口小幅增长，国际原油价格持续上涨。进口原油8957万吨，同比增长-->
        <!--          4.1%；国际原油价格持续上涨，2月26日布伦特原油现货离岸价格为65.86美-->
        <!--          元/桶，比1月4日50.37美元/桶上涨30.8%。-->
        <!--        </div>-->
        <div class="home-footer-box">
          <div class="home-footer-box-left">打印</div>
          <div class="home-footer-box-rg" @click="go">关闭</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  import 'echarts-wordcloud'

  export default {
    data() {
      return {
        youCe: require('@/assets/home/Snipaste_2021-04-27_15-47-47.png'),
        wenzhang: '4月20日，国家能源局发布1-3月份全国电力工业统计数据',
        youCe: [
          {
            title: '1-3月份全国电力工业统计数据'
          },
          {
            title: '3月份全社会用电量同比增长19.4%'
          },
          {
            title: '国家能源局发布2021年1-2月份全国电力工业统...'
          },
          {
            title: '2021年1-2月太阳能发电增长25.8% 两年平均...'
          },
          {
            title: '美国光伏装机量增长24%，不及中国增量'
          },
          {
            title: '王勃华：2021年我国光伏新增装机55-65GW ...'
          },
          {
            title: '2020年规上工业增加值同比增长2.8%，增速逐...'
          },
          {
            title: 'EIA：美国2021年计划新增39.7GW发电容量太...'
          },
          {
            title: '国网：截至2020年底共58GW光伏项目纳入可...'
          }
        ],
        imgs:require('@/assets/baseImg.jpg')
      }
    },
    mounted() {
      this.drawoneLineTable()
      this.zhezhuhunhe()
    },
    methods: {
      go() {
        this.$router.push('/home')
      },
      handleNodeClick(data) {
        console.log(data)
      },
      drawoneLineTable() {
        var chartDom = document.getElementById('main')
        var myChart = echarts.init(chartDom)
        var option

        option = {
          xAxis: {
            type: 'category',
            splitLine: {
              show: false
            },
            data: ['2020年1-2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2021年1-2月']
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            }
          },
          series: [{
            data: [-6.3, 9.6, 6.0, -0.1, -1.2, -3.7, -0.1, -0.9, 1.4, 1.5, 3.2, 25.0],
            type: 'line',
            itemStyle: { normal: { label: { show: true } } }
          }]
        }

        option && myChart.setOption(option)
      },
      zhezhuhunhe() {
        var chartDom = document.getElementById('main2')
        var myChart = echarts.init(chartDom)
        var option

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#333'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['当月进口量(万吨)', '当月增速(%)']
          },
          xAxis: [
            {
              type: 'category',
              data: ['2020年1-2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2021年1-2月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              max: 10000,
              interval: 2000
            },
            {
              type: 'value',
              min: -800,
              max: 1400,
              interval: 200
            }
          ],
          series: [
            {
              name: '当月进口量(万吨)',
              type: 'bar',
              data: [6795, 2783, 3095, 2206, 2529, 2610, 2066, 1868, 1373, 1176, 3908, 4113],
              itemStyle: {
                normal: { color: '#98CEFF' }
              }
            },
            {
              name: '当月增速(%)',
              type: 'line',
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  label: { show: true },
                  lineStyle: {
                    color: '#215A9A'
                  }
                }
              },
              data: [32.9, 18.6, 22.4, -19.7, -6.6, -20.6, -37.3, -38.3, -46.3, -43.1, 1311.2, -39.5]
            }
          ]
        }

        option && myChart.setOption(option)
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    position: relative;
    width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-cen {
      width: 780px;
      height: 720px;
      margin-top: 30px;

      &-echarts {
        width: 780px;
        height: 300px;
      }

      &-echarts2 {
        margin-top: 20px;
        width: 780px;
        height: 400px;
      }
    }

    &-footer {
      margin-left: -1px;
      width: 780px;
      height: 700px;
      margin-bottom: 50px;

      &-box {
        margin-top: 50px;
        height: 140px;

        &-title {
          text-indent: 2rem;
          font-size: 14px;
          color: #333;
          height: 30px;
          line-height: 26px;
        }
      }
    }

    &-right {
      width: 390px;
      height: 522px;
      padding: 30px;
      background: #FFFFFF;
      box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.35);
      border-radius: 5px 5px 5px 5px;

      &-top {
        width: 72px;
        height: 18px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        cursor: pointer;
        color: #333333;
      }

      &-bottom {
        margin-top: 30px;

        &-box {
          margin-top: 25px;
          cursor: pointer;

          &-title {

            height: 20px;
            font-size: 16px;
            overflow: hidden;
          }
        }
      }
    }

    &-header {
      width: 1200px;
      margin-top: 20px;
      height: 50px;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;

      &-left {
        display: flex;
        z-index: 10;
        background: #e8f5fe;
        width: 780px;

        &-fh {
          width: 14px;
          height: 14px;
          margin-top: 17px;
          line-height: 14px;
          margin-right: 10px;
          text-align: center;
          background-color: #adbfe0;
          border-radius: 50%;
          color: #e8f5fe;
        }

        &-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 50px;
          color: #333;
        }


      }

      &-nav {
        width: 670px;
        height: 96px;
        margin-left: 55px;
        margin-top: 40px;
        text-align: center;
        border-bottom: 1px dashed #ccc;

        &-title {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
          line-height: 48px;
        }
      }
    }

    &-top {
      width: 780px;
      margin-top: 30px;
      padding-left: 20px;

      &-sj {
        width: 750px;
        line-height: 22px;
        text-indent: 2rem;
        font-size: 14px;
        color: #333;
      }

      &-bt {
        font-size: 14px;
        color: #333;
        margin-top: 20px;
      }

      &-hot {
        &-title {
          color: #333333;
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: left;
          font-weight: 600;
        }

        &-cen {
          color: #333;
          line-height: 22px;
          text-indent: 2rem;
          font-size: 14px;
        }

        &-le {
          font-size: 14px;
          color: #333;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        &-cen2 {
          color: #333;
          line-height: 22px;
          text-indent: 2rem;
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }

    &-right {
      width: 390px;
      height: 522px;
      background: #ffffff;
      box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.35);
      border-radius: 5px 5px 5px 5px;
    }

    &-nav {
      width: 670px;
      height: 96px;
      margin-left: 55px;
      margin-top: 40px;
      text-align: center;
      border-bottom: 1px dashed #ccc;


      &-title {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        margin-bottom: 8px;
        color: #333333;
        line-height: 48px;
      }

      &-bottom {
        width: 252px;
        height: 13px;
        display: flex;
        margin: auto;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
        justify-content: space-between;
      }
    }

    &-bb {
      margin-top: 30px;
      width: 678px;
      height: 541px;
      margin-left: 55px;
      align-items: center;
    }

    &-footer {
      margin-left: 55px;
      width: 687px;
      height: 100px;
      margin-bottom: -70px;

      &-top {
        color: #333;
        line-height: 22px;
        text-indent: 2rem;
        font-size: 14px;
        margin-bottom: 20px;
      }

      &-cen {
        color: #333;
        line-height: 22px;
        text-indent: 2rem;
        font-size: 14px;
        margin-bottom: 20px;
      }

      &-box {
        margin: 0 auto;
        margin-top: 30px;
        width: 120px;
        color: #203C99;
        display: flex;
        justify-content: space-between;
        line-height: 30px;
        height: 30px;
      }
    }
  }
</style>
