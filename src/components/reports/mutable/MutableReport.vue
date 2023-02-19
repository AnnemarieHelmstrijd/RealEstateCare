<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>Damage</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in damageReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <MutableDamageReportComponent :report=item :index=index></MutableDamageReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-btn color="blue" @click="addDamage()">Add Damage</v-btn>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Installation</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in installationReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <MutableInstallationReportComponent :report=item :index=index>
                            </MutableInstallationReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-btn color="blue" @click="addInstallation()">Add Installation</v-btn>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Modifications</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in modificationsReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <MutableModificationsReportComponent :report=item :index=index>
                            </MutableModificationsReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-btn color="blue" @click="addModification()">Add Modification</v-btn>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Maintenance</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in maintenanceReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <MutableMaintenanceReportComponent :report=item :index=index>
                            </MutableMaintenanceReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-btn color="blue" @click="addMaintenance()">Add Maintenance</v-btn>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-divider></v-divider>
    <v-btn to="/CompletedReports" @click="save()" color="green">Save</v-btn>
</template>

<script>

import MutableDamageReportComponent from './MutableDamageReport.vue';
import MutableInstallationReportComponent from './MutableInstallationReport.vue';
import MutableModificationsReportComponent from './MutableModificationsReport.vue';
import MutableMaintenanceReportComponent from './MutableMaintenanceReport.vue';

export default {
    name: "MutableReportComponent",
    components: {
        MutableDamageReportComponent,
        MutableInstallationReportComponent,
        MutableModificationsReportComponent,
        MutableMaintenanceReportComponent,
    },
    computed: {
        damageReports() {
            let report = this.$store.state.model.activeTask.damageReports;
            if (report)
                return report;
            else
                return [];
        },
        installationReports() {
            let report = this.$store.state.model.activeTask.installationReports;
            if (report)
                return report;
            else
                return [];
        },
        modificationsReports() {
            let report = this.$store.state.model.activeTask.modificationsReports;
            if (report)
                return report;
            else
                return [];
        },
        maintenanceReports() {
            let report = this.$store.state.model.activeTask.maintenanceReports;
            if (report)
                return report;
            else
                return [];
        }
    },
    methods: {
        addDamage: function () {
            this.$store.dispatch("createNewDamageReport")
        },
        addModification: function () {
            this.$store.dispatch("createNewModificationsReport")
        },
        addInstallation: function () {
            this.$store.dispatch("createNewInstallationReport")
        },
        addMaintenance: function () {
            this.$store.dispatch("createNewMaintenanceReport")
        },
        save() {
            this.$store.dispatch("saveActiveTask")
        }
    }
}
</script>