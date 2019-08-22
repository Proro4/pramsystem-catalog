<template>
    <v-app class="catalog">
        <div class="catalog__filtres" :class="{showFilter}">
            <v-container fluid>
                <v-row>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="Title"
                                v-model="filterOptions.title"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="	Description"
                                v-model="filterOptions.description"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="Model Number"
                                v-model="filterOptions.modelNumber"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="Brand"
                                v-model="filterOptions.brand"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="UPC"
                                v-model="filterOptions.upc"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-select
                                dark
                                :items="catalogVendors"
                                label="Vendors"
                                v-model="filterOptions.vendor"
                                @change="filterChange()"
                        ></v-select>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="Cost from"
                                v-model="filterOptions.costFrom"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="Cost to"
                                v-model="filterOptions.costTo"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="On Hand from"
                                v-model="filterOptions.onHandFrom"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="On Hand to"
                                v-model="filterOptions.onHandTo"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="Added date from"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field
                                dark
                                type="text"
                                label="Added date to"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="catalog__list"  :class="{showFilter}">
            <div class="title dark">Products Catalog</div>
            <div v-if="catalogList">
                <v-simple-table
                    dark
                >
                    <tr>
                        <th class="catalog__sort" @click="sort('prefix')">
                            <label>
                                <input type="radio" name="sort">
                                <span>Prefix</span>
                            </label>
                        </th>
                        <th>Image</th>
                        <th class="catalog__sort" @click="sort('prefix')">
                            <label>
                                <input type="radio" name="sort">
                                <span>Vendor Sku</span>
                            </label>
                        </th>
                        <th>UPC</th>
                        <th class="catalog__sort" @click="sort('cost')">
                            <label>
                                <input type="radio" name="sort">
                                <span>Cost</span>
                            </label>
                        </th>
                        <th>UOM sale</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Model Number</th>
                        <th>Brand</th>
                        <th>Min Pack</th>
                        <th class="catalog__sort" @click="sort('on_hard')">
                            <label>
                                <input type="radio" name="sort">
                                <span>On Hand</span>
                            </label>
                        </th>
                    </tr>
                    <tr v-for="(item, index) in catalogList"
                        :key="index"
                        class="catalog__tr">
                        <td>{{item.prefix}}</td>
                        <td><img :src="item.image" alt=""></td>
                        <td><router-link :to="{name:'productDetail', params: {id: item.id}}">{{item.vendor_sku}}</router-link></td>
                        <td>{{item.upc}}</td>
                        <td>{{item.cost}}</td>
                        <td>{{item.uom_sale}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.description}}</td>
                        <td>{{item.model_number}}</td>
                        <td>{{item.brand}}</td>
                        <td>{{item.min_pack}}</td>
                        <td>{{item.on_hand}}</td>
                    </tr>
                </v-simple-table>
            </div>
            <div v-show="catalogPreloader">
                <loader></loader>
            </div>
        </div>
    </v-app>
</template>
<script src="./index.js"></script>