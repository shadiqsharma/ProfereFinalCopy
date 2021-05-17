<template>
  <mdb-timeline>
    <mdb-timeline-item color="light-blue lighten-4" marker="1">
      <mdb-row>
        <mdb-col sm="6">
          <p className="text-muted mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </mdb-col>
        <mdb-col sm="6">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(120).jpg"
          />
        </mdb-col>
      </mdb-row>
      <hr/>
      <p className="text-right text-muted">Italy, 12.06.1998</p>
    </mdb-timeline-item>
    <mdb-timeline-item
      color="light-blue lighten-3"
      inverted
      marker="2"
    >
      <mdb-row>
        <mdb-col sm="6">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(117).jpg"
          />
        </mdb-col>
        <mdb-col sm="6">
          <p className="text-muted mt-2">
            Quam elementum pulvinar etiam non quam lacus. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Ultricies
            lacus sed turpis tincidunt.
          </p>
        </mdb-col>
      </mdb-row>
      <hr/>
      <p className="text-right text-muted">Portugal, 30.11.2012</p>
    </mdb-timeline-item>
    <mdb-timeline-item color="light-blue lighten-2" marker="3">
      <mdb-row>
        <mdb-col sm="6">
          <p className="text-muted mb-2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </mdb-col>
        <mdb-col sm="6">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(114).jpg"
          />
        </mdb-col>
      </mdb-row>
      <hr/>
      <p className="text-right text-muted">Warsaw, 11.03.2015</p>
    </mdb-timeline-item>
    <mdb-timeline-item
      color="light-blue lighten-1"
      inverted
      marker="4"
    >
      <mdb-row>
        <mdb-col sm="6">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(129).jpg"
          />
        </mdb-col>
        <mdb-col sm="6">
          <p className="text-muted mt-2">
            Sollicitudin ac orci phasellus egestas. Risus sed vulputate
            odio ut enim blandit volutpat maecenas volutpat. Dui faucibus
            in ornare quam viverra. Varius vel pharetra vel turpis nunc
            eget lorem dolor. At volutpat diam ut venenatis tellus in
            metus vulputate.
          </p>
        </mdb-col>
      </mdb-row>
      <hr/>
      <p className="text-right text-muted">Warsaw, 19.08.2019</p>
    </mdb-timeline-item>
    <mdb-timeline-item color="light-blue" marker="5">
      <mdb-row>
        <mdb-col sm="6">
          <p className="text-muted mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </mdb-col>
        <mdb-col sm="6">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(127).jpg"
          />
        </mdb-col>
      </mdb-row>
      <hr/>
      <p className="text-right text-muted">Warsaw, 19.08.2019</p>
    </mdb-timeline-item>
  </mdb-timeline>
</template>
<script>
import { mdbRow, mdbCol } from 'mdbvue';
import mdbTimeline from '../components/Timeline'
import mdbTimelineItem from '../components/TimelineItem'

export default {
  name: 'TimelinePage2',
  components: {
    mdbTimeline,
    mdbTimelineItem,
    mdbRow,
    mdbCol
  }
}

</script>
