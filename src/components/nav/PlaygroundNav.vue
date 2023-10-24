<template>
    <div class="d-flex flex-column">
        <h4>Sheet</h4>
        <div>
            <v-text-field label="Shift left" type="number" v-model="playG.shiftLeft" variant="underlined"></v-text-field>
        </div>
        <div>
            <v-text-field label="Shift top" type="number" v-model="playG.shiftTop" variant="underlined"></v-text-field>
        </div>
        <h4>Headers</h4>
        <div class="d-flex my-2">
            <label class="color-picker-label">Background color:</label>
            <input type="color" v-model="playG.headBackgroundColor">
        </div>
        <div class="d-flex mb-2">
            <label class="color-picker-label">Text color:</label>
            <input type="color" v-model="playG.headColor">
        </div>
        <v-divider class="mb-2"></v-divider>
        <template v-if="playG.selectedItem >= 0">
            <h5>Header Object({{ playG.selectedItem }})</h5>
            <div>
                <v-text-field label="text" v-model="head.text" variant="underlined"></v-text-field>
            </div>
            <div>
                <v-text-field label="label" v-model="head.label" variant="underlined"></v-text-field>
            </div>
            <div>
                <v-text-field label="comment" v-model="head.comment" variant="underlined"></v-text-field>
            </div>

            <v-divider class="mb-2"></v-divider>
        </template>
        <h4>Data</h4>
        <div class="d-flex my-2">
            <label class="color-picker-label">Background color:</label>
            <input type="color" v-model="playG.dataBackgroundColor">
        </div>
        <div class="d-flex mb-2">
            <label class="color-picker-label">Text color:</label>
            <input type="color" v-model="playG.dataColor">
        </div>
        <!-- <H2>HEADERS <v-icon @click="click">mdi-plus</v-icon></H2>
         <div class="d-flex flex-column">
            <div v-for="(item,index) in headerItems" :key="'items'+index">{{ item }}</div>
         </div>
        <H2>DATA</H2> -->
    </div>
</template>
<script setup>
import { ref } from "vue";
import { playgroundStore } from "../../stores/playG"
let head = ref({})
let playG = playgroundStore()
playG.$subscribe(() => {
    console.log("state is changed", playG.selectedItem)
    if (playG.selectedItem >= 0) {
        head.value = playG.headers[playG.selectedItem]
    }
})

// let headerItems=ref([])

// function click() {
//     headerItems.value.push("test")
// }
</script>
<style scoped>
.color-picker-label {
    align-self: center;
    font-size: 12px;
    color: #a1a1a1;
}
</style>