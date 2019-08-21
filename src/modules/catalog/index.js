import {mapActions, mapGetters} from 'vuex';
import {
    CATALOG_LIST
} from '../../store/mutation-types.js'
import {CATALOG_VENDORDS} from "../../store/mutation-types";

export default {
    data(){
        return{
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
    computed:{
        ...mapGetters({
            catalogList: 'catalog/catalogList',
            catalogVendors: 'catalog/catalogVendors',
        })
    },
    created(){
        this.fetchCatalogList();
        this.fetchCatalogVendors();
    },
    methods:{

        ...mapActions({
            fetchCatalogList:`catalog/${CATALOG_LIST}`,
            fetchCatalogVendors:`catalog/${CATALOG_VENDORDS}`,
        })
    }
}