<template>
    <div class="header">
        <div v-if="isAuthentificated">
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