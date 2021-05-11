<template>
  <div class="mode">
    <div class="mode-title">
      <div class="mode-title-left">搜索</div>
      <div class="mode-title-center">中国华能集团有限公司</div>
      <div class="mode-title-right">
        <span>为你找到</span>
        <span class="mode-title-right-red">56</span>
        <span>条资讯</span>
      </div>
    </div>
    <div
      style="background-color: white; padding: 16px;"
      v-for="(item, index) in tableDate"
      :key="index"
      onMouseOver="javascript:this.style.border='3px solid white'"
      onMouseOut="javascript:this.style.border='none'"
      @click="handleOpen"
    >
      <div class="mode-bot">
        <div class="mode-bot-left">
          <div class="mode-bot-left-top">
            <img :src="modeArr[index]" />
          </div>
          <div class="mode-bot-left-bot">
            <i class="el-icon-location"></i>
            <span>北京</span>
          </div>
        </div>
        <div class="mode-bot-right">
          <div class="mode-bot-right-top">
            <div class="mode-bot-right-top-left">
              <div class="mode-bot-right-top-left-big">
                {{ item.name }}
              </div>
            </div>
            <div class="mode-bot-right-top-right">
              <div class="mode-bot-right-top-right-left">
                <img :src="hotSina" />
              </div>
              <div class="mode-bot-right-top-right-right">
                <img :src="hotweChat" />
              </div>
            </div>
          </div>
          <div class="mode-bot-right-tag">
            <div class="mode-bot-right-tag-left">{{item.bt}}
            {{item.bt2}}
            </div>

          </div>
          <div class="mode-bot-right-center">
            <div class="mode-bot-right-center-left">
              法定代表人：{{ item.fuzeren }}
            </div>
            <div class="mode-bot-right-center-center">
              注册资本：{{ item.money }}
            </div>
            <div class="mode-bot-right-center-right">成立日期：{{item.time}}</div>
          </div>
          <div class="mode-bot-right-bot">
            <div>{{ item.address }}</div>
            <div>{{ item.youxiang }}</div>
            <!-- <div>
              网站名称：{{ item.web }}
              <span style="color: #1882f8; margin-left: 20px"
                ><span style="color: black; margin-right: 6px">网站</span
                >{{ item.url }}</span
              >
            </div> -->
          </div>
        </div>
      </div>

    </div>
    <div style="width: 100%; display: flex; justify-content: center; background-color: #fff; margin-bottom: 30px">
      <el-tag type="warning" style="width: 200px; text-align: center; margin: 30px 0;"
      >点击查看更多</el-tag
      >
    </div>

  </div>
</template>

<script>
import mockJs from "./mock";
export default {
  data() {
    return {
      tableDate: mockJs.modeC,
      modeArr: [
        require("@/assets/logos/logoa.png"),
        require("@/assets/logos/logob.png"),
        require("@/assets/logos/logoc.png"),
        require("@/assets/logos/logod.png"),
        require("@/assets/logos/logoc.png"),
      ],
      logoa: require("@/assets/logos/logoa.png"),
      logob: require("@/assets/logos/logob.png"),
      logoc: require("@/assets/logos/logoc.png"),
      logod: require("@/assets/logos/logoc.png"),
      //热搜企业的联系方式
      hotSina: require("@/assets/home/sina.jpg"),
      hotweChat: require("@/assets/home/wechat.jpg"),
    };
  },
  methods:{
    handleOpen(){
      window.open('https://www.chng.com.cn')
    }
  }
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
    height: 100%;
    display: flex;
    padding-bottom: 18px;
    border-bottom: 1px solid #ccc;
    &-left {
      width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      margin-right: 20px;
      &-top {
        width: 80px;
        height: 80px;
        /*background-color: yellow;*/
        img {
          width: 100%;
          height: 100%;
          border: 1px solid gainsboro;
        }
      }
      &-bot {
        text-align: center;
        margin-top: 10px;
      }
    }
    &-right {
      width: 100%;
      &-top {
        width: 100%;
        font-size: 20px;
        position: relative;
        &-left {
          display: flex;
          align-items: center;
          &-big {
            font-weight: bolder;
            color: #c62929;
          }
          &-tag {
            width: 50px;
            font-size: 16px;
            line-height: 20px;
            border: 1px solid #3ca569;
            text-align: center;
            margin-left: 20px;
            border-radius: 6px;
            color: #3ca569;
          }
        }
        &-right {
          display: flex;
          position: absolute;
          top: 0px;
          right: 0px;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 16px;
          }
        }
      }
      &-tag {
        display: flex;
        margin-top: 10px;
        &-left {
          width: 100px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
          color: #5D9EEA;
          background-color: #ECF5FC;
        }

        &-rg {
          width: 130px;
          height: 30px;
          line-height: 30px;
          color: #5D9EEA;
          background-color: #ECF5FC;
          text-align: center;
        }
      }
      &-center {
        display: flex;
        font-size: 14px;
        margin-top: 20px;
        div {
          margin-right: 60px;
        }
      }
      &-bot {
        font-size: 14px;
        line-height: 30px;
        margin-top: 10px;
      }
    }
  }
}
</style>
