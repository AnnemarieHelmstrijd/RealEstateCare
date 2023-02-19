<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>Damage</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in damageReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <DamageReportComponent :report=item></DamageReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Installation</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in installationReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <InstallationReportComponent :report=item></InstallationReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Modifications</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in modificationsReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <ModificationsReportComponent :report=item></ModificationsReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Maintenance</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in maintenanceReports" :key="index">
                        <v-expansion-panel-title>{{ item.location == "" ? "New" : item.location }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <MaintenanceReportComponent :report=item></MaintenanceReportComponent>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-divider></v-divider>
</template>

<script>
import Report from '../../store/datamodel'
import DamageReportComponent from './DamageReport.vue';
import InstallationReportComponent from './InstallationReport.vue';
import MaintenanceReportComponent from './MaintenanceReport.vue';
import ModificationsReportComponent from './ModificationsReport.vue';
export default {
    name: "CompletedReportComponent",
    components: {
        DamageReportComponent,
        MaintenanceReportComponent,
        InstallationReportComponent,
        ModificationsReportComponent,
    },
    props: {
        report: Report,
    },
    computed: {
        damageReports() {
            return this.report.damageReports;
        },

        maintenanceReports() {
            return this.report.maintenanceReports;
        },

        installationReports() {
            return this.report.installationReports;
        },

        modificationsReports() {
            return this.report.modificationsReports;
        },
    }
}

</script>