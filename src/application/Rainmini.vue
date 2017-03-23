<template>
<div id="mycharts" style="height: 200px;width: 220px;"></div>
</template>

<script>
import echarts from 'echarts'
export default{
	data(){
		return{
			
		}
	},
	methods:{
		myCanvas(){
			var mycharts=echarts.init(document.getElementById('mycharts'));
			mycharts.setOption({
				  title:{
        text:'雨情',
        x:'center',
        y:'bottom',
        textAlign:'left'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[]
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {	
        	show:false,
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
        	show:false,
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]	});
		}
	},
	mounted(){
		this.myCanvas();
	}
}
</script>

<style>
</style>