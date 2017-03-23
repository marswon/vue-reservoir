<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<h1>{{title}}</h1>
		</div>
		<div class="text item">
			<h3>{{date}}</h3>
			<h5>{{temp}}
				<b>℃</b>
			</h5>
			<h5>{{minw}}<b>℃</b>~{{maxw}}<b>℃</b></h5>
		</div>
	</el-card>
</template>

<script>
	import weather from 'yahoo-weather'
	export default {
		data() {
			return {
				date:'',
				title:'',
				minw: '',
				maxw: '',
				temp: ''
			}
		},
		methods: {
			getWeather() {

				weather('663000').then((info) => {
					//	alert(info.wind.chill);
					//	alert(info.item.condition.temp);
					this.title=info.title;
					this.temp = info.item.condition.temp;
					this.date=info.lastBuildDate;
					var fo = info.item.forecast;
					//	alert(fo[0].high);
					this.minw = fo[0].low;
					this.maxw = fo[0].high;
					console.log(info);

				}).catch(err => {
					alert("fail");
				});

			}

		},
		mounted(){
			this.getWeather();
		}

	}
</script>

<style>
	.text {
		font-size: 14px;
	}
	
	.item {
		padding: 18px 0;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.box-card {
		margin-left: 25%;
		text-align: center;
		width: 480px;
		height: 600px;
		background-image: url(../assets/kunming.jpg);
	}
</style>