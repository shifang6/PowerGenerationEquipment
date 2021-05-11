<template>
  <div class="mode">
    <div class="mode-title">
      <div class="mode-title-left">搜索</div>
      <div class="mode-title-center">发电设备</div>
      <div class="mode-title-right">
        <span>为你找到</span>
        <span class="mode-title-right-red">96</span>
        <span>条资讯</span>
      </div>
    </div>
    <div class="mode-bottom">
      <div
        class="mode-bottom-box"
        v-for="(item, index) in tableDate"
        :key="index"
        onMouseOver="javascript:this.style.border='3px solid white'"
        onMouseOut="javascript:this.style.border='none'"
      >
        <div class="mode-bottom-box-img">
          <img :src="month" />
        </div>
        <div class="mode-bottom-box-right">
          <div class="mode-bottom-box-right-top">
            {{ item.name }}
          </div>
          <div class="mode-bottom-box-right-bottom">
            相关企业：{{ item.type }}
          </div>
        </div>
      </div>
      <div style="width: 100%; display: flex; justify-content: center">
        <el-tag type="warning" style="width: 200px; text-align: center; margin: 30px 0"
        >点击查看更多</el-tag
        >
      </div>
    </div>

  </div>
</template>

<script>
import mockJs from "./mock";
export default {
  data() {
    return {
      tableDate: mockJs.modeA,
      month: require("@/assets/logos/month.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.mode {
  width: 100%;
  &-title {
    font-size: 16px;
    padding: 24px 16px;
    display: flex;
    align-items: center;
    background-color: #fafafa;
    div {
      margin-right: 16px;
    }
    &-center {
      color: #da8b8b;
    }
    &-right {
      &-red {
        color: #da8b8b;
        margin: 0px 10px;
      }
    }
  }
  &-bottom {
    width: 100%;
    margin-bottom: 30px;
    background-color: white;
    &-box {
      width: 100%;
      height: 100px;
      display: flex;
      margin-top: 3px;
      align-items: center;
      border-bottom: 1px dashed #999;
      padding-left: 12px;
      &-img {
        width: 80px;
        height: 80px;
        margin-right: 16px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &-right {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2px;
        &-top {
          font-size: 18px;
        }
        &-bottom {
          font-size: 16px;
          color: #999999;
        }
      }
    }
  }
}
</style>
