!
<template>
  <div class="mx-0 px-0 d-flex flex-column">
    <div class="code-display d-flex flex-column mt-2 mb-5 text-white" ref="root">
      <div class="px-7 type-header">
        {{ type }}
      </div>
      <div class="code-header d-flex">
        <div class="ml-auto"></div>
        <v-tooltip text="Show code" location="top" v-if="!notShowHiddien">
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="icons" @click="changeCodeDisplay">
              <v-icon icon="mdi-chevron-up" v-if="displayCode"></v-icon>
              <v-icon icon="mdi-code-tags" v-else></v-icon>
            </span>
          </template>
        </v-tooltip>
        <v-tooltip text="Copy Source" location="top">
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="icons" @click="copyClipboard">
              <v-icon large icon="mdi-content-copy" v-if="!inCopyMode"></v-icon>
              <v-icon large icon="mdi-check" v-else></v-icon>
            </span>
          </template>
        </v-tooltip>
        <v-tooltip text="Download result" location="top" v-if="exampleObject || forceDownload">
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="icons" @click="generateExcel">
              <v-icon large icon="mdi-download"></v-icon>
            </span>
          </template>
        </v-tooltip>
        <v-menu :open-on-hover="true" :close-delay="100" :offset="[0, 75, 0, 0]"
          v-if="exampleObject && exampleObject.imageFullName">
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="icons" @click="dialog = true">
              <img :src="'/mr-excel-page/img/' + exampleObject.imageFullName" alt="output result" height="22" width="22"
                style="margin-bottom: -6px" />
            </span>
          </template>
          <img :src="'/mr-excel-page/img/' + exampleObject.imageFullName" alt="output result" width="150" />
        </v-menu>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-toolbar dark color="var(--c2)">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <h4>Display result</h4>
              <v-spacer></v-spacer>
            </v-toolbar>
            <img :src="'/mr-excel-page/img/' + exampleObject.imageFullName" alt="output result" />
          </v-card>
        </v-dialog>
      </div>
      <div class="code-content px-7 py-5">
        <pre v-if="displayCode || !(exampleObject && exampleObject.imageFullName)">
<code>{{ stringCode }}</code>
</pre>
        <img class="d-flex mx-auto" height="250" :src="'/mr-excel-page/img/' + exampleObject.imageFullName"
          v-if="exampleObject && exampleObject.imageFullName && !displayCode" />
      </div>
    </div>
    <!-- <img class="mx-auto" height="250" :src="'/mr-excel-page/img/' + exampleObject.imageFullName"
      v-if="exampleObject && exampleObject.imageFullName && !displayCode" /> -->
  </div>
</template>
<script setup>
import ExcelTable from 'mr-excel'
import { ref } from 'vue'
let props = defineProps(['stringCode', 'type', 'exampleObject', 'notShowHiddien', 'forceDownload'])
const root = ref(null)
const dialog = ref(false)
const inCopyMode = ref(false)
const displayCode = ref(false)
function changeCodeDisplay() {
  displayCode.value = !displayCode.value
}
function copyClipboard() {
  inCopyMode.value = true
  setTimeout(() => {
    inCopyMode.value = false
  }, 1000)
  navigator.clipboard.writeText(props.stringCode)
}
function generateExcel() {
  if (props.forceDownload) {
    eval(props.stringCode)
  } else if (props.exampleObject.mode == 'convert') {
    ExcelTable.convertTableToExcel(props.exampleObject.query, null, props.exampleObject.keepStyle)
  } else {
    if (props.exampleObject.data && props.exampleObject.data.notSave) {
      ExcelTable.generateExcel(props.exampleObject.data).then((res) => {
        var url = window.URL.createObjectURL(res)
        window.location.assign(url)
        return res
      })
    } else {
      ExcelTable.generateExcel(props.exampleObject.data)
    }
  }
}
</script>
<style scoped>
.image-ccode {
  background-color: var(--c2);
  border: 1px solid var(--c1);
  border-radius: 4px;
}

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
  /* top: 100px; */
  top: 0;
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
}</style>
