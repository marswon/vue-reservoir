<template>
<div id="water" style="height: 400px;width: 600px;"></div>
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
			var mychart=echarts.init(document.getElementById('water'));
			mychart.setOption({
				  title : {
        text:'水情',
        x:'center',
        y:'bottom',
        textAlign:'left'
        
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['意向','预购','成交']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
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