<template>
  <div class="hello">
    <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
    <h3>文山州水库管理系统</h3>
    <el-input class="ss" icon="search" v-model="cx" @keyup.enter="search"></el-input>
    <el-button type="primary" @click="logout" icon=" el-icon-circle-close " class="out">退出</el-button>
    </div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple">
    </div></el-col>
  <el-col :span="18"><div class="grid-content bg-purple-light">
     <search></search>
    </div></el-col>
</el-row>
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
   
    </div></el-col>
</el-row>
  </div>
</template>

<script>
import Search from '../page/search.vue'
export default {
  name: 'hello',
  data () {
    return {
      cx:''
    }
  },
  components:{
    Search
  },
  methods:{
    logout(){
      localStorage.setItem('demo-token',null);
      var token =localStorage.getItem('demo-token');
      window.history.go('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.out{
  position: absolute;
  right: 10px;
  bottom: 18px;
}
h3{
  font-size: 2em;
}
.ss{
  width: 30%;
  position: absolute;
  right: 20%;
  bottom: 20px;
}
 .el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    height: 100px;
    background: #20A0FF;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
