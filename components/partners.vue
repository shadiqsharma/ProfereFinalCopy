<template>
  <div class="section-padding-t90-b100">
    <div class="container">
  <mdb-container>
    <div class="section-title text-center mb-60" data-aos="fade-up">
      <h2 class="title">People behind the screen</h2>
      <p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p>
    </div>
    <mdb-row>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient1 && 'show']" @click.native="gradient1 = true" v-on-clickaway="away1">

          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://i.picsum.photos/id/1000/5616/3744.jpg?hmac=N5TZKe4gtmf4hU8xRs-zbS4diYiO009Jni7n50609zk)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 blue-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient1">
                    <h3 class="card-title font-weight-bold">Partner 1</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient1">
                    <mdb-icon icon="money-bill" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient1">
                <p class="text-uppercase text-muted">ACCOUNTANT</p>
                <h4 class="font-weight-bold">KL SENTRAL OFFICE</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient1">

              <p class="text-muted">LOREM IPSUM</p>
              <h4 class="text-uppercase font-weight-bold my-4">SPEACIALITY</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient2 && 'show']" @click.native="gradient2 = true" v-on-clickaway="away2">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://i.picsum.photos/id/1048/5616/3744.jpg?hmac=N5TZKe4gtmf4hU8xRs-zbS4diYiO009Jni7n50609zk)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 purple-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient2">
                    <h3 class="card-title font-weight-bold">Partner 2</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient2">
                    <mdb-icon icon="chart-line" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient2">
                <p class="text-uppercase text-muted">partner 3</p>
                <h4 class="font-weight-bold">200</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient2">
              <mdb-progress color="purple" :value="25" />
              <p class="text-muted"></p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient3 && 'show']" @click.native="gradient3 = true" v-on-clickaway="away3">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 peach-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient3">
                    <h3 class="card-title font-weight-bold">Partner 3</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient3">
                    <mdb-icon icon="chart-pie" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient3">
                <p class="text-uppercase text-muted">Dealings</p>
                <h4 class="font-weight-bold">20000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient3">
              <mdb-progress color="amber" :value="75" />
              <p class="text-muted"></p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient4 && 'show']" @click.native="gradient4 = true" v-on-clickaway="away4">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 aqua-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient4">
                    <h3 class="card-title font-weight-bold">Partner 4</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient4">
                    <mdb-icon icon="chart-bar" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient4">
                <p class="text-uppercase text-muted">Lawyer</p>
                <h4 class="font-weight-bold">2000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient4">
              <mdb-progress color="cyan" :value="50" />
              <p class="text-muted"></p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
    </div>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbIcon, mdbView, mdbMask, mdbBtn, mdbTooltip, mdbProgress } from 'mdbvue';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'CardProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbTooltip,
    mdbProgress
  },
  data() {
    return {
      gradient1: false,
      gradient2: false,
      gradient3: false,
      gradient4: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    away1() {
      this.gradient1 = false;
    },
    away2() {
      this.gradient2 = false;
    },
    away3() {
      this.gradient3 = false;
    },
    away4() {
      this.gradient4 = false;
    }
  },
  mixins: [clickaway]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-weight: bold;
}
.collapse {
  transition: height 0.3s;
}
.collapse-item {
  transition: all 0.5s;
}
.gradient-card {
  transition: 0.5s ease-in-out;
}
.gradient-card.show {
  margin-top: 20px;
}
.gradient-card .card-image {
  display: inline-block;
  width: 100%;
  transition: 0.5s ease-in-out;
}
.gradient-card.show .card-image {
  width: 112px;
  height: 112px;
  margin-left: 20px;
  margin-top: -20px;
}
.gradient-card .card-body {
  padding: 0 1.25rem;
}
</style>
