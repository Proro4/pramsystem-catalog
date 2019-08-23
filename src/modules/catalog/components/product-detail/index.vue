<template>
    <div class="product" v-if="productDetail">
        <div class="title dark">{{productDetail.title}}</div>
        <div class="product__list-info dark">
            <v-row>
                <v-col offset-lg="1" lg="2" md="6" sm="12" cols="12" >
                    <v-card  dark>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Images</v-list-item-title>
                                <v-list-item-subtitle><img :src="productDetail.image" alt=""></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                    </v-card>
                </v-col>
                <v-col lg="2" md="6" sm="12" cols="12" >
                    <v-card  dark>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Category</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.category}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Subcategory</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.subcategory}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Size</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.size}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Package Height</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.package_height}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Package Length</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.package_length}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Package Width</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.package_width}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Package Weight</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.package_weight}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col lg="2" md="6" sm="12" cols="12" >
                    <v-card  dark>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Brand</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.brand}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>UPC</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.upc}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Model Number</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.model_number}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>List Price</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.list_price}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Retail Price</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.retail_price}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Map Price</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.map_price}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Case Price</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.case_price}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col lg="2" md="6" sm="12" cols="12" >
                    <v-card  dark>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>vendor sku</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.vendor_sku}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Cost</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.cost}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Updated</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.updated_at}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Description</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.description}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Notes</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.notes}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Ingredients</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.ingredients}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col lg="2" md="6" sm="12" cols="12" >
                    <v-card  dark>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Country Of Origin</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.country_of_origin}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Product Status</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.product_status}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Product Division</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.product_division}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Min Pack</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.min_pack}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Case</v-list-item-title>
                                <v-list-item-subtitle>{{productDetail.case}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
    <div v-else>
        <loader></loader>
    </div>
</template>
<script src="./index.js"></script>