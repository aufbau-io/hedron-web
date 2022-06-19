<template>
  <div class="main">
    <three-cubes class="three" />
    <span id="fade">
      <landing-page
        v-if="page=='hedron'"
        class="body" />
      <membership-page
        v-if="page=='membership'"
        class="body" />
      <gallery-page
        v-if="page=='gallery'"
        class="body" />
    </span>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex"
  import ThreeCubes from "./ThreeCubes"
  import LandingPage from "./LandingPage"
  import MembershipPage from "./MembershipPage"
  import GalleryPage from "./GalleryPage"

  export default {
    name: "HomePage",
    components: {
      ThreeCubes,
      LandingPage,
      MembershipPage,
      GalleryPage
    },
    computed: {
      ...mapGetters(["page"])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.three {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-left: #1b1c1d solid 1px;
}

.body {
  position: absolute;
  height: 87%;
  width: 80%;
  max-width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-53%);

  padding: 6rem 8rem;
  background: #0b0c0dee;
  border: solid 1px #00ffff99;
  border-radius: 6px;

  overflow-y: auto;
  overflow-x: hidden;
  
}

#fade {
  opacity: 0;
  animation: fadeIn 1.2s ease 7.8s;
  animation-fill-mode: forwards;
}


@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}


@media only screen and (max-width: 1000px) {
}

@media only screen and (max-width: 800px) {

  .body {
    padding: 2rem 2rem;
  }

  .menu__row {
    color: red;
  }

  .menu {
    width: 100vw;
  }
}
</style>
