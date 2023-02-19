// Login component. Will be shown if there is no user logged in.

<template>
    <v-sheet>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="login">
                <v-text-field v-model="email" :rules="[required]" class="mb-2" clearable label="Email"
                    aria-label="Email"></v-text-field>

                <v-text-field type="password" v-model="password" :rules="[required]" clearable label="Password"
                    placeholder="Enter your password" aria-label="Password"></v-text-field>

                <br>
                <v-btn :disabled="!form" block color="var(--secondary)" size="large" type="submit" variant="elevated"
                    aria-label="Submit">
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script>
import axios from 'axios';

export default {
    name: "LoginComponent",
    data() {
        return {
            email: "",
            password: "",
            form: false,
            rules: {
                required: value => !!value || 'Required.',
            },
        };
    },
    methods: {
        async login() {
            axios
                .get("https://my-json-server.typicode.com/AnnemarieHelmstrijd/RealEstateCare/users")
                .then((result) => {
                    let user = result.data.filter(user => user.username === this.email && user.password === this.password)
                    delete user.password;
                    if (user.length > 0) {
                        this.$store.dispatch('fetchReports', user[0]);
                    }
                })
                .catch((error) => {
                    console.log(error)
                }).await;
        },

        required(v) {
            return !!v || 'Field is required'
        }
    }
}
</script>
