import {mapMutations, mapGetters} from 'vuex'
import {
    LOGOUT,
    SWITCH_FILTER_SHOWS,
    THEME_CHANGE
} from '../../store/mutation-types.js'
export default {
    data(){
      return{
          theme:['dark-theme','white-theme'],
          changeTheme:''
      }
    },
    computed:{
        ...mapGetters({
            isAuthentificated: 'auth/isAuthentificated',
            showFilter: 'catalog/switchFilterShows',
            catalogPage: 'system/catalogPage',
            activeTheme: 'system/activeTheme',
        }),
    },
    created(){
        this.changeTheme  = this.activeTheme;
    },
    methods:{
        ...mapMutations({
            changeActiveTheme: `system/${THEME_CHANGE}`,
            logout: `auth/${LOGOUT}`,
            filterOpen:`catalog/${SWITCH_FILTER_SHOWS}`
        }),
        logoutUser(){
            this.logout();
            this.$router.push({name:'auth'});
        },
        themeChange(){
            this.changeActiveTheme(this.changeTheme)
        }
    }

}