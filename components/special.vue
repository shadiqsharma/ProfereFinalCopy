<template>
  <client-only>
    <div class="intro-slider">
      <swiper :options="swiperOptions">
        <swiper-slide class="swiper-slide">
          <div class="section-padding-top section-padding-bottom-180">
            <div class="container">
              <div class="row">
                <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                  <div class="about-image-area">
                    <div class="about-image js-tilt">
                      <img src="/images/about/about-3.jpg" alt="image">
                    </div>
                    <div class="about-image js-tilt">
                      <img src="/images/about/about-4.jpg" alt="image">
                    </div>

                    <!-- Animation Shape Start -->
                    <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                  </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                  <div class="about-content-area about-four">
                    <div class="section-title-two">
                      <span class="sub-title">Our solutions begin with brand research</span>
                      <h3 class="title">We’ve worked alongside plenty of brands & startups</h3>
                    </div>
                    <p>Our team of designers and developers are perfectionists who love what they do – we thrive off pushing the boundaries of our clients’ expectations and our own capabilities.</p>
                    <n-link to="/" class="btn btn-primary btn-hover-secondary mt-30">Get Started</n-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-slider-prev swiper-button-prev main-slider-nav">
            <i class="fal fa-angle-left"></i>
          </div>
          <div class="home-slider-next swiper-button-next main-slider-nav">
            <i class="fal fa-angle-right"></i>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="faq-section section-padding-top" :style="{backgroundColor: '#f8faff'}">
            <div class="container">
              <div class="row row-cols-lg-2 row-cols-1">
                <!-- Faq Content Start -->
                <div class="col mb-30">
                  <div class="faq-content">
                    <!-- Section Title Two Start -->
                    <div class="section-title-two">
                      <span class="sub-title">Frequently asked questions</span>
                      <h3 class="title">You’ve got questions and <br> we’ve got answers</h3>
                    </div>
                    <!-- Section Title Two End -->

                    <AccordionStyleOne />
                  </div>
                </div>
                <!-- Faq Content End -->

                <div class="col pl-xl-12">
                  <div class="about-image-area faq-image-area">
                    <div class="about-image right-n50 js-tilt">
                      <img src="/images/faq/faq-2.jpg" alt="image">
                    </div>
                    <div class="about-image js-tilt">
                      <img src="/images/faq/faq-1.jpg" alt="image">
                    </div>
                    <!-- Animation Shape Start -->
                    <ShapeWithAnimation addClassName="shape-1" data-depth="4" imgSrc="/images/shape-animation/video-shape-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-slider-prev swiper-button-prev main-slider-nav">
            <i class="fal fa-angle-left"></i>
          </div>
          <div class="home-slider-next swiper-button-next main-slider-nav">
            <i class="fal fa-angle-right"></i>
          </div>
        </swiper-slide>
      </swiper>

      <!-- pagination class -->
    </div>
  </client-only>
</template>

<script>
import {
  mdbBtn,
  mdbContainer,
  mdbIcon,
  mdbModal,
  mdbModalBody,
  mdbModalFooter,
  mdbModalHeader,
} from "mdbvue";
import CallToActionVideo from "./CallToActionVideo2";

export default {
  components: {
    mdbContainer,
    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    CallToActionVideo,
    AccordionStyleOne: () => import('@/components/AccordionStyleOne'),
    ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
  },
  data() {
    return {
      ytmodal: false,
      swiperOptions: {
        speed: 1000,
        loop: true,
        autoplay: false,
        spaceBetween: 30,
        navigation: {
          nextEl: ".home-slider-next",
          prevEl: ".home-slider-prev",
        },
      },

      sliderData: [
        {
          id: 1,
          heading: "Designing awesome brands & experiences",
          text:
            "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
          bgImgSrc: "https://picsum.photos/1080/1920",
        },
        {
          id: 2,
          heading: "Designing awesome brands & experiences",
          text:
            "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
          bgImgSrc: "/images/hero-image/hero-2.jpg",
        },
      ],
    };
  },
};
</script>
