<template>
    <div id="bdmap" style="width:100%;height:820px;border:1px solid gray;font-size:12px"></div>
</template>
<script>
export default{
    mounted(){
        var map = new BMap.Map("bdmap", {mapType:BMAP_PERSPECTIVE_MAP});
var point = new BMap.Point(113.403, 23.070);
map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
map.centerAndZoom(point,18);
map.enableScrollWheelZoom(true);
map.addControl(new BMap.MapTypeControl()); 

var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
  });
  map.addControl(navigationControl);
  // 添加定位控件
//var geolocationControl = new BMap.GeolocationControl();
//geolocationControl.addEventListener("locationSuccess", function(e){
//  // 定位成功事件
//  var address = '';
//  address += e.addressComponent.province;
//  address += e.addressComponent.city;
//  address += e.addressComponent.district;
//  address += e.addressComponent.street;
//  address += e.addressComponent.streetNumber;
//  alert("当前定位地址为：" + address);
//});
//geolocationControl.addEventListener("locationError",function(e){
//  // 定位失败事件
//  alert(e.message);
//});
//map.addControl(geolocationControl);
    }
}



</script>