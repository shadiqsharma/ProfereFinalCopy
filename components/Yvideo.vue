<template>
  <div>
  <mdb-row center>
    <mdb-btn color="primary" @click.native="ytmodal=true">YouTube Modal</mdb-btn>
    <mdb-btn color="default" @click.native="vmmodal=true">Vimeo Modal</mdb-btn>
    <mdb-btn color="secondary" @click.native="gmmodal=true">Google Maps Modal</mdb-btn>
  </mdb-row>
  <mdb-modal :show="ytmodal" @close="ytmodal=false">
    <mdb-modal-body class="p-0">
      <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U" allowfullscreen></iframe>
      </div>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <span class="mr-4">Spread the word!</span>
      <mdb-btn tag="a" floating size="sm" class="btn-fb">
        <mdb-icon fab icon="facebook"/>
      </mdb-btn>
      <mdb-btn tag="a" floating size="sm" class="btn-tw">
        <mdb-icon fab icon="twitter"/>
      </mdb-btn>
      <mdb-btn tag="a" floating size="sm" class="btn-gplus">
        <mdb-icon fab icon="google-plus"/>
      </mdb-btn>
      <mdb-btn tag="a" floating size="sm" class="btn-ins">
        <mdb-icon fab icon="linkedin"/>
      </mdb-btn>
      <mdb-btn outline="primary" rounded size="md" @click.native="ytmodal=false" class="ml-4">close</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>

  <mdb-modal :show="vmmodal" @close="vmmodal=false">
    <mdb-modal-body class="p-0">
      <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
        <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/115098447" allowfullscreen></iframe>
      </div>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <span class="mr-4">Spread the word!</span>
      <mdb-btn tag="a" floating size="sm" class="btn-fb">
        <mdb-icon fab icon="facebook"/>
      </mdb-btn>
      <mdb-btn tag="a" floating size="sm" class="btn-tw">
        <mdb-icon fab icon="twitter"/>
      </mdb-btn>
      <mdb-btn tag="a" floating size="sm" class="btn-gplus">
        <fa icon="google-plus"/>
      </mdb-btn>
      <mdb-btn tag="a" floating size="sm" class="btn-ins">
        <mdb-icon fab icon="linkedin"/>
      </mdb-btn>
      <mdb-btn outline="primary" rounded size="md" @click.native="vmmodal=false" class="ml-4">close</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>

  <mdb-modal :show="gmmodal" @close="gmmodal=false" size="lg">
    <mdb-modal-body class="p-0">
      <mdb-google-map
        name="modal"
        class="col-md-12"
        style="height: 400px; position: relative; overflow: hidden"
        :markerCoordinates="coordinates"
        :zoom="14"
        :modal="gmmodal"
        wrapperClass="z-depth-1-half">
      </mdb-google-map>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn color="primary" size="md">Save location<mdb-icon icon="map-marker" class="ml-1"/></mdb-btn>
      <mdb-btn outline="primary" size="md" @click.native="gmmodal=false">close<mdb-icon icon="times" class="ml-1"/></mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>
  </div>
</template>

<script>
import { mdbRow, mdbBtn, mdbModal, mdbModalBody, mdbModalFooter, mdbIcon, mdbGoogleMap } from 'mdbvue';
export default {
  name: "Yvideo",
  components: {
    mdbRow,
    mdbBtn,
    mdbModal,
    mdbModalBody,
    mdbModalFooter,
    mdbIcon,
    mdbGoogleMap
  },
  data() {
    return {
      ytmodal,
      vmmodal,
      gmmodal,

    }
  },
  methods: {
    ytmodal: false,
    
  }
}
</script>

<style scoped>

</style>
