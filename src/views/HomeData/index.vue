<template>
  <div class="home">
    <div class="home-header" @click="handleOpen">
      <div class="home-header-ce">
        <div class="home-header-ce-left">
          <span>2011-2020</span>
          <h4>发电设备年度产量</h4>
        </div>
        <div class="home-header-ce-right" id="main"></div>
      </div>
    </div>
    <!-- 重点指标 -->
    <div class="home-data">
      <div class="home-data-top" @click="jida">重点指标</div>
      <div class="home-data-bottom">
        <div
          class="home-data-bottom-box"
          v-for="(item, index) in zhiBiao"
          :key="index"
          @click="jida"
        >
          <div class="home-data-bottom-box-sc">{{ item.sc }}</div>
          <div class="home-data-bottom-box-bfb">{{ item.bfb }}</div>
          <div class="home-data-bottom-box-sj">{{ item.sj }}</div>
          <div class="home-data-bottom-box-ls">{{ item.ls }}</div>
          <div class="home-data-bottom-box-you">{{ item.you }}</div>
        </div>
      </div>
    </div>
    <!-- 结构分布得左右两个图表 -->
    <div class="home-sd">
      <div class="home-sd-left">
        <div class="home-sd-left-title" @click="jida">
        2020年全社会用电量构成（亿千瓦时）
        </div>
        <div
          class="home-sd-left-bottom"
          id="home-detail-inside-cBox-contentBox-footer-Container"
          @click="handleOpen"
          style="cursor: pointer"
        ></div>
      </div>
      <div class="home-sd-right">
        <div class="home-sd-right-title" @click="jida">
          2020年发电量构成（亿千瓦时）
        </div>

          <div
            @click="handleOpen"
            class="home-sd-right-bottom"
            id="home-sd-right-bottom-tb-Container"
          ></div>
      </div>
    </div>
    <!-- 全球工业机器人市场销售 -->
    <div class="home-tw">
      <div class="home-tw-left">
        <div class="home-tw-left-title" @click="jida">2020年发电设备产量构成</div>
        <div class="home-tw-left-bottom">
          <!--<img :src="countBox2" alt="" />-->
          <div class="home-tw-left-bottom-box"> <img :src="pie1" @click="handleOpen"/>
          </div>
        </div>
      </div>

      <div class="home-tw-cen">
        <div class="home-tw-cen-title" @click="jida">2020年发电装机容量构成</div>
        <div class="home-tw-cen-bottom">
          <!--<img :src="countBox3" alt="" class="home-tw-cen-bottom-img"  onMouseOver="javascript:this.style.border='3px solid white'"
onMouseOut="javascript:this.style.border='none'"/>-->
          <div class="home-tw-left-bottom-box" style="background: #394264;">
<!--          	<div class="home-tw-left-bottom-box-top">-->
<!--&lt;!&ndash;          		<div class="home-tw-left-bottom-box-top-title">(万千瓦)</div>&ndash;&gt;-->
<!--&lt;!&ndash;          		<div class="home-tw-left-bottom-box-top-img">&ndash;&gt;-->
<!--&lt;!&ndash;          			<img @click="handleOpen" :src="bing" alt="" />&ndash;&gt;-->
<!--&lt;!&ndash;          		</div>&ndash;&gt;-->
<!--          	</div>-->
<!--          	<div class="home-tw-left-bottom-dibu">-->
<!--          		<img @click="handleOpen" :src="dibu" alt=""  style="width: 100%; height: 100%;"/>-->
<!--          	</div>-->
            <img :src="pie2" @click="handleOpen"/>
          </div>
        </div>
      </div>

      <div class="home-tw-rg">
        <div class="home-tw-rg-title" @click="jiQi">数据新闻</div>
        <div class="home-tw-rg-bottom">
          <div
            class="home-tw-rg-bottom-column"
            v-for="(item, index) in yuCe"
            :key="index"  @click="jiQi"
          >
            {{ item.title }}
            <img :src="item.nw" alt="" style="margin: 0 0 0 5px;">
            <img :src="item.hot" alt="" style="margin: 0 5px;">
            <img :src="item.huiyuan" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 更多经济运行数据 -->
    <div class="home-more">
      <div class="home-more-title" @click="jier">产业数据</div>
      <div class="home-more-bottom">
        <div
          class="home-more-bottom-box"
          v-for="(item, index) in gengduoShu"
          :key="index"
          @click="$router.push({name:item.name})"
        >
          <img :src="item.img" alt="" class="home-more-bottom-box-img" />
          <div class="home-more-bottom-box-title" >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//echrts
