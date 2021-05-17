<template>
  <mdb-timeline>
    <mdb-timeline-item color="light-blue lighten-4" marker="1">
      <mdb-row>
        <mdb-col sm="12">
          <p className="text-muted mb-2">
            {{ homepage.hwdi_body1 }}
          </p>
        </mdb-col>

      </mdb-row>
      <hr/>

    </mdb-timeline-item>
    <mdb-timeline-item
      color="light-blue lighten-3"
      inverted
      marker="2"
    >
      <mdb-row>

        <mdb-col sm="12">
          <p className="text-muted mt-2">
            {{ homepage.hwdi_body2 }}
          </p>
        </mdb-col>
      </mdb-row>
      <hr/>

    </mdb-timeline-item>
    <mdb-timeline-item color="light-blue lighten-2" marker="3">
      <mdb-row>
        <mdb-col sm="12">
          <p className="text-muted mb-2">
            {{
              homepage.hwdi_body3
            }}
          </p>
        </mdb-col>

      </mdb-row>
      <hr/>

    </mdb-timeline-item>
    <mdb-timeline-item
      color="light-blue lighten-1"
      inverted
      marker="4"
    >
      <mdb-row>

        <mdb-col sm="12">
          <p className="text-muted mt-2">
            {{ homepage.hwdi_body4 }}
          </p>
        </mdb-col>
      </mdb-row>
      <hr/>

    </mdb-timeline-item>
    <mdb-timeline-item color="light-blue" marker="5">
      <mdb-row>
        <mdb-col sm="12">
          <p className="text-muted mb-2">
            {{
              homepage.hwdi_body5
            }}
          </p>
        </mdb-col>

      </mdb-row>
      <hr/>

    </mdb-timeline-item>
  </mdb-timeline>
</template>
<script>
import { hwdiQuery } from '../graphql/hwdiQuery'
import { mdbRow, mdbCol } from 'mdbvue';
import mdbTimeline from './Timeline'
import mdbTimelineItem from './TimelineItem'

export default {
  name: 'TimelinePage2',
  components: {
    mdbTimeline,
    mdbTimelineItem,
    mdbRow,
    mdbCol
  },
  data(){
    return{
      homepage:[],
    }
  },
  apollo:{
    homepage:{
      prefetch:true,
      query: hwdiQuery,
    },
  }
}

</script>



