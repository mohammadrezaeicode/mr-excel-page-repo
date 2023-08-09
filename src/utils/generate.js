export function generateExample(data, colorPalette, colorPaletteUrl) {
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
  return `${colorString}const data = ${JSON.stringify(data, null, 2)};
ExcelTable.generateExcel(data);
`
}
