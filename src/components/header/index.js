import {mapMutations, mapGetters} from 'vuex'
import {
    LOGOUT,
    SWITCH_FILTER_SHOWS
} from '../../store/mutation-types.js'
export default {
    computed:{
        ...mapGetters({
            isAuthentificated: 'auth/isAuthentificated',
            showFilter: 'catalog/switchFilterShows',
            catalogPage: 'system/catalogPage',
        }),
    },
    methods:{
        ...mapMutations({
            logout: `auth/${LOGOUT}`,
            filterOpen:`catalog/${SWITCH_FILTER_SHOWS}`
        }),
        logoutUser(){
            this.logout();
            this.$router.push({name:'auth'});
        }
    }

}