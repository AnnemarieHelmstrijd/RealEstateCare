// Grid component for the menu items.

<template>
    <v-container class="menu-container">
        <v-row class="card_row">
            <v-col>
                <MenuCard icon="mdi-bookmark" action="Scheduled" link="ScheduledReports"></MenuCard>
            </v-col>
            <v-col>
                <MenuCard icon="mdi-checkbox-marked-circle" action="Completed" link="CompletedReports"></MenuCard>
            </v-col>
        </v-row>

        <v-row class="card_row">

            <v-col>
                <MenuCard icon="mdi-view-grid" action="Knowledge Base" link="KnowledgeBase"></MenuCard>
            </v-col>

            <v-col>
                <MenuCard icon="mdi-cog" action="Settings" link="Settings"></MenuCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import MenuCard from './MenuCard.vue'
import { useTheme } from 'vuetify';
import { toRefs } from 'vue'

export default {
    name: "MenuGrid",
    components: {
        MenuCard,
    },
    props: {
        darkMode: {
            default: false
        }
    },
    setup: function (props) {
        const theme = useTheme();
        const { darkMode } = toRefs(props);
        theme.global.name.value = darkMode.value ? 'dark' : 'light'
    }
}
</script>

<style>
.card_row {
    height: 50%;
}

.menu-container {
    height: 100%;
}
</style>