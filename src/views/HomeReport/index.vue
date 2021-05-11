<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-ce">
        <div class="home-header-ce-title">查 报 告</div>
        <div class="home-header-ce-input">
          <el-input placeholder="搜索报告"
                    v-model="input1">
            <i slot="suffix"
               class="el-input__icon el-icon-search"
               @click="go"></i>
          </el-input>
        </div>
        <div class="home-header-ce-hs">
          <div class="home-header-ce-hs-top">热门搜索：</div>
          <div class="home-header-ce-hs-rg"
               v-for="(item, index) in zhineng"
               :key="index"
               @click="go2">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <!-- 会员精选 -->
    <div class="home-member">
      <div class="home-member-title">
        <div class="home-member-title-left">会员精选</div>
        <div class="home-member-title-right"
             :class="sstt[index]"
             v-for="(item, index) in jingXuan"
             :key="index.id">
          {{ item.title }}
        </div>
        <div class="home-member-title-you">
          <div class="home-member-title-you-left"></div>
          <div class="home-member-title-you-cen"></div>
          <div class="home-member-title-you-rg"></div>
        </div>
      </div>
      <div class="home-member-bottom">
        <div class="home-member-bottom-box"
             v-for="(item, index) in countBox2"
             :key="index">
          <div class="home-more-bottom-box-img">
            <img :src="item.img"
                 alt=""
                 style="width: 100%; height: 100%"
                 onMouseOver="javascript:this.style.border='3px solid white'"
                 onMouseOut="javascript:this.style.border='none'" />
          </div>
          <div class="home-member-bottom-box-title">{{ item.title }}</div>
          <div class="home-member-bottom-box-left">{{ item.left }}</div>
          <div class="home-member-bottom-box-rg">{{ item.rg }}</div>
        </div>
      </div>
    </div>
    <!-- 机器人报告 -->
    <div class="home-mach">
      <div class="home-mach-left">
        <div class="home-mach-left-title">
          <div class="home-mach-left-title-re">产业报告</div>
          <div class="home-mach-left-title-you"
               v-for="(item, index) in jingXuan"
               :class="sstt[index]"
               :key="index"
               @click="go2">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="home-mach-rg">
        <div class="home-mach-rg-box"
             v-for="(item, index) in jiqiRenBaoGao"
             :key="index"
             @click="go2">
          <div class="home-mach-rg-box-img">
            <img :src="item.img"
                 alt="">
            <div class="home-mach-rg-box-img-new">
              <img :src="item.new"
                   alt="">
            </div>
            <div class="home-mach-rg-box-img-pdf">
              {{item.pdf}}
            </div>
            <div class="home-mach-rg-box-img-word">
              {{item.word}}
            </div>
          </div>
          <div class="home-mach-rg-box-title">
            {{ item.title }}
          </div>
          <div class="home-mach-rg-box-footer">
            <div class="home-mach-rg-box-footer-left">
              <div class="home-mach-rg-box-footer-left-img">
                <img :src="item.huomiao"
                     alt="" />
              </div>
              <div class="home-mach-rg-box-footer-left-num">{{ item.num }}</div>
            </div>
            <div class="home-mach-rg-box-footer-right">
              <div class="home-mach-rg-box-footer-right-dw">{{ item.dw }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧排行榜 -->
      <div class="home-mach-rank">
        <div class="home-mach-rank-title">热门报告排行榜</div>
        <div class="home-mach-rank-left">
          <div class="home-mach-rank-left-num"
               v-for="(item, index) in paiHang"
               :key="index">
            <span class="home-mach-rank-left-num-left"
                  :class="ssa[index]">{{ item.left }}</span>
            <span class="home-mach-rank-left-num-right"
                  @click="go2">{{ item.right }}
            </span>
          </div>
          <!-- <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="2019年我国发电设备行业发展情况及2020年展望" name="1">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="5">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="6">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="7">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="8">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="9">
              <div class="box">
                <div class="box-left">
                  <img :src="bao" alt="" style="margin-left: 15px; margin-top: 15px;">
                  <img :src="new2" alt="" style="position: absolute; top: 0; left: 0;">
                </div>
                <div class="box-rg">
                  <div class="box-rg-top">
                    2019年我国发电设备行业发展情况
                    及2020年展望
                  </div>
                  <div class="box-rg-dibu">
                    <div class="box-rg-dibu-a">
                      <img :src="huomiao2" alt="">
                      <div class="box-rg-dibu-a-ce">4.1</div>
                    </div>
                    <div class="box-rg-dibu-b">369下载</div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse> -->
        </div>
      </div>
    </div>
    <!-- 行业专区 -->
    <!-- <div class="home-news">
      <div class="home-news-left">
        <div class="home-news-left-bt">行业专区</div>
        <div
          class="home-news-left-box"
          v-for="(item, index) in hangYeZhuanqu"
          :key="index"
        >
          <div class="home-news-left-box-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="home-news-left-box-title" @click="go">
            {{ item.title }}
          </div>
          <div class="home-news-left-box-cen" style="height: 50px">
            <div>{{ item.gg }}</div>
            <div>{{ item.hy }}</div>
            <div>{{ item.sx }}</div>
            <div>{{ item.gx }}</div>
          </div>
        </div>
      </div> -->
    <div class="home-news-rg">
      <div class="home-news-rg-title">研究机构</div>
      <div class="home-news-rg-box"
           v-for="(item, index) in countBox5"
           :key="index">
        <div class="home-news-rg-box-left">
          <img :src="item.img"
               alt=""
               class="home-news-rg-box-left-img" />
        </div>
        <div class="home-news-rg-box-right">
          <div class="home-news-rg-box-right-title"
               @click="go">
            {{ item.title }}
          </div>
          <div class="home-news-rg-box-right-cen">{{ item.cen }}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data () {
    return {
      // 搜索框下
      zhineng: [
        {
          title: "压缩机",
        },
        {
          title: "环保设备",
        },
        {
          title: "电梯",
        },
        {
          title: "输配电设备",
        },
      ],
      sstt: [
        "ss1",
        "ss2",
        "ss3",
        "ss4"
      ],
      // 会员精选
      jingXuan: [
        {
          title: "电力运营与建设",
        },
        {
          title: "发电设备制造",
        },
        {
          title: "零部件与原材料制造",
        },
        {
          title: "其他",
        },
      ],
      //header 中得地球背景
      countBox: require("@/assets/home/earth@2x.png"),
      bao: require("@/assets/home/wenzi.png"),
      new2: require("@/assets/home/01大数据平台-首页_24.gif"),
      huomiao2: require("@/assets/home/hot2.png"),
      //搜索框
      input1: "",
      //报告文件
      reportFiles: require("@/assets/home/井号文件1_file-hash-one.png"),
      //countBox2: require('@/assets/home/img bg.png'),
      //机器人报告得热度
      //countBox3: require("@/assets/home/hot.png"),
      // 大数据门户报告
      countBox4: require("@/assets/home/01大数据门户-首页_07.png"),
      //研究机构 图片
      //countBox5: require('@/assets/home/logo-50@2x.png'),
      // 会员精选的四张图片
      countBox2: [
        {
          img: require("@/assets/home/img bg.png"),
          title: "壮丽七十年理论新视野",
          left: "60",
          rg: "积分",
        },
        {
          img: require("@/assets/home/img bg@2x(1).png"),
          title: "中国互联网发展报告",
          left: "23",
          rg: "积分",
        },
        {
          img: require("@/assets/home/img bg@2x.png"),
          title: "媒体权威解读",
          left: "5",
          rg: "积分",
        },
        {
          img: require("@/assets/home/img bg@2x(2).png"),
          title: "艾媒咨询热门行业报告",
          left: "92",
          rg: "积分",
        },
      ],
      //研究机构
      countBox5: [
        {
          img: require("@/assets/home/清华大学.png"),
          title: "清华大学",
          cen: "学术/科研",
        },
        {
          img: require("@/assets/home/logo_2x.png"),
          title: "华北电力大学",
          cen: "学术/科研",
        },
        {
          img: require("@/assets/home/dianli.png"),
          title: "中国电力科学研究院",
          cen: "学术/科研",
        },
        {
          img: require("@/assets/home/国家tongji.png"),
          title: "国家统计局",
          cen: "政府",
        },
        {
          img: require("@/assets/home/more_09.png"),
          title: "中国机械工业联合会",
          cen: "行业组织",
        },
        {
          img: require("@/assets/home/图层 21.png"),
          title: "华能清洁能源研究院",
          cen: "学术/科研",
        },
      ],
      // 机器人报告
      jiqiRenBaoGao: [
        {
          img: require("@/assets/home/wenzi.png"),
          new: require("@/assets/home/01大数据平台-首页_24.gif"),
          title: "2019年我国发电设备行业发展情况及202...",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.5",
          dw: "652 下载",
          pdf: 'pdf',
        },
        {
          img: require("@/assets/home/wenzi.png"),
          new: require('@/assets/home/01大数据平台-首页_30.gif'),
          title: "2020年三季度我国发电设备行业生产运...",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.5",
          dw: "652 下载",
          pdf: 'pdf',
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "2020年上半年我国发电设备行业发展情...",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.3",
          dw: "587 下载",
          pdf: 'pdf',
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "2020年我国发电设备行业发展情况及未...",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.1",
          dw: "369 下载",
          pdf: 'pdf',
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "风电营收持续增长， 公司向新能源方向转型",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.1",
          dw: "369 下载",
          pdf: 'pdf',
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "2020年一季度我国发电设备行业生产运...",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.5",
          dw: "652 下载",
          pdf: 'pdf',
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "2020-2021年度全国电力供需形势分析...",
          new: require('@/assets/home/01大数据平台-首页_30.gif'),
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.5",
          dw: "652 下载",
          word: 'word'
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "2020年前三季度全国电力供需形势分析...",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.3",
          dw: "587 下载",
          word: 'word'
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "2021年一季度全国电力供需形势分...",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.1",
          dw: "369 下载",
          word: 'word'
        },
        {
          img: require("@/assets/home/wenzi.png"),
          title: "纲领性政策发布，新型储能走向前台",
          huomiao: require("@/assets/home/hot2.png"),
          num: "4.1",
          dw: "369 下载",
          word: 'word'
        },
      ],
      // 热门报告排行榜
      paiHang: [
        {
          left: "1",
          right: "2019年我国发电设备行业发展情况及2020年展望",
        },
        {
          left: "2",
          right: "2020年三季度我国发电设备行业生产运行情况分析",
        },
        {
          left: "3",
          right: " 2020年上半年我国发电设备行业发展情况及形势展望",
        },
        {
          left: "4",
          right: "2020年我国发电设备行业发展情况及未来形势展望",
        },
        {
          left: "5",
          right: "2020年一季度我国发电设备行业生产运行情况分析",
        },
        {
          left: "6",
          right: "2020-2021年度全国电力供需形势分析预测报告",
        },
        {
          left: "7",
          right: "2020年前三季度全国电力供需形势分析预测报告",
        },
        {
          left: "8",
          right: "2021年一季度全国电力供需形势分析预测报告",
        },
        {
          left: "9",
          right: "风电营收持续增长， 公司向新能源方向转型",
        },
        {
          left: "10",
          right: "机械设备行业跟踪周报",
        },
        {
          left: "11",
          right: "“碳中和”政策红利受益者，市场份额提升增强成长性",
        },
        {
          left: "12",
          right: "风电营收持续增长， 公司向新能源方向转型",
        },
      ],
      // 行业专区
      hangYeZhuanqu: [
        {
          img: require("@/assets/home/文本文件1_file-text-one.png"),
          title: "工业机器人",
          gg: "公共财物",
          hy: "行业研究",
          sx: "上下游企业",
          gx: "高校与高等教育",
        },
        {
          img: require("@/assets/home/井号文件1_file-hash-one.png"),
          title: "服务机器人",
          gg: "公共财物",
          hy: "行业研究",
          sx: "上下游企业",
          gx: "高校与高等教育",
        },
        {
          img: require("@/assets/home/优质文件1_file-quality-one.png"),
          title: "特种机器人",
          gg: "公共财物",
          hy: "行业研究",
          sx: "上下游企业",
          gx: "高校与高等教育",
        },
        {
          img: require("@/assets/home/重点文件1_file-focus-one.png"),
          title: "机器人零部件",
          gg: "公共财物",
          hy: "行业研究",
          sx: "上下游企业",
          gx: "高校与高等教育",
        },
        {
          img: require("@/assets/home/优质文件1_file-quality-one.png"),
          title: "系统集成商",
          gg: "公共财物",
          hy: "行业研究",
          sx: "上下游企业",
          gx: "高校与高等教育",
        },
        {
          img: require("@/assets/home/重点文件1_file-focus-one.png"),
          title: "其他",
          gg: "公共财物",
          hy: "行业研究",
          sx: "上下游企业",
          gx: "高校与高等教育",
        },
      ],
      // 手风琴
      activeName: '1',
      ssa: [
        "aq",
        "aw",
        "ae",
        "ar",
        "at",
        "ay",
        "au",
        "ai",
        "ao",
        "ar",
        "at",
        "ar"
      ]
    };
  },
  methods: {
    // 点击机器人发展报告进行跳转
    go () {
      this.$router.push("/home-baogaodeail");
    },
    go2 () {
      this.$router.push("/home-xiangqing");
    },
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
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    background-image: url("../../assets/home/top img.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &-ce {
      width: 1200px;
      height: 320px;
      padding-left: 340px;
      padding-top: 90px;

      &-title {
        width: 150px;
        height: 29px;
        font-size: 40px;
        margin-bottom: 20px;
        margin-left: 180px;
        margin-bottom: 50px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        cursor: pointer;
        color: #fff;
      }

      &-input {
        width: 500px;
        height: 44px;
        margin-bottom: 15px;
        cursor: pointer;
      }
      &-hs {
        width: 500px;
        height: 30px;
        display: flex;

        &-top {
          width: 70px;
          height: 15px;
          line-height: 30px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #50597b;
        }

        &-rg {
          width: 90px;
          height: 26px;
          margin-top: 2px;
          margin-left: 5px;
          line-height: 26px;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          background-color: #50597b;
          border-radius: 15px;
        }
      }
    }
  }
  // 行业白皮书四个盒子
  &-column {
    margin-top: -160px;
    width: 1200px;
    height: 150px;
    margin-bottom: 20px;
    z-index: 10;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);

    &-box {
      width: 290px;
      height: 150px;
      padding: 30px;
      border-right: 1px solid #cccccc;

      &-title {
        cursor: pointer;
        width: 162px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-img {
          margin-top: 5px;
          margin-right: 12px;
        }

        &-msg {
          cursor: pointer;
          width: 150px;
          height: 16px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #000000;
        }
      }

      &-bottom {
        margin-top: 10px;
        display: flex;
        cursor: pointer;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }

  //会员精选
  &-member {
    z-index: 999;
    margin-top: -150px;
    width: 1200px;
    background-color: #fff;
    height: 300px;
    padding: 20px 30px 25px 28px;
    box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.35);
    border-radius: 3px 3px 3px 3px;

    &-title {
      margin-top: 5px;
      width: 1200px;
      height: 30px;
      display: flex;
      margin-bottom: 15px;

      &-left {
        width: 83px;
        height: 18px;
        font-size: 18px;
        cursor: pointer;
        margin-top: 3px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }

      &-right {
        width: 150px;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        cursor: pointer;
        margin-left: 15px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        background-color: #50597b;
        border-radius: 25px;
        text-align: center;
      }

      &-you {
        width: 70px;
        height: 15px;
        margin-top: 5px;
        margin-left: 34%;
        display: flex;
        cursor: pointer;
        justify-content: space-between;

        &-left {
          width: 35px;
          height: 9px;
          background: #ff3f58;
          border-radius: 10px;
        }

        &-cen {
          width: 9px;
          height: 9px;
          background: #cccccc;
          border-radius: 50%;
        }

        &-rg {
          width: 9px;
          height: 9px;
          background: #cccccc;
          border-radius: 50%;
        }
      }
    }

    &-bottom {
      display: flex;
      justify-content: space-between;

      &-box {
        position: relative;
        width: 270px;
        height: 205px;
        cursor: pointer;

        &-title {
          width: 160px;
          height: 16px;
          font-size: 16px;
          margin-top: 10px;
          margin-bottom: 15px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }

        &-left {
          width: 32px;
          height: 22px;
          font-size: 30px;
          font-family: Arial;
          font-weight: 400;
          color: #ff5a00;
        }

        &-rg {
          position: absolute;
          top: 190px;
          left: 40px;
          width: 25px;
          height: 11px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #999999;
        }
      }
    }
  }

  //机器人报告
  &-mach {
    position: relative;
    width: 1200px;
    height: 650px;
    padding: 29px 29px 24px;
    margin-top: 31px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.35);
    border-radius: 3px 3px 3px 3px;

    &-left {
      display: flex;

      &-title {
        display: flex;
        cursor: pointer;

        &-re {
          width: 100px;
          height: 18px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }

        &-you {
          width: 160px;
          height: 26px;
          text-align: center;
          line-height: 26px;
          color: #fff;
          margin-right: 5px;
          border-radius: 20px;
          background: #50597b;
        }
      }
    }

    &-rg {
      width: 740px;
      height: 570px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      &-box {
        width: 134px;
        cursor: pointer;
        margin-top: 25px;

        &-img {
          position: relative;
          text-align: center;
          padding-top: 15px;
          height: 190px;
          margin-bottom: 10px;

          &-new {
            position: absolute;
            top: 0;
            left: 0;
          }

          &-pdf {
            position: absolute;
            bottom: 5px;
            right: 8px;
            color: #d51d33;
          }
          &-word {
            position: absolute;
            bottom: 5px;
            right: 8px;
            color: #39abea;
          }
        }
        &-title {
          width: 126px;
          height: 36px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 14px;
          margin-top: 4px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          line-height: 18px;
          text-align: center;
        }

        &-footer {
          position: relative;
          &-left {
            display: flex;
            &-img {
              width: 13px;
              height: 15px;
              margin-top: 2px;
              font-size: 14px;
              font-family: FontAwesome;
              font-weight: 400;
              color: #ff5a00;
              line-height: 18px;
            }

            &-num {
              position: absolute;
              top: 5px;
              left: 22px;
              width: 17px;
              height: 9px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #ff5a00;
              line-height: 18px;
            }
          }

          &-right {
            &-dw {
              position: absolute;
              right: 10px;
              bottom: -3px;
              width: 69px;
              height: 13px;
              text-align: right;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
              line-height: 18px;
            }
          }
        }
      }
    }
    //热门报告排行榜
    &-rank {
      position: relative;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      padding-top: 31px;
      width: 377px;
      height: 630px;

      &-title {
        display: inline;
        width: 126px;
        height: 17px;
        cursor: pointer;
        margin-left: -8px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: 18px;
      }

      &-left {
        position: absolute;
        top: 70px;
        width: 360px;
        left: -10px;

        &-num {
          padding: 5px;
          text-align: left;
          text-align: center;
          margin-top: 12px;
          cursor: pointer;
          display: flex;

          &-left {
            padding: 2px 6px;
            margin-right: 11px;
            color: #fff;
            border-radius: 5px;
            background-color: #50597b;
          }

          &-right {
            height: 20px;
            text-align: left;
            margin-top: 2px;
            width: 320px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }

  //行业专区/研究报告
  &-news {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 430px;

    &-left {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 24px;
      padding-top: 70px;
      width: 580px;
      height: 430px;
      box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.35);
      border-radius: 3px 3px 3px 3px;

      &-bt {
        position: absolute;
        top: 22px;
        left: 26px;
        width: 72px;
        height: 18px;
        cursor: pointer;
        margin-bottom: 5px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }

      &-box {
        position: relative;
        width: 230px;
        height: 90px;

        &-title {
          width: 130px;
          height: 15px;
          line-height: 24px;
          font-size: 16px;
          position: absolute;
          top: 0;
          left: 20px;
          cursor: pointer;
          margin-left: 10px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #000000;
        }

        &-cen {
          cursor: pointer;
          height: 38px;
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      }
    }

    &-rg {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 1200px;
      height: 250px;
      padding: 29px;
      box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.35);
      border-radius: 3px 3px 3px 3px;

      &-title {
        position: absolute;
        top: 22px;
        left: 26px;
        width: 72px;
        cursor: pointer;
        height: 18px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }

      &-box {
        width: 170px;
        height: 170px;
        text-align: center;
        margin-top: 27px;

        &-left {
          &-img {
            width: 80px;
            border: 1px solid #e2e2e2;
            border-radius: 50%;
            height: 80px;
            margin-top: 12px;
          }
        }

        &-right {
          width: 140px;

          &-title {
            margin-top: 12px;
            margin-bottom: 14px;
            width: 160px;
            height: 17px;
            font-size: 16px;
            cursor: pointer;
            font-family: Microsoft YaHei;
            font-weight: 400;
          }

          &-cen {
            margin-left: 8px;
            width: 140px;
            height: 12px;
            cursor: pointer;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
<style scoped>
/deep/ .el-input__inner {
  width: 500px;
  height: 52px;
  border-radius: 25px;
}

.ss1 {
  background: #50597b;
  color: #fff;
}
.ss2 {
  background: #eeeeee;
  color: #333;
}
.ss3 {
  background: #eeeeee;
  color: #333;
}
.ss4 {
  background-color: #eeeeee;
  color: #333;
  width: 60px !important;
}
.box {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 180px;
}
.box .box-left {
  width: 140px;
  height: 190px;
  background: #fff;
  border: 1px solid #ccc;
}

.box-rg-top {
  width: 205px;
  color: #333;
  font-size: 14px;
}
.box-rg-dibu-a {
  width: 50px;
  margin-top: 90px;
  display: flex;
  color: #ff5a00;
  justify-content: space-between;
}
.box-rg-dibu-b {
  color: #999999;
  font-size: 12px;
}
.aq {
  background: #ff3f58;
  color: #fff;
}
.aw {
  background: #50597b;
  color: #fff;
}
.ae {
  background: #50597b;
  color: #fff;
}
.ar {
  background: #eeeeee;
  color: #a6a6a6;
}
.at {
  background: #eeeeee;
  color: #a6a6a6;
}
.ay {
  background: #eeeeee;
  color: #a6a6a6;
}
.au {
  background: #eeeeee;
  color: #a6a6a6;
}
.ai {
  background: #eeeeee;
  color: #a6a6a6;
}
.ao {
  background: #eeeeee;
  color: #a6a6a6;
}
</style>
