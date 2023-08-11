<template>
  <v-container ref="root">
    <h1 id="examples">Examples</h1>
    <p>
      On this page, we aim to provide a more in-depth exploration of the library's future
      capabilities. We will also present examples for the most commonly required use cases.
    </p>
    <p>
      You can validate the examples by clicking on the download button located in the top-right
      corner of each example section. By doing so, you can view or copy the example text using the
      copy button and then paste it into the console. We have added the library to the window,
      allowing you to access it directly within the console.
    </p>
    <h2 id="general-option">General Option</h2>
    <p>
      Each sheet has options for customization. You can change the sheet name using <b>name</b>,
      adjust the tab name color with <b>tabColor</b>, control visibility with <b>state</b>, add
      protection to a sheet via <b>protectionOption</b>, and implement sorting and filtering using
      <b>sortAndfilter</b>. In the example below, we will demonstrate how to utilize these
      properties. Additionally, for Excel file information, we offer options such as <b>creator</b>,
      <b>created</b>, <b>notSave</b>, and <b>modified</b>. <br />
      <span class="dangger"
        >*Note: Please use the protectionOption only when necessary, as it may potentially lead to
        broken generated files. We recommend avoiding the use of other sheet options as well.
        <br />
        *Important Note: Excel file information such as 'name', 'created', and 'modified' is
        extremely sensitive. If incorrect values are used, it can result in Excel file generation
        issues. Please exercise extra caution and ensure accurate values for these attributes to
        avoid any potential disruptions.
      </span>
    </p>
    <CodeSection :stringCode="codes.ex2" :type="'javascript'" :exampleObject="ex2"> </CodeSection>
    <h2 id="header-option">Header Option</h2>
    <p>
      We offer specific header options for Excel headers. The header is a mandatory component, so
      the <b>withoutHeader</b> option cannot be used to omit it. The <b>headerHeight</b> option is
      employed to determine the height of the header row. Additionally, we provide the
      <b>headerStyleKey</b> property, which specifies the most commonly used style for each cell
      (its value corresponds to the style ID; detailed functionality is explained in the Styles
      section).
    </p>
    <p>
      Each header cell is endowed with properties beyond the label and text. The
      <b>size</b> property defines the width of the column, while the <b>formula</b> property
      applies a formula to all rows (excluding the header) within the column, ultimately affecting
      the final cell in that column.
    </p>
    <CodeSection :stringCode="codes.ex3" :type="'javascript'" :exampleObject="ex3"> </CodeSection>
    <h2 id="formula-option">Formula Option</h2>
    <p>
      We provide two distinct methods for defining formulas: customization and column type. In the
      customization approach, if you employ a cell containing data that is used within the formula,
      the formula will display an instance of the formula. When using the customization type, it's
      important to specify the formula type, which can be any of the following: <b>AVERAGE</b>,
      <b>SUM</b>, <b>COUNT</b>, <b>MAX</b>, or <b>MIN</b>.
    </p>
    <CodeSection :stringCode="codes.ex4" :type="'javascript'" :exampleObject="ex4"> </CodeSection>
    <h2 id="styles-format-options">Styles & Format Options</h2>
    <p>
      In the library, styles are defined with an ID that represents the desired style. This ID is
      then used to apply the corresponding style to cells. Each cell is associated with only one
      style. These styles encompass various attributes such as borders, alignment, text color, font
      family, font size, background, and bold, among others.
    </p>
    <p>
      The format property is a distinct style attribute. Unlike other styles, the format is
      predefined and cannot be customized.
    </p>
    <CodeSection :stringCode="codes.ex5" :type="'javascript'" :exampleObject="ex5"> </CodeSection>

    <h2 id="merging-cells-options">Merging Cells Options</h2>
    <p>
      We offer options for merging rows of cells together. Additionally, we provide a function-based
      approach to facilitate cell merging.
    </p>
    <CodeSection :stringCode="codes.ex6" :type="'javascript'" :exampleObject="ex6"> </CodeSection>
    <h2 id="group-rows-options">Group Rows Options</h2>
    <p>
      With this library, you can group rows together using two properties added to the data:
      <b>outlineLevel</b> and <b>hidden</b>. The outlineLevel represents the grouping level, while
      hidden represents whether the default state is collapsed or not. The key of this property is
      changeable, so in case of a conflict with your data, you have the flexibility to modify it. We
      will discuss how to change the key in the next section.
    </p>
    <CodeSection :stringCode="codes.ex7" :type="'javascript'" :exampleObject="ex7"> </CodeSection>
    <h2 id="complex-options">Complex Options</h2>
    <p>
      In the examples below, we aim to define some fun scenarios that could be useful for more
      complex use cases.
    </p>
    <h3 id="adjusting-key-properties-and-row-height">Adjusting Key Properties and Row Height</h3>
    <p>
      You have the ability to change the key of reserved properties such as height, hidden, and
      more. Additionally, you can adjust the height of rows as needed.
    </p>
    <CodeSection :stringCode="codes.ex8" :type="'javascript'" :exampleObject="ex8"> </CodeSection>
    <h3 id="conditional-styling">Conditional Styling</h3>
    <p>
      Using the 'styleCellCondition' option, you can apply styles to each cell based on specific
      conditions as needed.
    </p>
    <CodeSection :stringCode="codes.ex9" :type="'javascript'" :exampleObject="ex9"> </CodeSection>
  </v-container>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import CodeSection from '@/components/code/CodeSection.vue'
import { ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9 } from '../dataset/example'
import { generateExample } from '../utils/generate'
import { useSelectStore } from '@/stores/select'
const root = ref(null)
let items = []
const select = useSelectStore()
select.setNavBar(1)
onMounted(() => {
  const idList = [
    'general-option',
    'header-option',
    'formula-option',
    'styles-format-options',
    'merging-cells-options',
    'group-rows-options',
    'complex-options',
    'adjusting-key-properties-and-row-height',
    'conditional-styling'
  ]
  idList.forEach((v) => {
    // //console.log(root.value.)
    items.push(document.querySelector('#' + v))
    //console.log(items)
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
    if (top > 0 && (selTop < 0 || selTop > top)) {
      if (top > this.window.innerHeight) {
        selTop = top
        selIndex = index - 1
      } else {
        selTop = top
        selIndex = index
      }
    } else {
      countNotchoosen++
    }
    //console.log(top, index, 's', countNotchoosen)
  })
  if (countNotchoosen == items.length) {
    selIndex = items.length - 1
  }
  //console.log(selIndex, selTop, 'ooo', countNotchoosen)
  select.setSelect(selIndex)
})
let codes = reactive({
  ex2: generateExample(ex2.data, ex2.colorPalette, ex2.url),
  ex3: generateExample(ex3.data),
  ex4: generateExample(ex4.data, ex4.colorPalette, ex4.url),
  ex5: generateExample(ex5.data, ex5.colorPalette, ex5.url),
  ex6: generateExample(ex6.data, ex6.colorPalette, ex6.url),
  ex7: generateExample(ex7.data, ex7.colorPalette, ex7.url),
  ex8: generateExample(ex8.data, ex8.colorPalette, ex8.url),
  ex9: generateExample(ex9.data, ex9.colorPalette, ex9.url)
})
</script>
<style>
.dangger {
  color: rgb(194, 78, 78);
  font-size: 0.85rem;
}
</style>
