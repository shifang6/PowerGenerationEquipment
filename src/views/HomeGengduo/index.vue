<template>
  <div class="home">
    <div class="home-header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="企业(56)" name="first">
          <div class="home-header-top">
            <div class="home-header-top-title">企业</div>
            <div class="home-header-top-rg">
              <el-input v-model="input" placeholder="搜索企业"></el-input>
            </div>
          </div>
          <div class="home-header-bottom">
            <div class="home-header-bottom-sheng">
              <div class="home-header-bottom-sheng-left">省份地区</div>
              <div
                class="home-header-bottom-sheng-right"
                v-for="(item, index) in qiYebiao"
                :class="lan[index]"
                :key="index"
                onMouseOver="javascript:this.style.color='red'"
                onMouseOut="javascript:this.style.color='#333'"
              >
                {{ item.top }}
              </div>
            </div>
            <div class="home-header-bottom-hangye">
              <div class="home-header-bottom-hangye-left">行业分类</div>
              <div
                class="home-header-bottom-hangye-right"
                v-for="(item, index) in qiYebiao"
                :class="lan[index]"
                :key="index"
                onMouseOver="javascript:this.style.color='red'"
                onMouseOut="javascript:this.style.color='#333'"
              >
                {{ item.bottom }}
              </div>
            </div>
          </div>
          <div class="home-header-cen">
            <modeC></modeC>
          </div>
          <div class="home-header-right">
            <div class="home-header-right-top">
              <div class="home-header-right-top-title">相关搜索</div>
              <div class="home-header-right-top-nr">
                <div
                  class="home-header-right-top-nr-zi"
                  v-for="(item, index) in searchArr"
                  :key="index"
                  onMouseOver="javascript:this.style.color='red';this.style.border='1px solid red'"
                  onMouseOut="javascript:this.style.color='black';this.style.border='1px solid #ccc'"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="home-header-right-cen">
              <div class="home-header-right-cen-title">热搜企业</div>
              <HotCompany></HotCompany>
            </div>
            <div class="home-header-right-bottom">
              <div class="home-header-right-bottom-top">
                <div class="home-header-right-bottom-top-title">上市公司</div>
                <div class="home-header-right-bottom-top-time">
                  *数据更新时间为2021-04-21
                </div>
              </div>
              <div class="home-header-right-bottom-tab">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="企业名称" width="120">
                  </el-table-column>
                  <el-table-column prop="name" label="总市值($)" width="120">
                  </el-table-column>
                  <el-table-column prop="address" label="细分行业">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="资讯(96)" name="second">
          <div class="home-header-top">
            <div class="home-header-top-title">资讯</div>
            <div class="home-header-top-rg">
              <el-input v-model="input" placeholder="搜索资讯"></el-input>
            </div>
          </div>
          <div class="home-header-bottom">
            <div class="home-header-bottom-sheng">
              <div class="home-header-bottom-sheng-left">行业分类</div>
              <div
                class="home-header-bottom-sheng-right"
                v-for="(item, index) in qiYebiao"
                :key="index"
                onMouseOver="javascript:this.style.color='red'"
                onMouseOut="javascript:this.style.color='black'"
              >
                {{ item.bottom }}
              </div>
            </div>
            <div class="home-header-bottom-hangye">
              <div class="home-header-bottom-hangye-left">资讯类型</div>
              <div
                class="home-header-bottom-hangye-right"
                v-for="(item, index) in qiYebiao"
                :key="index"
                onMouseOver="javascript:this.style.color='red'"
                onMouseOut="javascript:this.style.color='black'"
              >
                {{ item.leixing }}
              </div>

            </div>
            <div class="home-header-bottom-time">
              <div class="home-header-bottom-time-left">发布时间</div>
              <div
                class="home-header-bottom-time-right"
                v-for="(item, index) in qiYebiao"
                :key="index"
                onMouseOver="javascript:this.style.color='red'"
                onMouseOut="javascript:this.style.color='black'"
              >
                {{ item.time }}
              </div>
              </div>
          </div>
          <div class="home-header-cen">
            <modeA></modeA>
          </div>
          <div class="home-header-right">
            <div class="home-header-right-top">
              <div class="home-header-right-top-title">相关搜索</div>
              <div class="home-header-right-top-nr">
                <div
                  class="home-header-right-top-nr-zi"
                  v-for="(item, index) in searchArr"
                  :key="index"
                  onMouseOver="javascript:this.style.color='red';this.style.border='1px solid red'"
                  onMouseOut="javascript:this.style.color='black';this.style.border='1px solid #ccc'"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="home-header-right-cen">
              <div class="home-header-right-cen-title">热搜企业</div>
              <HotCompany></HotCompany>
            </div>
            <div class="home-header-right-bottom">
              <div class="home-header-right-bottom-top">
                <div class="home-header-right-bottom-top-title">上市公司</div>
                <div class="home-header-right-bottom-top-time">
                  *数据更新时间为2021-04-21
                </div>
              </div>
              <div class="home-header-right-bottom-tab">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="企业名称" width="120">
                  </el-table-column>
                  <el-table-column prop="name" label="总市值($)" width="120">
                  </el-table-column>
                  <el-table-column prop="address" label="细分行业">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="研报(24)" name="third">
          <div class="home-header-top">
            <div class="home-header-top-title">研报</div>
            <div class="home-header-top-rg">
              <el-input v-model="input" placeholder="搜索企业"></el-input>
            </div>
          </div>
          <div class="home-header-bottom">
            <div class="home-header-bottom-sheng">
              <div class="home-header-bottom-sheng-left">行业分类</div>
              <div
                class="home-header-bottom-sheng-right"
                v-for="(item, index) in qiYebiao"
                :key="index"
                onMouseOver="javascript:this.style.color='red'"
                onMouseOut="javascript:this.style.color='black'"
              >
                {{ item.bottom }}
              </div>
            </div>
            <div class="home-header-bottom-hangye">
              <div class="home-header-bottom-hangye-left">发布时间</div>
              <div
                class="home-header-bottom-hangye-right"
                v-for="(item, index) in qiYebiao"
                :key="index"
                onMouseOver="javascript:this.style.color='red'"
                onMouseOut="javascript:this.style.color='black'"
              >
                {{ item.time }}
              </div>
            </div>
          </div>
          <div class="home-header-cen">
            <modeB></modeB>
          </div>
          <div class="home-header-right">
            <div class="home-header-right-top">
              <div class="home-header-right-top-title">相关搜索</div>
              <div class="home-header-right-top-nr">
                <div
                  class="home-header-right-top-nr-zi"
                  v-for="(item, index) in searchArr"
                  :key="index"
                  onMouseOver="javascript:this.style.color='red';this.style.border='1px solid red'"
                  onMouseOut="javascript:this.style.color='black';this.style.border='1px solid #ccc'"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="home-header-right-cen">
              <div class="home-header-right-cen-title">热搜企业</div>
              <HotCompany></HotCompany>
            </div>
            <div class="home-header-right-bottom">
              <div class="home-header-right-bottom-top">
                <div class="home-header-right-bottom-top-title">上市公司</div>
                <div class="home-header-right-bottom-top-time">
                  *数据更新时间为2021-04-21
                </div>
              </div>
              <div class="home-header-right-bottom-tab">
                <el-table  :data="tableData" style="width: 100%;background-color: brown !important;">
                  <el-table-column prop="date" label="企业名称" width="120">
                  </el-table-column>
                  <el-table-column prop="name" label="总市值($)" width="120">
                  </el-table-column>
                  <el-table-column prop="address" label="细分行业">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import modeA from "./components/modeA.vue";
