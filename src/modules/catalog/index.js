import {mapActions, mapGetters, mapMutations} from 'vuex';
import loader from '../../components/loader/index.vue'
import _ from 'lodash';
import VueAdsPagination from 'vue-ads-pagination';
import { VueAdsPageButton } from 'vue-ads-pagination';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import {
    CATALOG_LIST,
    CATALOG_VENDORDS,
    CATALOG_PAGE
} from '../../store/mutation-types.js'

export default {
    data() {
        return {
            page: 0,
            start: 0,
            end: 0,
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
                dateFrom:'',
                dateTo:'',
                sort:'',
                n:50,
                page:1,
            },
            product_numbs:[10,20,50,100],
            date: null
        }
    },
    components: {
        loader,
        VueAdsPagination,
        VueAdsPageButton,
        flatPickr
    },
    computed: {
        ...mapGetters({
            catalogList: 'catalog/catalogList',
            catalogVendors: 'catalog/catalogVendors',
            catalogPreloader: 'catalog/catalogPreloader',
            showFilter: 'catalog/switchFilterShows',
            catalogListLength: 'catalog/catalogListLength',
        })
    },
    created() {
        this.catalogPage(true);
        this.fetchCatalogList(this.filterOptions);
        this.fetchCatalogVendors();
    },
    methods: {
        ...mapActions({
            fetchCatalogList: `catalog/${CATALOG_LIST}`,
            fetchCatalogVendors: `catalog/${CATALOG_VENDORDS}`,
        }),
        ...mapMutations({
            catalogPage: `system/${CATALOG_PAGE}`,
        }),
        filterChange: _.debounce(function () {
            this.fetchCatalogList(this.filterOptions);
        }, 500),
        sort(item){
            this.filterOptions.sort = item;
            this.filterChange();
        },
        rangeChange () {
            this.filterOptions.page = this.page +1;
            this.fetchCatalogList(this.filterOptions);
        },
    },
    destroyed(){
        this.catalogPage(false);
    }
}