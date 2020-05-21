<template>
  <div class="map">
      <baidu-map 
        class="bm-view" 
        ak="Cz3jRVxsAzXZbIhMrZ4fUBWGPOBQ0GgT" 
        :center="{lat:point.lat,lng:point.lng}" 
        :scroll-wheel-zoom="true"
        :zoom="15" 
        @ready="readyHanlder"
        :dragging="true"
        @click="clickHandle"
        ControlAnchor="BMAP_ANCHOR_TOP_LEFT">
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-city-list anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-city-list>
        <bm-marker :position="{lat:point.lat,lng:point.lng}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
            <!-- <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -90, height: 30}"/> -->
        </bm-marker>
        <bm-transit start="万福新村" end="万绿园" :auto-viewport="true" location="海口"></bm-transit>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'; //定位
import bmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'; // 
import bmMapType from 'vue-baidu-map/components/controls/MapType.vue'; // 
import bmCityList from 'vue-baidu-map/components/controls/CityList.vue'; // 
import bmMarker from 'vue-baidu-map/components/overlays/Marker.vue'; // 
import bmLabel from 'vue-baidu-map/components/overlays/Label.vue'; // 
import bmTransit from 'vue-baidu-map/components/search/Transit.vue'; // 
export default {
  components: {
    BaiduMap,
    BmGeolocation,
    bmNavigation,
    bmMapType,
    bmCityList,
    bmMarker,
    bmLabel,
    bmTransit
  },
  data(){
        return {
           point: {
               lat: 20.022003,
               lng: 110.331183
           }
        }
  },
  methods: {
      readyHanlder(){
          console.log(111)
      },
      clickHandle(ev){
        this.point = ev.point;
        console.log(this.point)
      }
  }
}
</script>

<style lang="less" scoped>
.map{
    position: relative;
    width: 100%;
    height: 300px;
    .bm-view{
        width: 100%;
        height: 100%;
    }
    .mark{
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
    }
}
</style>