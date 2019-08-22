<template>
    <v-app>
        <headers></headers>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import headers from './components/header/index.vue'
    export default {
        name: 'App',
        data(){
            return{

            }
        },
        components:{
            headers,
        }
    };
</script>
<style src="./assets/style/style.scss" lang="scss"></style>
