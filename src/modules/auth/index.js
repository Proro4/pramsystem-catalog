import {mapMutations} from 'vuex';
import {
    AUTH_USER
} from '../../store/mutation-types.js'
export default {
    data () {
        return {
            auth: {
                name: '',
                password:''
            }
        }
    },
    methods:{
        ...mapMutations({
            login: `auth/${AUTH_USER}`
        }),
        loginUser(){
            this.login(this.auth);
        }
    },
}