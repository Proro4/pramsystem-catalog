<template>
    <v-app :class="activeTheme">
        <headers></headers>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'
    import headers from './components/header/index.vue'
    export default {
        name: 'App',
        data(){
            return{
                theme: ''
            }
        },
        components:{
            headers,
        },
        computed:{
            ...mapGetters({
                activeTheme: 'system/activeTheme',
            })
        },
    };
</script>
<style src="./assets/style/style.scss" lang="scss"></style>
