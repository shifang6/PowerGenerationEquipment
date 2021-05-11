<template>
  <div class="home">
    <div class="home-more">
      <div class="home-more-inside">
        <div class="home-more-inside-box1">
          <div class="home-more-inside-box1-top">
            <div class="home-more-inside-box1-top-Left">
              <div class="home-more-inside-box1-top-leftImg">
                <img
                  style="width: 40px; height: 40px"
                  :src="moreData.leftImg"
                />
              </div>
              <div class="home-more-inside-box1-top-title">
                更多机械行业数据
              </div>
            </div>
            <div class="home-more-inside-box1-top-Right">
              <img :src="moreData.rightImg" />
            </div>
          </div>
          <div class="home-more-inside-box1-bottom">
            为政府、行业和企业提供服务为宗旨，以反应会员意见、愿望和要求。为维护会员合法权益，振兴机械工业为己任，
            以服务行业，服务会员为宗旨。
          </div>
          <div class="home-more-inside-box1-bFooter">
            <div class="home-more-inside-box1-bFooter-one">
              <img style="width: 40px; height: 40px" :src="moreData.b1Img" />
              <span>机械行业大数据服务平台</span>
            </div>
            <div
              class="home-more-inside-box1-bFooter-two"
              style="margin-top: 10px; margin-top: 20px;"
            >
              <img style="width: 48px; height: 40px" :src="moreData.b2Img" />
              <span style="margin-left: -8px">与智大数据</span>
            </div>
          </div>
        </div>
        <div class="home-more-inside-boxContext">
          <div>
            <div
              class="home-more-inside-boxContext-title"
              v-for="(item, index) in HomeMockDate.jiXieHangYe.slice(0, 9)"
              :key="index"
              onMouseOver="javascript:this.style.color='red'"
              onMouseOut="javascript:this.style.color='#9e9e9e'"
            >
              {{ item }}
            </div>
          </div>
          <div>
            <div
              class="home-more-inside-boxContext-title"
              v-for="(item, index) in HomeMockDate.jiXieHangYe.slice(10, 19)"
              :key="index"
              onMouseOver="javascript:this.style.color='red'"
              onMouseOut="javascript:this.style.color='#9e9e9e'"
            >
              {{ item }}
            </div>
          </div>
          <div>
            <div
              class="home-more-inside-boxContext-title"
              v-for="(item, index) in HomeMockDate.jiXieHangYe.slice(20, 30)"
              :key="index"
              onMouseOver="javascript:this.style.color='red'"
              onMouseOut="javascript:this.style.color='#9e9e9e'"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <div class="home-footer-inside">
        <div class="home-footer-inside-zuo">
          <div class="home-footer-inside-zuoa" style="font-weight: bolder">关于</div>
          <div class="home-footer-inside-zuo2" style="color: #AAAAAA;">发电设备中心</div>
          <div class="home-footer-inside-zuo3" style="color: #AAAAAA;">机械行业大数据服务平台</div>
        </div>
        <div class="home-footer-inside-left">
          <div class="home-footer-inside-left-title1">技术支持</div>
          <div class="home-footer-inside-left-title2">与智大数据</div>
        </div>
        <div class="home-footer-inside-right">
          <div class="home-footer-inside-right-img1">
            <img :src="footerImg.img1" />
          </div>
          <div class="home-footer-inside-right-img2">
            <img :src="footerImg.img2" />
          </div>
          <div class="home-footer-inside-right-img3">
            <img :src="footerImg.img3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//mock数据
import HomeMockDate from "@/views/Home/mock/company";
export default {
  name: "FooterAndMore",
  data() {
    return {
      //模拟数据
      HomeMockDate,
      //更多机械行业数据
      moreData: {
        leftImg: require("@/assets/home/more_03.png"),
        rightImg: require("@/assets/home/more_05.png"),
        b1Img: require("@/assets/home/more_09.png"),
        b2Img: require("@/assets/home/more_11.png"),
      },
      //底部的导航
      footerImg: {
        img1: require("@/assets/home/01大数据平台-首页_07.png"),
        img2: require("@/assets/home/01大数据平台-首页_09.png"),
        img3: require("@/assets/home/01大数据平台-首页_11.png"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  &-more {
    display: flex;
    justify-content: center;
    background-color: #fff;
    &-inside {
      width: 1200px;
      height: 450px;
      padding: 60px 0px;
      display: flex;
      &-box1 {
        width: 300px;
        height: 100%;
        font-size: 18px;
        &-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          &-Left {
            display: flex;
            align-items: center;
          }
          &-leftImg {
            margin-right: 12px;
          }
          &-Right {
          }
        }
        &-bottom {
          color: #bbbbbb;
          font-size: 12px;
          margin-top: 18px;
          padding-bottom: 28px;
          border-bottom: 1px dashed #bbbbbb;
          line-height: 20px;
        }
        &-bFooter {
          margin-top: 20px;
          &-one {
            display: flex;
            align-items: center;
            font-size: 16px;
            img {
              margin-right: 10px;
            }
          }
          &-two {
            display: flex;
            align-items: center;
            font-size: 16px;
            margin-top: 20px;
            img {
              margin-right: 10px;
            }
          }
        }
      }
      &-boxContext {
        width: 852px;
        height: 352px;
        display: flex;
        cursor: pointer;
        div {
          margin-top: 8px;
        }
        &-title {
          width: 280px;
          font-size: 14px;
          margin-bottom: 20px;
          color: #9e9e9e;
          padding-left: 50px;
        }
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: center;
    background-color: #191a1c;
    &-inside {
      width: 1200px;
      height: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-zuo {
        height: 80px;
        display: flex;
        flex-direction: column;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
      }
      &-left {
        margin-top: -10px;
        margin-left: -400px;
        &-title1 {
          font-size: 12px;
          color: white;
          font-weight: bolder;
          margin-bottom: 18px;
        }
        &-title2 {
          font-size: 12px;
          color: #aaaaaa;
        }
      }
      &-right {
        width: 140px;
        height: 30px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
