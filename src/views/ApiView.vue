<template>
  <v-container ref="root">
    <h2 id="side-by-side">Data models</h2>
    <p class="mb-2">Some of the data models that are being used include:</p>
    <v-text-field label="Search" prepend-inner-icon="mdi-magnify" @input="inputChanged" @click:clear="inputChanged" :clearable="true" variant="underlined"></v-text-field>
    <div id="inter" class="pre mb-auto pa-2 mr-1 my-auto">
      <pre v-html="resultVal"></pre>
    </div>
  </v-container>
</template>
<script setup>
import {
  onMounted,
  ref
} from 'vue'
// import codeJson from '../strings/code.json'
// import CodeSection from '../components/code/codeSection.vue'
// import { ex1, ex } from '../dataset/example'
// import { generateExample } from '../utils/generate'
import { useSelectStore } from '@/stores/select'
import { interfaceData } from '../strings/interfaces'
let intData = interfaceData.split("========================")
const root = ref(null)
let resultVal = ref(intData.join(""))
let items = []
const select = useSelectStore()
select.setNavBar(2)
const idList = [
  'side-by-side'
]
function inputChanged(input) {
  console.log(input.target.value)
  if (!input.target.value) {
    resultVal.value = intData.join("")
    return
  }
  resultVal.value = intData.reduce((re, cu) => {
    let check = cu.toLowerCase().indexOf(input.target.value.toLowerCase()) >= 0 ? cu : ''
    return re + check
  }, "")
  if (resultVal.value.length == 0) {
    resultVal.value = "Not found"
  }
}
onMounted(() => {
  idList.forEach((v) => {
    select.setNavBar(2)
    items.push(document.querySelector('#' + v))
  })
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})
window.addEventListener('scroll', function () {
  let selIndex = -1
  let selTop = -1
  let countNotchoosen = 0
  items.forEach((v, index) => {
    const top = v.getBoundingClientRect().top
    if (top >= 0 && (selTop < 0 || selTop > top)) {
      selTop = top
      selIndex = index
    } else {
      countNotchoosen++
    }
  })
  if (countNotchoosen == items.length) {
    selIndex = items.length - 1
  }
  select.setSelect(selIndex)
})
</script>
<style scoped>
.pre {
  background: var(--c3);
  color: #fadaa9;
  border-radius: 5px;
}

#inter :link {
  color: #ff8d8d
}
</style>