import modeB from "./components/modeB.vue";
import modeC from "./components/modeC.vue";
import HotCompany from "./components/HotCompany";
export default {
  components: {
    modeA,
    modeB,
    modeC,
    HotCompany,
  },
  data() {
    return {
      // activeName: "second",
      activeName:this.$route.params.activeName,
      input: "",
      lan:["lan"],
      qiYebiao: [
        {
          top: "北京市",
          leixing: '企业动态',
          bottom: '电力运营与建设',
          time: '全部'
        },
        {
          top: "上海市",
          leixing: '企业研报',
          bottom: '发电设备制程',
          time: '近3天'
        },
        {
          top: "天津市",
          leixing: '企业其他',
          bottom: '零部件与原材料制造',
          time: '近7天'
        },
        {
          top: "重庆市",
          bottom: '其他',
          time: '近1个月'
        },
        {
          top: "河北省",
          time: '近1年'
        },
        {
          top: "山西省",
        },
        {
          top: "内蒙古自治区",
        },
        {
          top: "辽宁省",
        },
        {
          top: "吉林省",
        },
        {
          top: "黑龙江省",
        },
      ],
      tableData: [
        {
          date: "上海电气",
          name: "809亿",
          address: "深圳",
        },
        {
          date: "东方电气",
          name: "355亿",
          address: "上海",
        },
        {
          date: "中国一重",
          name: "190亿",
          address: "深圳",
        },
        {
          date: "ST国重装",
          name: "291亿",
          address: "上海",
        },
        {
          date: "中信重工",
          name: "148亿",
          address: "深圳",
        },
        {
          date: "华光环能",
          name: "83.3亿",
          address: "上海",
        },
        {
          date: "杭锅股份",
          name: "114亿",
          address: "深圳",
        },
      ],
      searchArr: [
        "商业计划书编制",
        "创业辅导",
        "创业",
        "产业链",
        "新兴产业",
        "产业经济增长点",
        "产业机构",
        "其他",
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F5F5F5;
  //background-color: #f5f5f5;
  align-items: center;
  cursor: pointer;

  &-header {
    width: 1200px;
    display: flex;
    justify-content: space-between;

    &-top {
      width: 780px;
      display: flex;
      justify-content: space-between;

      &-title {
        font-size: 24px;
      }

      &-rg {
        width: 200px;
      }
    }

    &-bottom {
      width: 780px;
      height: 150px;
      padding: 30px;
      display: flex;
      background: #FFFFFF;
      margin: 14px 0;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.3);
      flex-direction: column;
      background-color: #fff;

      &-sheng {
        display: flex;
        height: 40px;

        &-left {
          margin-right: 15px;
          color: #999;
        }
        &-right {
          margin-right: 10px;
          font-size: 14px;
          color: #333;
        }
      }
      &-hangye {
        display: flex;
        flex-direction: row;
        height: 40px;
        &-left {
          margin-right: 15px;
          margin-top: 10px;
          color: #999;
        }
        &-right {
          margin-right: 15px;
          font-size: 14px;
          margin-top: 10px;
          color: #333;
        }
      }

    &-time {
      display: flex;
      height: 40px;
      &-left {
        margin-right: 15px;
        color: #999;
        margin-top: 15px;
      }
      &-right {
        margin-right: 15px;
        margin-top: 15px;
      }
    }

    }
    &-cen {
      width: 780px;
      margin-top: 10px;
    }
    &-right {
      &-top {
        width: 100%;
        height: 100px;
        position: absolute;
        top: 0;
        right: 90px;
        width: 300px;
        height: 150px;

        &-title {
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }

        &-nr {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;

          &-zi {
            padding: 5px;
            margin-top: 10px;
            background-color: #fff;
            text-align: center;
            border: 1px solid #ccc;
            padding: 6px 6px;
            margin-right: 10px;
          }
        }
      }

      &-cen {
        width: 350px;
        height: 100px;
        position: absolute;
        top: 180px;
        right: 40px;

        &-title {
          font-weight: 600;
          font-size: 20px;
          color: #333;
          margin-bottom: 20px;
          margin-top: 40px;
        }

        &-img {
          margin-top: 10px;
        }
      }

      &-bottom {
        width: 350px;
        position: absolute;
        top: 840px;
        right: 40px;


        &-top {
          display: flex;
          height: 30px;
          border-bottom: 1px solid #999;
          justify-content: space-between;

          &-title {
            font-size: 20px;
            font-weight: 600;
            color: #333;
          }
          &-time {
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
<style scoped>
.el-tab-pane {
  width: 1200px;
}
 /deep/ .el-table {
  background-color: red !important;
}
.lan {
  color: #1882F8 !important;
}
</style>
