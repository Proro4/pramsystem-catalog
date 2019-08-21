<template>
  <v-app>
      <div class="header">
          <router-link :to="{name:'auth'}">auth</router-link>
      </div>
      <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
      return{

      }
  }
};
</script>
<style src="./assets/style/style.scss" lang="scss"></style>
