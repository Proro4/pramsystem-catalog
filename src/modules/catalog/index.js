import {mapActions, mapGetters} from 'vuex';
import loader from '../../components/loader/index.vue'
import _ from 'lodash';
import {
    CATALOG_LIST
} from '../../store/mutation-types.js'
import {CATALOG_VENDORDS} from "../../store/mutation-types";

export default {
    data() {
        return {
            filterOptions: {
                title: '',
                description: '',
                modelNumber: '',
                brand: '',
                upc: '',
                vendor: 'all',
                costFrom: '',
                costTo: '',
                onHandFrom: '',
                onHandTo: '',
                sort:''
            },
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
    components: {
        loader
    },
    computed: {
        ...mapGetters({
            catalogList: 'catalog/catalogList',
            catalogVendors: 'catalog/catalogVendors',
        })
    },
    created() {
        this.fetchCatalogList(this.filterOptions);
        this.fetchCatalogVendors();
    },
    methods: {

        ...mapActions({
            fetchCatalogList: `catalog/${CATALOG_LIST}`,
            fetchCatalogVendors: `catalog/${CATALOG_VENDORDS}`,
        }),
        filterChange: _.debounce(function () {
            console.log(this.filterOptions)
            this.fetchCatalogList(this.filterOptions);
        }, 500)
    }
}