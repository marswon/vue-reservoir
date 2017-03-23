<template>
	<div class="grid-content bg-purple">
		<el-row>
			<el-col :span="24">
				<el-card>
					<el-date-picker v-model="value1" type="daterange" align="right" @change="getX_x" placeholder="选择日期范围" :picker-options="pickerOptions2">
					</el-date-picker>
					<div class="toggle">
						<el-button @click="getX_d">
							<i class="fa-bar-chart "></i>
						</el-button>
						<el-button @click="getX_w">
							<i class="fa fa-area-chart"></i>
						</el-button>
						<el-button @click="getX_m">
							<i class="fa fa-line-chart"></i>
						</el-button>
					</div>
					<el-col :span="16"><div id="mys"></div></el-col>
					<el-col :span="8"></el-col>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				dataXx: [],
				dataYy: [],
				dy: [],
				texts: '',
				value1: '',
				pickerOptions2: {
					disabledDate(time){
                       return time > Date.now();
                       
               },
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
			}
		},
		methods: {
			getX_d() {
				this.texts = "天";
				this.dataXx = ['00:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
					'13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23.00'
				];
				var time = new Date();
				this.dataYy = [10, 20, 30];
				this.dy = [2, 3, 4];
				this.myCanvas();
			},
			getX_w() {
				this.texts = "周";
				this.dataXx = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
				this.dataYy = [5, 8, 13,11,3,9,10];
				this.dy = [1.3, 6.2, 4,-3,6,-2];
				this.myCanvas();
			},
			getX_m() {
				this.texts = "月";
				var time = new Date();
				alert(time.getMonth() + 1);
				var year=time.getFullYear();
				var months = time.getMonth();
				switch(months) {
					case 0:
					case 2:
					case 4:
					case 6:
					case 7:
					case 9:
					case 11:
						this.dataXx = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
										'21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
						this.dataYy = [5, 8, 13];
						this.dy = [1.3, 6.2, 4];
						break;
					case 3:
					case 5:
					case 8:
					case 10:
						this.dataXx = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
										'21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
						this.dataYy = [5, 8, 13];
						this.dy = [1.3, 6.2, 4];
						break;
					case 1:
						if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
							this.dataXx = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
											'21', '22', '23', '24', '25', '26', '27', '28', '29'];
							this.dataYy = [5, 8, 13];
							this.dy = [1.3, 6.2, 4];
						} else {
							this.dataXx = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
											'21', '22', '23', '24', '25', '26', '27', '28'];
							this.dataYy = [5, 8, 13];
							this.dy = [1.3, 6.2, 4];
						}
						break;
					default:
						alert("非法的月份");
				}
				
				this.myCanvas();
			},
			getX_x(val) {
				this.value1 = val;
				this.texts = "范围";
				alert(this.value1);
					//获取日期间隔之间的所有日期
//				var interval=new Array();
//				var arr=this.value1.split(' ');
//				var a=arr[0];
//				var b=arr[2];
//			
//				function getDate(datestr){
//var temp = datestr.split("-");
//var date = new Date(temp[0],temp[1],temp[2]);
//return date;
//}
//var start = a;
//var end = b;
//var startTime = getDate(start);
//var endTime = getDate(end);
//while((endTime.getTime()-startTime.getTime())>=0){
//var year = startTime.getFullYear();
//var month = startTime.getMonth().toString().length==1?"0"+startTime.getMonth().toString():startTime.getMonth();
//var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
//if(month=="00"){
//	year=year-1;
//	month=12
//}
//
//var i=year+"-"+month+"-"+day;
//interval.push(i);
//startTime.setDate(startTime.getDate()+1);
//
//}
//
//alert(interval);
//		this.dataXx = interval;		
				
				
				this.dataXx=['2017-01-28','2017-01-29','2017-01-30','2017-01-31'];
				this.dataYy = [5, 8, 13];
				this.dy = [1.3, 6.2, 4];
				this.myCanvas();
				this.value1='';
			},

			myCanvas() {
				var dx;
				 dx=this.dataXx;
				var mycharts = echarts.init(document.getElementById('mys'));
			
				mycharts.showLoading({
					text: 'loading',
  color: '#c23531',
  textColor: 'red',
  maskColor: 'rgba(255, 255, 255, 0.8)',
  zlevel: 0
				});
				mycharts.setOption({
					title: {
						text: '流域实时雨情' + '(' + this.texts + ')',
						x: '20%',
						y: 'top',
						textAlign: 'left'
					},
					tooltip: {
						trigger: 'axis',
						
					},
					legend: {
						x:'center',
						y:'bottom',
						data: ['最高气温','最低气温']
					},
					dataZoom : {//实现滑块
        show : true,
        realtime : true,
        //orient: 'vertical',   // 'horizontal'
        //x: 0,
        y: 36,
        //width: 400,
        height: 20,
          backgroundColor: 'rgba(221,160,221,0.5)',
          dataBackgroundColor: 'rgba(138,43,226,0.5)',
          fillerColor: 'rgba(38,143,26,0.6)',
          handleColor: 'rgba(128,43,16,0.8)',
//        xAxisIndex:[],
//        yAxisIndex:[],
        start : 20,
        end : 80
    },
					toolbox: {
						show: true,
						color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
						backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
						borderColor: '#ccc', // 工具箱边框颜色
						borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
						padding: 5,
						x:'60%',
						feature: {
							mark: { show: true },
							dataZoom:{show:true},
							dataView: { show: true, readOnly: false,
//								optionToContent :function(opt){
//									var axisData = opt.xAxis[0].data;
//  var series = opt.series;
//  var table = '<table style="width:100%;text-align:center" border><tbody><tr>'
//               + '<td>时间</td>'
//               + '<td>' + series[0].name + '</td>'
//               + '<td>' + series[1].name + '</td>'
//               + '</tr>';
//  for (var i = 0, l = axisData.length; i < l; i++) {
//      table += '<tr>'
//               + '<td>' + axisData[i] + '</td>'
//               + '<td>' + series[0].data[i] + '</td>'
//               + '<td>' + series[1].data[i] + '</td>'
//               + '</tr>';
//  }
//  table += '</tbody></table>';
//  return table;
//								}
							},
							magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
							restore: { show: true },
							saveAsImage: { show: true },
							myButtons: { //自定义按钮 danielinbiti,这里增加，selfbuttons可以随便取名字    
								show: true, //是否显示    
								title: '自定义', //鼠标移动上去显示的文字    
								icon: 'image://http://localhost:8080/static/logo.png', //图标    
								option: {},
								onclick: function(option1) { //点击事件,这里的option1是chart的option信息    
									//这里可以加入自己的处理代码，切换不同的图形  
									
							
								}
							},
							myTool:{
								show:true,
								title:'扩展',
								icon:'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
								onclick:function(){
									alert("您好！");
								}
							},
						}
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: dx,
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: '最高气温',
							type: 'line',
							data: this.dataYy,
							markPoint: {
								data: [
									{ type: 'max', name: '最大值' },
									{ type: 'min', name: '最小值' }
								]
							},
							markLine: {
								data: [
									{ type: 'average', name: '平均值' }
								]
							}
						},
						{
							name: '最低气温',
							type: 'line',
							data: this.dy,
							markPoint: {
								data: [
									{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
								]
							},
							markLine: {
								data: [
									{ type: 'average', name: '平均值' }
								]
							}
						}
					]
				});
				setTimeout(()=>{
					mycharts.hideLoading();
				},4000);
			}
		},
		mounted() {
			
			this.getX_d();
		}
	}
</script>

<style>
	.toggle {
		z-index: 20;
		position: absolute;
		margin-left: 10%;
	}
	
	#mys {
		height: 600px;
		margin-top: 80px;
	}
	
	.el-row {
		margin-bottom: 0;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		margin: 20px 0 20px 0;
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
</style>