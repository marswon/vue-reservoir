<template>
	<div >
		<input type="button" @click="backMain" value="回到主页" />
		<div id="map" style="position:absolute;left:0px;right:0px;height:800px;">
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			backMain(){
				this.$router.push('/first');
			},

			getMap() {
				//声明变量map、layer、url
				var map, layer, vectorLayer,
					url = "http://localhost:8090/iserver/services/map-baidu/rest/maps/normal";
				//创建地图控件

				map = new SuperMap.Map("map");
				//创建分块动态REST图层，该图层显示iserver 8C 服务发布的地图,
				//其中"world"为图层名称，url图层的服务地址，{transparent: true}设置到url的可选参数
				layer = new SuperMap.Layer.TiledDynamicRESTLayer("World", url,
					null, { maxResolution: "auto" });
				layer.events.on({ "layerInitialized": addLayer });
				vectorLayer = new SuperMap.Layer.Vector();

				function addLayer() {
					//将Layer图层加载到Map对象上
					map.addLayers([layer, vectorLayer]);
					//出图，map.setCenter函数显示地图
					map.setCenter(new SuperMap.LonLat(0, 0), 0);
					addFeature();
				}

				function addFeature() {
					var point = new SuperMap.Geometry.Point(0, 0);
					var pointVector = new SuperMap.Feature.Vector(point);
					pointVector.style = { fillColor: "red", strokeColor: "yellow", pointRadius: 6 };

					//添加矢量图形覆盖物
					vectorLayer.addFeatures(pointVector);
				}

			}
		},
		mounted() {
			this.getMap();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>