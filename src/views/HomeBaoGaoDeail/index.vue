<template>
  <div class="home">
    <div class="home-left">
      <div class="home-left-top">
        <div class="home-left-top-left">选择报告</div>
        <div class="home-left-top-right">
          清空
          <i class="el-icon-delete-solid"></i>
        </div>
      </div>
      <div class="home-left-center">
        <div class="home-left-center-box">
          <div class="home-left-center-box-left">报告类型：产业发展研究</div>
          <div class="home-left-center-box-right">
            <i class="el-icon-close"></i>
          </div>
        </div>
        <div class="home-left-center-box">
          <div class="home-left-center-box-left">产业分类： 风电</div>
          <div class="home-left-center-box-right">
            <i class="el-icon-close"></i>
          </div>
        </div>
      </div>
      <div class="home-left-search">
        <el-input placeholder="搜索名称"></el-input>
      </div>
      <div class="home-left-tag">
        <div class="home-left-tag-title">报告类型</div>
        <div class="home-left-tag-check">
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              style="margin-top: 10px"
              v-for="(item, index) in reportType"
              :key="index"
              :label="item"
              :checked="index==0?true:false"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="home-left-tag-title">产业分类</div>
        <div class="home-left-tag-check">
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              style="margin-top: 10px"
              v-for="(item, index) in roboArr"
              :key="index"
              :label="item"
              :checked="index==2?true:false"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="home-left-fabu">
        <div class="home-left-fabu-title">发布时间</div>
        <div class="home-left-fabu-bot">
          <div
            v-for="(item, index) in release"
            :key="index"
            :class="sstt[index]"
            @mouseover="handleMove1(index)"
            @mouseleave="handleLeave1"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="home-rg">
      <div class="home-rg-header">
        <div class="home-rg-header-left">找到1,000+份报告</div>
        <div class="home-rg-header-right">
          <div class="home-rg-header-right-sort">综合排序</div>
          <div class="home-rg-header-right-time">时间</div>
        </div>
      </div>
      <div class="home-rg-box" v-for="(item, index) in tableDate" :key="index">
        <div class="home-rg-box-top">
          <div class="home-rg-box-top-left">{{ item.tag }}</div>
          <div class="home-rg-box-top-right">
            <div class="home-rg-box-top-right-top">
              {{ item.title }}
            </div>
            <div class="home-rg-box-top-right-bottom">
              <div class="home-rg-box-top-right-bottom-left">{{item.left}}</div>|
              <div class="home-rg-box-top-right-bottom-cen">{{item.cen}}</div>|
              <div class="home-rg-box-top-right-bottom-rg">{{item.rg}}</div>|
              <div class="home-rg-box-top-right-bottom-rg">{{item.rg2}}</div>
            </div>
          </div>
        </div>
        <div class="home-rg-box-bottom">
          {{ item.content }}
        </div>
      </div>
      <!-- 分页 -->
      <div class="home-rg-fenye">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import handleObj from "./mockjs";
export default {
  data() {
    return {
      // 左侧
      leftImg: require("@/assets/home/Snipaste_2021-04-27_15-59-38.png"),
      // 右侧报告
      baogao: require("@/assets/home/Snipaste_2021-04-27_16-21-15.png"),
      checkList: [],
      //报告类型
      reportType: ["产业发展研究", "行业形势预测", "政策分析", "专业机构观点"],
      //机器人分类
      roboArr: [
        "水电",
        "火电",
        "风电",
        "核电",
        "光伏",
        "储能",
        "氢能",
        "智能制造"
      ],
      //发布时间
      release: ["全部", "近3天", "近7天", "近1个月", "近1年"],
      tableDate: handleObj.rightChange,
      moveIndex: "-1",
      sstt: [
        "ss1"
      ]
    };
  },
  methods: {
    handleMove1(index) {
      this.moveIndex = index;
    },
    handleLeave1(index) {
      this.moveIndex = "-1";
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  padding-top: 30px;
  background-color: #f5f5f5;
  justify-content: center;

  &-left {
    width: 390px;
    height: 522px;
    margin-right: 20px;
    box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.35);
    border-radius: 5px 5px 5px 5px;
    padding: 30px;
    background-color: white;
    &-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-left {
        font-size: 30px;
      }
      &-right {
        font-size: 12px;
        cursor: pointer;
      }
    }
    &-center {
      width: 100%;
      &-box {
        width: 100%;
        height: 32px;
        background-color: #f0f3fe;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding: 0px 10px;
        margin-top: 8px;
        &-left {
          color: #474849;
        }
        &-right {
          background-color: #b0bacc;
          color: white;
          text-align: center;
          padding: 1px 2px;
          border-radius: 50%;
        }
      }
    }
    &-search {
      margin-top: 16px;
    }
    &-tag {
      width: 100%;
      &-title {
        font-size: 16px;
        margin-top: 18px;
      }
    }
    &-fabu {
      width: 100%;
      &-title {
        font-size: 16px;
        margin-top: 16px;
      }
      &-bot {
        width: 100%;
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
    }
  }

  &-rg {
    width: 780px;

    &-header {
      width: 780px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      line-height: 50px;
      background-color: #fff;
      box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.35);
      border-radius: 5px 5px 5px 5px;

      &-left {
        height: 50px;
        color: #666;
        font-size: 14px;
      }

      &-right {
        display: flex;

        &-sort {
          color: blue;
          font-size: 14px;
        }

        &-time {
          font-size: 14px;
          margin: 0 20px;
        }
      }
    }

    &-box {
      width: 780px;
      height: 200px;
      margin-top: 20px;
      box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.35);
      border-radius: 5px 5px 5px 5px;
      padding: 8px 26px 26px 26px;
      background-color: white;
      &-top {
        width: 100%;
        height: 88px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        &-left {
          width: 90px;
          height: 60px;
          display: flex;
          align-items: center;
          margin-right: 20px;
          text-align: center;
          color: #3f9ce3;
          background-color: #F2F8FC;
          border: 1px solid #3f9ce3;
          border-radius: 6px;
          padding: 4px 6px;
        }
        &-right {
          width: 100%;
          height: 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &-top {
            margin-bottom: 16px;
          }
          &-bottom {
            display: flex;
            margin-left: -20px;

            &-left {
              width: 120px;
              text-align: center;
            }
            &-cen {
              width: 150px;
              text-align: center;
            }
            &-rg {
              width: 80px;
              text-align: center;
            }
            &-rg2 {
              width: 80px;
              text-align: center;
            }
          }
        }
      }
      &-bottom {
        width: 730px;
        height: 90px;
        padding-top: 10px;
        line-height: 24px;
      }
    }

    &-fenye {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 30px 0px;
    }
  }
}
</style>

<style scoped>
.active_class5 {
  color: red;
  cursor: pointer;
}
.ss1 {
  color: #008BDE;
}

</style>
