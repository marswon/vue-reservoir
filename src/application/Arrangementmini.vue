<template>
<div id="myc" style="height: 200px;width: 220px;"></div>
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
			var mychart=echarts.init(document.getElementById('myc'));
			mychart.setOption({
				  title:{
        text:'布置',
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
        {	show:false,
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {	show:false,
            type : 'value'
        }
    ],
    series : [
        {
            name:'成交',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[10, 12, 21, 54, 260, 830, 710]
        },
        {
            name:'预购',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[30, 182, 434, 791, 390, 30, 10]
        },
        {
            name:'意向',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[1320, 1132, 601, 234, 120, 90, 20]
        }
    ]
			});
		}
	},
	mounted(){
		this.myCanvas();
	}
}
</script>

<style>
</style>