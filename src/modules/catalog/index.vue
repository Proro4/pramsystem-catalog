<template>
    <v-app class="catalog">
        <div class="catalog__filtres" :class="{showFilter}">
            <v-container fluid>
                <v-row>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="Title"
                                v-model="filterOptions.title"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="	Description"
                                v-model="filterOptions.description"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="Model Number"
                                v-model="filterOptions.modelNumber"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="Brand"
                                v-model="filterOptions.brand"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="UPC"
                                v-model="filterOptions.upc"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-select
                                dark
                                label="Vendors"
                                :items="catalogVendors"
                                v-model="filterOptions.vendor"
                                item-value='id'
                                item-text='name'
                                @change="filterChange()"
                        >
                            <template slot='selection' slot-scope='{ item }'>
                                {{ item.name }}
                            </template></v-select>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="Cost from"
                                v-model="filterOptions.costFrom"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="Cost to"
                                v-model="filterOptions.costTo"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="On Hand from"
                                v-model="filterOptions.onHandFrom"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                dark
                                type="text"
                                label="On Hand to"
                                v-model="filterOptions.onHandTo"
                                @input="filterChange()"
                        ></v-text-field>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                class="catalog__filters-input"
                                dark
                                type="text"
                        ></v-text-field>

                        <flat-pickr
                                placeholder="Added date from"
                                class="catalog__filters-date "
                                v-model="filterOptions.dateFrom"
                                label="Added date from"
                                @input="filterChange()"
                        ></flat-pickr>
                    </v-col>
                    <v-col class="catalog__filters-item" lg="2" md="3" sm="4" cols="6" >
                        <v-text-field
                                class="catalog__filters-input"
                                dark
                                type="text"
                        ></v-text-field>

                        <flat-pickr
                                placeholder="Added date to"
                                class="catalog__filters-date "
                                v-model="filterOptions.dateTo"
                                label="Added date from"
                                @input="filterChange()"
                        ></flat-pickr>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="catalog__list"  :class="{showFilter}">
            <div class="catalog__list-top">
                <div class="title ">Products Catalog</div>

                <v-select
                        class="catalog__n-col"

                        :items="product_numbs"
                        label="amount"
                        v-model="filterOptions.n"
                        @change="filterChange"
                ></v-select>
            </div>

            <div v-if="catalogList">
                <v-simple-table

                >
                    <tr>
                        <th class="catalog__sort mob-off" @click="sort('prefix')">
                            <label>
                                <input type="radio" name="sort">
                                <span>Prefix</span>
                            </label>
                        </th>
                        <th class="mob-off">Image</th>
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
                        <th class="mob-off">Min Pack</th>
                        <th class="catalog__sort mob-off" @click="sort('on_hand')">
                            <label>
                                <input type="radio" name="sort">
                                <span>On Hand</span>
                            </label>
                        </th>
                    </tr>
                    <tr v-for="(item, index) in catalogList"
                        :key="index"
                        class="catalog__tr">
                        <td class="mob-off">{{item.prefix}}</td>
                        <td class="mob-off"><div v-if="item.image"><img :src="item.image" alt=""></div></td>
                        <td><router-link target="_blank" :to="{name:'productDetail', params: {id: item.id}}">{{item.vendor_sku}}</router-link></td>
                        <td>{{item.upc}}</td>
                        <td>{{item.cost}}</td>
                        <td>{{item.uom_sale}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.description}}</td>
                        <td>{{item.model_number}}</td>
                        <td>{{item.brand}}</td>
                        <td class="mob-off">{{item.min_pack}}</td>
                        <td class="mob-off">{{item.on_hand}}</td>
                    </tr>
                </v-simple-table>

                <div class="pagination " v-if="catalogListLength">
                    <vue-ads-pagination
                            :total-items="catalogListLength"
                            :items-per-page="filterOptions.n"
                            :max-visible-pages="10"
                            :page="page"
                            @range-change="rangeChange"
                    >
                        <template
                                slot="buttons"
                                slot-scope="props"
                        >
                            <vue-ads-page-button
                                    :class="{'bg-yellow-dark': button.active}"
                                    v-for="(button, key) in props.buttons"
                                    :key="key"
                                    v-bind="button"
                                    @page-change="page = button.page"
                            />
                        </template>
                    </vue-ads-pagination>
                </div>
            </div>
            <div v-show="catalogPreloader">
                <loader></loader>
            </div>
        </div>
    </v-app>
</template>
<script src="./index.js"></script>