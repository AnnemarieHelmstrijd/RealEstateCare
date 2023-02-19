<template>
    <v-card :elevation="5">
        <v-avatar size="200">
            <v-img width="150px" :src="user.avatar" alt="Avatar"></v-img>
        </v-avatar>
        <v-card-title>{{ user.firstName + " " + user.lastName }}</v-card-title>
        <v-card-subtitle>{{ user.username }}</v-card-subtitle>
    </v-card>

    <v-row>
        <v-col>
            <v-checkbox label="Dark Mode" @change="toggleTheme" v-model="darkMode"></v-checkbox>
            <v-checkbox label="Nofifications" v-model="notifications"></v-checkbox>
            <v-checkbox label="Sounds" v-model="sounds"></v-checkbox>
        </v-col>
    </v-row>

    <v-btn to="/" color="var(--secondary)" @click="save">Save Changes</v-btn>
</template>
<script>

import { useTheme } from 'vuetify';

export default {
    name: "SettingsComponent",
    data() {
        return {
            darkMode: false,
            notifications: false,
            sounds: false,
        }
    },
    props: {
        userSettings: {}
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },

    setup() {
        const theme = useTheme()

        return {
            theme,
            toggleTheme: () => {
                if (theme.global.name.value == 'dark') {
                    theme.global.name.value = 'light';
                } else {
                    theme.global.name.value = 'dark';
                }
            }
        }
    },


    methods: {
        save() {
            this.$store.dispatch("updateUserSettings", { darkMode: this.darkMode, notifications: this.notifications, sounds: this.sounds });
        },
    }



}

</script>