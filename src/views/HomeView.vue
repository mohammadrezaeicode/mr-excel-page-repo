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
    <p class="mt-2">We have four functions that are defined with specific use cases as follows:</p>
    <ul class="ml-4">
      <li class="mb-2">
        <p><b>generateExcel</b>:This is the primary and most important function that serves as the entry point for all
          other functions. Its responsibility is to generate an Excel file based on the received input data. We will
          provide examples of the various options that can be utilized.</p>
      </li>
      <li class="mb-2">
        <p><b>convertTableToExcel</b>:This function is designed exclusively for <b>client-side</b> use. It requires passing a
          DOM element (a table element) as a parameter. The output of this function is an Excel file generated from the
          provided table.</p>
      </li>
      <li class="mb-2">
        <p><b>sideBySideLineByLine</b>:This function offers the capability to generate a single-sheet Excel file
          containingmultiple tables side by side and line by line.</p>

      </li>
      <li class="mb-2">

        <p><b>themeBaseGenerate</b>:Within this function, we utilize color palettes from <b><a
              href="https://colorhunt.co/">colorhunt</a></b>.It accepts data and a theme index as inputs, then generates
          an Excel file with the selected theme applied. <a
            href="https://mohammadrezaeicode.github.io/mr-excel-them-page/">Themes</a></p>
      </li>
    </ul>
    <h2 id="installation">Installation via CDN</h2>
    <p>
      Harness the power of our bundled library with <b>Vite</b> by incorporating it into your
      project through a CDN. Simply include the following link to seamlessly integrate the library:
    </p>
    <CodeSection :stringCode="codes.vitCdn" :type="'html'" :notShowHiddien="true"> </CodeSection>
    <p>
      <b>Alternatively</b>, you have the option to use the bundle with <b>Webpack</b> by
      incorporating the link provided below:
    </p>
    <CodeSection :stringCode="codes.cdnWebpack" :type="'html'" :notShowHiddien="true">
    </CodeSection>
    <p>
      Easily integrate our library into your project using either of these methods, and unlock
      efficient generation of Excel tables with exceptional flexibility.
    </p>
    <h2 id="using-a-package-manager">Installation via Package Manager</h2>
    <p>
      To seamlessly integrate our library, you can install it using your preferred package manager:
    </p>
    <p>Via <b>npm</b>:</p>
    <CodeSection :stringCode="codes.npm" :type="'terminal/bash'" :notShowHiddien="true">
    </CodeSection>
    <p>Using <b>yarn</b>:</p>
    <CodeSection :stringCode="codes.yarn" :type="'terminal/bash'" :notShowHiddien="true">
    </CodeSection>
    <p>Alternatively, you have the option to use <b>pnpm</b>:</p>
    <CodeSection :stringCode="codes.pnpm" :type="'terminal/bash'" :notShowHiddien="true">
    </CodeSection>
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
    <CodeSection :stringCode="codes.ex" :type="'javascript'" :exampleObject="ex"> </CodeSection>
    <p>
      Here's another example where we generate an Excel file with styles, formulas, and a variety of
      additional features.
    </p>
    <CodeSection :stringCode="codes.ex1" :type="'javascript'" :exampleObject="ex1"> </CodeSection>
  </v-container>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import codeJson from '../strings/code.json'
import CodeSection from '@/components/code/codeSection.vue'
import { ex1, ex } from '../dataset/example'
import { generateExample } from '../utils/generate'
import { useSelectStore } from '@/stores/select'
const root = ref(null)
let items = []
const select = useSelectStore()
select.setNavBar(0)
let codes = reactive({
  vitCdn: codeJson.cdnVite,
  cdnWebpack: codeJson.cdnWebpack,
  npm: 'npm install mr-excel',
  yarn: 'yarn add mr-excel',
  pnpm: 'pnpm install mr-excel',
  ex1: '',
  ex: '',
})
const idList = ['installation', 'using-a-package-manager', 'getting-started']
onMounted(async () => {
  codes.ex = await generateExample(ex)
  codes.ex1 = await generateExample(ex1)
  idList.forEach((v) => {
    items.push(document.querySelector('#' + v))
  })
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
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
