<template>
  <div class="section-padding-t90 section-padding-bottom-200">
    <div class="container shadow-new">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title">We are a full-service creative agency</h2>
        <p class="sub-title">Our team of designers, developers and creatives are perfectionists who love what they do and love</p>
      </div>
      <mdb-container>
      <mdb-row class="row gx-3 justify-content-evenly">
        <mdb-col class="col-lg-4 col-md-12">
          <mdb-card class="wide">
            <mdb-view class="hover cascade">
              <a href="#!">
                <mdb-card-image src="https://i.picsum.photos/id/1048/5616/3744.jpg?hmac=N5TZKe4gtmf4hU8xRs-zbS4diYiO009Jni7n50609zk" alt="Card image"></mdb-card-image>
                <mdb-mask class="flex-center waves overlay=white-slight"></mdb-mask>
              </a>
            </mdb-view>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      </mdb-container>
<!--      <mdb-container class="margin-top 1">
        <mdb-row>
          <mdb-col sm="4">
            <mdb-card wide>
              <mdb-view hover cascade>
                <a href="#!">

                </a>
              </mdb-view>
              <mdb-card-body class="text-center" cascade>
                <mdb-card-title><strong>Alison Belmont</strong></mdb-card-title>
                <h5 class="blue-text"><strong>Graffiti Artist</strong></h5>
                <mdb-card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</mdb-card-text>

              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col sm="4">
            <mdb-card narrow>
              <mdb-view hover cascade>
                <a href="#!">

                </a>
              </mdb-view>
              <mdb-card-body cascade >
                <h5 class="pink-text pb-2 pt-1"><mdb-icon icon="utensils" /> Culinary</h5>
                <mdb-card-title><strong>Cheat day inspirations</strong></mdb-card-title>
                <mdb-card-text>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</mdb-card-text>

              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col sm="4">
            <mdb-card cascade>
              <mdb-view hover cascade>
                <a href="#!">

                </a>
              </mdb-view>
              <mdb-card-body class="text-center" cascade>
                <mdb-card-title><strong>Billy Cullen</strong></mdb-card-title>
                <h5>Web developer</h5>
                <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam.</mdb-card-text>

              </mdb-card-body>
            </mdb-card>


            &lt;!&ndash;  New Section      &ndash;&gt;


          </mdb-col>
        </mdb-row>
      </mdb-container>-->
      <!-- Section Title End -->

      <!-- About Wrapper Start -->

      <!-- About Wrapper End -->
    </div>
  </div>

<!--
CardCascade -->


</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
export default {
  name: 'CardProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon
  }
}
</script>


<style lang="scss">
@import '../node_modules/mdbvue/lib/mdbvue.css';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');




  .mdb-card-image{
    margin: 30px auto;
    width: 300px;
    height: 300px;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
    cursor: pointer;
    transition: 0.4s;


  }


  .a {
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }


  .mdb-card-title{

  }
</style>
