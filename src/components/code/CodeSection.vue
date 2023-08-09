!
<template>
  <div class="code-display d-flex flex-column" ref="root" @click="copyClipboard">
    <div class="px-7 type-header">
      {{ type }}
    </div>
    <div class="code-header d-flex px-7">
      <div class="ml-auto"></div>

      <v-tooltip text="Copy Source" location="top">
        <template v-slot:activator="{ props }">
          <!-- <v-btn v-bind="props" icon="mdi-content-copy" variant="text"></v-btn> -->
          <span v-bind="props" class="icons" @click="copyClipboard">
            <v-icon large icon="mdi-content-copy" v-if="!inCopyMode"></v-icon>
            <v-icon large icon="mdi-check" v-else></v-icon>
          </span>
        </template>
      </v-tooltip>
      <!-- <v-tooltip text="show " location="top">
        <template v-slot:activator="{ props }">
          <span v-bind="props" class="icons" @click="copyClipboard">
            <v-icon large icon="mdi-code-tags"></v-icon>
          </span>
        </template>
      </v-tooltip> -->
      <v-tooltip text="Download result" location="top" v-if="excelObject">
        <template v-slot:activator="{ props }">
          <!-- <v-btn v-bind="props" icon="mdi-content-copy" variant="text"></v-btn> -->
          <span v-bind="props" class="icons" @click="generateExcel">
            <v-icon large icon="mdi-download"></v-icon>
          </span>
        </template>
      </v-tooltip>
      <!-- <v-icon icon="mdi-code-tags"></v-icon>
      <v-icon color="var(--c3)" icon="mdi-chevron-up"></v-icon>
      
      <v-icon color="var(--c3)" icon="mdi-image-area"></v-icon> -->
    </div>
    <div class="code-content px-7 py-5">
      <pre>
<code>{{stringCode}}</code>
</pre>
    </div>
  </div>
</template>

<script setup>
import ExcelTable from 'mr-excel'
import { onMounted, ref } from 'vue'
let props = defineProps(['stringCode', 'type', 'excelObject'])
// const rect = reactive(props)
// console.log(stringCodes)
const root = ref(null)
const inCopyMode = ref(false)
function copyClipboard() {
  console.log(props.stringCode)
  inCopyMode.value = true
  setTimeout(() => {
    inCopyMode.value = false
  }, 1000)
  navigator.clipboard.writeText(props.stringCode)
}
function generateExcel() {
  ExcelTable.generateExcel(props.excelObject)
}
onMounted(() => {
  console.log(root.value.getBoundingClientRect().top)
  //   console.log('mounted', this.$refs.root)
  //   this.$el
})
</script>

<style scoped>
.icons {
  cursor: pointer;
  user-select: none;
  padding: 10px;
  /* border: 2px solid transparent; */
}
.icons:hover {
  /* pointer-events: none; */
  /* border: 2px solid var(--c3); */
  border-radius: 50%;
  background: #86828241;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 6px 0px #15121241;
  /* backdrop-filter: blur(15px); */
  box-shadow: 1px 1px 1px #15121241;
  /* transition: opacity 0.2s ease-in-out; */
  /* animation: opacitys 0.5s ease-in; */
}
@keyframes opacitys {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
    color: var(--c3);
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.type-header {
  position: absolute;
  top: 12px;
}
.code-header {
  position: sticky;
  top: 100px;
}
.code-display {
  position: relative;
  background-color: var(--c2);
  border: 1px solid var(--c1);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* padding: 20px; */
  /* width: 80%;
  max-width: 800px; */
}
.code-content {
  border-top: 1px solid var(--c5);
  /* padding: 20px; */
}

pre {
  margin: 0;
  white-space: pre-wrap;
  font-size: 14px;
}
</style>
