<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-left">
        <img :src="logo" alt="" />
      </div>
      <div class="home-header-right">
        <div class="home-header-right-top">
          <div class="home-header-right-top-title">上海第一机床厂有限公司</div>
        </div>
        <div class="home-header-right-bottom">
          <div class="home-header-right-bottom-box">
                 <el-button type="primary" plain size = 'mini'>投资机构</el-button>
                 <el-button type="success" plain size = 'mini'>高新技术产业</el-button>
                 <el-button type="info" plain size = 'mini'>企业集团</el-button>
          </div>
        </div>
        <div class="home-header-right-dubu">
        </div>
      </div>
    </div>
    <!-- 企业简介 -->
    <div class="home-jianjie">
      <div class="home-jianjie-top">
        <div
          class="home-jianjie-top-title"
          v-for="(item, index) in qiYeBiaoTi"
          :key="index"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="home-cen">
        <div class="home-cen-title">企业简介</div>
        <div class="home-cen-tab">
             <table>
               <tr>
                 <td style="width: 200px; background-color: #f0f7fc;" rowspan="4">法定代表人</td>
                 <td style="width: 300px;" rowspan="4">
                   <!-- <img :src="biao" alt="" style="width: 100%; height: 100%;"> -->
                 </td>
                 <td style="width: 200px; background-color: #f0f7fc;">经营状态</td>
                 <td style="width: 300px;">存续</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">成立日期</td>
                 <td>2004-09-22</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">注册资本</td>
                 <td>62000万人民币</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">实缴资本</td>
                 <td>-</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">统一社会信用代码</td>
                 <td>91310108767213896p</td>
                 <td style="background-color: #f0f7fc;">纳税人识别号</td>
                 <td>91310108767213896p</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">营业期限</td>
                 <td>2004-09-22 至 2054-09-21</td>
                 <td style="background-color: #f0f7fc;">纳税人资质</td>
                 <td>增值税一般纳税人</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">公司类型</td>
                 <td>有限责任公司(非自然人投资或控股的法人独资)</td>
                 <td style="background-color: #f0f7fc;">行业</td>
                 <td>商务服务业</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">参保人数</td>
                 <td>535</td>
                 <td style="background-color: #f0f7fc;">登记机关</td>
                 <td>浦东新区市场监管局</td>
               </tr>
               <tr>
                 <td style="background-color: #f0f7fc;">曾用名</td>
                 <td>-</td>
                 <td style="background-color: #f0f7fc;">英文名称</td>
                 <td>Shanghai No.1 Machine Tool Works Co.,Ltd</td>
               </tr>
             </table>
        </div>
      </div>

      <!-- 企业产品 -->
      <div class="home-chanpin">
        <div class="home-chanpin-top">
          <div class="home-chanpin-top-title">企业产品</div>
          <div class="home-chanpin-top-shuzi">25</div>
        </div>
        <div class="home-chanpin-bottom">
          <div
            class="home-chanpin-bottom-box"
            v-for="(item, index) in chanpin"
            :key="index"
          >
            <div class="home-chanpin-bottom-box-img">
              <img :src="item.img" alt="" style="width: 100%; height: 100%" />
            </div>
            <div class="home-chanpin-bottom-box-title">{{item.title}}</div>
          </div>
        </div>
      </div>
      <!-- 企业研报 -->
      <div class="home-yanbao">
        <div class="home-yanbao-top">
          <div class="home-yanbao-top-title">企业研报</div>
          <div class="home-yanbao-top-sz">14</div>
        </div>
        <div class="home-yanbao-bottom">
          <div
            class="home-yanbao-bottom-box"
            v-for="(item, index) in qiyeYanBao"
            :key="index" @click="go"
          >
            <div class="home-yanbao-bottom-box-title">{{ item.title }}</div>
            <div class="home-yanbao-bottom-box-rg">
              <div class="home-yanbao-bottom-box-rg-dian">{{ item.dian }}</div>
              <div class="home-yanbao-bottom-box-rg-time">{{ item.time }}</div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="home-yanbao-fenye">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </div>

      </div>
      <!-- 企业资讯 -->
      <div class="home-zixun">
        <div class="home-zixun-top">
          <div class="home-zixun-top-title">企业资讯</div>
          <div class="home-zixun-top-sz">20</div>
        </div>
        <div class="home-zixun-bottom">
          <div
            class="home-zixun-bottom-box"
            v-for="(item, index) in qiYeZiXun"
            :key="index" @click="go"
          >
            <div class="home-zixun-bottom-box-title">{{ item.title }}</div>
            <div class="home-zixun-bottom-box-cen">{{ item.cen }}</div>
            <div class="home-zixun-bottom-box-di">
              <div class="home-zixun-bottom-box-di-left">
                <div class="home-zixun-bottom-box-di-left-lai">
                  {{ item.lai }}
                </div>
                <div class="home-zixun-bottom-box-di-left-time">
                  {{ item.time }}
                </div>
              </div>
            </div>
          </div>
          <div class="home-zixun-fenye">
            <!-- 分页 -->
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 事业单位
      danwei: [
        {
          title: ''
        }
      ],
      logo: require("@/assets/home/图层 19 拷贝.png"),
      // 简介
      jianJie: require("@/assets/home/Snipaste_2021-04-27_20-32-06.png"),
      activeName: "second",
      // 表格
      tab: require("@/assets/home/Snipaste_2021-04-27_20-57-14.png"),
      // 企业产品图片
      chanpin: require("@/assets/home/Snipaste_2021-04-27_21-24-04.png"),
      // 标题
      qiYeBiaoTi: [
        {
          title: "企业简介",
        },
        {
          title: "上市数据",
        },
        {
          title: "企业产品",
        },
        {
          title: "企业研报",
        },
        {
          title: "企业资讯",
        },
      ],
      // 企业研报
      qiyeYanBao: [
        {
          title:
            "双线齐发促业绩增长，产业基金添发展新能",
          dian: "[华西证券]",
          time: "2012-04-09",
        },
        {
          title: "硅料利润持续释放，产能扩张坚定推进",
          dian: "[华西证券]",
          time: "2012-04-09",
        },
        {
          title: "“碳中和”推升节能需求 海内外市场共同发力",
          dian: "[浙商证券]",
          time: "2012-04-09",
        },
        {
          title:
            "新能源设备板块利好频传，机床和工程机械行业景气持续",
          dian: "[平安证券]",
          time: "2012-04-09",
        },
        {
          title: "2020年年报点评：风机销量大增，海外+大风机顺利拓展",
          dian: "[中国国际金融]",
          time: "2012-04-09",
        },
        {
          title: "股权回购彰显信心危废龙头 行稳致远",
          dian: "[宏信证券]",
          time: "2012-04-09",
        },
      ],
      // 企业资讯
      qiYeZiXun: [
        {
          title:
            "上海电气近期一揽子新能源项目!",
          cen:
            "首台出口核电成果闪亮核工展4月14日，第十四届中国国际核电工业展览会在北京国家会议中心盛大气携诸多核电相关产品齐亮相。不久前首次实现并网的‘华龙一号’首台海外机组—-卡拉奇2号机成果展览成为本届大会一大亮点，吸引了络绎不绝的客户和观众驻足。此外，在本举办的中国核能可持续发展论坛上，以上海电气电站设备有限公司作为第一完成，.",
          lai: "来源∶搜狐新闻",
          time: "发布时间：2小时25分钟前",
        },
        {
          title:
            "-揽子新能源项目!上海电气助力洛阳市绿色转型升级",
          cen:
            "欢迎订阅上海电气更多音频资讯01首台出口核电成果闪亮核工展4月14日，第十四届工业展览会在北京国家会议中心盛大开幕，上海电气携诸多核电相关产品齐亮相。不久前首次实现并网的“华龙一号”首台海外机组-—卡拉奇2号机成果展览成为本届大会一大亮点，吸的客户和观众驻足。此外，在本次核工展同期举办的中国核能可持续发展论坛上...",
          lai: "来源∶搜狐新闻",
          time: "发布时间：2小时25分钟前",
        },
        {
          title:
            "3名上海电气匠人获“上海工匠”大铜章",
          cen:
            "原标题:3名上海电气匠人获“上海工匠”大铜章1月6日，上海市总工会召开2020年“上海工匠”选树酝龙、周祖谦、阚宝春等3位上海电气员工当选为2020年“上海工匠”并上台领奖。至此，上海电气已有12名员工获得了“上海工匠”称号。周祖谦(左）李云龙(右）李云龙上海机床厂有限公司...",
          lai: "来源∶搜狐新闻",
          time: "发布时间：2小时25分钟前",
        },
        {
          title:
            "打破国外核电技术垄断，上海电气助力华龙一号成功并网发电!",
          cen:
            "11月27日00时41分，“华龙一号”全球首堆并网成功，标志着我国打破了国外核电技术垄断，正式进)国家行列!“华龙一号”是我国研发设计的具有完全自主知识产权的三代压水堆核电技术，设计寿命为60年，反应堆采用177堆芯设计，堆芯采用1E厂可利用率高达90%，创新采用了“能动和非...",
          lai: "来源∶搜狐新闻",
          time: "发布时间：2小时25分钟前",
        },
      ],
      // 表格图片
      biao: require('@/assets/home/5.png'),
      // 企业产品
      chanpin: [
        {
          img: require('@/assets/home/图层 1.png'),
          title: '核反应堆堆内构件（RVI）'
        },
        {
          img: require('@/assets/home/图层 2.png'),
          title: '核岛辅助设备'
        },
        {
          img: require('@/assets/home/图层 3.png'),
          title: '控制棒驱动机构（CRDM）'
        },
      ]
    };
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // }
    go() {
      this.$router.push('/home-gengduo')
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
    width: 1200px;
    padding: 20px;
    display: flex;

    &-left {
      width: 100px;
      height: 100px;

      img {
        margin-top: 30px;
      }
    }

    &-right {
      width: 100%;
      margin-left: 20px;

      &-top {
        &-title {
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 24px;
          margin-top: 20px;
        }
      }

      &-bottom {
        display: flex;

        &-box {
          width: 80px;
          height: 35px;
          text-align: center;
          line-height: 26px;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          color: #6a73cc;
          margin-right: 10px;
          background-color: #edeef9;
        }
      }

      &-dubu {
        margin-top: 20px;
      }
    }
  }

  &-jianjie {
    margin-top: 10px;
    width: 1200px;
    line-height: 50px;
    &-top {
      display: flex;
      justify-content: space-between;
      &-title {
        width: 150px;
        text-align: center;
        cursor: pointer;
        background-color: #f1f1f1;
      }
    }
  }

  &-cen {
    width: 1200px;

    &-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }

    &-tab {


    }
  }

  &-shuju {
    &-top {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;

      &-left {
        display: flex;

        &-cen {
          font-size: 20px;
          font-weight: 600;
          margin-right: 20px;
        }

        &-cena {
          font-size: 12px;
          color: #ccc;
          font-weight: 600;
        }
      }

      &-right {
        font-size: 12px;
        color: #ccc;
        font-weight: 600;
      }
    }
  }

  &-chanpin {
    width: 1200px;
    margin-top: 20px;

    &-top {
      display: flex;
      border-bottom: 1px solid #ccc;

      &-title {
        font-size: 20px;
        font-weight: 600;
      }

      &-shuzi {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        color: blue;
      }
    }

    &-bottom {
      width: 700px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 270px;
      margin-top: 10px;
      margin-bottom: 15px;

      &-box {
        margin-top: 20px;
        width: 208px;
        height: 240px;
        text-align: center;

        &-img {
          margin-left: 25px;
          width: 168px;
          height: 200px;
        }

        &-title {
          width: 200px;
          margin-left: 10px;
        }
      }
    }
  }
  &-yanbao {
    width: 1200px;
    margin-top: 40px;

    &-top {
      display: flex;
      border-bottom: 1px solid #ccc;

      &-title {
        font-size: 20px;
        font-weight: 600;
      }

      &-sz {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        color: blue;
      }
    }

    &-bottom {
      margin-bottom: 10px;

      &-box {
        display: flex;
        height: 40px;
        justify-content: space-between;

        &-title {
          font-size: 16px;
        }

        &-rg {
          display: flex;
          color: #999;
          font-size: 14px;

          &-dian {
            width: 140px;
            text-align: center;
            margin-right: 50px;
          }
        }
      }
    }

    &-fenye {
      height: 50px;
      padding-top: 10px;
      margin-top: 10px;
      text-align: right;
    }
  }

  &-zixun {
    &-top {
      display: flex;
      border-bottom: 1px solid #ccc;

      &-title {
        font-size: 20px;
        font-weight: 600;
      }

      &-sz {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        color: blue;
      }
    }

    &-bottom {
      &-box {
        border-bottom: 1px solid #ccc;
        margin-bottom: 15px;
        &-title {
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }

        &-cen {
          font-size: 14px;
          color: #666;
        }

        &-di {
          &-left {
            width: 250px;
            display: flex;
            font-size: 12px;
            color: #999;
            justify-content: space-between;
          }
        }
      }
    }

    &-fenye {
      height: 50px;
      padding-top: 10px;
      margin-top: 10px;
      text-align: right;
    }
  }
}
</style>

<style scoped>
  table {
    border-spacing: 0;
  }
  tr,td {
    padding-left: 10px;
    border: 1px solid #e4eef6;
  }
  td:hover {
    color: red;
    cursor: pointer;
  }
</style>
