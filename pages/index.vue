<template>
    <div class="app">

      <TheHeader></TheHeader>

      <OffCanvasMobileMenu />

      <SearchPopup/>

      <HeroFixedBanner></HeroFixedBanner>

      <HeroSection></HeroSection>

      <special/>

      <AboutTwo></AboutTwo>

        <partners ></partners>



        <HowWeDoIt></HowWeDoIt>

      <BlogSectionOne />


        <Newsletter />

        <CallToActionOne />



    </div>
</template>

<script>
    import HeroFixedBanner from "../components/HeroFixedBanner";
    import HeroSection from "../components/HeroSection";
    import FunFcat from "../components/FunFcat";
    import Cards from "../components/cards";

    export default {
        components: {
          Cards,
          FunFcat,
          HeroSection,
          HeroFixedBanner,

            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroSliderOne: () => import('@/components/HeroSliderOne'),
            AboutOne: () => import('@/components/AboutOne'),
            FeatureOne: () => import('@/components/FeatureOne'),
            SuccessStory: () => import('@/components/SuccessStory'),
            PortfolioGallery: () => import('@/components/PortfolioGallery'),
            BlogSectionOne: () => import('@/components/BlogSectionOne'),
            Newsletter: () => import('@/components/Newsletter'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            TheFooter: () => import('@/components/TheFooter'),
            SkillWithVideo: () => import('@/components/SkillWithVideo'),
            CallToActionVideo: () => import('@/components/CallToActionVideo'),
            HowWeDoIt: () => import('@/components/HowWeDoIt'),
            CardCascade: () => import('@/components/CardCascade'),
            partners: () => import('@/components/partners'),
            formsPage: () => import('@/pages/home-three'),
            FunfactWithTitle:() => import('@/components/FunfactWithTitle'),
            HeroSliderTwo: () => import('@/components/HeroSliderTwo'),
            FaqOne:() => import('@/components/FaqOne'),
            AboutTwo: () => import('@/components/AboutTwo'),

            special: () => import('@/components/special'),



        },

        head() {
            return {
                title: 'Profere Property Management Done Right!'
            }
        },
      data() {
        return {
          videos: [
            {
              src: 'https://www.youtube.com/watch?v=eS9Qm4AOOBY'
            }
          ],

        }
      },


    };
</script>


<style>

</style>
