import {mapMutations, mapGetters} from 'vuex'
import {
    LOGOUT
} from '../../store/mutation-types.js'
export default {
    computed:{
        ...mapGetters({
            isAuthentificated: 'auth/isAuthentificated',
        }),
    },
    methods:{
        ...mapMutations({
            logout: `auth/${LOGOUT}`
        }),
        logoutUser(){
            this.logout();
            this.$router.push({name:'auth'});
        }
    }

}