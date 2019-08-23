<template>
    <div class="header">
        <div class="header__right" v-if="isAuthentificated">
            <div class="filter-btn" v-if="catalogPage" @click="filterOpen(!showFilter)"  :class="{showFilter}">
                Filter
                <span></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">

                    <path id="Shape 1" class="shp0" d="M13.75 -7.49L13.75 -2.49L13.19 -2.49L13.19 -7.49L13.75 -7.49Z" />
                    <path id="Shape 2" class="shp0" d="M3.06 1.69L5.06 1.69L5.06 12.71L3.06 12.71L3.06 1.69Z" />
                    <path id="Shape 3" class="shp0" d="M0.69 16.94L0.69 14.94L7.38 14.94L7.38 16.94L0.69 16.94Z" />
                    <path id="Shape 4" class="shp0" d="M2.88 19.32L4.88 19.32L4.88 27.96L2.88 27.96L2.88 19.32Z" />
                    <path id="Shape 5" class="shp0" d="M16 26.69L14 26.69L14 10.71L16 10.71L16 26.69Z" />
                    <path id="Shape 6" class="shp0" d="M11.25 8.57L11.25 6.57L18.69 6.57L18.69 8.57L11.25 8.57Z" />
                    <path id="Shape 7" class="shp0" d="M14 2.19L16 2.19L16 5.01L14 5.01L14 2.19Z" />
                    <path id="Shape 8" class="shp0" d="M23 3.26L25 3.26L25 20.01L23 20.01L23 3.26Z" />
                    <path id="Shape 9" class="shp0" d="M21.75 23.13L21.75 21.13L26.13 21.13L26.13 23.13L21.75 23.13Z" />
                    <path id="Shape 10" class="shp0" d="M20.75 22.94L20.75 20.94L27.32 20.94L27.32 22.94L20.75 22.94Z" />
                    <path id="Shape 11" class="shp0" d="M25.13 27.76L23.13 27.76L23.13 23.82L25.13 23.82L25.13 27.76Z" />
                    <path id="Shape 12" class="shp0" d="M14 19.32L16 19.32L16 27.76L14 27.76L14 19.32Z" />
                    <path id="Shape 13" class="shp0" d="M25 7.01L23 7.01L23 1.94L25 1.94L25 7.01Z" />
                </svg>
            </div>
            <v-btn
                class="header__btn"
                elevation="0"
                rounded=""
                size="small"
                height="30"
                @click="logoutUser()">Logout
            </v-btn>
        </div>
    </div>
</template>
<script src="./index.js"></script>