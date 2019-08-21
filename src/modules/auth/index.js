import {mapMutations, mapGetters} from 'vuex';
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
    computed:{
      ...mapGetters({
          authErrorMessage:'auth/authErrorMessage',
          isAuthentificated: 'auth/isAuthentificated'
      })
    },
    methods:{
        ...mapMutations({
            login: `auth/${AUTH_USER}`
        }),
        loginUser(){
            this.login(this.auth)
            if(this.isAuthentificated === true){
                this.$toaster.success(this.authErrorMessage)
                this.$router.push({name:'catalog'})
            }else{
                this.$toaster.error(this.authErrorMessage)
            }
        }
    },
}