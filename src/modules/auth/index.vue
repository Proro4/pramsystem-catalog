<template>
    <div class="auth">
        <div class="auth__form">
            <div class="title">
                Login
            </div>

            <v-col cols="10">
                <v-text-field

                        type="text"
                        label="Name"
                        v-model="auth.name"
                ></v-text-field>
            </v-col>
            <v-col cols="10">
                <v-text-field

                        type="password"
                        label="Password"
                        v-model="auth.password"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-btn
                        @click="loginUser()"
                        elevation="0"
                        rounded=""
                >Log in
                </v-btn>
            </v-col>
        </div>
    </div>
</template>
<script src="./index.js"></script>