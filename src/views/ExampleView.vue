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
    <h2 id="new-feature">New Features</h2>
    <p>
      In this section, we have introduced several new features that have been added from version
      1.0.0 to 2.1.0.
    </p>
    <h3 id="shift-title">Shift & Title Option</h3>
    <p>
      The shift feature allows you to adjust the starting point of generating an Excel file. The
      title option, on the other hand, is used when you want to include a title at the top of the
      generated file.
    </p>
    <CodeSection :stringCode="codes.ex10" :type="'javascript'" :exampleObject="ex10"> </CodeSection>
    <CodeSection :stringCode="codes.ex11" :type="'javascript'" :exampleObject="ex11"> </CodeSection>
    <h3 id="convert-table">Convert Table to Excel Feature</h3>
    <p>
      Starting from version <b>2.1.0</b>, we have introduced the ability to directly generate Excel
      files from HTML tables. By providing a table query or node, the library will create an Excel
      representation. This functionality supports styles like merged cells, foreground colors, and
      borders. To apply these styles(<b>cell Style</b>), you can pass <b>true</b> as the third input
      to the function.
    </p>
    <h3>Table code from <a href="https://www.w3schools.com/html/html_tables.asp">W3Schools</a></h3>
    <table id="table">
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </table>
    <CodeSection :stringCode="codes.ex12" :type="'javascript'" :exampleObject="ex12"> </CodeSection>
    <h3 id="comment">Comment Option</h3>
    <p>After version 2.4.0 you can add comment on cells.</p>
    <CodeSection :stringCode="codes.ex13" :type="'javascript'" :exampleObject="ex13"> </CodeSection>
    
    <h3 id="mstyle">Multi Style value Option</h3>
    <p>After version 2.4.0, We added Ability to change the style of each character of cells. (only text value)</p>
    <CodeSection :stringCode="codes.ex14" :type="'javascript'" :exampleObject="ex14"> </CodeSection>
    <CodeSection :stringCode="codes.ex15" :type="'javascript'" :exampleObject="ex15"> </CodeSection>
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
import {
  ex2,
  ex3,
  ex4,
  ex5,
  ex6,
  ex7,
  ex8,
  ex9,
  ex10,
  ex11,
  ex12,
  ex13,
  ex14,
  ex15
} from '../dataset/example'
import { generateExample } from '../utils/generate'
import { useSelectStore } from '@/stores/select'
const root = ref(null)
let items = []
const select = useSelectStore()
select.setNavBar(1)
let codes = reactive({
  ex2: '',
  ex3: '',
  ex4: '',
  ex5: '',
  ex6: '',
  ex7: '',
  ex8: '',
  ex9: '',
  ex10: '',
  ex11: '',
  ex12: '',
  ex13: '',
  ex14: '',
  ex15:''
})
onMounted(async () => {
  codes.ex2 = await generateExample(ex2)
  codes.ex3 = await generateExample(ex3)
  codes.ex4 = await generateExample(ex4)
  codes.ex5 = await generateExample(ex5)
  codes.ex6 = await generateExample(ex6)
  codes.ex7 = await generateExample(ex7)
  codes.ex8 = await generateExample(ex8)
  codes.ex9 = await generateExample(ex9)
  codes.ex10 = await generateExample(ex10)
  codes.ex11 = await generateExample(ex11)
  codes.ex12 = await generateExample(ex12)
  codes.ex13 = await generateExample(ex13)
  codes.ex14 = await generateExample(ex14)
  codes.ex15 = await generateExample(ex15)

  const idList = [
    'general-option',
    'header-option',
    'formula-option',
    'styles-format-options',
    'merging-cells-options',
    'group-rows-options',
    'new-feature',
    'shift-title',
    'convert-table',
    'comment',
    'mstyle',
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
</script>
<style scoped>
.dangger {
  color: rgb(194, 78, 78);
  font-size: 0.85rem;
}
#table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table td,
th {
  border: 1px solid rgb(250, 250, 250);
  text-align: left;
  padding: 8px;
}

#table tr:nth-child(even) td {
  background-color: rgb(194, 78, 78);
}
</style>
