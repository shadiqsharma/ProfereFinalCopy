<template>
  <mdb-container>
    <div class="mb-4 pb-4">
      <div class="section">
        <div class="row">
          <div class="col-12 mb-4">
            <h3 class="text-center">{{homepage.s2title1}}</h3>
          </div>
          <div class="col-lg-4">
            <div class="card card-cascade card-cascade-wider mb-5">
              <img
                class="card-img-top"
                src="https://picsum.photos/id/252/6400/4200.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{homepage.s2cardTitle1}}</h5>
                <p class="card-text">
                  {{homepage.s2cardBody1}}
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-cascade card-cascade-narrower mb-5">
              <img
                class="card-img-top"
                src="https://picsum.photos/id/363/4802/3202.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{homepage.s2cardTitle2}}</h5>
                <p class="card-text">
                  {{ homepage.s2cardBody2}}
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-cascade mb-5">
              <img
                class="card-img-top"
                src="https://picsum.photos/id/618/2509/1673.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{homepage.s2cardTitle3}}</h5>
                <p class="card-text">
                  {{homepage.s2cardBody3}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </mdb-container>
</template>
<script>
import { Query } from '../graphql/s2Query'

import {
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
  mdbIcon,
} from "mdbvue";
export default {
  name: "HeroSection",
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
    mdbIcon,
  },
  data(){
    return{
      homepage:[],
    }
  },
  apollo:{
    homepage:{
      prefetched: true,
      query: Query,
    }
  }
};
</script>
<style lang="scss" scoped>
.mdb-card {
  border-radius: 20px;
}

$card-border-radius: 0.25rem;

body {
  font-family: "roboto", sans-serif;
  background-color: #fefefe;
}

p {
  opacity: 0.9;
  font-size: 0.9rem;
}

.card {
  background-color: white;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);

  .card-title {
    font-weight: 400;
    font-size: 1.6rem;
  }

  .card-subtitle {
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.5;
  }

  // Cascading Cards
  &.card-cascade {
    i {
      border-radius: 20%;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);

      img {
        width: 100%;
      }
    }

    [class*="card-img-"] {
      border-radius: $card-border-radius;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
    }

    // wider cascading cards
    &.card-cascade-wider {
      i {
        transform: scale(1.07);
        margin-bottom: 0.8rem;
      }
    }

    // Narrower cascading Cards
    &.card-cascade-narrower {
      i {
        transform: scale(0.92) translateY(-1.8rem);
        margin-bottom: -1rem;
      }
    }
  }

  .card-img-overlay {
    overflow: hidden;
    border-radius: $card-border-radius;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
    background-color: rgba(20, 20, 20, 0.5);
  }
}
</style>