import * as echarts from "echarts";
import "echarts-wordcloud";
export default {
  name: "index",
  data() {
    return {
      // 右侧报表的折线图
      countBox: require("@/assets/home/分析_analysis@2x.png"),
      countBox2: require("@/assets/home/机器人销量.png"),
      countBox3: require("@/assets/home/区域分布图.png"),
      bing: require("@/assets/home/chart.png"),
      dibu: require("@/assets/home/1620478571(1).png"),
      pie1:require('@/assets/header/pie1.jpg'),
      pie2:require('@/assets/header/pie2.jpg'),
      zhiBiao: [
        {
          sc: "2020能源消费总量(亿吨标准煤)",
          bfb: "+2.2%",
          sj: "49.8",
        },
        {
          sc: "2020全国发电设备累计平均利用小时(小时)",
          ls: "-70",
          sj: '3758'
        },
        {
          sc: "2021-03采购经理指数",
          ls: "-0.19%",
          sj: '51.9'
        },
        {
          sc: "2021-03全国工业生产者出厂价格",
          you: '+4.4%'
        },
        {
          sc: "国内年产量",
          you: '+5.2%'
        },
      ],
      yuCe: [
        {
          title: "1-3月份全国电力工业统计数据",
          nw: require("@/assets/home/01大数据平台-首页_24.gif"),
        },
        {
          title: "3月份全社会用电量同比增长19.4%",
          hot: require("@/assets/home/01大数据平台-首页_28.gif"),
          huiyuan: require("@/assets/home/会员.png")
        },
        {
          title: "国家能源局发布2021年1-2月份全国电力工业统计数据",
        },
        {
          title:
            "2021年1-2月太阳能发电增长25.8% 两年平均增长18.7%",
        },
        {
          title: "美国光伏装机量增长24%，不及中国增量",
        },
        {
          title: "王勃华：2021年我国光伏新增装机55-65GW 全球或达150-170GW",
        },
        {
          title: "2020年规上工业增加值同比增长2.8%，增速逐季回升！工业经济平...",
        },
        {
          title: "EIA：美国2021年计划新增39.7GW发电容量 太阳能占39%最大份额",
        },
        {
          title: "国网：截至2020年底共58GW光伏项目纳入可再生能源补贴目录",
        },
      ],
      // 更多数据
      gengduoShu: [
        {
          img: require("@/assets/home/数据表_data-sheet.png"),
          name: "home-gongye",
          title: "电力平衡表",
        },
        {
          img: require("@/assets/home/坐标系_cones.png"),
          name: "home-gongye",
          title: "分地区电力消费量",
        },
        {
          img: require("@/assets/home/分析_analysis.png"),
          name: "home-gongye",
          title: "按国别（地区）分对外经济合作",
        },
        {
          img: require("@/assets/home/电波_electric-wave.png"),
          name: "home-gongye",
          title: "全国发电量",
        },
        {
          img: require("@/assets/home/银行卡_bank-card.png"),
          title: "6000千瓦以上供电煤耗",
          name: 'home-dynamic'
        },
        {
          img: require("@/assets/home/闪光模式_flashlamp.png"),
          title: "发电设备产量（火电）",
          name: 'home-hot'
        },
        {
          img: require("@/assets/home/汽车电瓶_car-battery.png"),
          title: "发电设备进出口",
          name: 'home-dynamic'
        },
        {
          img: require("@/assets/home/风力发电机_wind-turbine.png"),
          title: "不锈钢",
          name: 'home-dynamic'
        }
      ],
    };
  },
  mounted() {
    this.drawoneLineTable(),
      this.drawEchartsLineTable(),
      this.drawEchartsLineTableright();
  },
  methods: {
    jiQi() {
      this.$router.push({name:'home-xiangqing2'})
    },
    jier() {
      this.$router.push({name: 'home-dynamic'})
//    home-gongye
    },
    jida() {
    	this.$router.push({name: "home-gongye"})
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
          grid: {
             left: '23%',
             right: '4%',
             bottom: '3%',
             containLabel: true,
          },
          toolbox: {
              feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
              }
          },
          legend: {
            x: '26px',
            y: '180px ',
            itemGap: 20 ,
            orient: 'item',
              data: ['总量','水电','火电','风电','核电'],
              textStyle: {
                color: '#fff'
              },
          },
          xAxis: [
              {
                  type: 'category',
                  data: ['2011', '2012', '2013', '2014', '2015','2016','2017','2018','2019','2020'],
                  axisPointer: {
                      type: 'shadow'
                  },
                  axisLabel: {
                    textStyle: {
                      color: '#fff'
                    }
                  }
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  min: 0,
                  max: 14000,
                  interval: 2000,
                  axisLabel: {
                      formatter: '{value}',
                      textStyle: {
                        color: '#fff',
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
                        color: '#fff'
                      }
                  }
              }
          ],
          series: [
              {
                  name: '总量',
                  symbolSize: 14,
                  type: 'line',
                  itemStyle: {
                    color: '#50ACFE',
                  },
                  data: [12260.97,13998.67,12683.22,12183.15,13325.9,11031.41,11453.74,10994,9808.2,8419.16,11488.92]
              },
              {
                  name: '水电',
                  type: 'bar',
                  itemStyle: {
                    color: '#56CAAE'
                  },
                  data: [1915.76,2598.63,2322.31,2087.79,2289.57,1544.25,867.48,871.34,765.28,1050.15,1706.57]
              },
              {
                  name: '火电',
                  type: 'bar',
                  itemStyle: {
                    color: '#D05457'
                  },
                  data: [8472.07,9388.15, 8115.31,7901.71,8773.36,7327.58,8384.63,8001.52,7456.09,4997.6,5027.29]
              },
              {
                  name: '风电',
                  type: 'bar',
                  itemStyle: {
                    color: '#8D65D7'
                  },
                  data: [1643.14,1471.89,1124.6,1595.65,1887.97,2051.58,1861.63,1545.14,1370.83,1933.41,4585.06]
              },
              {
                  name: '核电',
                  type: 'bar',
                  itemStyle: {
                    color: '#C1BC69'
                  },
                  yAxisIndex: 1,
                  data: [230,540,1121,598,375,108,340,576,216,438,170]
              }
          ]
      };

      option && myChart.setOption(option);
    },
    drawEchartsLineTable() {
      let chartDom = document.getElementById(
        "home-detail-inside-cBox-contentBox-footer-Container"
      );
      let myChart = echarts.init(chartDom);
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          width: "328px",
          height: "200px",
          right: "400px",
          top: "70px",
          itemGap: 20,
          textStyle: {
            color: "#fff",
          },
        },

        color: ["#DE9C3C", "#C54F71", "#9A66CA", "#916018"],
        series: [
          {
            name: "2020年全社会用电量构成（亿千瓦时）",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["65%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 0,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "18",
                fontWeight: "bold",
                padding: [10, 8],
                formatter: function (val) {
                  // 将中间的文本信息进行分割，设置不同的类名
                  // 百分数字的样式、百分号的样式、百分项名字的样式
                  return val.name + val.value + "%";
                },
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 859, name: "第一产业" },
              { value: 51200, name: "第二产业" },
              { value: 12100, name: "第三产业" },
              { value: 10900, name: "城乡居民生活" }
            ],
            radius: '70%',
            center:['70%','52%']
          },
        ],
      };
      option && myChart.setOption(option);
    },
    drawEchartsLineTableright() {
      let chartDom = document.getElementById(
        "home-sd-right-bottom-tb-Container"
      );
      let myChart = echarts.init(chartDom);
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          width: "328px",
          height: "200px",
          right: "80px",
          top: "40px",
          itemGap: 20 ,
          textStyle: {
            color: "#fff",
          },
        },

        color: ["#50BEA3", "#9A66CA", "#DE9C3C", "#2C7664","#5D2F87"],
        series: [
          {
            name: "2020年发电量构成（亿千瓦时）",
            type: "pie",
            radius: ["50%", "95%"],
            center: ["25%", "52%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 0,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "18",
                fontWeight: "bold",
                padding: [1, 1],
                formatter: function (val) {
                  // 将中间的文本信息进行分割，设置不同的类名
                  // 百分数字的样式、百分号的样式、百分项名字的样式
                  return val.name + val.value + "%";
                },
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 13552, name: "水电" },
              { value: 51743, name: "火电" },
              { value: 3662, name: "核电" },
              { value: 4665, name: "风电" },
              { value: 2611, name: "太阳能发电" },
            ],
            radius: '80%',
          },
        ],
      };
      option && myChart.setOption(option);
    },
    handleOpen(){
      this.$router.push('/home-gongye')
    }
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-header {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    background-image: url('../../assets/home/top img.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &-ce {
      position: relative;
      width: 1200px;
      height: 380px;
      background-color: #394264;
      display: flex;
      justify-content: space-between;
      &-left {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        padding-top: 37px;
        padding-left: 31px;
      }

      &-right {
        width:1200px;
        height: 360px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  // 重点指标
  &-data {
    width: 1200px;
    height: 150px;
    margin-top: 40px;
    flex-direction: column;
    display: flex;

    &-top {
      width: 1200px;
      cursor: pointer;
      height: 24px;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
    &-bottom {
      width: 1200px;
      height: 66px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &-box {
        position: relative;
        width: 230px;
        height: 80px;
        padding: 15px;
        margin-top: 23px;
        cursor: pointer;
        border: 2px solid #eeeeee;
        border-radius: 3px 3px 3px 3px;
        display: flex;
        border-radius: 10px;

        &-sc {
          width: 123px;
          height: 14px;
          font-size: 12px;
          color: #999999;
        }

        &-bfb {
          position: absolute;
          top: 50px;
          left: 15px;
          width: 50px;
          height: 13px;
          font-size: 16px;
          color: #3ab96d;
        }

        &-sj {
          position: absolute;
          top: 46px;
          right: 10px;
          width: 82px;
          height: 25px;
          text-align: right;
          font-size: 30px;
          color: #333;
          font-weight: 600;
          margin-top: -10px;
        }

        &-ls {
          position: absolute;
          top: 50px;
          left: 15px;
          width: 50px;
          height: 13px;
          font-size: 16px;
          color: #E4324B;
          font-weight: 600;
        }

        &-you {
          position: absolute;
          top: 46px;
          right: 12px;
          width: 82px;
          height: 25px;
          font-size: 30px;
          color: #3AB96D;
          font-weight: 600;
          margin-top: -10px;
        }
      }
    }
  }
  // 2019自主品牌工业机器人结构分布
  &-sd {
    width: 1200px;
    height: 324px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    &-left {

      &-title {
        width: 570px;
        height: 25px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        color: #333;
        margin-bottom: 21px;
      }

      &-bottom {
        width: 571px;
        height: 280px;
        background-color: #394264;
        border-radius: 9px 9px 9px 9px;
      }
    }

    &-right {

      &-title {
        width: 600px;
        height: 25px;
        font-size: 24px;
        cursor: pointer;
        font-weight: bold;
        color: #333;
        margin-bottom: 21px;
      }

      &-bottom {
        padding: 20px;
        width: 600px;
        height: 280px;
        border-radius: 6px 6px 6px 6px;
        background-color: #394264;
        cursor: pointer !important;
      }
    }
  }
  // 全球工业机器人市场销售
  &-tw {
    width: 1200px;
    height: 446px;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;

    &-left {
      width: 300px;
      height: 446px;
      cursor: pointer;

      &-title {
        width: 284px;
        height: 24px;
        font-size: 24px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        font-family: Microsoft YaHei;
      }

      &-bottom {
        width: 100%;
        height: 396px;
        margin-top: 23px;
        background: #394264;

        &-box {
        	width: 300px;
        	height: 396px;
          box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);

        	&-top {
        		width: 300px;
        		padding: 25px;
        		height: 316px;

        		&-title {
        			width: 60px;
              height: 14px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 20px;
        		}

        		&-img {
        			margin-left: 20px;
        			margin-top: 20px;
        		}
        	}
        }
      }
    }

    &-cen {
      width: 300px;
      height: 446px;
      cursor: pointer;

      &-title {
        width: 284px;
        height: 24px;
        font-size: 24px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        font-family: Microsoft YaHei;
      }

      &-bottom {
        width: 100%;
        height: 396px;
        margin-top: 23px;

        &-img {
          width: 300px;
          height: 396px;
        }
      }
    }

    &-rg {
      width: 484px;

      &-title {
        width: 264px;
        height: 24px;
        font-size: 24px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        font-family: Microsoft YaHei;
      }

      &-bottom {
        width: 100%;
        height: 396px;
        margin-top: 25px;

        &-column {
          margin-top: 28px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333333;
          cursor: pointer;
        }
      }
    }
  }
  // 更多经济运行数据
  &-more {
    width: 1200px;
    height: 350px;
    margin-top: 49px;
    margin-bottom: 50px;

    &-title {
      width: 192px;
      height: 25px;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      cursor: pointer;
      color: #333333;
      margin-bottom: 27px;
    }

    &-bottom {
      width: 100%;
      height: 370px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      &-box {
        cursor: pointer;
        position: relative;
        text-align: center;
        padding-top: 30px;
        width: 287px;
        height: 170px;

        &-img {
          width: 60px;
          height: 60px;
          text-align: center;
        }

        &-title {
          position: absolute;
          top: 82px;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          display: flex;
          justify-content: center;
          text-align: center;
          width: 226px;
          height: 41px;
          color: #333;
        }
      }
    }
  }
}
</style>
