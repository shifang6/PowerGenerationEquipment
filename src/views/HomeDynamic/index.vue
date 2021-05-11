<template>
  <div class="home">
    <el-container>
      <el-aside width="300px">
        <datatree></datatree>
      </el-aside>
      <el-main>
    <div class="home-header">
      <div class="home-header-title">
        发电设备产量
      </div>
    </div>
    <div class="home-cen">
      <div class="home-cen-box">
        <div class="home-cen-box-title">
          <div>数据组名称： 2015-2020年发电设备产量</div>
          <div style="margin: 15px 0; margin-left: 47px;">单位： 万千瓦</div>
          <div style="margin-left: 14px;">数据来源： 发电设备中心</div>
        </div>
        <div class="home-cen-box-rg">
          <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
      </div>
      <!-- 表格 -->
      <div class="home-cen-tab">
        <el-table :data="tableData" style="width: 100%"
         :cell-style='cellStyle'
         :header-cell-style='rowClass'>
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="time" label="发电设备" width="200">
          </el-table-column>
          <el-table-column prop="province" label="2015年" width="150">
          </el-table-column>
          <el-table-column prop="city" label="2016年" width="150">
          </el-table-column>
          <el-table-column prop="address" label="2017年" width="150">
          </el-table-column>
          <el-table-column prop="name" label="2018年" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="2019年" width="150">
          </el-table-column>
          <el-table-column prop="awe" label="2020年" width="150">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 下方的数据报表 -->
    <div class="home-cen-echarts" id="main" @click="go"></div>
    </el-main>
    </el-container>
  </div>
</template>

<script>
  import ChinaMap from '../../components/ChinaMap/index.vue'
  import * as echarts from "echarts";
  import "echarts-wordcloud";
  import datatree from '@/views/datatree'

  export default {
    components: {
      datatree
    },
    components: { datatree },
    name: "index",
    data() {
      return {
        tableData: [{
          time: '火电机组',
          name: '7456.09',
          province: '7327.58',
          city: '8384.63',
          address: '8001.52',
          zip: 4997.6,
          awe: '5027.29'
        }, {
          time: '水电机组',
          name: '765.28',
          province: '1544.25',
          city: '867.48',
          address: '871.34',
          awe: '1706.57',
          zip: 1050.15
        }, {
         time: '风电机组',
          name: '1370.83',
          province: '2051.58',
          city: '1861.63',
          address: '1545.14',
          awe: '4585.06',
          zip: 1933.41
        }, {
          time: '核电机组',
          name: '216',
          province: '108',
          city: '340',
          address: '576',
          awe: '170',
          zip: 438
        }, {
          time: '发电设备产量(发电设备中心统计数据，不含光伏)',
          name: '9808.2',
          province: '11031.41',
          city: '11453.74',
          address: '10994',
          awe: '11488.92',
          zip: 8419.16
        }, {
          time: '光伏设备',
          name: '4426',
          province: '1513',
          city: '3454',
          address: '5306',
          awe: '4820',
          zip: 3011
        }],

        // 下拉菜单
        options: [{
                  value: '选项1',
                  label: '2015-2020'
                }, {
                  value: '选项2',
                  label: '2010-2015'
                }, {
                  value: '选项3',
                  label: '2005-2010'
                }, {
                  value: '选项4',
                  label: '2000-2005'
                }, {
                  value: '选项5',
                  label: '1995-2000'
                }],
                value: '2015-2020'
        }
    },
    mounted() {
      //this.loadEchart('zggyjqrndxl')
      this.drawoneLineTable()
    },
    methods: {
      loadEchart(id) {
        let myChart = this.$echarts.init(document.getElementById(id))
        myChart.setOption(this[id])
      },
      handleNodeClick(data) {
        console.log(data);
      },
      cellStyle({row, column, rowIndex, columnIndex}){
        return 'text-align:center';
      },
      rowClass({row, rowIndex}){
        return 'text-align:center';
      },
      go() {
        this.$router.push('/home-gongye')
      },
      // 下方得数据表格
      drawoneLineTable() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
              x: '450px',
              y: '18px',
                data: ['总量','水电','火电','风电','核电'],
                textStyle: {
                  color: '#333'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2015','2016','2017','2018','2019','2020'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                      textStyle: {
                        color: '#333'
                      }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 14000,
                    interval: 2000,
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                          color: 'block',
                        }
                    }
                },
                {
                    type: 'value',
                    min: 0,
                    max: 14000,
                    interval: 2000,
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                          color: '#F5F5F5'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '发电设备产量',
                    symbolSize: 14,
                    type: 'line',
                    itemStyle: {
                      color: '#50ACFE',
                    },
                    data: [11031.41,11453.74,10994,9808.2,8419.16,11488.92]
                },
                {
                    name: '水电',
                    type: 'bar',
                    itemStyle: {
                      color: '#50BEA3'
                    },
                    data: [1544.25,867.48,871.34,765.28,1050.15,1706.57]
                },
                {
                    name: '火电',
                    type: 'bar',
                    itemStyle: {
                      color: '#8064A2'
                    },
                    data: [7327.58,8384.63,8001.52,7456.09,4997.6,5027.29]
                },
                {
                    name: '风电',
                    type: 'bar',
                    itemStyle: {
                      color: '#2C7664'
                    },
                    data: [2051.58,1861.63,1545.14,1370.83,1933.41,4585.06]
                },
                {
                    name: '核电',
                    type: 'bar',
                    itemStyle: {
                      color: '#DE9C3C'
                    },
                    yAxisIndex: 1,
                    data: [108,340,576,216,438,170]
                }
            ]
        };

        option && myChart.setOption(option);
      },
    }
  }
</script>

<style scoped lang="scss">

  .home {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-wrap: wrap;

     &-nav {
       position: absolute;
       top: 0;
       left: 0;
       width: 160px;
       height: 100%;
     }

    &-header {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      &-title {
        width: 321px;
        height: 35px;
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
    }

    &-cen {
      width: 100%;
      margin-top: 50px;

      &-box {
        width: 1200px;
        height: 90px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding-left: 30px;
      }

      &-tab {
        display: flex;
        margin: auto;
        padding-left: 30px;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        width: 1200px;
        height: 400px;
      }

      &-echarts {
        margin: 0 auto;
        background-color: #F5F5F5;
        width: 1200px;
        height: 500px;
        border: 1px solid #DADADA;
        border-radius: 5px;
        margin-bottom: 100px;
      }
    }
  }
  .progress-radial {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    // border: 2px solid #2f3439;
    background-color: #409eff;
  }

  .progress-radial .overlay {
    position: absolute;
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    vertical-align: middle;
  }

  .overlay>div {
    margin: 13px 0;
  }

  .overlay>div>div {
    line-height: 28px;
  }

  .progress-1 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(144deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-2 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(180deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-3 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0)),
      linear-gradient(224deg, #409eff 50%, #eee 50%, #eee);
  }

  .progress-4 {
    background-image: linear-gradient(90deg,
      #eee 50%,
      rgba(0, 0, 0, 0) 50%,
      #409eff),
      linear-gradient(180deg, #409eff 50%, #409eff 50%, #409eff);
  }
</style>
