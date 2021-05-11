<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-box">
        <div class="home-header-box-title">查 企 业</div>
        <div class="home-header-box-serch">
          <el-input
            placeholder="请输入企业名称、协会类别、产品名称等，多关键字用空格分开，如“ABB 工业机器人”"
            v-model="input3"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" @click="go"></i>
          </el-input>
        </div>
        <div class="home-header-box-bottom">
          <div class="home-header-box-bottom-rm">热门搜索：</div>
          <div
            class="home-header-box-bottom-rg"
            v-for="(item, index) in jiDian"
            :key="index"
            @click="go"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <!-- column 栏目 -->
    <div class="home-column">
      <div class="home-column-left">
        <div class="home-column-left-title">
          企业热点
          <div class="home-column-left-title-you" @click="qiye">
            / 查看更多
          </div>
        </div>
        <div class="home-column-left-box">
          <div class="home-column-left-bo x-img">
            <div class="home-column-left-box-time">
              <div class="home-column-left-box-time-top">04</div>
              <div class="home-column-left-box-time-bottom">2021-03</div>
            </div>
            <img
              :src="countBox2"
              alt=""
              style="width: 572px; height: 310px"
              @click="handleOpen()"
            />
          </div>
          <div class="home-column-left-box-bt" @click="handleOpen()">
            【献礼建党百年】我能源系统点亮西非港口 几内亚柴光供电项目装上...
          </div>
          <div class="home-column-left-box-ts" @click="handleOpen()">
            相关企业：上海电气电站集团
          </div>
        </div>
      </div>
      <div class="home-column-rg">
        <div
          class="home-column-rg-box"
          v-for="(item, index) in reDianYou"
          :key="index"
          @click="handleOpen"
        >
          <div class="home-column-rg-box-left">
            <div class="home-column-rg-box-left-title">{{ item.title }}</div>
            <div class="home-column-rg-box-left-bottom">{{ item.bottom }}</div>
          </div>
          <div class="home-column-rg-box-right">
            <div class="home-column-rg-box-right-title">
              {{ item.title2 }}
            </div>
            <div class="home-column-rg-box-right-xg">
              {{ item.xg }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 上市公司 -->
    <div class="home-hot">
      <div class="home-hot-title" @click="gengduo">
        <div class="home-hot-title-left">上市公司</div>
        <div class="home-hot-title-rg">*数据更新时间为2021-04-21</div>
      </div>
      <div class="home-hot-tab">
        <el-table
          :cell-style="cellStyle"
          :header-cell-style="rowClass"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column prop="date" label="序号" width="100">
          </el-table-column>
          <el-table-column prop="daima" label="股票代码" width="180">
          </el-table-column>
          <el-table-column prop="name" label="股票名称"> </el-table-column>
          <el-table-column prop="address" label="总部所在地"> </el-table-column>
          <el-table-column prop="shouru" label="营业收入(元)">
          </el-table-column>
          <el-table-column prop="lirun" label="营业收入同比增长">
          </el-table-column>
          <el-table-column prop="zengzhang" label="归属净利润同比增长">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 企业研报 -->
    <div class="home-guild">
      <div class="home-guild-title">
        <div class="home-guild-title-left">企业研报</div>
        <div class="home-guild-title-tight" @click="yanbao">/ 查看更多</div>
      </div>
      <div class="home-guild-left">
        <div
          class="home-guild-left-box"
          v-for="(item, index) in qiyeBao"
          :key="index"
          @click="gengduo"
        >
          <div class="home-guild-left-box-hd"></div>
          <div class="home-guild-left-box-left">
            {{ item.left }}
          </div>
          <div class="home-guild-left-box-cen">{{ item.cen }}</div>
          <div class="home-guild-left-box-rg">{{ item.rg }}</div>
        </div>
      </div>
      <div class="home-guild-right">
        <div class="home-guild-right-title">公司名录</div>
        <div class="home-guild-right-bottom">
          <div
            class="home-guild-right-bottom-box"
            v-for="(item, index) in mingLu"
            :key="index"
            @click="gengd"
            onMouseOver="javascript:this.style.background='#ddd'"
            onMouseOut="javascript:this.style.background='#fff'"
          >
            <div class="home-guild-right-bottom-box-img">
              <img :src="item.img" alt="" style="width: 100%; height: 100%" />
            </div>
            <div class="home-guild-right-bottom-box-title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 按照区域查询 -->
    <div class="home-query">
      <div class="home-query-left">
        <div class="home-query-left-title">按区域查询</div>
        <div class="home-query-left-img">
          <!-- <chindMap></chindMap> -->
          <div id="container" style="height: 495px;width:644px;background:white;margin:20px 0 0;"></div>
        </div>
      </div>
      <div class="home-query-right">
        <div class="home-query-right-con">
          <div
            class="home-query-right-box"
            v-for="(item, index) in shanXi"
            :key="index"
          >
            <div class="home-query-right-box-title" @click="gengduo">
              {{ item.title }}
            </div>
            <div class="home-query-right-box-bottom">
              <div style="height: 30px" @click="gengduo">{{ item.gs }}</div>
              <div @click="gengduo" style="height: 30px">{{ item.youxian }}</div>
              <div style="height: 30px">{{ item.gs}}</div>
              <div style="height: 30px">{{ item.gs4}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chindMap from "../../components/ChinaMap/index.vue";
import * as echarts from 'echarts';
export default {
  name: "index",
  components: {
    chindMap,
  },
  data() {
    return {
      // searchLOGO:require('@/assets'),
      // 机电
      jiDian: [
        {
          title: "中国华能",
        },
        {
          title: "中国华电",
        },
        {
          title: "大唐",
        },
        {
          title: "核工业集团",
        },
      ],
      // 搜索框
      input3: "",
      //顶端的搜索框内部的 放大镜
      countBox: require("@/assets/home/search-chat.png"),
      //左侧图片
      countBox2: require("@/assets/home/img.png"),
      //工业机器人图片
      countBox3: require("@/assets/home/机器人2_robot-two@2x.png"),
      // 下方的地图图片
      countBox4: require("@/assets/home/地图.png"),
      //表格数据
      tableData: [
        {
          date: "1",
          daima: "01133.HK",
          name: "哈尔滨电气",
          address: "黑龙江",
          shouru: "36.9亿",
          lirun: "-1.88% ",
          zengzhang: "3.29% ",
          jinglirun: "3.29%",
        },
        {
          date: "2",
          daima: "601727.SH",
          name: "上海电气",
          address: "上海",
          shouru: "809亿",
          lirun: "0.96% ",
          zengzhang: "-13.54%",
          jinglirun: "-13.54%",
        },
        {
          date: "3",
          daima: "600875.SH",
          name: "东方电气",
          address: "四川",
          shouru: "355亿",
          lirun: "35.38% ",
          zengzhang: "45.16% ",
          jinglirun: "45.16%",
        },
        {
          date: "4",
          daima: "601106.SH",
          name: "中国一重",
          address: "黑龙江",
          shouru: "190亿",
          lirun: "65.00% ",
          zengzhang: "131.93% ",
          jinglirun: "131.93%",
        },
        {
          date: "5",
          daima: "601399.SH",
          name: "ST国重装",
          address: "四川",
          shouru: "291亿",
          lirun: "8.98% ",
          zengzhang: "4.32% ",
          jinglirun: "4.32%",
        },
        {
          date: "6",
          daima: "601608.SH",
          name: "中信重工",
          address: "河南",
          shouru: "148亿",
          lirun: "20.25% ",
          zengzhang: "147.17% ",
          jinglirun: "147.17%",
        },
        {
          date: "7",
          daima: "600475.SH",
          name: "华光环能",
          address: "江苏",
          shouru: "83.3亿",
          lirun: "16.15% ",
          zengzhang: "32.31% ",
          jinglirun: "32.29%",
        },
        {
          date: "8",
          daima: "002534.SZ",
          name: "杭锅股份",
          address: "浙江",
          shouru: "114亿",
          lirun: "27.58% ",
          zengzhang: "69.99% ",
          jinglirun: "31.29%",
        },
        {
          date: "9",
          daima: "002630.SZ",
          name: "华西能源",
          address: "四川",
          shouru: "30.5亿",
          lirun: "-26.03% ",
          zengzhang: "-140.16% ",
          jinglirun: "6.29%",
        }
      ],
      // 热点右侧
      reDianYou: [
        {
          title: "09",
          bottom: "2021-4",
          title2:
            "国内陆上单机容量最大！东方造陆上风电机组开启“6MW时代”",
          xg: "相关企业：东方电气",
        },
        {
          title: "09",
          bottom: "2021-4",
          title2: "哈汽辅机方案亮相第十届国际储能峰会",
          xg: "相关企业：哈电集团",
        },
        {
          title: "09",
          bottom: "2021-4",
          title2: "太原重工新能源装备有限公司4.5兆瓦样机基础浇筑顺利完成",
          xg: "相关企业：太重新能源",
        },
        {
          title: "09",
          bottom: "2021-4",
          title2: '上海电气数字化产品亮相上交会 市长龚正莅临指导',
          xg: "相关企业：上海电气集团",
        },
      ],
      // 企业研报
      qiyeBao: [
        {
          left: "双线齐发促业绩增长，产业基金添发展新能",
          cen: "[财通证券]",
          rg: "2012-04-09",
        },
        {
          left: "硅料利润持续释放，产能扩张坚定推进",
          cen: "[财通证券]",
          rg: "2012-04-09",
        },
        {
          left: "“碳中和”推升节能需求 海内外市场共同发力",
          cen: "[东北证券]",
          rg: "2012-04-09",
        },
        {
          left: "新能源设备板块利好频传，机床和工程机械行业景气持续",
          cen: "[平安证券]",
          rg: "2012-04-09",
        },
        {
          left: "2020年年报点评：风机销量大增，海外+大风机顺利拓展",
          cen: "[东吴证券]",
          rg: "2012-04-09",
        },
        {
          left: "股权回购彰显信心危废龙头 行稳致远",
          cen: "[华金证券]",
          rg: "2012-04-09",
        },
        {
          left: "“碳中和”政策红利受益者市场份额 提升增强成长性",
          cen: "[平安证券]",
          rg: "2012-04-09",
        },
        {
          left: "公司进入 边际成本下降阶段， 叠加负债率持续下降或进入毛利率拐点",
          cen: "[天风证券]",
          rg: "2012-04-09",
        },
        {
          left: "风电营收持续增长， 公司向新能源方向转型",
          cen: "[天风证券]",
          rg: "2012-04-09",
        },
        {
          left: "一季度业绩符合预期期待市占率及盈利能力提升",
          cen: "[浙商证券]",
          rg: "2012-04-09",
        }
      ],
      // 陕西
      shanXi: [
        {
          title: "黑龙江",
          gs: "哈尔滨电气集团有限公司",
          gs3: '哈尔滨电机厂有限责任公司',
          gs4: '哈尔滨汽轮机厂有限责任公司',
          youxian: "哈尔滨锅炉厂有限责任公司",
        },
        {
          title: "上海",
          gs: "上海电气电站设备有限公司发电机厂",
          youxian: "上海电气电站设备有限公司汽轮机厂",
          gs3: '上海电气集团上海锅炉厂有限公司'
        },
        {
          title: "四川",
          gs: "东方电气集团东方电机有限公司",
          youxian: "东方电气集团东方汽轮机有限公司",
          gs3:'东方电气集团东方锅炉股份有限公司'
        }
      ],
      // 公司名录
      mingLu: [
        {
          title: "电力运营与建设",
          img: require("@/assets/home/核电厂_nuclear-plant.png"),
        },
        {
          title: "发电设备制造",
          img: require("@/assets/home/数据库电源_database-power.png"),
        },
        {
          title: "零部件与原材料制造",
          img: require("@/assets/home/微型存储卡_mini-sd-card.png"),
        },
        {
          title: "其他",
          img: require("@/assets/home/充电宝_charging-treasure.png"),
        }
      ],
    };
  },
  methods: {
  	handleOpen(){
  	  window.open('https://mp.weixin.qq.com/s/t9bZm02zn7UAENcDaG-sTA?scene=25#wechat_redirect')
  	},
    ni() {
  	  window.open('https://mp.weixin.qq.com/s/t9bZm02zn7UAENcDaG-sTA?scene=25#wechat_redirect')
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return "text-align:center";
    },

    rowClass({ row, rowIndex }) {
      return "text-align:center";
    },
    // 点击安川机电跳转
    go() {
      this.$router.push("/home-anchuan");
    },
    // 点击查看更多跳转
    qiye() {
      // this.$router.push("/home-gengduo");
      this.$router.push({name:'home-gengduo',params:{activeName:'first'}});
    },
    yanbao() {
      this.$router.push({name:'home-gengduo',params:{activeName:'third'}});
    },
    gengduo(){
      this.$router.push('/home-fenxi2');
    },
    gengd() {
    	this.$router.push({name:'home-gengduo',params:{activeName:'first'}});
    }
  },
  mounted() {
    // 全国省份列表
        var dataMap = [{ name: '北京' }, { name: '天津' }, { name: '上海' }, { name: '重庆' }, { name: '河北' }, { name: '河南' }, { name: '云南' }, { name: '辽宁' }, { name: '黑龙江' }, { name: '湖南' }, { name: '安徽' }, { name: '山东' },
        { name: '新疆' }, { name: '江苏' }, { name: '浙江' }, { name: '江西' }, { name: '湖北' }, { name: '广西' }, { name: '甘肃' }, { name: '山西' }, { name: '内蒙古' }, { name: '陕西' }, { name: '吉林' }, { name: '福建' }, { name: '贵州' },
        { name: '广东' }, { name: '青海' }, { name: '西藏' }, { name: '四川' }, { name: '宁夏' }, { name: '海南' }, { name: '台湾' }, { name: '香港' }, { name: '澳门' }]
        // 需要在页面上直接标记出来的城市
        var specialMap = ['黑龙江', '上海', '四川'];
        // 对dataMap进行处理，使其可以直接在页面上展示
        for (var i = 0; i < specialMap.length; i++) {
            for (var j = 0; j < dataMap.length; j++) {
                if (specialMap[i] == dataMap[j].name) {
                    dataMap[j].selected = true;
                    break;
                }

            }
        }
        // 绘制图表，准备数据
        var option = {
            // tooltip: {
            //     // formatter: function (params) {
            //     //     var info = '<p style="font-size:18px">' + params.name + '</p><p style="font-size:14px">这里可以写一些，想展示在页面上的别的信息</p>'
            //     //     return info;
            //     // },
            //     // backgroundColor: "#ff7f50",//提示标签背景颜色
            //     // textStyle: { color: "#fff" } //提示标签字体颜色
            // },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'multiple',
                    label: {
                        normal: {
                            show: true,//显示省份标签
                            // textStyle:{color:"#c71585"}//省份标签字体颜色
                        },
                        emphasis: {
                            show: true,//对应的鼠标悬浮效果
                            // textStyle:{color:"#800080"}
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: .5,//区域边框宽度
                            // borderColor: '#009fe8',//区域边框颜色
                            // areaColor:"#ffefd5",//区域颜色
                        },
                        emphasis: {
                            borderWidth: .5,
                            borderColor: '#4b0082',
                            areaColor: "#ffdead",
                        }
                    },
                    data: dataMap
                }
            ]
        };
        //初始化echarts实例
        var myChart = echarts.init(document.getElementById('container'));
        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
  }
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
    // background: url(../../assets/home/map.png),
    // linear-gradient(180deg, #9dd7fc 0%, #ffffff 100%);
    background-image: url('../../assets/home/top img.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &-box {
      text-align: center;
      margin-top: 20px;
      margin-left: -15px;
      &-title {
        font-size: 40px;
        margin-top: 70px;
        margin-bottom: 30px;
        font-family: Microsoft YaHei;
        color: #fff;
        font-weight: 600;
      }

      &-serch {
        position: relative;
      }

      &-bottom {
        text-align: left;
        display: flex;

        &-rm {
          color: #50597B;
          font-size: 12px;
          margin-top: 15px;
          font-weight: 600;
        }

        &-rg {
          width: 90px;
          height: 26px;
          cursor: pointer;
          line-height: 26px;
          color: #fff;
          border-radius: 15px;
          margin-top: 10px;
          margin-left: 10px;
          text-align: center;
          background-color: #50597B;
          font-size: 14px;
        }
      }
    }
  }

  //column 栏目左右两侧
  &-column {
    margin-top: -150px;
    width: 1200px;
    height: 450px;
    padding-left: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    justify-content: space-between;

    &-left {
      width: 580px;
      height: 100%;
      border-bottom: 1px dashed #999;

      &-title {
        width: 100%;
        cursor: pointer;
        font-size: 24px;
        margin-top: -50px;
        margin-left: -25px;
        margin-bottom: 30px;
        display: flex;

        &-you {
          color: #999;
          cursor: pointer;
          margin-left: 18px;
          font-size: 14px;
          line-height: 36px;
          text-align: center;
        }
      }

      &-box {
        position: relative;
        width: 572px;
        margin-top: 50px;
        height: 410px;

        &-time {
          width: 80px;
          height: 60px;
          color: #fff;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #1A1B5C;

          &-top {
            width: 31px;
            height: 22px;
            font-size: 30px;
            margin-left: 20px;
            margin-bottom: 2px;
            margin-top: 13px;
            font-family: Arial;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 16px;
          }

          &-bottom {
            width: 71px;
            height: 10px;
            font-size: 14px;
            font-family: Arial;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 16px;
          }
        }

        &-img {
          width: 572px;
          height: 310px;
          cursor: pointer;
        }

        &-bt {
          margin-top: 26px;
          margin-bottom: 18px;
          font-size: 18px;
        }

        &-ts {
          color: #999;
          font-size: 14px;
        }
      }
    }
    //右侧日期+标题
    &-rg {
      margin-top: 46px;
      width: 576px;

      &-box {
        width: 536px;
        height: 90px;
        margin-bottom: 28px;
        border-bottom: 1px dashed #999999;

        &-left {
          padding: 8px;
          text-align: center;
          width: 70px;
          height: 70px;
          margin-top: -10px;
          cursor: pointer;
          background-color: #EEEEFD;

          &-title {
            font-size: 26px;
            cursor: pointer;
            font-weight: 600;
            color: #1A1B5C;
          }

          &-bottom {
            color: #1A1B5C;
            cursor: pointer;
          }
        }

        &-right {
          margin-top: -70px;
          margin-left: 80px;

          &-title {
            width: 450px;
            font-size: 18px;
            line-height: 25px;
            cursor: pointer;
            margin-bottom: 10px;
          }

          &-xg {
            cursor: pointer;
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
  //上市公司
  &-hot {
    width: 1200px;
    height: 480px;
    margin-top: 50px;

    &-title {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #EEEEEE;
      &-left {
        height: 50px;
        font-size: 26px;
        cursor: pointer;
        color: #333;
        margin-bottom: 10px;
      }

      &-rg {
        width: 158px;
        height: 13px;
        font-size: 12px;
        margin-top: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
        line-height: 36px;
      }
    }
  }
  //企业研报
  &-guild {
    position: relative;
    width: 1200px;
    height: 430px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;

    &-title {
      display: flex;

      &-left {
        font-size: 26px;
        cursor: pointer;
      }

      &-tight {
        margin-top: 10px;
        margin-left: 8px;
        cursor: pointer;
        color: #999;
        font-size: 14px;
      }
    }

    &-left {
      width: 800px;
      height: 40px;
      line-height: 32px;
      margin-top: 10px;

      &-box {
        display: flex;
        margin-top: 6px;

        &-hd {
          padding: 2px;
          width: 3px;
          height: 3px;
          margin-top: 14px;
          border-radius: 50%;
          margin-right: 2px;
          background-color: #d83e40;
        }

        &-left {
          margin: 0 5px;
          width: 580px;
        }

        &-cen {
          color: #999;
          font-size: 14px;
        }

        &-rg {
          margin-left: 50px;
          font-size: 14px;
          color: #999;
        }
      }
    }

    &-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 280px;
      height: 400px;

      &-title {
        font-size: 26px;
        cursor: pointer;
      }

      &-bottom {
        width: 286px;
        height: 360px;
        margin-top: 19px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0px 1px 5px 0px rgba(170, 170, 170, 0.5);
        border-radius: 3px;
        justify-content: space-between;

        &-box {
          width: 240px;
          height: 79px;
          position: relative;
          line-height: 69px;
          cursor: pointer;
          border-bottom: 1px dashed   #999;
          display: flex;
         // justify-content: space-between;
          text-align: center;

          &-img {
            margin-top: 10px;
            margin-right: 15px;
            margin-left: 5px;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
  //按照区域查询
  &-query {
    width: 1200px;
    height: 520px;
    display: flex;
    margin-top: 40px;
    margin-bottom: 30px;

    &-left {
      width: 700px;
      height: 100%;

      &-title {
        font-size: 26px;
      }

      &-img {
        width: 644px;
        height: 495px;
        margin-top: 20px;
        text-align: center;
      }
    }

    &-right {
      width: 520px;
      height: 510px;
      margin-top: 40px;
      padding-left: 20px;
      margin-left: 50px;

      border-radius: 1px;
      border: 1px solid #CCCCCC;
      overflow-y: scroll;
      &-con {
        height: 560px;
      }
      &-box {
        margin-top: 30px;

        &-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          cursor: pointer;
        }

        &-bottom {
          color: #999;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<style scoped>
/deep/ .el-input__inner {
  height: 52px;
  width: 500px;
  border-radius: 30px;
}
/deep/ .el-table th > .cell {
  height: 49px;
  margin-bottom: -10px;
  line-height: 49px;
  color: #333333;
}
</style>
