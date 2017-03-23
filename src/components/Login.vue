<template>
  <div id="login">
    <img src="../assets/logo.png">
    <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       欢迎登录
      </span>
      <el-row>
        <el-input
          v-model="account"
          placeholder="账号"
          type="text">
        </el-input>
        <el-input
          v-model="password"
          placeholder="密码"
          type="password"
          @keyup.enter.native="loginToDo">
        </el-input>
        <el-button type="primary" @click="loginToDo">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
  </div>
 
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
      }
    },
 
  methods: {
    // loginToDo(){
    //   let obj={
    //     username:this.account,
    //     password:this.password
    //   }
      
    //   this.$http.get('',obj)
    //   .then((res)=>{
    //     let o=obj.username;
    //     alert(o);
    //     if(o=="admin"){ // 如果成功
    //         sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
    //         this.$message({ // 登录成功，显示提示语
    //           type: 'success',
    //           message: '登录成功！'
    //         });
    //         this.$router.push('/hello') // 进入hello页面，登录成功
    //       }else{
    //         this.$message.error({
    //           type:'warning',
    //           message:'请正确输入账号和密码'
    //         }); // 登录失败，显示提示语
    //         sessionStorage.setItem('demo-token',null); // 将token清空
    //       }

    //       switch (o) {
    //         case "":
    //         this.$message.error({
    //           type:'warning',
    //           message:'账号和密码不能为空'
    //         });
    //         break;
    //         case "admin":
    //           sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
    //         this.$message({ // 登录成功，显示提示语
    //           type: 'success',
    //           message: '登录成功！'
    //         });
    //         this.$router.push('/hello') // 进入hello页面，登录成功
    //           break;
    //           case "superMange":
    //           sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
    //         this.$message({ // 登录成功，显示提示语
    //           type: 'success',
    //           message: '登录成功！'
    //         });
    //         this.$router.push('/todolist') // 进入todolist页面，登录成功
    //           break;
          
    //         default:
    //         this.$message.error({
    //           type:'warning',
    //           message:'请正确输入账号和密码'
    //         });
    //           break;
    //       }
    //   },(err)=>{
    //     this.$message.error('没有获取到你要的信息！');
    //     sessionStorage.setItem('demo-token',null); // 将token清空
    //   })
    // },
   
    

  loginToDo() {
  let obj={
         username:this.account,
        password:this.password
      }  
      this.$http.post('http://localhost:8081/auth',obj)
      .then((res)=>{
        localStorage.setItem('demo-token',res.data.demo-token);
       var token =localStorage.getItem('demo-token');
        
        // this.$http.get('http://10.20.13.190:9966/api/me').then((r)=>{
        //     localStorage.setItem('demo-token',this.token);
       
        //   this.$router.push('/todolist');
        // },(errs)=>{
        //   this.$message.error("账号和密码不匹配");
        // localStorage.setItem('demo-token',null); // 将token清空
        // });
        this.$message({
          type:'success',
          message:'登录成功！'
        });
        this.$router.push('/first');
        
      },(err)=>{
        this.$message.error("账号和密码错误！");
        localStorage.setItem('demo-token',null); // 将token清空
      });
  },
  }
};
</script>

<style  scoped>
@keyframes myfirst
{
0%   {background: red; }
25%  {background: yellow;}
50%  {background: blue; background-image: url(../assets/logo.png);}
100% {background: green;}
}

@-moz-keyframes myfirst /* Firefox */
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue; background-image: url(../assets/logo.png);}
100% {background: green;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue; background-image: url(../assets/logo.png);}
100% {background: green;}
}

@-o-keyframes myfirst /* Opera */
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue; background-image: url(../assets/logo.png);}
100% {background: green;}
}
#login{
  margin-top: 60px;
  animation: myfirst 5s;
-moz-animation: myfirst 5s;	/* Firefox */
-webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
-o-animation: myfirst 5s;	/* Opera */

}
img{
  position: absolute;
  left: 43%;
  top: 50px;
}

  .el-row.content{
    padding :16px;
    margin-top: 250px;
    }
  .title{
    font-size :28px
  }
  .el-input{
    margin :12px 0;
  }
  .el-button{
    width :100%;
    margin-top :12px;
  }
</style>