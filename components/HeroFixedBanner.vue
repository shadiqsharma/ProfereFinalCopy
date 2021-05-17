<!--suppress ALL -->
<template>
  <div>
    <mdb-view>
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row class="row justify-content-center">
            <div
              class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 text-xs-left"
            >
              <h1 class="h1-responsive font-weight-bold mt-sm-5 white-text text pt-md-5">
                {{homepage.s1title2}}
              </h1>
              <hr class="hr-light" />
              <h6 class="mb-4 white-text text">
                {{homepage.s1_title1}}
              </h6>
            </div>
            <mdb-col md="6" xl="5" class="mt-xl-5 pt-md-5 pt-lg-5">
              <CallToActionVideo2 class="pt-lg-5" />
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
    <!--/.ViewWrapper-->
    <mdb-container>
      <mdb-row class="py-5">
        <col md="12" class="text-center" />
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {homeQuery} from '../graphql/query'
import { mdbCol, mdbContainer, mdbMask, mdbRow, mdbView } from "mdbvue";

export default {
  name: "AppPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
  },
  data(){
    return{
      homepage:[],
    }
  },
  apollo:{
    homepage:{
      prefetch: true,
      query: homeQuery,
    }
  }
};
</script>
<style scoped>
.navbar {
  transition: 1s;
}
.navbar .md-form {
  margin: 0;
}
.top-nav-collapse {
  background-color: #424f95 !important;
}
@media (max-width: 375px) {
  .navbar {
    background-color: #424f95 !important;
  }
}
.view {
  background-image: url("https://mdbcdn.b-cdn.net/img/Photos/Others/architecture.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 60px);
}
.gradient {
  background: -moz-linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
  background: -webkit-gradient(
    linear,
    45deg,
    from(rgba(42, 27, 161, 0.7)),
    to(rgba(29, 210, 177, 0.7))
  );
  background: -o-linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
}
h6 {
  line-height: 1.7;
}
.title {
  position: relative;
  bottom: 300px;
}
</style>

<!--


<template>
  <div class="intro-section overlay bg-cover" style="background:url('https://picsum.photos/3000/2000');">
      <div class="container">
        <div class="row">
          <div class="col text-white text-wrap text-danger">
            <h1 class="title">Designing awesome brands & experiences</h1>

           <br/>
            <br/>
            <p class="desc font-weight-bold">We are an agency located in New York. We think strategy,
              craft design, develop digital and create motion.
              To forward your brand and business.</p>
          </div>


          <p class="desc"></p>
          <div class="col ">
            <br/>
            <br/>
            <CallToActionVideo2 />
          </div>
        </div>
        <div class="home-slider-prev swiper-button-prev main-slider-nav">
          <i class="fal fa-angle-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next main-slider-nav">
          <i class="fal fa-angle-right"></i>
        </div>
    </div>
  </div>
</template> -->

<!--<script>
import CallToActionVideo2 from "./CallToActionVideo2";
export default {
  name: "HeroSection",
  components: {CallToActionVideo2},
  data() {
    return{
      bgImgSrc: "https://picsum.photos/1440/1080",
    }
  }
}
</script>-->

<!--<style scoped>

.title{
  color: white;
  font-weight: bold;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>-->
