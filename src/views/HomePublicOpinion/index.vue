<template>
  <div class="home">
    <!-- 左侧导航 -->
    <div class="home-nav">
      <div class="home-nav-box"></div>
    </div>
    <div class="home-header">
      <div class="home-header-bg">
        <div class="home-header-title">舆  情</div>
        <div class="home-header-img"></div>
      </div>
    </div>
    <!-- 内容主体 -->
    <div class="home-main">
      <div class="home-main-card">
        <el-tabs tab-position="left" >
          <el-tab-pane>
            <span slot="label" class="redian">热点事件</span>
            <div class="home-main-card-title">
              <div class="home-main-card-title-left">
                <div class="home-main-card-title-left-sj"></div>
                <div class="home-main-card-title-left-hot">热点事件</div>
              </div>
              <div class="home-main-card-title-right">
                <el-input placeholder="搜索话题">
                  <i
                    slot="suffix"
                    class="el-input__icon el-icon-search"
                  ></i>
                </el-input>
                <!-- <div class="home-main-card-title-right-cen"></div>
                <div class="home-main-card-title-right-img">
                  <img
                    :src="countBox2"
                    alt=""
                  />
                </div> -->
              </div>
            </div>
            <!-- 内容盒子 -->
            <div class="home-main-card-nr">
              <div
                class="home-main-card-nr-box"
                v-for="(he, index) in hotEvents"
                :key="index"
              >
                <div class="home-main-card-nr-box-left">
                  <div class="home-main-card-nr-box-left-img">
                    <img
                      :src="he.logo"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div class="home-main-card-nr-box-right">
                    <div class="home-main-card-nr-box-right-title">
                      #{{he.tag}}#
                    </div>
                    <div
                      class="home-main-card-nr-box-right-box"
                      v-for="(li, index) in he.list"
                      :key="index"
                    >
                      <div class="home-main-card-nr-box-right-box-title">
                        {{li.title}}
                      </div>
                      <div class="home-main-card-nr-box-right-box-bottom">
                        <div class="home-main-card-nr-box-right-box-bottom-value">
                          <div class="home-main-card-nr-box-right-box-bottom-value-img">
                            <img
                              :src="countBox4"
                              alt=""
                            />
                          </div>
                          <div class="home-main-card-nr-box-right-box-bottom-value-sz">
                            {{li.value}}
                          </div>
                        </div>
                        <div class="home-main-card-nr-box-right-box-bottom-name">{{li.entname}}</div>
                        <div class="home-main-card-nr-box-right-box-bottom-date">{{li.date}}</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧的报表 -->
            <div class="home-main-card-echarts">
              <div
                id="keywordchart"
                style="width: 350px; height: 400px;"
              ></div>
              <!-- <div class="home-main-card-echarts-title">事件关键词</div>
              <div class="home-main-card-echarts-img">
                <img
                  :src="countBox5"
                  alt=""
                />
              </div> -->
            </div>
            <!-- 分页菜单 -->
            <div class="home-main-card-fenye">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
              >
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">热点产品</span>
            <div class="home-main-card-title">
              <div class="home-main-card-title-left">
                <div class="home-main-card-title-left-sj"></div>
                <div class="home-main-card-title-left-hot">热点产品</div>
              </div>
              <div class="home-main-card-title-right">
                <el-input placeholder="搜索话题">
                  <i
                    slot="suffix"
                    class="el-input__icon el-icon-search"
                  ></i>
                </el-input>
                <!-- <div class="home-main-card-title-right-cen">搜索话题</div>
                <div class="home-main-card-title-right-img">
                  <img
                    :src="countBox2"
                    alt=""
                  />
                </div> -->
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">技术热词</span>
            <div class="home-main-card-title">
              <div class="home-main-card-title-left">
                <div class="home-main-card-title-left-sj"></div>
                <div class="home-main-card-title-left-hot">技术热词</div>
              </div>
              <div class="home-main-card-title-right">
                <el-input placeholder="搜索话题">
                  <i
                    slot="suffix"
                    class="el-input__icon el-icon-search"
                  ></i>
                </el-input>
                <!-- <div class="home-main-card-title-right-cen">搜索话题</div>
                <div class="home-main-card-title-right-img">
                  <img
                    :src="countBox2"
                    alt=""
                  />
                </div> -->
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">热点企业</span>
            <div class="home-main-card-title">
              <div class="home-main-card-title-left">
                <div class="home-main-card-title-left-sj"></div>
                <div class="home-main-card-title-left-hot">热点企业</div>
              </div>
              <div class="home-main-card-title-right">
                <el-input placeholder="搜索话题">
                  <i
                    slot="suffix"
                    class="el-input__icon el-icon-search"
                  ></i>
                </el-input>
                <!-- <div class="home-main-card-title-right-cen">搜索话题</div>
                <div class="home-main-card-title-right-img">
                  <img
                    :src="countBox2"
                    alt=""
                  />
                </div> -->
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import hotEvents from './mock'
export default {
  name: 'index',
  data() {
    return {
      // 页面开头背景图片
      countBox: require('@/assets/home/舆情.png'),
      //顶端的搜索框内部的 放大镜
      countBox2: require('@/assets/home/search-chat.png'),
      // 热点事件中的图片
      countBox3: require('@/assets/home/01大数据平台-首页_03.png'),
      //机器人报告得热度
      // countBox4: require('@/assets/home/hot.png'),
      // 右侧数据表格
      countBox5: require('@/assets/home/num line 拷贝 2.png'),
      hotEvents,
      hotKeyWord: {
        title: {
          text: '事件关键词',
          textStyle: {
            color: '#FFF'
          }
        },
        xAxis: {
          // max: 'dataMax',
          type: 'value',
          axisLabel: {
            color: '#FFF'
          }
        },
        yAxis: {
          type: 'category',
          data: [
            '复产复工',
            '经营目标',
            '产业链',
            '数字经济',
            '国有经济',
            '创新发展',
            '一代一路',
            '全球一体化'
          ],
          inverse: true,
          axisLabel: {
            show: true,
            color: '#FFF'
          },
          boundaryGap: true
        },
        grid: {
          left: 0,
          containLabel: true
        },
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            data: [21451, 18011, 14192, 13290, 12890, 10127, 8700, 4981],
            type: 'bar',
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace',
              color: '#FFF'
            }
          }
        ],
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 1000,
          max: 30000,
          text: ['高', '低'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
          }
        }
      }
    }
  },
  methods: {
    loadEchart() {
      let myChart = this.$echarts.init(document.getElementById('keywordchart'))
      myChart.setOption(this.hotKeyWord)
    }
  },
  created() {},
  mounted() {
    this.loadEchart()
  }
}
</script>

