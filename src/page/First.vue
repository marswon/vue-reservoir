<template>
	<div>
		<el-row class="ma">

			<i class="fa fa-bandcamp fa-3x" @click="go"></i>
			<div id="gn">
				<i class="fa fa-bell-slash fa-3x" style="color: red" ></i>
				<i class="fa fa-cog  fa-3x " style="color: darkgoldenrod;"></i>
				
				<el-dropdown trigger="click">
					<i class="fa fa-user fa-3x" style="color: palevioletred;"></i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</el-row>
		<el-row>
			<el-col :span="16">
				<!--
                	作者：offline
                	时间：2017-03-09
                	描述：使用标记短信数量提示
                -->
				<el-badge :value="waterinfo" class="item">
					<el-button size="small" @click="dialogFormVisible = true">水雨情告警</el-button>
					<el-dialog title="水雨情信息" v-model="dialogFormVisible">
						<table-data></table-data>
					</el-dialog>
				</el-badge>

				<el-badge :value="2" class="item">
					<el-button size="small" @click="dialogFormVisibles = true">水质告警</el-button>
					<el-dialog title="水质信息" v-model="dialogFormVisibles">
						<h3>开发中。。。</h3>
					</el-dialog>
				</el-badge>

				<el-badge :value="26" class="item">
					<el-button size="small" @click="dialogFormVisibless = true">大坝工情告警</el-button>
					<el-dialog title="大坝工情信息" v-model="dialogFormVisibless">
						<h3>开发中。。。</h3>
					</el-dialog>
				</el-badge>
			</el-col>
			<el-col :span="8"></el-col>
		</el-row>
		<el-row>
			<second></second>
		</el-row>
	</div>
</template>

<script>
	import Second from './Second.vue'
	import TableData from './tableData.vue'
	export default {
		data() {
			return {
				dialogFormVisible: false,
				dialogFormVisibles: false,
				dialogFormVisibless: false,
				waterinfo:'3'
			}
		},
		components:{
			Second,
			TableData
		},
		computed:{
			
		},
		methods: {
			go() {
				this.$router.push('/mysupermap');
			},
			logout(){
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					type: 'warning'
				}).then(() => {
					window.localStorage.removeItem('demo-token');
					_this.$router.push('/login');
				}).catch(() => {

				});
				
				
			}
		},
		
	}
</script>

<style scoped>
	.ma {
		height: 100px;
		background-color: #20A0FF;
	}
	
	#gn {
		letter-spacing: 20px;
		position: absolute;
		margin-left: 70%;
	}
	
	.el-row {
		margin-bottom:0;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #D3DCE6;
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
	
	.item {
		margin-left: 15%;
		margin-top: 10px;
	
	}
</style>