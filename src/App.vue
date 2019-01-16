<template>
  <div id="app">
    <NavMenu />
    <div>
      <router-view></router-view>  
    </div> 
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
export default {
  name: "app",
  components: {
    NavMenu
  }
};
</script>
