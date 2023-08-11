export function generateExample(data, colorPalette, colorPaletteUrl,str) {
  let colorString = ''
  if (colorPalette) {
    if (colorPaletteUrl) {
      colorString = `//${colorPaletteUrl}
const colorPalette=${JSON.stringify(colorPalette)};
`
    } else {
      colorString = `const colorPalette=${JSON.stringify(colorPalette, null, 2)};
`
    }
  }
  if(str){
    return `
    ${str}
    ExcelTable.generateExcel(data).then(res => {
      var url = window.URL.createObjectURL(res);
      window.location.assign(url)
      return res
    })
`
  }
  if(!data.notSave){
  return `${colorString}const data = ${JSON.stringify(data, null, 2)};
ExcelTable.generateExcel(data);
`}else{
  return `${colorString}const data = ${JSON.stringify(data, null, 2)};
ExcelTable.generateExcel(data).then(res => {
    var url = window.URL.createObjectURL(res);
    window.location.assign(url)
    return res
})
  `
}
}
