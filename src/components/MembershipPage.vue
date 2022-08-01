<template>
  <main>
    <h1>h.h Membership</h1>
    <a
      href="https://membership.hhacker.space"
      class="box primary">
      ~ Buy a Monthly Subscription ~
    </a>
    <div class="table">
      <a
        href="https://docs.google.com/document/d/1l3CDsCe_zyb_0C0pht6DiqpAUETnxGl8E7gCGvtW7kc/edit?usp=sharing"
        class="box half left">
        Membership Info
      </a>
      <a
        href="https://trello.com/b/it8auoJj/hedron-hackerspace"
        class="box half">
        Volunteering and Wishlist
      </a>
      <a
        href="https://docs.google.com/spreadsheets/d/1ek1TD5_b3T5c9AKcOt6cdKx2wKrkv_jVnbovPsvvtsY/edit?usp=sharing"
        class="box half left">
        Prices
      </a>
      <a
        href="https://www.etsy.com/shop/HedronHackerspace"
        class="box half">
        Support us on Etsy
      </a>
      <a
        href="https://drive.google.com/open?id=11TBfFzgVBX-4quV9uxHzIntFrgItW8HP"
        class="box half left">
        Docs and Info
      </a>
      <a
        href="https://www.paypal.com/biz/fund?id=5DN2LXUAM638Q"
        class="box half">
        Donate
      </a>
    </div>
    <br>
    <h2>-</h2>
    <br>
    <contact-footer />
  </main>
</template>

<script>
  import ContactFooter from "./ContactFooter"

  export default {
    name: "MembershipPage",
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

.table {
  width: 100%;
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
}

.box.primary {
  border: double 4px #00ffff;
}

.box.half {
  width: calc(50% - 2rem);
  flex-basis: auto;
}

.box.half.left {
  margin-right: 4rem;
}

@media only screen and (max-width: 1000px) {
}

@media only screen and (max-width: 800px) {
  .box {
    margin-bottom: 0;
    padding: 1rem;
    font-weight: 400;
  }

  .box.half {
    width: calc(50% - 1rem);
  }

.box.half.left {
  margin-right: 2rem;
}


}
</style>
