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
      <el-form :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="节点IP">
              <el-select v-model="form.nodeIP" placeholder="请选择节点" @change="choosedata">
                <el-option
                  v-for="item in nodeIPlist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
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
        <el-table-column prop="usecpu"
                         label="CPU%"
                         width="180"
                         >
        </el-table-column>
        <el-table-column prop="usemem"
                         label="MEM%">
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
      nodeIPlist: [{ value: 'nodeip1', label: '192.168.224.101:9100' },
        { value: 'nodeip2', label: '192.168.224.104:9100' },
        { value: 'nodeip3', label: '192.168.224.106:9100' },
        { value: 'nodeip4', label: '192.168.224.121:9100' },
        { value: 'nodeip5', label: '192.168.224.133:9100' },
        { value: 'nodeip6', label: '192.168.221.102:9100' }],
      form: {
        nodeIP: ''
      },
      tableData: []
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
    initChart (datacpu, datamem) {
      var myChart = echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      var option = {
        legend: { data: ['CPU%', 'MEM%'] },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: 'CPU%',
          data: datacpu,
          type: 'line'
        }, {
          name: 'MEM%',
          data: datamem,
          type: 'line'
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    choosedata (value) {
      if (value === 'nodeip1') {
        console.log(value)
        var datacpu = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.33333, 0.33333, 0.33333, 0.4, 0.4, 0.4, 0.43333, 0.43333, 0.43333, 0.4, 0.4, 0.4, 1.06667, 1.06667, 1.06667, 0.43333, 0.43333, 0.43333, 0.36667, 0.36667, 0.36667, 0.46667, 0.46667, 0.46667, 0.46667, 0.46667, 0.46667, 0.4, 0.4, 0.4, 0.36667, 0.36667, 0.36667, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.43333, 0.43333, 0.43333, 0.43333, 0.43333, 0.43333]
        var datamem = [6.90271, 6.90271, 6.90271, 6.90271, 6.90477, 6.90477, 6.90477, 6.90477, 6.90477, 6.90477, 6.90517, 6.90517, 6.90517, 6.9049, 6.9049, 6.9049, 6.90696, 6.90696, 6.90696, 6.90557, 6.90557, 6.90557, 6.9049, 6.9049, 6.9049, 6.90517, 6.90517, 6.90517, 6.9051, 6.9051, 6.9051, 6.90304, 6.90304, 6.90304, 6.90317, 6.90317, 6.90317, 6.90331, 6.90331, 6.90331, 6.90331, 6.90331, 6.90331, 6.90264, 6.90264, 6.90264, 6.90058, 6.90058, 6.90058, 6.90264, 6.90264, 6.90264, 6.90291, 6.90291, 6.90291, 6.90264, 6.90264, 6.90264, 6.90417, 6.90417, 6.90417]
        this.$options.methods.initChart(datacpu, datamem)
        // this.tableData = [{
        //   date: '2016-05-02',
        //   usecpu: 0.4,
        //   usemem: 6.90271
        // }]
        this.tableData = [{
          date: '2016-05-02',
          usecpu: 0.4,
          usemem: 6.90271
        }, {
          date: '2016-05-03',
          usecpu: 0.9,
          usemem: 9.90271
        }]
      } else {
        this.$options.methods.initChart()
        this.tableData = []
      }
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
