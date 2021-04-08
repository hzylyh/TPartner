<!--
 * @Description: 数据展示页面
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-04-08 10:21:16
 * @LastEditors: John Holl
-->

<!--  -->
<template>
  <el-row class="dt-project">
    <!-- 项目基本信息 -->
    <el-row class="dt-base-info">
      项目基本信息
    </el-row>

    <!-- 搜索栏 -->
    <el-row class="dt-handle">
      <el-form :model="form"
               label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="节点IP">
              <el-select v-model="form.nodeIP"
                         placeholder="请选择节点">
                <el-option label="192.168.1.168"
                           value="1"></el-option>
                <el-option label="192.168.1.169"
                           value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-row>

    <!-- 数据图表展示 -->
    <el-row class="dt-chart">
      <div id="main"
           style="height:400px;"></div>
    </el-row>

    <!-- 详细数据表格 -->
    <el-row class="dt-table">
      <el-table :data="tableData"
                stripe
                style="width: 100%">
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
      </el-table>
    </el-row>
  </el-row>
</template>

<script>
import * as echarts from 'echarts'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    // VeLine
  },
  data () {
    // 这里存放数据
    return {
      form: {
        nodeIP: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.initChart()
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    initChart () {
      var myChart = echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
