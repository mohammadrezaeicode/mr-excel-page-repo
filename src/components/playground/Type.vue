<template>
    <v-container>
        <form action="">
            <div class="upload-template">
                <div class="d-flex flex-column justify-center align-center uploader px-8 position-relative">

                    <label class="c-c2">Upload your Excel</label>
                    <div class="w-100 mb-auto d-flex">
                        <v-btn class="mx-auto" color="var(--c2)" style="color:white" @click="click">upload</v-btn>
                        <!-- <v-file-input dense class="w-100 z-5" v-model="file"
                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            label="Excel Template"></v-file-input> -->
                    </div>
                    <div class=" c-c2 position-absolute">
                        Or Drag here(rect)
                    </div>
                    <input id="files" type="file" class="drag-file"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                </div>
            </div>
            <div class="d-flex flex-column justify-center align-center">
                <label>JSON code</label>
                <textarea v-model="codes" cols="30" rows="10"></textarea>
            </div>
            {{ codes }}
        </form>
    </v-container>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
let codes = ref("")
let file = ref(null)
onMounted(() => {
    console.log("this is test mounted")
    document.querySelector("#files").addEventListener("change", handleFiles, false);
    function handleFiles() {
        console.log(this.files)
        file.value = this.files
    }
})

function click() {
    // console.log(this.files, files,)
    document.querySelector("#files").focus()
    // file.value=files.target.value
}
// function changes2(files) {
//     console.log("2",files)
//     // file.value=files.target.value
// }
watch(file, (newV, oldV) => {
    console.log("watch", newV, oldV)
})

</script>
<style scoped>
textarea {
    box-shadow: inset 1px 1px 10px #0000001c, inset -1px -1px 10px #0000001c;
}

textarea:focus-visible {
    outline: #7975751c auto 1px;

}

.uploader {
    height: 500px;
    width: 500px;
    border: 1px dashed var(--c2);
    /* box-shadow: inset 1px 1px 10px #0000001c, inset -1px -1px 10px #0000001c; */
}

.z-5 {
    z-index: 5;
}

.drag-file {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
}
</style>
