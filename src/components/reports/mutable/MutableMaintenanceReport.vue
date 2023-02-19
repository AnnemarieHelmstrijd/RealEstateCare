<template>
    <v-table density="compact">
        <thead>
            <tr>
                <th class="text-left">
                    Subject
                </th>
                <th class="text-left">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-left">Location: </td>
                <td class="text-left">
                    <v-text-field label="Location"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Action Required: </td>
                <td class="text-left">
                    <v-checkbox></v-checkbox>
                </td>
            </tr>
            <tr>
                <td class="text-left">Type: </td>
                <td class="text-left">
                    <v-select :items="installationTypeItems" label="Type"></v-select>
                </td>
            </tr>
            <tr>
                <td class="text-left">New Damage: </td>
                <td class="text-left">
                    <v-checkbox></v-checkbox>
                </td>
            </tr>
            <tr>
                <td class="text-left">Photo: </td>
                <td class="text-left">
                    <v-file-input prepend-icon="mdi-camera"></v-file-input>
                </td>
            </tr>
        </tbody>
    </v-table>
    <v-row :dense="true">
        <v-btn color="green" @click="save()">Save</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red" @click="deleteReport()">Delete</v-btn>
    </v-row>
</template>

<script>
export default {
    name: "MutableMaintenanceReportComponent",
    data: () => ({
        location: this.report.location,
        actionRequired: this.report.actionRequired,
        costs: this.report.costs,
        costItems: ["0 - 500", "500 - 1000", "1000 - 1500", "1500 - 2000", "2000 - ..."],
        installationTypeItems: ['Schilderwerk', 'Houtrot', 'Elektra', 'Leidingwerk', 'Beglazing']
    })
}
</script>