<template>
  <div style="text-align: center">
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleCloseToast"
      width="60%"
    >
      <el-card>
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="chooseValue"
          filterable
          :left-default-checked="[]"
          :right-default-checked="[]"
          :titles="['未选择', '已选择']"
          :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}',
          }"
          @change="handleChooseChangeBy"
          :data="data"
        >
          <span slot-scope="{ option }"
            >{{ option.key }} - {{ option.label }}</span
          >
        </el-transfer>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="handleCloseToast">取 消</el-button>
        <el-button size="mini" type="primary" @click="handleSubmitClose"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    //弹出框显示隐藏
    dialogFlag: {
      type: Boolean,
      default: false,
    },
  },
  //监听
  watch: {
    //对指定数据监听
    dialogFlag: {
      //处理函数
      handler(n, o) {
        console.log(n);
        this.dialogVisible = n;
      },
      //立即模式
      immediate: true,
      //深度监听
      deep: true,
    },
  },
  data() {
    const generateData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          // disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      //弹出框显示隐藏控制
      dialogVisible: false,
      //transfer数据Arr
      data: generateData(),
      //选中的chooseValue
      chooseValue: [],
      //用于渲染的table数据
      renderFunc(h, option) {
        return `<span>${option.key} - ${option.label}</span>`;
      },
    };
  },
  methods: {
    //已经change选择的数据
    handleChooseChangeBy(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    //弹出框确定按钮
    handleSubmitClose() {
      console.log(this.chooseValue);
    },
    //弹出框取消按钮
    handleCloseToast() {
      this.$emit("handleCloseToast");
    },
  },
};
</script>

<style scoped>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
/deep/ .is-disabled {
  color: black;
  border: none;
  background-color: #ffffff;
}
/deep/ .el-transfer-panel {
  width: 300px;
}
/deep/ .el-transfer__buttons {
  padding: 0;
}
</style>
