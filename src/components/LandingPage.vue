<template>
  <main>
    <h1>Hedron Hackerspace</h1>
    <br>
    <h3>DIY space in SE Portland,<br>looking for new members!</h3>
    <br>
    <h2>-</h2>
    <br>
    <h3>About h.h</h3>
    <br>
    <p>
      We’re an inclusive bunch of makers, hackers and artists, sharing space and equipment. h.h exists to foster community and creativity, with the accessibility of some modern tools such as 3D printers, laser cutters, welders, etc.. We’re a do-ocracy where members and volunteers are encouraged to put forth their energy where they see fit.  Join our discord, or come by during business hours for a tour!
    </p>
    <br>
    <a
      href="https://discord.gg/ZSknb6pw5c"
      class="box">
      Join us on Discord
    </a>
    <a
      href="https://hhacker.space/wiki/"
      class="box">
      Visit our Wiki
    </a>
    <h2>-</h2>
    <br>
    <contact-footer />
  </main>
</template>

<script>
  import ContactFooter from "./ContactFooter"

  export default {
    name: "LandingPage",
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
  position: relative;
}

@media only screen and (max-width: 1000px) {
}

@media only screen and (max-width: 800px) {
}
</style>