<style scoped lang="scss">
.home {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-nav {
    z-index: 10;

    &-box {
      width: 160px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  &-header {
    position: relative;
    width: 100%;
    height: 500px;
    background-image: url('../../assets/home/top img.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background: linear-gradient(180deg, #9dd7fc 0%, #ffffff 100%);
    // // background-repeat: no-repeat;
    // background-size: 100% 100%;
    // // background-position: center;
    &-bg {
      position: absolute;
      width: 100%;
      // background: url(../../assets/home/舆情.png);
      background-repeat: no-repeat;
      // background-size: contain;
      background-position: top;
    }
    &-title {
      position: absolute;
      top: 70px;
      left: 65%;
      // width: 124px;
      height: 70px;
      line-height: 70px;
      // margin-top: 280px;
      margin-left: -310px;
      font-size: 48px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #fff;
    }

    &-img {
      width: 1200px;
      height: 500px;

      background-position: (84px, 10px);
    }
  }

  // 内容主体
  &-main {
    z-index: 10;
    margin-top: -290px;
    width: 100%;
    display: flex;
    justify-content: center;
    // margin-left: 290px;

    &-card {
      width: 1200px;
      min-height: 300px;
      position: relative;
      background-color: transparent !important;
      // margin-left: -130px;
      // box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
      ::v-deep .el-tabs {
        &__item {
          padding: 0 30px;
          font-size: 18px;
          border-radius: 5px;

        }
        .is-active {
          color: #ffffff;
          background-color: #ff5a00;
        }
        &__content {
          min-height: 200px;
          background-color: #ffffff;
          border: 1px #eee solid;
        }
      }
      &-title {
        width: 1080px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background: #fafafa;

        &-left {
          position: relative;

          &-sj {
            position: absolute;
            top: 30px;
            left: 10px;
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 10px solid orange;
          }

          &-hot {
            width: 72px;
            height: 18px;
            line-height: 70px;
            font-size: 18px;
            margin-left: 30px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }
        }

        &-right {
          position: relative;
          padding-top: 18px;
          margin-right: 40px;
          ::v-deep .el-input {
            &__inner {
              border-radius: 18px;
            }
          }
          &-cen {
            width: 300px;
            height: 36px;
            line-height: 34px;
            padding-left: 10px;
            font-size: 12px;
            color: #999;
            border-radius: 20px;
            background: #ffffff;
            border: 1px solid #cccccc;
          }

          &-img {
            position: absolute;
            top: 26px;
            left: 268px;
          }
        }
      }
      //盒子内容
      &-nr {
        width: 1020px;
        &-box {
          width: 660px;
          height: 293px;
          padding: 20px;
          border-bottom: 1px dashed #ccc;

          &-left {
            display: flex;
            &-img {
              width: 106px;
              height: 106px;
              margin-right: 15px;
            }
          }

          &-right {
            display: flex;
            flex-direction: column;
            &-title {
              width: 500px;
              height: 17px;
              margin-top: 10px;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #000000;
              cursor: pointer;
              &:hover {
                color: #409eff;
                text-decoration: underline;
              }
            }

            &-box {
              position: relative;
              width: 500px;
              display: flex;
              flex-direction: column;
              margin-top: 30px;

              &-title {
                font-size: 14px;
                color: #000000;
                line-height: 21px;
                cursor: pointer;
                &:hover {
                  color: #f56c6c;
                  text-decoration: underline;
                }
              }
              &-bottom {
                display: flex;
                line-height: 20px;

                &-value {
                  margin-right: 15px;
                  &-img {
                    display: inline;
                    img {
                      margin: 0;
                      padding: 0;
                      height: 14px;
                    }
                  }
                  &-sz {
                    display: inline;
                    // margin-top: 4px;
                    // width: 20px;
                    // height: 10px;
                    font-size: 14px;
                    font-family: Arial;
                    font-weight: bold;
                    color: #ff5a00;
                  }
                }

                &-name {
                  font-size: 12px;
                  font-weight: 400;
                  color: #999999;
                  margin-right: 15px;
                }
                &-date {
                  font-size: 12px;
                  font-weight: 400;
                  color: #999999;
                }
              }
            }
          }
        }
      }

      // 界面右侧的报表
      &-echarts {
        position: absolute;
        top: 95px;
        right: 0;
        padding: 10px;
        // width: 360px;
        // height: 400px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-right: 3px solid #50597B;
        background-color: #50597B;

        #keywordchart {
          position: relative;
          padding-left: 10px;
        }
      }
      //分页菜单
      &-fenye {
        width: 1050px;
        height: 50px;
        margin-top: 20px;
        margin-left: 30px;
      }
    }
  }
}
</style>
<style scoped>
	/deep/ .el-tabs__item {
		margin-bottom: 20px;
		font-size: 20px !important;
	}
</style>
