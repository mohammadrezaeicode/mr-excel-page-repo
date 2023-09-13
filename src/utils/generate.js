import * as prettier from 'https://unpkg.com/prettier@3.0.1/standalone.mjs'
import prettierPluginBabel from 'https://unpkg.com/prettier@3.0.1/plugins/babel.mjs'
import prettierPluginEstree from 'https://unpkg.com/prettier@3.0.1/plugins/estree.mjs'
import prettierPluginHtml from 'https://unpkg.com/prettier@3.0.1/plugins/html.mjs'
function detectFunctionName(str) {
  if (str.indexOf(' e(')>0) return 'e'
  if (str.indexOf(' generateData(') > 0) {
    return 'generateData'
  }
  let spaceStart = false
  let nameStart = false
  let name = ''
  const length = str.length
  for (let index = 7; index < length; index++) {
    let s = str.charAt(index) + ''

    if (spaceStart) {
      if (nameStart) {
        if (s == '(') {
          break
        } else {
          name += s
        }
      } else {
        if (s != ' ') {
          nameStart = true
          name += s
        }
      }
    } else {
      if (s == ' ') {
        spaceStart = true
    
      }
    }
  }
  return name
}
async function formatString(str) {
  let p = await prettier.format(str, {
    parser: 'babel',
    plugins: [prettierPluginBabel, prettierPluginEstree, prettierPluginHtml]
  })
  return p
}
export function generateExample(example) {
  if(example.mode=='convert'){
    return example.str
  }
  let colorString = ''
  if (example.colorPalette) {
    if (example.colorPaletteUrl) {
      colorString = `//${example.colorPaletteUrl}
const colorPalette=${JSON.stringify(example.colorPalette)};
`
    } else {
      colorString = `const colorPalette=${JSON.stringify(example.colorPalette, null, 2)};
`
    }
  }
  if (example.str) {
    const fName = detectFunctionName(example.str)
    let end = ``
    if (example.data.notSave) {
      end = `.then(res => {
        var url = window.URL.createObjectURL(res);
        window.location.assign(url);
        return res;
    });`
    }
    return formatString(`${example.str}
   const {data} = ${fName}();
    ExcelTable.generateExcel(data)${end};
`)
  }
  if (!example.data.notSave) {
    return `${colorString}const data = ${JSON.stringify(example.data, null, 2)};
ExcelTable.generateExcel(data);
`
  } else {
    return `${colorString}const data = ${JSON.stringify(example.data, null, 2)};
ExcelTable.generateExcel(data).then(res => {
    var url = window.URL.createObjectURL(res);
    window.location.assign(url)
    return res
})
  `
  }
}
