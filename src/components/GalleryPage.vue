<template>
  <main>
    <h1>h.h Gallery</h1>
    <br>
    <div class="scroll">
      <img
        class="slide"
        src="@/assets/1.jpg">
      <img
        class="slide"
        src="@/assets/2.jpg">
      <img
        class="slide"
        src="@/assets/3.jpg">
      <img
        class="slide"
        src="@/assets/4.jpg">
      <img
        class="slide"
        src="@/assets/5.jpg">
      <br>
      <img
        class="slide"
        src="@/assets/6.jpg">
      <br>
      <img
        class="slide"
        src="@/assets/7.jpg">
      <br>
      <img
        class="slide"
        src="@/assets/8.jpg">
      <br>
      <img
        class="slide"
        src="@/assets/9.jpg">
      <br>
      <img
        class="slide"
        src="@/assets/10.jpg">
    </div>
    <br>
    <contact-footer />
  </main>
</template>

<script>
  import ContactFooter from "./ContactFooter"

  export default {
    name: "GalleryPage",
    components: {
      ContactFooter
    }
  }
</script>

<style scoped>

h1 {
  font-size: 4rem;
}

main {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width:100%;
}

.scroll {
  width:100%;
  height:100%;
  overflow-y: auto;
}

.scroll img {
  width:inherit;
}

@media only screen and (max-width: 1000px) {
}

@media only screen and (max-width: 800px) {
}
</style>
