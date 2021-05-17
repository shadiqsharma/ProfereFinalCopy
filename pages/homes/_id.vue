<template>
  <div>

    <div class="row">
      <div class="col-xs-8 px-2">
        <div class="card">
          <b-card-img src="https://res.cloudinary.com/dgsljij3o/image/upload/v1620122419/real-estate-marketing_djljmc.jpg"></b-card-img>
          <div class="card-body flex-grow">
            <h3 class="card-title">{{home.title}}</h3>
            <p class="card-text">{{home.price}}</p>
          </div>
        </div>
      </div>

    </div>
    <div class="wrapperClass">
    <div style="height:450px;width:450px;" ref="map">MAP</div>
    </div>
  </div>
</template>

<script>
import homes from '../../data/homes.json'


export default {
  head(){
    return {
      title: this.homes.title,
      script:[{
        src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDUh8xfGaVXb-dAxyUttk5tEjLqY3zeLYA&libraries=places&callback=initMap",
        hid: "map",
        defer: true,
        skip: process.client && window.mapLoaded
      },{
        innerHTML: "window.initMap = function(){ window.mapLoaded = true}",
        hid: "map-init",
      }],
      meta:[{
        name: 'description',
        content: 'Your Property Management Partner'
      }],

    }
  },
  data(){
    return{
      homes:{}
    }
  },
  mounted(){
    const mapOptions = {
      zoom:18,
      center:new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng),
      disableDefaultUI: true,
      zoomControl:true,
    }
    const map = new window.google.maps.Map(this.$refs.map, mapOptions)
    const position = new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng)
    const marker = new window.google.maps.Marker({ position })
    marker.setMap(map)
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id)
    this.home = home
    }

}
</script>

<style scoped>

</style>
