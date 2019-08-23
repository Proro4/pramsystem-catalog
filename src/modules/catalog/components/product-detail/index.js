import {mapGetters, mapActions} from 'vuex';
import loader from '../../../../components/loader/index.vue'
import {
    PRODUCT_DETAIL
} from "../../../../store/mutation-types.js";

export default {
    data(){
        return{
            currentList: this.$router.currentRoute.params.id,
        }
    },
    components:{
        loader
    },
    created(){
      this.fetchProductDetail(this.currentList);
    },
    computed:{
        ...mapGetters({
            productDetail:'product/productDetail',
        })
    },
    methods:{
        ...mapActions({
            fetchProductDetail: `product/${PRODUCT_DETAIL}`,
        })
    }
}