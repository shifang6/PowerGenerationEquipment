<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-inside">
        <div class="home-header-inside-left" @click="handleOpenHomePage">
          <div class="home-header-inside-left-box">
            <img :src="homeLeftLogoTop"/>
          </div>
        </div>
        <div class="home-header-inside-right">
          <div
            v-for="(item, index) in homeHeaderArr"
            :key="index"
            :class="{ 'Active-Background': homeHeaderIndex == index }"
            @click="handleOpenRoutePage(item)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    //数据同步
    $route: {
      handler(newValue) {
        this.homeHeaderArr.forEach((item, index) => {
          if (newValue.meta.title == item.title) this.homeHeaderIndex = index;
        });
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      //首页左上角的LOGO
      homeLeftLogoTop: require("@/assets/home/大数据.png"),
      //行业头部的下标
      homeHeaderIndex: 0,
      //行业头部的数组
      homeHeaderArr: [
        { title: "首页", name: "home" },
        // { title: "动态", name: "home-dynamic" },
        { title: "数据", name: "home-data" },
        { title: "报告", name: "home-report" },
        { title: "企业", name: "home-company" },
        { title: "政策", name: "home-poilcy" },
        { title: "舆情", name: "home-public-opinion" },
        { title: "我的", name: "home-my",url:'http://8.130.30.33:81/#/login'},
        // { title: "搜索", name: "home-search" },
        // { title: "会员", name: "home-vip" },
      ],
    };
  },
  methods: {
    //头部的下标
    handleMouseMoveIndex(index) {
      this.homeHeaderIndex = index;
    },
    handleOpenRoutePage(routeUrl) {
      if(routeUrl.title=='我的'){
				window.open(routeUrl.url)
      }else{
      	this.$router.push({
        name: routeUrl.name,
      });
      }
    },
    handleOpenHomePage() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  &-header {
    display: flex;
    justify-content: center;
    &-inside {
      width: 100%;
      height: 96px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      &-left {
        &-box {
        }
      }
      &-right {
        display: flex;
        justify-content: space-around;
        div {
          width: 52px;
          height: 95px;
          margin-left: 10px;
          line-height: 95px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          color: #999;
        }
      }
    }
  }
}
</style>

<style scoped>
.Active-Background {
  border-top: 5px solid #FF3F58;
  color: #FF3F58 !important;
  font-weight: 600 !important;
  width: 52px;
  height: 91px !important;
  line-height: 88px !important;
}
</style>
