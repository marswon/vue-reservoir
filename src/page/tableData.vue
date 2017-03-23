<template>
    <div id="student">
        <table class="table" border="1" id="mtable">
            <caption>学生信息表</caption>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>体重</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dt in students" class="success">
                    <td>{{dt.id}}</td>
                    <td>{{dt.name}}</td>
                    <td>{{dt.gender}}</td>
                    <td>{{dt.age}}</td>
                    <td>{{dt.weight}}</td>
                    <td>
                        <button @click="edit(data)">编辑</button>
                        <button @click="remove(data)">删除</button>
                    </td>
                </tr>   
            </tbody>
        </table>
       
    </div>
</template>
<script>

export default {
    data(){
        return {
            students:[
        {
        "id":"01",
        "name":"王勇",
        "gender":"男",
        "age":"18",
        "weight":"49"
    },{
        "id":"02",
        "name":"李芳",
        "gender":"女",
        "age":"22",
        "weight":"50"
    },{
        "id":"03",
        "name":"杨紫",
        "gender":"女",
        "age":"19",
        "weight":"52"
    },{
        "id":"04",
        "name":"张力",
        "gender":"男",
        "age":"26",
        "weight":"53"
    },{
        "id":"05",
        "name":"王敏",
        "gender":"男",
        "age":"20",
        "weight":"46"
    },{
        "id":"06",
        "name":"赵薇",
        "gender":"女",
        "age":"28",
        "weight":"47"
    },{
        "id":"07",
        "name":"张勇",
        "gender":"男",
        "age":"18",
        "weight":"45"
    },{
        "id":"08",
        "name":"王芳",
        "gender":"女",
        "age":"22",
        "weight":"46"
    },{
        "id":"09",
        "name":"杨燕",
        "gender":"女",
        "age":"19",
        "weight":"47"
    },{
        "id":"10",
        "name":"张梦",
        "gender":"男",
        "age":"26",
        "weight":"56"
    },{
        "id":"11",
        "name":"王笑",
        "gender":"男",
        "age":"28",
        "weight":"53"
    },{
        "id":"12",
        "name":"赵艳",
        "gender":"女",
        "age":"28",
        "weight":"48"
    },{
        "id":"13",
        "name":"李勇",
        "gender":"男",
        "age":"22",
        "weight":"55"
    },{
        "id":"14",
        "name":"赵芳",
        "gender":"女",
        "age":"22",
        "weight":"50"
    },{
        "id":"15",
        "name":"杨媛",
        "gender":"女",
        "age":"19",
        "weight":"47"
    },{
        "id":"16",
        "name":"陆雪琪",
        "gender":"女",
        "age":"26",
        "weight":"46"
    },{
        "id":"17",
        "name":"张小凡",
        "gender":"男",
        "age":"23",
        weight:"56"
    },{
        "id":"18",
        "name":"田灵儿",
        "gender":"女",
        "age":"28",
        "weight":"48"
    }
    ]
        }
    },
    methods:{
       

        
    },
    mounted(){
         
 /**
    内容：表格分页功能实现
    工具：JQuery中的DataTables插件
 */ 
 
$('#mtable').DataTable( {
    //  dom: 'Bfrtip',
    "dom":'<"toolbar">Blfrtip',
     "sPaginationType": "full_numbers",
       "bPaginate": true, //开关，是否显示分页器 
       "bInfo": true, //开关，是否显示表格的一些信息 
       "bFilter": true, //开关，是否启用客户端过滤器  
       "bDeferRender": false, 
       "bJQueryUI": false, //开关，是否启用JQueryUI风格 
       "bLengthChange": true, //开关，是否显示每页大小的下拉框 
       "bProcessing": true, 
       "bScrollInfinite": false, 
    //    "sScrollY": "800px", //是否开启垂直滚动，以及指定滚动区域大小,可设值：'disabled','2000px' 
       "bSort": true, //开关，是否启用各列具有按列排序的功能 
       "bSortClasses": true, 
       "bStateSave": false, //开关，是否打开客户端状态记录功能。这个数据是记录在cookies中的，打开了这个记录后，即使刷新一次页面，或重新打开浏览器，之前的状态都是保存下来的- ------当值为true时aoColumnDefs不能隐藏列 
    //    "sScrollX": "50%", //是否开启水平滚动，以及指定滚动区域大小,可设值：'disabled','2000%' 
    //    "aaSorting": [[0, "asc"]], 
    //    "aoColumnDefs": [{ "bVisible": false, "aTargets": [0]}],//隐藏列 
        "bAutoWidth": false, //自适应宽度 
        "buttons": [  
                                   {  
                                       'extend': 'excel',  
                                       'text': '导出',//定义导出excel按钮的文字 
                                       'className':'excelbutton',//按钮的class名称
                                       'title':'你好',//文件名
                                       'header':true,//表头是否包含在导出数据中
                                       'footer':false,//表脚是否包含在导出的数据中
                                       'extension':'.xlsx',//文件名后缀
                                       'exportOptions': {  
                                           'modifier': { 
                                           		
                                               'page': 'all',  //current,all选项
                                           }  
                                       }  
                                   }  
                               ],  
        "iDisplayLength": 5,
        "bLengthChange": true, //改变每页显示数据数量
        "lengthMenu": [5,10, 20, 30, -1],
    'language': {  
        'emptyTable': '没有数据',  
        'loadingRecords': '加载中...',  
        'processing': '查询中...',  
        'search': '检索:',  
        'lengthMenu': '每页 _MENU_ 条',  
        'zeroRecords': '没有数据',  
        'paginate': {  
            'first':      '第一页',  
            'last':       '最后一页',  
            'next':       '下一页',  
            'previous':   '上一页'  
        },  
        'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',  
        'infoEmpty': '没有数据',  
        'infoFiltered': '(过滤总件数 _MAX_ 条)' ,
        'data':'data' 
    }   //多语言配置 
    
} ); 
// $("div.toolbar").html('<b style="color:red">自定义文字、图片等等</b>');
//
	  }
}

</script>
<style>
    thead{
       background: #32CD32;
    }
    .exportss{
    	
        background: blue;
    }
</style>