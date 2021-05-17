<template>
    <div>
      <the-header></the-header>
      <OffCanvasMobileMenu />

      <SearchPopup />
      <Nuxt />
      <Footer/>
    </div>
</template>


<script>
import Footer from '../components/Footer'
import TheHeader from "../components/TheHeader";
import SearchPopup from "../components/SearchPopup";
import OffCanvasMobileMenu from '../components/OffCanvasMobileMenu';
export default{
  components:{
    Footer,
    TheHeader,
    SearchPopup,
    OffCanvasMobileMenu
  }
}
</script>


