<template>
  <div class="mode">
    <div class="mode-title">
      <div class="mode-title-left">搜索</div>
      <div class="mode-title-center">发电设备</div>
      <div class="mode-title-right">
        <span>为你找到</span>
        <span class="mode-title-right-red">24</span>
        <span>条资讯</span>
      </div>
    </div>
    <div class="mode-bot">
      <div
        class="mode-bot-box"
        onMouseOver="javascript:this.style.border='3px solid white'"
        onMouseOut="javascript:this.style.border='none'"
        v-for="(item, index) in tableDate"
        :key="index"
      >
        <div class="mode-bot-box-round"></div>
        <div class="mode-bot-box-text">{{ item.name }}</div>
        <div class="mode-bot-box-time">
          <div class="mode-bot-box-time-left">{{ item.type }}</div>
          <div class="mode-bot-box-time-right">{{ item.time }}</div>
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
      tableDate: mockJs.modeB,
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
  &-bot {
    width: 100%;
    margin-bottom: 30px;
    background-color: white;
    &-box {
      width: 100%;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      padding: 20px 16px;
      &-round {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #da8b8b;
      }
      &-text {
        width: 500px;
      }
      &-time {
        display: flex;
        align-items: center;
        &-left {
          margin-right: 50px;
        }
      }
    }
  }
}
</style>
