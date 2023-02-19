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
                <td class="text-left">Description: </td>
                <td class="text-left">
                    <v-text-field label="Description"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Action: </td>
                <td class="text-left">
                    <v-select :items="modificationTypeItems" label="Type"></v-select>
                </td>
            </tr>
            <tr>
                <td class="text-left">Executor: </td>
                <td class="text-left">
                    <v-select :items="executorItems" label="Type"></v-select>
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
    name: "MutableModificationsReportComponent",
    data: () => ({
        modificationTypeItems: ['Koeling', 'Verwarming', 'Luchtverversing', 'Electra', 'Beveiliging'],
        executorItems: ["Huurder", "Aannemer", "Onbekend"],
    })
}
</script>