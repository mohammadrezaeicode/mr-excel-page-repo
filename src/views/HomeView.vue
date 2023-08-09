<template>
  <v-container ref="root">
    <h1 id="introduction">Introduction</h1>
    <p>
      Welcome to our JavaScript library designed to effortlessly generate .xlsx files from input
      objects. This versatile library offers exceptional flexibility and can seamlessly operate on
      both the client and backend sides of applications.
    </p>
    <p>
      Our library offers comprehensive support for a wide range of features, including data
      formatting, formulas, styles, merged cells, and grouped rows.
    </p>
    <h2 id="installation">Installation</h2>
    <p>Via CDN</p>
    <p>
      You can utilize our library, which comes bundled with Vite, by including the following link:
    </p>
    <CodeSection :stringCode="codes.vitCdn" :type="'html'"> </CodeSection>
    <p>
      <b>Alternatively</b>, you have the option to use the bundle with Webpack by incorporating the
      link provided below:
    </p>
    <CodeSection :stringCode="codes.cdnWebpack" :type="'html'"> </CodeSection>
    <p>
      Easily integrate our library into your project using either of these methods, and unlock
      efficient generation of Excel tables with exceptional flexibility.
    </p>
    <h2 id="using-a-package-manager">Using a Package Manager</h2>
    <p>
      To seamlessly integrate our library, you can install it using your preferred package manager:
    </p>
    <p>Via npm:</p>
    <CodeSection :stringCode="codes.npm" :type="'terminal/bash'"> </CodeSection>
    <p>Using yarn:</p>
    <CodeSection :stringCode="codes.npm" :type="'terminal/bash'"> </CodeSection>
    <p>Alternatively, you have the option to use pnpm:</p>
    <CodeSection :stringCode="codes.npm" :type="'terminal/bash'"> </CodeSection>
    <p>
      Choose the package manager that suits your workflow, and effortlessly bring the power of our
      library into your project, enabling smooth generation of Excel tables with ease and
      efficiency.
    </p>
    <h2 id="getting-started">Getting Started</h2>
    <p>
      After adding the library to your project, generating XLSX files becomes straightforward. You
      can achieve this by creating a data object similar to the code snippet below:
    </p>
    <CodeSection :stringCode="codes.ex1" :type="'javascript'" :excelObject="ex1"> </CodeSection>
  </v-container>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import codeJson from '../strings/code.json'
import CodeSection from '../components/code/codeSection.vue'
import { ex1 } from '../dataset/example'
import { generateExample } from '../utils/generate'
import { useSelectStore } from '@/stores/select'
const root = ref(null)
let items = []
const select = useSelectStore()
onMounted(() => {
  const idList = ['installation', 'using-a-package-manager', 'getting-started']
  idList.forEach((v) => {
    // console.log(root.value.)
    items.push(document.querySelector('#' + v))
    console.log(items)
  })
})
window.addEventListener('scroll', function () {
  let selIndex = -1
  let selTop = -1
  let countNotchoosen = 0
  items.forEach((v, index) => {
    const top = v.getBoundingClientRect().top
    if (top > 0 && (selTop < 0 || selTop > top)) {
      selTop = top
      selIndex = index
    } else {
      countNotchoosen++
    }
    console.log(top, index, 's', countNotchoosen)
  })
  if (countNotchoosen == items.length) {
    selIndex = items.length - 1
  }
  console.log(selIndex, selTop, 'ooo', countNotchoosen)
  select.setSelect(selIndex)
})
let codes = reactive({
  vitCdn: codeJson.cdnVite,
  cdnWebpack: codeJson.cdnWebpack,
  npm: 'npm install excel-table',
  yarn: 'yarn add excel-table',
  pnpm: 'pnpm install excel-table',
  ex1: generateExample(ex1.data, ex1.colorPalette, ex1.url)
})
</script>
