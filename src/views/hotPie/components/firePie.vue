<!--
 * @Author: yinzi
 * @Date: 2021-04-28 20:13:40
 * @LastEditors: yinzi
 * @LastEditTime: 2021-04-28 20:50:32
 * @Description:
 * @FilePath: \hydsj-ass\src\views\datatree\index.vue
-->
<!--  -->
<template>
  <div class='datatree'>
    <el-tree
      :data="data"
      node-key='id'
      :props="defaultProps"
      :accordion = "true"
      show-checkbox
      :default-expanded-keys="[111]"
      :default-checked-keys="[111]"
      highlight-current
    ></el-tree>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'datatree',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      data: [
        {
          label: '宏观经济',
          children: [
            {
              label: '综合',
              children: [
                {
                  label: '国内生产总值',
                },
                {
                  label: '不变价国内生产总值',
                },
                {
                  label: '国内生产总值指数'
                },
                {
                  label: '地区生产总值(2019年)'
                },
              ]
            },
            {
              label: '就业和工资',
              children: [
                {
                  label: '按行业分城镇非私营单位就业人员平均工资'
                },
                {
                  label: '按行业分城镇私营单位就业人员平均工资'
                }
              ]
            },
            {
              label: '价格',
              children: [
                {
                  label: '各种价格指数'
                },
                {
                  label: '按工业行业分工业生产者出厂价格指数'
                },
                {
                  label: '分行业进出口商品价格指数'
                },
              ]
            },
            {
              label: '财政',
              children: [
                {
                  label: '分地区一般公共预算支出(2019年)'
                },
              ]
            },
            {
              label: '资源和环境',
              children: [
                {
                  label: '主要城市日照时数(2019年)'
                },
                {
                  label: '城镇环境基础设施建设投资情况(2019年)'
                },
                {
                  label: '工业污染治理投资完成情况'
                }
              ]
            },
            {
              label: '能源',
              children: [
                {
                  label: '一次能源生产总量及构成'
                },
                {
                  label: '能源消费总量及构成'
                },
                {
                  label: '电力平衡表'
                },
                {
                  label: '分地区电力消费量'
                },
              ]
            },
            {
              label: '固定资产投资',
              children: [
                {
                  label: '新增主要产品生产能力'
                },
              ]
            },
            {
              label: '对外经济贸易',
              children: [
                {
                  label: '按国际贸易标准分类分进出口商品金额(2019年)'
                },
                {
                  label: '按行业分外商直接投资(2019年)'
                },
                {
                  label: '按行业分对外直接投资'
                },
                {
                  label: '按国别(地区)分对外经济合作(2019年)'
                },
              ]
            },
            {
              label: '工业',
              children: [
                {
                  label: '按行业分规模以上工业企业主要指标(2019年)'
                }
              ]
            },
            {
              label: '科学技术',
              children: [
                {
                  label: '按行业分规模以上工业企业研究与试验发展(R&D)活动及专利情况(2019年)'
                },
                {
                  label: '按行业分规模以上工业企业新产品开发及生产情况(2019年)'
                },
                {
                  label: '高技术产业(制造业)相关情况(2019年)'
                },
                {
                  label: '国家级高新区企业主要经济指标(2019年)'
                },
                {
                  label: '按技术合同构成分全国技术市场成交合同金额'
                },
              ]
            },
            {
              label: '城市、农村和区域发展',
              children: [
                {
                  label: '分地区城市燃气情况(2019年)'
                },
                {
                  label: '分地区城市集中供热情况(2019年)'
                },
                {
                  label: '农村水电建设和发电量、农村用电量'
                },
              ]
            },
            {
              label: '国际主要社会经济指标',
              children: [
                {
                  label: '国内生产总值及其增长率'
                },
                {
                  label: '工业生产指数'
                }
              ]
            },
          ]
        },
        {
          label: '电力装机与运行',
          id: 1,
          children: [
            {
              label: '电力装机',
              children: [
                {
                  label: '全国发电设备装机容量及构成'
                },
                {
                  label: '全国发电设备装机年增长情况'
                },
                {
                  label: '分地区发电设备装机容量及构成'
                },
                {
                  label: '分地区电设备装机年增长情况'
                },
              ]
            },
            {
              label: '电力运行',
              id:2,
              children: [
                {
                  label: '全国全社会用电量',
                  id: 3,
                },
                {
                  label: '全国发电量'
                },
                {
                  label: '分地区全社会用电量'
                },
                {
                  label: '分地区发电量'
                },
                {
                  label: '6000千瓦以上供电煤耗'
                },
                {
                  label: '发电设备累计平均利用小时'
                },
                {
                  label: '主要发电企业电源工程投资完成'
                },
                {
                  label: '其它电力指标'
                },
              ]
            },
            {
              label: '电力可靠性',
            },

          ]
        },
        {
          label: '发电设备',
          children: [
            {
              label: '发电设备产能',
              children: [
                {
                  id:111,
                  label: '火电'
                },
                {
                  label: '水电'
                },
                {
                  label: '风电'
                },
                {
                  label: '核电'
                },
                {
                  label: '光伏'
                },
                {
                  label: '储能'
                },
                {
                  label: '氢能'
                },
              ]
            },
            {
              label: '发电设备产量',
              children: [
                {
                  label: '火电',
                },
                {
                  label: '水电'
                },
                {
                  label: '风电'
                },
                {
                  label: '核电'
                },
                {
                  label: '光伏'
                },
              ]
            },
            {
              label: '发电设备价格',
              children: [
                {
                  label: '火电发电机'
                },
                {
                  label: '火电汽轮机'
                },
                {
                  label: '电站锅炉'
                },
                {
                  label: '水轮机'
                },
                {
                  label: '水轮发电机'
                },
                {
                  label: '风力发电机'
                },
                {
                  label: '反应堆压力容器'
                },
                {
                  label: '蒸汽发生器'
                },
                {
                  label: '稳压器'
                },
                {
                  label: '锂离子电池'
                },
              ]
            },
            {
              label: '发电设备订单',
              children: [
                {
                  label: '火电'
                },
                {
                  label: '水电'
                },
                {
                  label: '风电'
                },
                {
                  label: '核电'
                },
                {
                  label: '光伏'
                },
              ]
            },
            {
              label: '发电设备进出口',
              children: [
                {
                  label: '火电'
                },
                {
                  label: '水电'
                },
                {
                  label: '风电'
                },
                {
                  label: '核电'
                },
                {
                  label: '光伏'
                },
              ]
            },
            {
              label: '发电设备其它',
              children: [
                {
                  label: '发电设备产品销售量'
                },
                {
                  label: '发电设备产品库存'
                },
              ]
            },
          ]
        },

        {
          label: '零部件与原材料',
          children: [
            {
              label: '产能',
              children: [
                {
                  label: 'P92钢管'
                },
                {
                  label: '转子叶片'
                }
              ]
            },
            {
              label: '价格',
              children: [
                {
                  label: '铜'
                },
                {
                  label: '铜（bc）'
                },
                {
                  label: '铝'
                },
                {
                  label: '锌'
                },
                {
                  label: '铅'
                },
                {
                  label: '镍'
                },
                {
                  label: '锡'
                },
                {
                  label: '黄金'
                },
                {
                  label: '白银'
                },
                {
                  label: '螺纹钢'
                },
                {
                  label: '线材'
                },
                {
                  label: '热轧卷板'
                },
                {
                  label: '不锈钢'
                },
                {
                  label: '原油'
                },
                {
                  label: '石油沥青'
                },
                {
                  label: '天然橡胶'
                },
                {
                  label: '20号胶'
                },
                {
                  label: '纸浆'
                },
                {
                  label: '焦炭'
                },
                {
                  label: '焦煤'
                },
                {
                  label: '铁矿石'
                },
                {
                  label: '聚乙烯'
                },
                {
                  label: '聚氯乙烯'
                },
                {
                  label: '聚丙烯'
                },
                {
                  label: '乙二醇'
                },
                {
                  label: '丙乙烯'
                },
                {
                  label: '玻璃'
                },
                {
                  label: '硅铁'
                },
                {
                  label: '甲醇'
                },
                {
                  label: '动力煤'
                },
                {
                  label: '锰硅'
                },
                {
                  label: '纯碱'
                },
              ]
            },
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类
::v-deep .el-tree {
  background-color: transparent;
  &-node {
  }
  &-node.is-current {
    color: #333;
  }
}


::v-deep .el-tree-node.is-current > .el-tree-node__content {
  background-color: #6c84a3 !important;
}
</style>
