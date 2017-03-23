<template>
	<div class="hello">

		<el-row>
			<el-col :span="16">
				<div class="grid-content bg-purple-light">
					<bd-map></bd-map>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light">
					<el-row>
						<div class="grid-content bg-purple-dark">
							<el-button  @click="backgo" type="info">
								<i class="fa fa-share fa-3x" style="color: darkslategrey;"></i>
							</el-button>
							<div id="gn">
								<i class="el-icon-time"></i>
								<i class="el-icon-setting"></i>
								<i class="el-icon-plus"></i>
							</div>
						</div>
					</el-row>
					<el-row>
						<h3>图示信息</h3>
					</el-row>
					<el-row>
						<el-card>
							<el-row v-for="item in items">
								<el-col :span="12">{{item.name}}</el-col>
								<el-col :span="12">
									
										<el-switch v-model="item.kg" on-color="#13ce66" off-color="#ff4949" >
										</el-switch>
									
								</el-col>
							</el-row>
						</el-card>
					</el-row>
					<el-row>
						<h3>...</h3>
					</el-row>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import BdMap from '../page/BdMap.vue'
	export default {
		data() {
			return {
				items: [{
					name: '水情信息',
					kg: true
				}, {
					name: '雨情信息',
					kg: false
				}, {
					name: '大坝监控',
					kg: false
				}, {
					name: '闸控信息',
					kg: true
				}]
			}
		},
		components: {
			BdMap
		},
		methods: {
			backgo() {
				this.$router.push('/first');
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#gn {
		position: absolute;
		margin-left: 70%;
		margin-top: 4%;
	}
	
	.el-row {
		margin-bottom: 20px;
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