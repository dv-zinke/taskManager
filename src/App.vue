<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import NavBar from "./components/NavBar";
  export default {
    components: {NavBar}
  }
</script>
