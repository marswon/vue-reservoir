<template>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="dates"
      label="时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="eventss"
      label="事件"
      width="100">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
    <el-table-column
      prop="handle"
      label="处理预案">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [{
          dates:'2016-12-03',
          eventss:'流量超过1',
          description:'水位上升20',
          handle:'超过预期'
        }, {
          dates:'2017-01-06',
          eventss:'水位正常',
          description:'正常',
          handle:'正常'
        }, {
          dates:'2017-02-15',
          eventss:'水位下降',
          description:'下降10',
          handle:'未处理'
        }]
      }
    }
  }
</script>