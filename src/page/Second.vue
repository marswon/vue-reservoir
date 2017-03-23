<template>
	<el-row>
		<el-col :span="18">
			<el-row class="grid-content bg-purple ">
				<el-col :span="10">
					<h4>水库</h4>
				</el-col>
				<el-col :span="14">
					<h4>专题应用</h4>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="10">
					<span class="grid-content bg-purple-dark">
						<el-table :data="dataTable" border>
							<!--
                            	作者：offline
                            	时间：2017-03-09
                            	描述：展开功能的实现
                            -->
							<!--<el-table-column type="expand">	
      <template scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="">
            <span>{{ props.row.Dam }}</span>

					</el-form-item>
					</el-form>
</template>
</el-table-column>-->

<el-table-column label="水库名称">
	<template scope="scope">
		<!--
                                    	作者：offline
                                    	时间：2017-03-09
                                    	描述：通过图标查看联系人信息
                                    -->
		<el-popover trigger="hover" placement="top">
			<h4>电话: {{ scope.row.iphone }}</h4>
			<h4>住址：{{scope.row.address }}</h4>
			<span slot="reference" class="name-wrapper">
											<el-icon name="time"></el-icon>
										</span>
		</el-popover>
		<span style="margin-left: 10px">{{scope.row.reservoir}}({{scope.row.dt}})</span>
	</template>
</el-table-column>
<el-table-column label="通讯功能">
	<template scope="scope">

		<el-col :span="12">
			<i class="fa fa-video-camera" @click="dialogFormVisible1 = true"></i>
			<el-dialog title="大坝工情信息" v-model="dialogFormVisible1">
				<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../static/logo.png" class="image">
      <div style="padding: 14px;">
        <span>myvideo</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
			</el-dialog>
		</el-col>
		<el-col :span="12">
			<i class="fa fa-address-book" @click="dialogFormVisible = true"></i>
			<el-dialog title="联系人信息" v-model="dialogFormVisible">
				<el-form label-position="left" inline class="demo-table-expand">
					<el-form-item label="电    话">
						<span>{{ scope.row.iphone }}</span>

					</el-form-item>
				</el-form>
			</el-dialog>
		</el-col>

	</template>

</el-table-column>

</el-table>
</div>
</el-col>
<el-col :span="14">
	<div>
		<el-row>
			<el-col :span="8" class="apply">
				<div @click="dialogVisible = true">
					<water-mini></water-mini>
				</div>
				<!--
                    	作者：offline
                    	时间：2017-03-09
                    	描述：使用模态框查看完整信息
                    -->
				<el-dialog title="提示" v-model="dialogVisible" size="large">
					<third></third>
					<span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
				</el-dialog>
			</el-col>
			<el-col :span="8" class="apply">
				<rain-mini></rain-mini>
			</el-col>
			<el-col :span="8" class="apply">
				
				
				<div @click="dialogVisibles = true">
					<weather-mini></weather-mini>
				</div>
				<!--
                    	作者：offline
                    	时间：2017-03-09
                    	描述：使用模态框查看完整信息
                    -->
				<el-dialog title="天气" v-model="dialogVisibles" size="small">
					<weather></weather>
					<span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibles = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisibles = false">确 定</el-button>
  </span>
				</el-dialog>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="8" class="apply">
				<flow-mini></flow-mini>
			</el-col>
			<el-col :span="8" class="apply">
				<arrangement-mini></arrangement-mini>
			</el-col>
			<el-col :span="8" class="apply">
				<presentation-mini></presentation-mini>
			</el-col>
		</el-row>
	</div>
</el-col>
</el-row>
</el-col>
<el-col :span="6">
	<div class="grid-content bg-purple-light">
		<div>
			<p><i class="el-icon-menu"></i>水情日志</p>
			<el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
			</el-input>
			<i class="fa fa-download"></i>
		</div>
		<el-card>
			<regimen></regimen>
		</el-card>
	</div>
</el-col>
</el-row>
</template>

<script>
	import Regimen from './regimen.vue'
	import WaterMini from '../application/Watermini.vue'
	import Water from '../infomation/Water.vue'
	import RainMini from '../application/Rainmini.vue'
	import WeatherMini from '../application/Weathermini.vue'
	import FlowMini from '../application/Flowmini.vue'
	import ArrangementMini from '../application/Arrangementmini.vue'
	import PresentationMini from '../application/Presentationmini.vue'
	import Third from './Third.vue'
	import Weather from '../infomation/Weather.vue'
	export default {
		data() {
			return {
				dialogFormVisible: false,
				dialogFormVisible1:false,
				dialogVisible: false,
				dialogVisibles: false,
				showTime: false,
				restaurants: [],
				state2: '',
				dataTable: [{
					id: 'WS001',
					dt: '220/300',
					iphone: '18314562311',
					reservoir: '文山水库',
					Dam: '大坝',
					address:'昆明'
				}, {
					id: 'LC002',
					dt: '180/321',
					iphone: '18245662311',
					reservoir: '临沧水库',
					Dam: '小坝',
					address:'文山'
				}],
			}
		},
		components: {
			Regimen,
			WaterMini,
			Water,
			RainMini,
			WeatherMini,
			FlowMini,
			ArrangementMini,
			PresentationMini,
			Third,
			Weather
		},
		methods: {
			handleNodeClick(data) {
				alert(this.data);
			},

			/**
			 * 搜索查询
			 * */
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return(restaurant) => {
					return(restaurant.value.indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				return [
					{ "value": "水位上升" },
					{ "value": "水位正常" },
					{ "value": "水位下降"}
				
				]
			},
			handleSelect(item) {
				this.state2=item.value;
				alert(this.state2);
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
		}
	}
</script>

<style scoped>
	.apply {
		margin: 0;
		padding: 0;
		width: 220px;
		height: 200px;
		overflow: hidden;
	}
	
	.tx {
		letter-spacing: 30px;
	}
	
	h4 {
		text-align: center;
	}
	
	p {
		position: absolute;
		margin-top: -30px;
	}
	
	.el-row {
		margin-bottom: 0;
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
	
	.demo-table-expand {
		font-size: 0;
	}
	
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
	

  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>