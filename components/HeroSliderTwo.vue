<template>


    <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url('https://picsum.photos/1440/1080')` }">
      <div class="container">
        <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url('https://picsum.photos/1440/1080')` }">
          <div class="container">
            <div class="row row-cols-lg-1 row-cols-1">
              <div class="col-md-8px align-self-center">
                <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                  <h2 class="title">Designing awesome brands & experiences</h2>
                  <div class="desc">
                    <p>We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.</p>
                  </div>


                  <div>
                    <CallToActionVideo/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</template>

<script>
    export default {
        data() {
            return {
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
                        bgImgSrc: "/images/hero-image/hero-3.jpg"
                    },
                    {
                        id: 2,
                        heading: "Designing awesome brands & experiences",
                        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                        bgImgSrc: "/images/hero-image/hero-4.jpg"
                    }
                ]
            }
        },
    };
</script>
