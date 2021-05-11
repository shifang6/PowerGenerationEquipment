<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-inside">
        <div class="home-header-inside-left">
          <div class="home-header-inside-left-box">
            <div class="home-header-inside-left-box-title">2020国内各省装机数据</div>
            <div class="home-header-inside-left-box-img">
              <img :src="ditu" alt="" style="width: 100%; height: 100%;">
            </div>
          </div>
          <!-- <img :src="ditu" alt="" style="width: 100%; height: 100%;"> -->
          <!-- <el-carousel height="400px">
            <el-carousel-item
              v-for="(item, index) in homeBannerArr"
              :key="index"
            >
              <h3 class="home-header-inside-left-small">
                <img
                  :src="item.url"
                  alt=""
                  style="width: 678px; height: 400px; cursor: pointer"
                />
              </h3>
            </el-carousel-item> -->
          </el-carousel>
        </div>
        <div class="home-header-inside-rg">
          <div class="home-header-inside-rg-box">
            <div class="home-header-inside-rg-box-title">2020出口国家世界数据</div>
            <div class="home-header-inside-rg-box-img">
              <img :src="ditu2" alt="" style="width: 100%; height: 100%;">
            </div>
          </div>
          <!-- <img :src="ditu2" alt="" style="width: 100%; height: 100%;"> -->
          <!-- <img
            v-for="(item, index) in countBox"
            :key="index"
            :src="item.img"
            :class="backMove == index ? 'active_class2' : ''"
            @mouseover="handleMove3(index)"
            @mouseleave="handleLeave3"
            @click="handleGengDuo"
            style="margin-bottom: 14px"
          /> -->
        </div>
      </div>
    </div>
    <div class="home-data">
      <div class="home-data-inside">
        <div class="home-data-inside-lunbo">
          <!-- 轮播 -->
          <div class="home-data-inside-lunbo-left" @click="arrowClick('left')" v-if="pageLength !== currentPage - 1">
            <img :src="lunboleft" alt="">
          </div>
          <el-carousel
            :autoplay="false"
            indicator-position="none"
            arrow="never"
            ref="cardShow2"
            style="width: 1200px; cursor: pointer"
            height="200px"
          >
            <el-carousel-item v-for="(item,index) in 5" :key="index">
              <div
                style="
                  width: 1200px;
                  height: 200px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div
                  class="home-data-inside-lunbo-box"
                  v-for="(item, index) in topbo"
                  :key="index"
                >

                  <div
                    class="home-data-inside-lunbo-box-location-img"
                  >
                    <img :src="item.img" alt="" style="width: 100%; height: 100%;">
                  </div>
                  <div
                    class="home-data-inside-lunbo-box-location-title"
                    @click="handleOpen(index)">
                    {{item.title}}
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <div class="home-data-inside-lunbo-right" @click="arrowClick('right')" v-if="pageLength !== currentPage + 1">
            <img :src="lunboright" alt="">
          </div>
        </div>
        <div class="home-data-inside-top">
          <div class="home-data-inside-top-text">数据</div>
          <div
            class="home-data-inside-top-more"
            @click="$router.push({ name: 'home-data' })"
          >
            / 查看更多
          </div>
        </div>
        <div class="home-data-inside-bottom">
          <div class="home-data-inside-bottom-left">
            <div class="home-data-inside-bottom-left-box">
              <div class="home-data-inside-bottom-left-box-title">数据新闻</div>
              <div class="home-data-inside-bottom-left-box-img">
                <img :src="shuju" alt="">
              </div>
            </div>
            <div class="home-data-inside-bottom-left-text">
              <div
                class="home-data-inside-bottom-left-text-box"
                v-for="(item, index) in fenXiYuCea"
                :key="index"
                @click="gopage(id)"
              >
                <div class="home-data-inside-bottom-left-text-box-title">
                  <div class="home-data-inside-bottom-left-text-box-title-big">
                    {{ item.title }}
                    <img :src="item.img" alt="">
                    <img :src="item.img2" alt="" style="margin: 0 3px;">
                    <img :src="item.img3" alt="">
                  </div>

                  <div class="home-data-inside-bottom-left-text-box-title-time">
                    {{ item.time }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-data-inside-bottom-right">
            <div
              class="home-data-inside-bottom-right-box"
              v-for="(item, index) in quanQiuShiChang"
              :key="index"
              @click="$router.push({name:item.name})"

            >
              <div class="home-data-inside-bottom-right-box-img">
                <img :src="item.img"/>
              </div>
              <div class="home-data-inside-bottom-right-box-center">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-report">
      <div class="home-report-inside">
        <div class="home-report-inside-top">
          <div class="home-report-inside-top-text" @click="baogaoa">报告</div>
          <div class="home-report-inside-top-more" @click="tiaozhuan">
            / 查看更多
          </div>
        </div>
        <div class="home-report-inside-bottom">
          <div class="home-report-inside-bottom-box" v-for="(item, index) in wordPdf" :key="index">
            <div class="home-report-inside-bottom-box-img" @click="baogao(index)">
              <img :src="item.img" alt="">
              <div class="home-report-inside-bottom-box-img-new">
                <img :src="item.new" alt="">
              </div>

              <div class="home-report-inside-bottom-box-img-pdf">
                {{item.pdf}}
              </div>
              <div class="home-report-inside-bottom-box-img-word">
                {{item.word}}
              </div>
            </div>
            <div class="home-report-inside-bottom-box-title" @click="baogao(index)">
              {{item.title}}
            </div>
            <div class="home-report-inside-bottom-box-time">
              {{item.time}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-company">
      <div class="home-company-inside">
        <div class="home-company-inside-top">
          <div class="home-company-inside-top-title">
            <div class="home-company-inside-top-title-big" @click="qiYe">
              企业
            </div>
            <div class="home-company-inside-top-title-small" @click="qiyeerji">
              / 查看更多
            </div>
          </div>
          <div class="home-company-inside-top-search">
            <div class="home-company-inside-top-search-input">
              <input
                placeholder="请输入企业名称、行业类别、产品名称等，多关键字用空格分开，如“上海 核电”"
                v-model="companySearch"
              />
              <el-button type="primary" @click="qiyae">搜索</el-button>
            </div>
            <div class="home-company-inside-top-search-hot">
              <div class="home-company-inside-top-search-hot-fire">
                <img :src="hotFire"/>
              </div>
              <div class="home-company-inside-top-search-hot-text">
                热搜：中国华能，中国华电，哈尔滨电气，上海电气，东方电器
              </div>
            </div>
          </div>
        </div>
        <div class="home-company-inside-center">
          <div class="home-company-inside-center-fire">
            <div class="home-company-inside-center-fire-top">热搜企业</div>
            <div class="home-company-inside-center-fire-bot">
              <div class="home-company-inside-center-fire-bot-left" @click="arrowClick('left')"
                   v-if="pageLength !== currentPage - 1">
                <img :src="lunboleft" alt="">
              </div>
              <!-- 轮播 -->
              <el-carousel
                :autoplay="false"
                indicator-position="none"
                arrow="never"
                ref="cardShow"
                style="width: 1200px; cursor: pointer"
                height="150px"
              >
                <el-carousel-item v-for="item in 4" :key="item">
                  <div
                    style="
                      width: 1200px;
                      height: 150px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div
                      class="home-company-inside-center-fire-bot-box"
                      v-for="(item, index) in reSouQiYe"
                      :key="index"
                    >
                      <div
                        class="home-company-inside-center-fire-bot-box-cname"
                        @click='waibu(index)'>
                        {{ item.cname }}
                      </div>
                      <div
                        class="home-company-inside-center-fire-bot-box-location"
                      >
                        <div
                          class="home-company-inside-center-fire-bot-box-location-img"

                        >
                          <img
                            :src="item.img" :class="asss[index]"/>
                        </div>
                        <div
                          class="home-company-inside-center-fire-bot-box-location-dizhi"
                        >
                          <img :src="item.di" alt=""/>{{ item.juzhu }}
                        </div>
                        <div
                          class="home-company-inside-center-fire-bot-box-location-guanxi"
                        >
                          <div
                            class="home-company-inside-center-fire-bot-box-location-guanxi-left"
                          >
                            <img :src="item.weixin" alt=""/>
                          </div>
                          <div
                            class="home-company-inside-center-fire-bot-box-location-guanxi-rg"
                          >
                            <img :src="item.weibo" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
              <div class="home-company-inside-center-fire-bot-right" @click="arrowClick('right')"
                   v-if="pageLength !== currentPage + 1">
                <img :src="lunboright" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="home-company-inside-bottom">
          <div class="home-company-inside-bottom-box">
            <div class="home-company-inside-bottom-box-top">
              <div class="home-company-inside-bottom-box-top-left">
                上市公司
              </div>
              <div class="home-company-inside-bottom-box-top-right">
                * 数据更新时间为2021-04-28
              </div>
            </div>
            <div class="home-company-inside-bottom-box-bottom">
              <el-table :data="HomeMockDate.shangShi">
                <el-table-column
                  label="企业名称"
                  prop="mingchneg"
                ></el-table-column>
                <el-table-column
                  label="上市代码"
                  prop="daima"
                ></el-table-column>
                <el-table-column
                  label="总市值(￥)"
                  prop="shizhi"
                ></el-table-column>
                <el-table-column
                  label="总部所在地"
                  prop="suozaidi"
                ></el-table-column>
              </el-table>
            </div>
          </div>
          <div class="home-company-inside-bottom-yanBao">
            <div class="home-company-inside-bottom-yanBao-top">
              <div
                class="home-company-inside-bottom-yanBao-top-left"
              >
                企业研报
              </div>
              <div class="home-company-inside-bottom-yanBao-top-right"></div>
            </div>
            <div
              class="home-company-inside-bottom-yanBao-bottom"

            >
              <div
                class="home-company-inside-bottom-yanBao-bottom-box"
                v-for="(item, index) in qiYeYanBao"
                :key="index"
                @click="qiYebaoa"
              >
                <div
                  class="home-company-inside-bottom-yanBao-bottom-box-round"
                ></div>
                <div
                  class="home-company-inside-bottom-yanBao-bottom-box-content"
                >
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
          <div class="home-company-inside-bottom-gongSiMingLu">
            <div class="home-company-inside-bottom-gongSiMingLu-mingLu">
              <div class="home-company-inside-bottom-gongSiMingLu-top">
                <div class="home-company-inside-bottom-gongSiMingLu-top-left">
                  公司名录
                </div>
                <div
                  class="home-company-inside-bottom-gongSiMingLu-top-right"
                ></div>
              </div>
              <div class="home-company-inside-bottom-gongSiMingLu-bottom">
                <div
                  class="home-company-inside-bottom-gongSiMingLu-bottom-box"
                  v-for="(item, index) in gongSiMingLu"
                  :key="index"
                  onMouseOver="javascript:this.style.background='#ddd'"
                  onMouseOut="javascript:this.style.background='#fff'"
                  @click="qiyaes"
                >
                  <div
                    class="home-company-inside-bottom-gongSiMingLu-bottom-box-img"
                  >
                    <img
                      :src="item.img"
                      alt=""
                      style="width: 100%; height: 100%"
                    />
                  </div>
                  <div
                    class="home-company-inside-bottom-gongSiMingLu-bottom-box-title"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-detail">
      <div class="home-detail-inside">
        <div class="home-detail-inside-top">
          <div
            class="home-detail-inside-top-left"
            style="font-size: 32px"
            @click="yuqing"
          >
            舆情
          </div>
          <div class="home-detail-inside-top-right" @click="yuqing">
            / 查看更多
          </div>
        </div>
        <div class="home-detail-inside-cBox">
          <div class="home-detail-inside-cBox-leftLineBox">
            <div class="home-detail-inside-cBox-leftLineBox-topTitle">
              热点事件 Top10
            </div>
            <div
              class="home-detail-inside-cBox-leftLineBox-columnBox"
              v-for="(item, index) in HomeMockDate.hotEvent"
              :key="index"
            >
              <div class="home-detail-inside-cBox-leftLineBox-columnBox-boxIng">
                <div
                  class="home-detail-inside-cBox-leftLineBox-columnBox-boxIng-left"
                  :class="sstt[index]"
                >
                  {{ index + 1 }}
                </div>
                <div
                  class="home-detail-inside-cBox-leftLineBox-columnBox-boxIng-right"
                >
                  <div
                    class="home-detail-inside-cBox-leftLineBox-columnBox-boxIng-right-top"
                    onMouseOver="javascript:this.style.color='red'"
                    onMouseOut="javascript:this.style.color='black'"
                    @click="yuqingsss"
                  >
                    {{ item.title }}
                  </div>
                  <div
                    class="home-detail-inside-cBox-leftLineBox-columnBox-boxIng-right-line"
                  >
                    <div class="Bar">
                      <div :style="{ width: `${item.val}%` }"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-detail-inside-cBox-contentBox">
            <div class="home-detail-inside-cBox-contentBox-header">
              <div
                class="home-detail-inside-cBox-contentBox-header-left"
                @click="yuqingsss"
              >
                <div
                  class="home-detail-inside-cBox-contentBox-header-left-title"
                >
                  热点产品
                </div>
                <div class="home-detail-inside-cBox-contentBox-header-left-redian">
                  <div class="wrapper">
                    <div class="tagcloud">
                      <!-- bo大小 co颜色 -->
                      <a class="b01 co01" href="#">输配电设备</a>
                      <a class="b02 co02" href="#">发电设备</a>
                      <a class="b03 co03" href="#">印刷包装机械</a>
                      <a class="b04 co04" href="#">电梯</a>
                      <a class="b05 co05" href="#">环保设备</a>
                      <a class="b06 co06" href="#">重型装备</a>
                      <a class="b06 co07" href="#">压缩机</a>
                    </div>
                  </div>
                </div>
                <relationship-draw></relationship-draw>
              </div>
              <div
                class="home-detail-inside-cBox-contentBox-header-right"
                @click="yuqingsss"
              >
                <div
                  class="home-detail-inside-cBox-contentBox-header-right-title"
                >
                  技术热词
                </div>
                <div
                  class="home-detail-inside-cBox-contentBox-header-right-img"
                >
                  <img
                    :src="hotRightimg"
                    alt=""
                    :class="backMoveCom == 2 ? 'active_class4' : ''"
                    @mouseover="handleMove4(2)"
                    @mouseleave="handleLeave4"
                    style="width: 100%; height: 100%"
                  />
                </div>
                <!--                <world-cloud></world-cloud>-->
              </div>
            </div>
            <div class="home-detail-inside-cBox-contentBox-footer">
              <!--              <div style="height: 255px; margin-left: -30px"
                   id="home-detail-inside-cBox-contentBox-footer-Container"></div>
              <div class="home-detail-inside-cBox-contentBox-footer-title">
                热点产品
              </div> -->
              <div
                class="home-detail-inside-cBox-contentBox-footer-title"
                @click="reDian"
              >
                热点企业
              </div>
              <div class="home-detail-inside-cBox-contentBox-footer-bottom">
                <div
                  class="home-detail-inside-cBox-contentBox-footer-bottom-box"
                  v-for="(item, index) in reDianQiYe"
                  :key="index"
                  :class="reportMove == index ? 'active_class' : ''"

                  @click="yuqingsss"
                >
                  <div
                    class="home-detail-inside-cBox-contentBox-footer-bottom-box-img"
                  >
                    <img :src="item.img" alt=""/>
                  </div>
                  <div
                    class="home-detail-inside-cBox-contentBox-footer-bottom-box-title"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //组件
  //echrts
  import * as echarts from 'echarts'
  import 'echarts-wordcloud'
  //mock数据
  import HomeMockDate from './mock/company'
  //词云
  import worldCloud from './components/worldCloud.vue'
  //关系图
  import relationshipDraw from './components/relationshipPage.vue'
  import planA from './EchartComponent/planA'
  import planB from './EchartComponent/planB'

  export default {
    name: 'index',
    components: {
      'world-cloud': worldCloud,
      'relationship-draw': relationshipDraw,
      planA,
      planB
    },
    created() {
      console.log(this.$route.meta.title)
    },
    data() {
      return {
        title: '首页',
        mouseMove: '-1',
        reportMove: '-1',
        backMove: '-1',
        backMoveCom: '-1',
        backMoveComs: '-1',
        //首页模拟数据
        HomeMockDate,
        worddata: [
          {
            value: 100,
            name: '文字'
          },
          {
            value: 400,
            name: '图片'
          },
          {
            value: 333,
            name: '参考'
          },
          {
            value: 855,
            name: '音视频'
          },
          {
            value: 343,
            name: '新媒体'
          },
          {
            value: 343,
            name: '测试1'
          },
          {
            value: 43,
            name: '测试2'
          },
          {
            value: 543,
            name: '测试3'
          },
          {
            value: 333,
            name: '测试4'
          },
          {
            value: 323,
            name: '测试5'
          },
          {
            value: 33,
            name: '测试6'
          },
          {
            value: 13,
            name: '测试7'
          },
          {
            value: 543,
            name: '测试8'
          },
          {
            value: 66,
            name: '测试9'
          },
          {
            value: 666,
            name: '测试10'
          }
        ],
        width: '100%',
        height: '60px',
        id: 'container',
        // 左侧地图
        ditu: require('@/assets/home/ditu1.png'),
        ditu2: require('@/assets/home/world map.png'),
        //首页左上角的LOGO
        homeLeftLogoTop: require('@/assets/home/blog_00.png'),
        lunboleft: require('@/assets/home/左_left 拷贝.png'),
        lunboright: require('@/assets/home/右_right 拷贝.png'),
        //每个模块的大标题的水平线白色线
        titleLinesWhite: {
          secLeft: require('@/assets/home/bsecond2_03.png'),
          secRight: require('@/assets/home/bsecond2_05.png')
        },
        //每个模块的大标题的水平线灰色线
        titleLinesGray: {
          secLeft: require('@/assets/home/btitle-left.gif'),
          secRight: require('@/assets/home/btitle-right.gif')
        },
        // 数据中的小栏目
        fenXiYuCea: [
          {
            title: '1-3月份全国电力工业统计数据',
            time: '2021-01-20',
            img: require('@/assets/home/NEW 拷贝.png')
          },
          {
            title: '3月份全社会用电量同比增长19.4% ',
            time: '2021-01-20',
            img2: require('@/assets/home/HOT 拷贝.png'),
            img3: require('@/assets/home/01大数据平台-首页_30.gif')
          },
          {
            title: '国家能源局发布2021年1-2月份全国电力工业统计数据',
            time: '2021-01-20'
          },
          {
            title: '2021年1-2月太阳能发电增长25.8% 两年平均增长18.7% ',
            time: '2021-01-20'
          },
          {
            title: '美国光伏装机量增长24%，不及中国增量',
            time: '2021-01-20'
          },
          {
            title: '王勃华：2021年我国光伏新增装机55-65GW 全球或达150... ',
            time: '2021-01-20'
          },
          {
            title: '2020年规上工业增加值同比增长2.8%，增速逐季回升！工...',
            time: '2021-01-20'
          },
          {
            title: 'EIA：美国2021年计划新增39.7GW发电容量 太阳能占39... ',
            time: '2021-01-20'
          },
          {
            title: '国网：截至2020年底共58GW光伏项目纳入可再生能源补...',
            time: '2021-01-20'
          }
        ],
        // 企业研报
        qiYeYanBao: [
          {
            title: '[广发证券]电力设备新能源行业：能源指导工作意见出炉 车展智能化+铁锂打造爆款'
          },
          {
            title:
              '[天风证券] 电气设备行业专题研究：锂电材料：重视一体化降本的...'
          },
          {
            title:
              '[开源证券] 电气设备行业周报：从车展看电动大周期 渗透率向上有...'
          },
          {
            title:
              '[光大证券] 碳中和行业(电新+环保)周报：气候峰会提出严控煤电项...'
          },
          {
            title: '[中信证券] 能源化工行业周观点：业绩披露期即将结束 多数子行业...'
          },
          {
            title: '[新时代证券] 2021年电新行业周报4月第4期：上海车展开幕 电动...'
          },
          {
            title:
              '[招商证券] 动力电池与电气系统系列报告之(七十)：六氟产业格局...'
          },
          {
            title:
              '[东方证券] 电子行业：华为发布汽车新品 带动相关产业链'
          },
          {
            title:
              '[华金证券] 一季度光伏新增装机同比增长55.85％'
          },
          {
            title: '[太平洋证券] “碳中和”背景下是黑色产业链利润重塑的过程'
          }
        ],
        // 报告栏目的图片
        wordPdf: [
          {
            img: require('@/assets/home/wenzi.png'),
            new: require('@/assets/home/01大数据平台-首页_24.gif'),
            title: '2019年我国发电设备行业发展情况及2020年展望',
            time: '2021-03-29',
            pdf: 'pdf'
          },
          {
            img: require('@/assets/home/wenzi.png'),
            new: require('@/assets/home/01大数据平台-首页_30.gif'),
            title: '2020年三季度我国发电设备行业生产运行情况分析',
            time: '2021-03-29',
            pdf: 'pdf'
          },
          {
            img: require('@/assets/home/wenzi.png'),
            new: require('@/assets/home/HOT 拷贝.png'),
            title: '2020年上半年我国发电设备行业发展情况及形势展望',
            time: '2021-03-29',
            pdf: 'pdf'
          },
          {
            img: require('@/assets/home/wenzi.png'),
            title: '2020年我国发电设备行业发展情况及未来形势展望',
            time: '2021-03-29',
            pdf: 'pdf'
          },
          {
            img: require('@/assets/home/wenzi.png'),
            title: '2020年一季度我国发电设备行业生产运行情况分析',
            time: '2021-03-29',
            pdf: 'pdf'
          },
          {
            img: require('@/assets/home/wenzi.png'),
            new: require('@/assets/home/01大数据平台-首页_30.gif'),
            title: '2020-2021年度全国电力供需形势分析预测报告',
            time: '2021-03-29',
            word: 'word'
          },
          {
            img: require('@/assets/home/wenzi.png'),
            title: '2020年前三季度全国电力供需形势分析预测报告',
            time: '2021-03-29',
            word: 'word'
          },
          {
            img: require('@/assets/home/wenzi.png'),
            title: '2021年一季度全国电力供需形势分析预测报告',
            time: '2021-03-29',
            word: 'word'
          }
        ],
        //公司名录
        gongSiMingLu: [
          {
            img: require('@/assets/home/核电厂_nuclear-plant.png'),
            title: '电力运营与建设'
          },
          {
            img: require('@/assets/home/数据库电源_database-power.png'),
            title: '发电设备制造'
          },
          {
            img: require('@/assets/home/微型存储卡_mini-sd-card.png'),
            title: '零部件与原材料制造'
          },
          {
            img: require('@/assets/home/充电宝_charging-treasure.png'),
            title: '其他'
          }
        ],
        //行业搜索的搜索框--热度img
        smallHotFireIcon: require('@/assets/home/fire.gif'),
        //新浪
        sina: require('@/assets/home/sina.jpg'),
        //微信
        weChat: require('@/assets/home/wechat.jpg'),
        //行业数据的左边大图
        dataImg: {
          A: require('@/assets/home/data_10.png'),
          B: require('@/assets/home/data_13.png')
        },
        //热门标签
        hotTags: {
          newImg: require('@/assets/home/01大数据平台-首页_24.gif'),
          hotImg: require('@/assets/home/01大数据平台-首页_28.gif'),
          accountImg: require('@/assets/home/01大数据平台-首页_30.gif')
        },
        //行业搜索下的公司Logo数组
        companyForLogoArr: [
          require('@/assets/home/company_logo_03.png'),
          require('@/assets/home/company_logo_05.png'),
          require('@/assets/home/company_logo_07.png'),
          require('@/assets/home/company_logo_09.png')
        ],
        //行业报告小图快，月度报告下紫色
        smallColorBoxForWord: require('@/assets/home/samllbox_18.png'),
        //行业舆情下的热点人物和技术热词
        details: {
          imgA: require('@/assets/home/details_03.png'),
          imgB: require('@/assets/home/details_05.png')
        },
        shuju: require('@/assets/home/lVS饿.png'),
        quanQiuShuJu: require('@/assets/home/区域图_area-map@2x.png'),
        //报告文件
        reportFiles: require('@/assets/home/井号文件1_file-hash-one.png'),
        //报告文件
        reportPage: require('@/assets/home/01大数据门户-首页_07.png'),
        //企业搜索字段
        companySearch: '',
        // 热搜企业
        fireLocationimg: require('@/assets/home/company_logo_05.png'),
        //火苗
        hotFire: require('@/assets/home/hot2.png'),
        //热搜企业的联系方式
        hotSina: require('@/assets/home/sina.jpg'),
        hotweChat: require('@/assets/home/wechat.jpg'),
        //机器人
        jiqiren: require('@/assets/home/机器人2_robot-two@2x.png'),
        // 热点产品
        hotimg: require('@/assets/home/chart(1).png'),
        // 技术热词
        hotRightimg: require('@/assets/home/cloud.png'),
        // 热点企业
        hotQiYeimg: require('@/assets/home/图层 11.png'),
        // 全球机器人市场
        quanQiuShiChang: [
          {
            name: 'home-dynamic',
            img: require('@/assets/home/分析_analysis.png'),
            title: '国内生产总值'
          },
          {
            name: 'home-daping',
            img: require('@/assets/home/电波_electric-wave.png'),
            title: '全国全社会用电量'
          },
          {
            img: require('@/assets/home/银行卡_bank-card.png'),
            name: 'home-dynamic',
            title: '主要发电企业电源工程投资完成'
          },
          {
            img: require('@/assets/home/风力发电机_wind-turbine.png'),
            name: 'home-dynamic',
            title: '发电设备订单'
          }
        ],
        // 热点企业
        reDianQiYe: [
          {
            img: require('@/assets/home/图层 15.png'),
            title: '中国华能集团有限公司'
          },
          {
            img: require('@/assets/home/图层 16.png'),
            title: '中国华电集团有限公司'
          },
          {
            img: require('@/assets/home/图层 17.png'),
            title: '中国大唐集团'
          },
          {
            img: require('@/assets/home/图层 18.png'),
            title: '中国核工业集团有限公司'
          },
          {
            img: require('@/assets/home/图层 19 拷贝.png'),
            title: '上海电气集团股份有限公司'
          },
          {
            img: require('@/assets/home/图层 20.png'),
            title: '中国第一重型机械股份公司'
          }
        ],
        // 热搜企业
        reSouQiYe: [
          {
            cname: '中国华能集团有限公司',
            img: require('@/assets/home/图层 21.png'),
            di: require('@/assets/home/.png'),
            juzhu: '北京',
            weixin: require('@/assets/home/weixin.png'),
            weibo: require('@/assets/home/weibo (2).png')
          },
          {
            cname: '哈尔滨电气集团有限公司',
            img: require('@/assets/home/图层 22.png'),
            di: require('@/assets/home/.png'),
            juzhu: '黑龙江',
            weixin: require('@/assets/home/weixin.png'),
            weibo: require('@/assets/home/weibo (2).png')
          },
          {
            cname: '中国东方电气集团有限公司',
            img: require('@/assets/home/图层 23.png'),
            di: require('@/assets/home/.png'),
            juzhu: '四川',
            weixin: require('@/assets/home/weixin.png'),
            weibo: require('@/assets/home/weibo (2).png')
          },
          {
            cname: '上海电气集团股份有限公司',
            img: require('@/assets/home/图层 19@2x.png'),
            di: require('@/assets/home/.png'),
            juzhu: '上海',
            weixin: require('@/assets/home/weixin.png'),
            weibo: require('@/assets/home/weibo (2).png')
          }
        ],
        asss: [
          'as',
          'ad',
          'af',
          'ag'
        ],
        // 数据上方轮播图
        topbo: [
          {
            id: '1',
            img: require('@/assets/home/img.png'),
            title: '【献礼建党百年】我能源系统点亮西非港口 几内亚柴光供电项目装上...'
          },
          {
            id: '2',
            img: require('@/assets/home/img(1).png'),
            title: '2020年我国发电设备行业发展回顾 及未来形势展望'
          },
          {
            id: '3',
            img: require('@/assets/home/img(2).png'),
            title: '“促转型 谋发展 共话高质量”丨发电设备行业转型升级和清洁能源高质...'
          },
          {
            id: '4',
            img: require('@/assets/home/电力装备绿色创新 发展联盟.png'),
            title: '关于筹备成立电力装备绿色创新发展 联盟征求意见的函'
          }
        ],
        wai: [
          'https://mp.weixin.qq.com/s/t9bZm02zn7UAENcDaG-sTA?scene=25#wechat_redirect',
          'https://mp.weixin.qq.com/s/jMyEu_7XWFJ6wbNw_nzFzQ?scene=25#wechat_redirect',
          'http://www.harbin-electric.com/news_view.asp?id=12063',
          'https://mp.weixin.qq.com/s/yFavhRK5XnLmLLF6vJtdfw'
        ],
        bu: [
          'http://www.dongfang.com/',
          'https://www.shanghai-electric.com/',
          'http://www.harbin-electric.com/',
          'https://www.shanghai-electric.com/'
        ],
        active: '',
        currentPage: 1,
        pageLength: 4,
        sstt: [
          'diyi',
          'dier',
          'disan',
          'disi',
          'diwu',
          'diliu',
          'diqi',
          'diba',
          'dijiu',
          'dishi'
        ]
      }
    },
    mounted() {
      //this.drawEchartsLineTable();
      // this.drawWorldCloud();
      /*3D标签云*/
      tagcloud({
        selector: '.tagcloud',  //元素选择器
        fontsize: 16,       //基本字体大小, 单位px
        radius: 40,         //滚动半径, 单位px 页面宽度和高度的五分之一
        mspeed: 'slow',   //滚动最大速度, 取值: slow, normal(默认), fast
        ispeed: 'slow',   //滚动初速度, 取值: slow, normal(默认), fast
        direction: 135,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
        keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
      })
    },
    methods: {
      handleOpen(index) {
        window.open(this.wai[index])
      },
      waibu(index) {
        window.open(this.bu[index])
      },
      handleMove1(index) {
        this.mouseMove = index
      },
      handleLeave1(index) {
        this.mouseMove = '-1'
      },
      handleMove2(index) {
        this.reportMove = index
      },
      handleLeave2(index) {
        this.reportMove = '-1'
      },
      handleMove3(index) {
        this.backMove = index
      },
      handleLeave3(index) {
        this.backMove = '-1'
      },
      handleMove4(index) {
        this.backMoveCom = index
      },
      handleLeave4(index) {
        this.backMoveCom = '-1'
      },
      handleMove5(index) {
        this.backMoveComs = index
      },
      handleLeave5(index) {
        this.backMoveComs = '-1'
      },
      // 点击数据中的文章列表跳转
      // quanqiu() {
      //   this.$router.push("/home-xiangqing");
      // },
      // 点击全球工业市场进行调准
      gopage(id) {
        this.$router.push('/home-xiangqing2')
      },
      //行业搜索
      industryClickTag(index) {
        this.industryIndex = index
      },
      // 点击热门报告详情榜进行跳转
      baogaoxiangqing() {
        this.$router.push('/home-fenxi')
      },
      tiaozhuan() {
        this.$router.push('/home-report')
      },
      //画词云
      GetWorldCloudDate() {
        fetch(
          'https://gw.alipayobjects.com/os/antvdemo/assets/data/world-population.json'
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          })
      },
      //查看更多的行业动态
      handleMoreHangYeDongTai() {
        this.$router.push({
          name: 'home-dynamic'
        })
      },
      // 点击跳转到报告页面
      baogao(index) {
        if (index == 0) {
          this.$router.push({
            name:'home-xiangqing'
          })
        } else {
          this.$router.push('/home-fenxi')
        }
      },
      baogaoa() {
        this.$router.push('/home-report')
      },
      // 点击跳转到报告详情页面
      baoGaoxiangqing() {
        this.$router.push('/home-baogaodeail')
      },
      // 点击企业跳转到企业页面
      qiYe() {
        this.$router.push('/home-company')
      },
      // 点击查看更多，跳转到 更多
      gengDuo() {
        this.$router.push('/home-gengduo')
      },
      // 点击跳转到企业研报
      qiYebao() {
        this.$router.push('/home-gengduo')
      },
      // 点击跳转到舆情页面
      yuqing() {
        this.$router.push('/home-public-opinion')
      },
      reDian() {
        this.$router.push('/home-gengduo')
      },
      qiyeerji() {
        this.$router.push('/home-company')
      },
      qiYebaoa() {
        this.$router.push('/home-fenxi')
      },
      qiyae() {
        // this.$router.push("/home-gengduo");
        this.$router.push({ name: 'home-gengduo', params: { activeName: 'first' } })
      },
      qiyaes() {
        // this.$router.push("/home-gengduo");
        this.$router.push({ name: 'home-gengduo', params: { activeName: 'first' } })
      },
      handleGengDuo() {
        this.$router.push({
          name: 'home-gongye'
        })
      },
      qiye() {
        this.$router.push({
          name: 'home-company'
        })
      },
      yuqingsss() {
        this.$router.push({
          name: 'home-public-opinion'
        })
      },
      arrowClick(val) {
        if (val === 'right') {
          this.$refs.cardShow.next()
          this.$refs.cardShow2.next()
        } else {
          this.$refs.cardShow.prev()
          this.$refs.cardShow2.prev()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  // 个性化页面背景色
  $theme_back: #7593f4;

  // 页面个性化设置
  .home {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-header {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;
      background-image: url('../../assets/home/top img.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;

      &-inside {
        width: 1200px;
        margin-top: 50px;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;

        &-left {
          width: 585px;
          height: 360px;
          padding: 31px;
          background-color: #24273E;

          &-box {
            &-title {
              width: 208px;
              height: 26px;
              font-size: 18px;
              margin-bottom: 5px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #FFFFFF;
            }

            &-img {
              width: 362px;
              margin-left: 105px;
              height: 277px;
              cursor: pointer;
            }
          }

          &-small {
            margin-top: -50px;
          }
        }

        &-rg {
          width: 585px;
          height: 360px;
          margin-left: 20px;
          display: flex;
          padding: 31px;

          background-color: #231F20;
          cursor: pointer;

          &-box {
            width: 220px;
            height: 220px;

            &-title {
              width: 208px;
              height: 18px;
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #FFFFFF;
            }

            &-img {
              margin-top: 33px;
              width: 550px;
              height: 276px;
            }
          }
        }
      }
    }

    &-data {
      width: 100%;
      height: 480px;
      display: flex;
      justify-content: center;
      align-items: center;

      &-inside {
        width: 1200px;
        height: 380px;

        &-lunbo {
          width: 1300px;
          margin-left: -50px;
          display: flex;
          justify-content: space-between;

          &-left {
            height: 40px;
            margin-top: 130px;
            margin-right: 11px;
            cursor: pointer;
          }

          &-right {
            height: 40px;
            margin-top: 130px;
            margin-left: 11px;
            cursor: pointer;
          }

          &-box {
            width: 280px;
            height: 200px;
            position: relative;

            &-location {
              &img {
                width: 100%;
                height: 100%;
              }

              &-title {
                position: absolute;
                background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                top: 121px;
                height: 80px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                left: 0;
                padding-top: 34px;
                padding-left: 12px;
                padding-right: 12px;
                color: #fff;
              }
            }
          }
        }

        &-top {
          width: 100%;
          margin-top: 58px;
          height: 40px;
          position: relative;

          &-text {
            font-size: 35px;
            cursor: pointer;
          }

          &-more {
            position: absolute;
            top: 18px;
            left: 80px;
            font-size: 18px;
            color: #999999;
            cursor: pointer;
          }
        }

        &-bottom {
          width: 100%;
          height: 600px;
          display: flex;
          justify-content: space-between;
          margin-top: 30px;

          &-left {
            width: 600px;
            height: 312px;
            display: flex;
            justify-content: space-between;

            &-box {
              width: 60px;
              height: 312px;
              background-color: #50597B;

              &-title {
                width: 19px;
                height: 83px;
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #F7F7F7;
                margin: 25px 21px 0 20px;
                cursor: pointer;
              }

              &-img {
                cursor: pointer;
                margin-top: 148px;
                margin-left: 5px;
              }
            }

            &-text {
              width: 520px;

              &-box {
                font-size: 14px;

                &-title {
                  justify-content: space-between;
                  display: flex;
                  margin-bottom: 20px;

                  &-big {
                    color: #333;
                  }

                  &-tag {
                  }

                  &-time {
                    color: #999;
                  }
                }
              }
            }
          }

          &-right {
            width: 558px;
            height: 312px;
            margin-top: -40px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            &-box {
              width: 270px;
              height: 165px;
              margin-bottom: 16px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              &-img {
                width: 60px;
                height: 60px;

                img {
                  width: 60px;
                  height: 60px;
                }
              }

              &-center {
                margin-top: 16px;
                font-size: 16px;
              }

              &-bottom {
                font-size: 14px;
                margin-top: 10px;
                color: lightgray;
              }
            }
          }
        }
      }
    }

    &-report {
      margin-top: 270px;
      width: 100%;
      height: 470px;
      margin-bottom: 50px;
      background: #f7f7f7;
      display: flex;
      justify-content: center;
      align-items: center;

      &-inside {
        width: 1200px;
        height: 400px;

        &-top {
          width: 100%;
          height: 40px;
          margin-top: 20px;
          position: relative;

          &-text {
            font-size: 35px;
            cursor: pointer;
          }

          &-more {
            position: absolute;
            top: 18px;
            left: 80px;
            font-size: 18px;
            color: #999999;
            cursor: pointer;
          }
        }

        &-bottom {
          width: 100%;
          margin-top: 28px;
          display: flex;
          justify-content: space-between;

          &-box {
            width: 130px;
            height: 300px;
            position: relative;

            &-img {
              position: relative;
              background-color: #fff;
              text-align: center;
              padding-top: 18px;
              height: 200px;
              margin-bottom: 20px;

              &-new {
                position: absolute;
                top: -1px;
                left: 0;
              }

              &-pdf {
                position: absolute;
                bottom: 5px;
                right: 5px;
                color: #D51D33;
              }

              &-word {
                position: absolute;
                bottom: 5px;
                right: 5px;
                color: #39ABEA;
              }
            }

            &-title {
              width: 132px;
              height: 50px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              line-height: 18px;
              margin-bottom: 17px;
              text-align: center;
            }

            &-time {
              width: 114px;
              text-align: center;
              height: 9px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
              line-height: 18px;
              margin: auto;
            }
          }
        }
      }
    }

    &-company {
      width: 100%;
      height: 774px;
      background-color: #fff;
      display: flex;
      margin-top: -30px;
      align-items: center;
      justify-content: center;

      &-inside {
        width: 1200px;
        height: 774px;

        &-top {
          width: 100%;
          display: flex;
          margin-top: 45px;

          &-title {
            width: 170px;
            height: 38px;
            display: flex;
            justify-content: space-between;

            &-big {
              font-size: 36px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              cursor: pointer;
              color: #333333;
            }

            &-small {
              margin-top: 16px;
              font-size: 18px;
              cursor: pointer;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
            }
          }

          &-search {
            margin-left: 152px;

            &-input {
              display: flex;
              margin-bottom: 10px;

              input {
                width: 750px;
                height: 46px;
                color: #999;
                padding-left: 15px;
                outline: none;
              }

              .el-button {
                width: 94px;
                margin-left: -94px;
                height: 46px;
              }
            }

            &-hot {
              display: flex;
              align-items: center;

              &-fire {
                width: 21px;
                height: 21px;
                margin-top: -3px;

                img {
                  width: 21px;
                  height: 21px;
                }
              }

              &-text {
                font-size: 14px;
                font-weight: 400;
                color: #999999;
                margin-top: 2px;
                margin-left: 6px;
                cursor: pointer;
              }
            }
          }
        }

        &-center {
          margin-top: 35px;

          &-fire {
            width: 100%;

            &-top {
              font-size: 18px;
              font-weight: bold;
              color: #333333;
            }

            &-bot {
              width: 1300px;
              margin-top: 18px;
              margin-left: -55px;
              display: flex;
              justify-content: space-between;

              &-left {
                height: 40px;
                margin-top: 60px;
                margin-right: 11px;
                cursor: pointer;
              }

              &-right {
                height: 40px;
                margin-top: 60px;
                cursor: pointer;
              }

              &-box {
                width: 275px;
                height: 140px;
                border-radius: 5px;
                position: relative;

                &-cname {
                  font-size: 16px;
                  font-weight: 400;
                  color: #333333;
                  position: absolute;
                  top: 20px;
                  left: 20px;
                }

                &-location {
                  width: 100%;
                  height: 50px;
                  background-color: #555555;
                  position: absolute;
                  top: 70px;
                  left: 0;

                  &-img {
                    width: 80px;
                    height: 60px;
                    background-color: #fff;
                    margin-left: 10px;
                    float: left;

                    img {
                      width: 100%;
                      height: 100%;
                      text-align: center;
                    }
                  }

                  &-dizhi {
                    line-height: 50px;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    float: left;
                    margin-left: 5px;

                    img {
                      height: 20px;
                      margin-top: 14px;
                      margin-right: 5px;
                    }
                  }

                  &-guanxi {
                    width: 65px;
                    height: 50px;
                    float: right;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-right: 20px;

                    border-radius: 50%;

                    &-left {
                    }

                    &-rg {
                      border-radius: 50%;
                    }

                    img {
                      width: 30px;
                      height: 29px;
                      border-radius: 50%;
                    }
                  }
                }
              }
            }
          }
        }

        &-bottom {
          width: 100%;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;

          &-box {
            width: 380px;

            &-top {
              font-size: 18px;
              margin-bottom: -10px;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-content: center;
              justify-content: space-between;
              padding: 16px 0px;

              &-left {
                font-size: 18px;
                font-weight: bold;
                color: #333333;
                cursor: pointer;
              }

              &-right {
                font-size: 12px;
                font-weight: 400;
                margin-top: 7px;
                color: #999999;
              }
            }

            &-bottom {
              height: 400px;
              cursor: pointer;
            }
          }

          &-yanBao {
            width: 480px;

            &-top {
              font-size: 18px;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-content: center;
              justify-content: space-between;
              padding: 16px 0px;

              &-left {
                font-size: 18px;
                cursor: pointer;
                font-weight: bold;
                color: #333333;
              }

              &-right {
                font-size: 12px;
                cursor: pointer;
                font-weight: 400;
                color: #999999;
              }
            }

            &-bottom {
              width: 100%;
              height: 402px;
              padding: 12px;
              border-radius: 4px;
              box-shadow: 0px 1px 5px 0px rgba(170, 170, 170, 0.5);

              &-box {
                padding: 10px;
                display: flex;
                margin-top: 2px;
                align-items: center;

                &-round {
                  width: 4px;
                  height: 4px;
                  margin-right: 2px;
                  border-radius: 50%;
                  background-color: #d83e40;
                }

                &-content {
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  font-size: 14px;
                  margin-left: 8px;
                }
              }
            }
          }

          &-gongSiMingLu {
            width: 280px;

            &-top {
              font-size: 18px;
              font-weight: bold;
              color: #333333;
              display: flex;
              align-content: center;
              justify-content: space-between;
              padding: 16px 0;

              &-left {
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                color: #333333;
              }

              &-right {
                font-size: 12px;
                font-weight: 400;
                color: #999999;
              }
            }

            &-bottom {
              height: 402px;
              width: 280px;
              border-radius: 4px;
              display: flex;
              flex-direction: column;
              padding: 20px;
              flex-wrap: wrap;
              justify-content: space-between;
              box-shadow: 0px 1px 5px 0px rgba(170, 170, 170, 0.5);

              &-box {
                width: 220px;
                height: 80px;
                margin-top: 10px;
                border-radius: 5px;
                border-bottom: 1px dashed #ccc;
                //text-align: center;
                display: flex;
                justify-content: space-between;

                &-img {
                  margin: auto;
                  margin-top: 18px;
                  margin-left: 5px;
                  width: 40px;
                  height: 40px;
                }

                &-title {
                  margin-top: 25px;
                  margin-left: 20px;
                  width: 160px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 16px;
                  font-family: Microsoft YaHei;
                  font-weight: 400;
                  color: #000000;
                }
              }
            }
          }
        }
      }
    }

    &-detail {
      width: 100%;
      margin-top: 120px;
      display: flex;
      justify-content: center;
      background-color: #f7f7f7;

      &-inside {
        width: 1200px;
        display: flex;
        flex-direction: column;
        padding: 35px 0px;

        &-top {
          width: 200px;
          height: 50px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          &-left {
            width: 72px;
            height: 35px;
            font-size: 34px;
            color: #333333;
            cursor: pointer;
          }

          &-right {
            width: 100px;
            height: 18px;
            font-size: 18px;
            color: #999999;
            margin-top: 8px;
            cursor: pointer;
          }
        }

        &-cBox {
          width: 100%;
          height: 100%;
          margin-top: 20px;
          display: flex;

          &-leftLineBox {
            width: 390px;
            height: 580px;
            background-color: white;
            margin-right: 30px;
            padding: 28px;
            border-radius: 5px;
            box-shadow: 0px 0px 15px 0px rgba(51, 51, 51, 0.1);

            &-topTitle {
              font-size: 17px;
              font-weight: bolder;
              margin-bottom: 30px;
            }

            &-columnBox {
              margin-bottom: 22px;
              cursor: pointer;

              &-boxIng {
                width: 100%;
                height: 26px;
                display: flex;

                &-left {
                  width: 10%;
                  height: 100%;
                  font-size: 14px;
                  font-weight: bolder;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #7f74f4;
                  margin-left: -14px;
                }

                &-right {
                  width: 90%;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  margin-left: 1%;

                  &-top {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 5px;
                  }

                  &-line {
                    /*进度条*/
                    .Bar,
                    .Bars {
                      position: relative;
                      width: 100%;
                      background-color: #dedeef;
                      /* 宽度 */
                      border-radius: 2px;
                    }

                    .Bar div,
                    .Bars div {
                      display: block;
                      position: relative;
                      background: linear-gradient(-90deg, #ED5E16 0%, #FDDECF 100%);
                      /* 进度条背景颜色 */
                      color: #ef7131;
                      height: 5px;
                      /* 高度 */
                      line-height: 5px;
                      border-radius: 2px;
                      /* 必须和高度一致，文本才能垂直居中 */
                    }

                    .Bars div {
                      background: #090;
                    }

                    .Bar div span,
                    .Bars div span {
                      position: absolute;
                      width: 200px;
                      /* 宽度 */
                      text-align: center;
                      font-weight: bold;
                    }

                    .cent {
                      margin: 0 auto;
                      width: 300px;
                      overflow: hidden;
                    }
                  }
                }
              }
            }
          }

          &-contentBox {
            width: 780px;
            height: 100%;

            &-header {
              width: 100%;
              height: 300px;
              display: flex;
              justify-content: space-between;

              &-left {
                background-color: #fff;
                width: 420px;
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0px 0px 15px 0px rgba(51, 51, 51, 0.1);

                &-title {
                  width: 80px;
                  height: 18px;
                  font-size: 18px;
                  font-family: Microsoft YaHei;
                  font-weight: bold;
                  color: #333333;
                }

                &-redian {
                  width: 360px;
                  height: 220px;
                }
              }

              &-right {
                background-color: white;
                width: 330px;
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0px 0px 15px 0px rgba(51, 51, 51, 0.1);

                &-title {
                  width: 80px;
                  height: 18px;
                  font-size: 18px;
                  font-family: Microsoft YaHei;
                  font-weight: bold;
                  color: #333333;
                }

                &-img {
                  width: 286px;
                  height: 227px;
                  margin-top: 10px;
                  margin-left: -10px;
                }
              }
            }

            &-footer {
              width: 100%;
              height: 250px;
              margin-top: 30px;
              margin-bottom: 40px;
              padding: 30px 30px 23px 29px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0px 0px 15px 0px rgba(51, 51, 51, 0.1);

              &-title {
                width: 72px;
                height: 18px;
                font-size: 18px;
                margin-bottom: 25px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #333333;
                cursor: pointer;
              }

              &-bottom {
                width: 700px;
                height: 150px;
                display: flex;
                padding-top: 15px;

                &-box {
                  width: 140px;
                  margin-left: 18px;
                  text-align: center;
                  cursor: pointer;
                  padding: 6px 0px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;

                  &-img {
                    width: 70px;
                    height: 62px;

                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }

                  &-title {
                    width: 99px;
                    height: 33px;
                    font-size: 14px;
                    margin-top: 10px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                    line-height: 18px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<style scoped>
  /*行业搜索下的标签的背景图片*/
  .Active-Background {
    cursor: pointer;
    color: white;
    background: url("../../assets/home/background_change.png") no-repeat;
  }

  /deep/ .el-carousel__container {
    position: relative;
    /*height: 473px;*/
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  /deep/ .el-table th > .cell {
    height: 49px;
    margin-bottom: -10px;
    line-height: 49px;
    color: #333333;
    border-top: 2px solid #CCE2F0;
    background-color: #f7faff;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: white;
  }

  .active_class {
    border: 3px solid #f7f7f7;
    border-radius: 5px;
  }

  .active_class2 {
    width: 220px;
    height: 200px;
    box-shadow: 0px 0px 6px 10px rgba(13, 24, 41, 0.2);
    border-radius: 4px;
    cursor: pointer;
  }

  .active_class3 {
    border: 3px solid #ffffff;
    cursor: pointer;
  }

  .active_class4 {
    border: 3px solid #ffffff;
    cursor: pointer;
  }

  .active_class5 {
    color: red;
  }

  .diyi {
    color: #7F74F4;
  }

  .dier {
    color: #8F87E4;
  }

  .disan {
    color: #B7B2ED;
  }

  .disi {
    color: #AAAAAA;
  }

  .diwu {
    color: #AAAAAA;
  }

  .diliu {
    color: #AAAAAA;
  }

  .diqi {
    color: #AAAAAA;
  }

  .diba {
    color: #AAAAAA;
  }

  .dijiu {
    color: #AAAAAA;
  }

  .dishi {
    color: #AAAAAA;
  }

  .as {
    width: 58px !important;
    height: 54px !important;
    margin-left: 8px;
    background: #fff;
  }

  .ad {
    width: 55px !important;
    height: 53px !important;
    margin-left: 8px;
  }

  .af {
    width: 67px !important;
    height: 34px !important;
    margin-top: 10px !important;
    margin-left: 8px;
    background: #fff !important;
  }

  .ag {
    width: 74px !important;
    margin-top: 6px !important;
    height: 38px !important;
  }
</style>
