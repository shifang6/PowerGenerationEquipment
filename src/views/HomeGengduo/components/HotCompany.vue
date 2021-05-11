<template>
  <div>
    <div
      class="block"
      v-for="(item, index) in entArr"
      :key="index"
      onMouseOver="javascript:this.style.border='3px solid white'"
      onMouseOut="javascript:this.style.border='none'"
    >
      <div class="block-left">
        <img :src="item.logo" />
      </div>
      <div class="block-right">
        <div class="block-right-top">{{ item.name }}</div>
        <div class="block-right-bottom">
          <i class="el-icon-location"></i>
          {{ item.location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entArr: [
        {
          name: "中国东方电气集团有限公司",
          logo: require("@/assets/home/93d918530efd3569921b80007257ff1.png"),
          location: "河北 沧州",
        },
        {
          name: "上海电气集团",
          logo: require("@/assets/home/4824db72d26f5c324528d594c6b1aea.png"),
          location: "浙江 宁波",
        },
        {
          name: "哈尔滨电气集团有限公司",
          logo: require("@/assets/home/382f96cb776befb3a37ec6b425ebcef.png"),
          location: "河北 沧州",
        },
        {
          name: "中国一重集团有限公司",
          logo: require("@/assets/home/c79b220b12aef03dfe78e49af111ab6.png"),
          location: "浙江 宁波",
        },
        {
          name: "中国第二重型机械集团公司",
          logo: require("@/assets/home/8af573bb54694fbd058398bb06a571e.png"),
          location: "浙江 宁波",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.block {
  width: 280px;
  height: 84px;
  display: flex;
  align-items: center;
  background: #fff;
  margin-top: 10px;
  box-shadow: 0px 0px 6px 0px rgba(13, 24, 41, 0.14);
  border-radius: 4px;

  &-left {
    width: 76px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &-img {
      width: 48px;
      height: 48px;
      border: 1px solid #cccccc;
    }
  }

  &-right {
    width: 204px;
    height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-top {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &-bottom {
      display: flex;
      align-items: center;
      color: #ccc;
      i {
        margin-right: 6px;
      }
    }
  }
}
</style>
<style scoped>
.active_box {
  border: 2px solid white;
}
</style>
