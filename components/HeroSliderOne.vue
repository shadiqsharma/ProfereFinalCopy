<template>
  <client-only>
    <div class="intro-slider">
        <swiper :options="swiperOptions">
            <swiper-slide class="swiper-slide" v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                    <h2 class="title">{{ banner.heading }}</h2>
                                    <div class="desc">
                                        <p>{{ banner.text }}</p>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </swiper-slide>

        </swiper>

        <!-- pagination class -->

    </div>




  </client-only>


</template>

<script>
import {mdbBtn, mdbContainer, mdbIcon, mdbModal, mdbModalBody, mdbModalFooter, mdbModalHeader} from 'mdbvue';
import CallToActionVideo from "./CallToActionVideo2";


export default {
      components:{
        mdbContainer,
        mdbBtn,
        mdbIcon,
        mdbModal,
        mdbModalHeader,
        mdbModalBody,
        mdbModalFooter,
        CallToActionVideo,
      },
      data() {
            return {
              ytmodal: false,
                swiperOptions: {
                    speed: 1000,
                    loop: true,
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },

                },

                sliderData: [
                    {
                        id: 1,
                        heading: "Designing awesome brands & experiences",
                        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                        bgImgSrc: "https://picsum.photos/1080/1920"
                    },
                    /*{
                        id: 2,
                        heading: "Designing awesome brands & experiences",
                        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                        bgImgSrc: "/images/hero-image/hero-2.jpg"
                    }*/
                ]
            }
        },

    };
</script>
