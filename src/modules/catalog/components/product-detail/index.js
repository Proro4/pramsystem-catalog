import {mapGetters, mapActions} from 'vuex';
import {
    PRODUCT_DETAIL
} from "../../../../store/mutation-types.js";

export default {
    data(){
        return{
            currentList: this.$router.currentRoute.params.id,
        }
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