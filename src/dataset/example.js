import dataset from './datas.json'
export const ex10 = (() => {
  function generateData() {
    const colorPalette = {
      c4: 'FFC7C7',
      c2: '8785A2'
    }
    const rowAlignment = {
      alignment: {
        horizontal: 'left',
        vertical: 'center'
      }
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: '6A2C70',
      ...rowAlignment
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: '#FFFFFF'
    }
    return {
      imageFullName: 'ex10.PNG',
      colorPalette,
      url: 'https://colorhunt.co/palette/ffc7c7ffe2e2f6f6f68785a2',
      data: {
        creator: 'mr',
        styles: {
          'c0<0.3': {
            backgroundColor: 'DCD6F7',
            color: '424874s',
            ...rowAlignment
          },
          male: {
            backgroundColor: '95E1D3',
            color: '252A34',
            ...rowAlignment
          },
          female: {
            backgroundColor: 'F38181',
            color: '252A34',
            ...rowAlignment
          },
          rowStyle: {
            ...rowStyle
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            shiftTop: 5,
            shiftLeft: 5,
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                if (colIndex == 0 && data < 0.3) {
                  return 'c0<0.3'
                } else if (colIndex == 3) {
                  if (data) {
                    return 'male'
                  } else {
                    return 'female'
                  }
                } else {
                  return 'rowStyle'
                }
              }
            },
            headers: [
              { label: 'c1', text: '**' },
              { label: 'c2', text: '++' },
              { label: 'c3', text: 'Name' },
              { label: 'c5', text: 'Gender' }
            ],
            data: [
              { c1: 0.756, c2: 150, c3: 'John', c5: 1 },
              { c1: 0.238, c2: 120, c3: 'Jane', c5: 0 },
              { c1: 0.865, c2: 180, c3: 'Michael', c5: 1 },
              { c1: 0.412, c2: 130, c3: 'Emily', c5: 0 },
              { c1: 0.587, c2: 160, c3: 'William', c5: 1 }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()
export const ex11 = (() => {
  function generateData() {
    const colorPalette = {
      c4: 'FFC7C7',
      c2: '8785A2'
    }
    const rowAlignment = {
      alignment: {
        horizontal: 'left',
        vertical: 'center'
      }
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: '6A2C70',
      ...rowAlignment
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: '#FFFFFF'
    }
    return {
      imageFullName: 'ex11.PNG',
      colorPalette,
      url: 'https://colorhunt.co/palette/ffc7c7ffe2e2f6f6f68785a2',
      data: {
        addDefaultTitleStyle: true,
        creator: 'mr',
        styles: {
          'c0<0.3': {
            backgroundColor: 'DCD6F7',
            color: '424874s',
            ...rowAlignment
          },
          male: {
            backgroundColor: '95E1D3',
            color: '252A34',
            ...rowAlignment
          },
          female: {
            backgroundColor: 'F38181',
            color: '252A34',
            ...rowAlignment
          },
          rowStyle: {
            ...rowStyle
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            shiftTop: 1,
            shiftLeft: 1,
            title: {
              shiftTop: 1,
              shiftLeft: -1,
              consommeRow: 4,
              consommeCol: 6,
              // height: 100,
              // styleId: '',
              text: 'Title'
            },
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                if (colIndex == 0 && data < 0.3) {
                  return 'c0<0.3'
                } else if (colIndex == 3) {
                  if (data) {
                    return 'male'
                  } else {
                    return 'female'
                  }
                } else {
                  return 'rowStyle'
                }
              }
            },
            headers: [
              { label: 'c1', text: '**' },
              { label: 'c2', text: '++' },
              { label: 'c3', text: 'Name' },
              { label: 'c5', text: 'Gender' }
            ],
            data: [
              { c1: 0.756, c2: 150, c3: 'John', c5: 1 },
              { c1: 0.238, c2: 120, c3: 'Jane', c5: 0 },
              { c1: 0.865, c2: 180, c3: 'Michael', c5: 1 },
              { c1: 0.412, c2: 130, c3: 'Emily', c5: 0 },
              { c1: 0.587, c2: 160, c3: 'William', c5: 1 }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()

export const ex13 = (() => {
  function generateData() {
    const colorPalette = {
      c4: '61677A',
      c2: 'FFF6E0'
    }
    const rowAlignment = {
      alignment: {
        horizontal: 'left',
        vertical: 'center'
      }
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: '6A2C70',
      ...rowAlignment
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: '#FFFFFF'
    }
    return {
      imageFullName: 'ex14.PNG',
      colorPalette,
      url: 'https://colorhunt.co/',
      data: {
        addDefaultTitleStyle: true,
        creator: 'mr',
        styles: {
          'c0<0.3': {
            backgroundColor: 'DCD6F7',
            color: '424874s',
            ...rowAlignment
          },
          male: {
            backgroundColor: '95E1D3',
            color: '252A34',
            ...rowAlignment
          },
          female: {
            backgroundColor: 'F38181',
            color: '252A34',
            ...rowAlignment
          },
          rowStyle: {
            ...rowStyle
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            shiftTop: 1,
            shiftLeft: 1,
            title: {
              comment: 'This is comment on table',
              shiftTop: 1,
              shiftLeft: -1,
              consommeRow: 4,
              consommeCol: 6,
              text: 'Title'
            },
            commentCodition: function (data, object, headerKey, rowIndex, colIndex, fromHeader) {
              if (fromHeader) {
                let textDataC0 = data.text.charAt(0)
                if (textDataC0.toUpperCase() != textDataC0) {
                  return {
                    comment: `
Header should start with ${textDataC0.toUpperCase()}`,
                    author: 'System'
                  }
                }
              }
              return false
            },
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                if (colIndex == 0 && data < 0.3) {
                  return 'c0<0.3'
                } else if (colIndex == 3) {
                  if (data) {
                    return 'male'
                  } else {
                    return 'female'
                  }
                } else {
                  return 'rowStyle'
                }
              }
            },
            headers: [
              {
                label: 'c1',
                text: '**',
                comment: {
                  author: 'mr',
                  comment: 'misspell in header'
                }
              },
              { label: 'c2', text: '++' },
              { label: 'c3', text: 'Name' },
              { label: 'c5', text: 'gender' }
            ],
            data: [
              { c1: 0.756, c2: 150, c3: 'John', c5: 1 },
              {
                c1: 0.238,
                c2: 120,
                c3: 'Jane',
                c5: 0,
                comment: {
                  c3: 'Comment on Jane'
                }
              },
              { c1: 0.865, c2: 180, c3: 'Michael', c5: 1 },
              { c1: 0.412, c2: 130, c3: 'Emily', c5: 0 },
              { c1: 0.587, c2: 160, c3: 'William', c5: 1 }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()
export const ex15 = (() => {
  function generateData() {
    const t = { c4: '00ADB5', c2: '393E46' },
      n = { alignment: { horizontal: 'left', vertical: 'center' } },
      a = { backgroundColor: t.c2, fontFamily: 'Times New Roman', color: '6A2C70', ...n },
      l = { backgroundColor: t.c4, fontFamily: 'Times New Roman', color: '#000000' }
    return {
      imageFullName: 'ex16.PNG',
      colorPalette: t,
      url: 'https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70',
      data: {
        addDefaultTitleStyle: !0,
        creator: 'mr',
        styles: {
          col2: {
            color: '#F9ED69'
          },
          col1: {
            color: '#FF2E63'
          },
          title: {
            size: 48,
            backgroundColor: 'F9ED69',
            color: '6A2C70',
            alignment: { horizontal: 'center', vertical: 'center' }
          },
          t2: { color: 'F08A5D' },
          t1: { color: '555555' },
          'c0<0.3': { backgroundColor: 'DCD6F7', color: '424874s', ...n },
          male: { backgroundColor: '95E1D3', color: '252A34', ...n },
          female: { backgroundColor: 'F38181', color: '252A34', ...n },
          rowStyle: { ...a },
          headerStyle: { ...l }
        },
        sheet: [
          {
            useSplitBaseOnMatch: true,
            shiftTop: 1,
            shiftLeft: 1,
            title: {
              comment: 'This is comment on table',
              shiftTop: 1,
              shiftLeft: -1,
              consommeRow: 4,
              consommeCol: 6,
              multiStyleValue: {
                '+': 't1',
                '.': 't1',
                '|': 't1',
                '\\': 't1',
                reg: [{ reg: /t/gi, styleId: 't2' }]
              },
              styleId: 'title',
              text: 'Title 1'
            },
            multiStyleConditin: function (data, object, headerKey, rowIndex, colIndex, fromHeader) {
              if (fromHeader) {
                let charList = data.text.match(/./g)
                let result = charList.reduce(
                  (res, curr, index) => {
                    try {
                      new RegExp(curr)
                    } catch (error) {
                      curr = '\\' + curr
                    }
                    if (index % 2 == 0) {
                      res.result.reg.push({
                        reg: new RegExp('[' + curr + ']'),
                        styleId: 'col1'
                      })
                      return res
                    } else {
                      res.result.reg.push({
                        reg: new RegExp('[' + curr + ']'),
                        styleId: 'col2'
                      })
                      return res
                    }
                  },
                  { curr: '', result: { reg: [] } }
                )
                return result.result
              } else {
                let charList = data.match(/./g)
                let result = charList.reduce(
                  (res, curr, index) => {
                    try {
                      new RegExp(curr)
                    } catch (error) {
                      curr = '\\' + curr
                    }
                    if (index % 2 == 0) {
                      res.result.reg.push({
                        reg: new RegExp('[' + curr + ']'),
                        styleId: 'col1'
                      })
                      return res
                    } else {
                      res.result.reg.push({
                        reg: new RegExp('[' + curr + ']'),
                        styleId: 'col2'
                      })
                      return res
                    }
                  },
                  { curr: '', result: { reg: [] } }
                )

                return result.result
              }
            },
            commentCodition: function (o, r, i, s, u, c) {
              if (c) {
                let d = o.text.charAt(0)
                if (d.toUpperCase() != d)
                  return {
                    comment: `
Header should start with ${d.toUpperCase()}`,
                    author: 'System'
                  }
              }
              return !1
            },
            styleCellCondition(o, r, i, s, u) {
              return u
                ? 'headerStyle'
                : i == 0 && o < 0.3
                ? 'c0<0.3'
                : i == 3
                ? o
                  ? 'male'
                  : 'female'
                : 'rowStyle'
            },
            headers: [
              {
                label: 'c1',
                text: '**',
                comment: { author: 'mr', comment: 'misspell in header' }
              },
              { label: 'c2', text: '++' },
              {
                label: 'c3',
                text: 'Name',
                multiStyleValue: { N: 't1', a: 't2' }
              },
              { label: 'c5', text: 'gender' }
            ],
            data: [
              { c1: '0.756', c2: '150', c3: 'John', c5: '1' },
              {
                c1: '0.238',
                c2: '120',
                c3: 'Jane',
                c5: '0',
                comment: { c3: 'Comment on Jane' }
              },
              { c1: '0.865', c2: '180', c3: 'Michael', c5: '1' },
              { c1: '0.412', c2: '130', c3: 'Emily', c5: '0' },
              { c1: '0.587', c2: '160', c3: 'William', c5: '1' }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()
export const ex14 = (() => {
  function generateData() {
    const colorPalette = {
      c4: 'F7E987',
      c2: '5B9A8B'
    }
    const rowAlignment = {
      alignment: {
        horizontal: 'left',
        vertical: 'center'
      }
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: '6A2C70',
      ...rowAlignment
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: '#000000'
    }
    return {
      imageFullName: 'ex15.PNG',
      colorPalette,
      url: 'https://colorhunt.co/palette/f8ede3dfd3c3d0b8a885586f',
      data: {
        addDefaultTitleStyle: true,
        creator: 'mr',
        styles: {
          title: {
            size: 48,
            backgroundColor: 'E5BA73',
            alignment: {
              horizontal: 'center',
              vertical: 'center'
            }
          },
          t2: {
            size: 40,
            color: 'FFFFFF'
          },
          t1: {
            color: '555555'
          },
          'c0<0.3': {
            backgroundColor: 'DCD6F7',
            color: '424874s',
            ...rowAlignment
          },
          male: {
            backgroundColor: '95E1D3',
            color: '252A34',
            ...rowAlignment
          },
          female: {
            backgroundColor: 'F38181',
            color: '252A34',
            ...rowAlignment
          },
          rowStyle: {
            ...rowStyle
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            shiftTop: 1,
            shiftLeft: 1,
            title: {
              comment: 'This is comment on table',
              shiftTop: 1,
              shiftLeft: -1,
              consommeRow: 4,
              consommeCol: 6,
              multiStyleValue: {
                reg: [
                  {
                    reg: /t/gi,
                    styleId: 't2'
                  }
                ]
              },
              // height: 100,
              styleId: 'title',
              text: 'Title'
            },
            commentCodition: function (data, object, headerKey, rowIndex, colIndex, fromHeader) {
              if (fromHeader) {
                let textDataC0 = data.text.charAt(0)
                if (textDataC0.toUpperCase() != textDataC0) {
                  return {
                    comment: `
Header should start with ${textDataC0.toUpperCase()}`,
                    author: 'System'
                  }
                }
              }
              return false
            },
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                if (colIndex == 0 && data < 0.3) {
                  return 'c0<0.3'
                } else if (colIndex == 3) {
                  if (data) {
                    return 'male'
                  } else {
                    return 'female'
                  }
                } else {
                  return 'rowStyle'
                }
              }
            },
            headers: [
              {
                label: 'c1',
                text: '**',
                comment: {
                  author: 'mr',
                  comment: 'misspell in header'
                }
              },
              {
                label: 'c2',
                text: '++'
              },
              {
                label: 'c3',
                text: 'Name',
                multiStyleValue: {
                  N: 't1',
                  a: 't2'
                }
              },
              { label: 'c5', text: 'gender' }
            ],
            data: [
              { c1: 0.756, c2: 150, c3: 'John', c5: 1 },
              {
                c1: 0.238,
                c2: 120,
                c3: 'Jane',
                c5: 0,
                comment: {
                  c3: 'Comment on Jane'
                }
              },
              { c1: 0.865, c2: 180, c3: 'Michael', c5: 1 },
              { c1: 0.412, c2: 130, c3: 'Emily', c5: 0 },
              { c1: 0.587, c2: 160, c3: 'William', c5: 1 }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()

export const ex16 = (() => {
  function generateData() {
    return {
      imageFullName: 'ex17.PNG',
      data: {
        creator: 'mr',
        sheet: [
          {
            images: [
              {
                url: '/mr-excel-page/img/ezgif.com-gif-maker.gif',
                from: 'H1',
                type: 'one'
              },
              {
                url: '/mr-excel-page/img/uniqe.jpg',
                from: 'H2',
                type: 'one'
              },

              {
                url: '/mr-excel-page/img/ex.PNG',
                from: 'H3',
                type: 'onde'
              },
              {
                url: '/mr-excel-page/img/ex.PNG',
                from: 'H4',
                type: 'two'
              },
              {
                url: '/mr-excel-page/img/ezgif.com-gif-maker.gif',
                from: 'E1',
                to: 'F10',
                type: 'two'
              },
              {
                url: '/mr-excel-page/img/uniqe.jpg',
                from: 'H6',
                type: 'two'
              }
            ],

            headers: [
              {
                label: 'Name',
                text: 'Name'
              },
              { label: 'Color', text: 'Color' },
              { label: 'Size', text: 'Size' },
              { label: 'Price', text: 'Price' }
            ],
            data: [
              {
                Name: 'Rose',
                Color: 'Red',
                Size: 'Medium',
                Price: 5.99
              },
              {
                Name: 'Tulip',
                Color: 'Yellow',
                Size: 'Small',
                Price: 2.49
              },
              {
                Name: 'Daisy',
                Color: 'White',
                Size: 'Small',
                Price: 1.99
              },
              {
                Name: 'Sunflower',
                Color: 'Yellow',
                Size: 'Large',
                Price: 4.99
              },
              {
                Name: 'Lily',
                Color: 'Pink',
                Size: 'Medium',
                Price: 3.99
              },
              {
                Name: 'Daffodil',
                Color: 'Yellow',
                Size: 'Small',
                Price: 2.49
              },
              {
                Name: 'Orchid',
                Color: 'Purple',
                Size: 'Medium',
                Price: 6.99
              },
              {
                Name: 'Carnation',
                Color: 'Red',
                Size: 'Small',
                Price: 1.99
              },
              {
                Name: 'Hyacinth',
                Color: 'Blue',
                Size: 'Medium',
                Price: 4.49
              },
              {
                Name: 'Pansy',
                Color: 'Purple',
                Size: 'Small',
                Price: 2.99
              }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()
export const ex12 = (() => {
  return {
    imageFullName: 'ex12.PNG',
    str: `ExcelTable.convertTableToExcel('#table',null,true)`,
    mode: 'convert',
    query: '#table',
    keepStyle: true
  }
})()

export const ex = {
  imageFullName: 'ex.PNG',
  data: {
    sheet: [
      {
        headers: [
          {
            label: 'name',
            text: 'Name'
          },
          {
            label: 'age',
            text: 'Age'
          }
        ],
        data: [
          {
            name: 'Alice',
            age: 25
          },
          {
            name: 'Bob',
            age: 30
          }
        ]
      },
      {
        headers: [
          {
            label: 'item',
            text: 'Item'
          },
          {
            label: 'quantity',
            text: 'Quantity'
          }
        ],
        data: [
          {
            item: 'Apples',
            quantity: 50
          },
          {
            item: 'Bananas',
            quantity: 30
          }
        ]
      }
    ]
  }
}
export const ex1 = (function () {
  function generateData() {
    const colorPalette = {
      c1: 'F9ED69',
      c2: '#F08A5D',
      c3: 'B83B5E',
      c4: '6A2C70'
    }
    const data = {
      creator: 'mr',
      created: '2023-08-06T07:22:40Z',
      modified: '2023-08-06T07:22:40Z',
      styles: {
        formulaStyle: {
          backgroundColor: colorPalette.c3,
          border: {
            full: {
              style: 'medium',
              color: colorPalette.c1
            }
          }
        },
        headerStyle: {
          backgroundColor: colorPalette.c1,
          color: colorPalette.c2,
          bold: true
        },
        rowStyle: {
          backgroundColor: colorPalette.c2,
          color: colorPalette.c1
        }
      },
      sheet: [
        {
          name: 'Test',
          formula: {
            B16: {
              type: 'SUM',
              start: 'B2',
              end: 'B8',
              styleId: 'formulaStyle'
            }
          },
          styleCellCondition: function (dataM, fullData, colIndex, rowIndex, fromHeader) {
            if (fromHeader) {
              return 'headerStyle'
            } else {
              return 'rowStyle'
            }
          },
          tabColor: colorPalette.c3,
          headers: [
            {
              label: 'test',
              text: 'Test'
            },
            {
              label: '_id',
              text: 'ID',
              formula: {
                type: 'MAX',
                styleId: 'formulaStyle'
              }
            }
          ],
          data: [
            {
              _id: 0.3,
              test: 'test1'
            },
            {
              _id: 2,
              test: 'dsssssssssssss'
            },
            {
              _id: 3,
              test: 'test3'
            },
            {
              _id: 4,
              test: 'test4'
            },
            {
              _id: 5,
              test: 'test5'
            },
            {
              _id: 6,
              test: 'test6'
            },
            {
              _id: 7,
              test: 'test7'
            },
            {
              _id: 8,
              test: 'test8'
            },
            {
              _id: 9,
              test: 'test9'
            },
            {
              _id: 10,
              test: 'test10'
            },
            {
              _id: 11,
              test: 'test11'
            }
          ]
        },
        {
          headers: [
            {
              label: 'test',
              text: 'Test'
            },
            {
              label: '_id',
              text: 'ID'
            }
          ],
          data: [
            {
              _id: 1,
              test: 'test1'
            },
            {
              _id: 2,
              test: 'test2'
            },
            {
              _id: 3,
              test: 'test3'
            },
            {
              _id: 4,
              test: 'test4'
            },
            {
              _id: 5,
              test: 'test5'
            },
            {
              _id: 6,
              test: 'test6'
            },
            {
              _id: 7,
              test: 'test7'
            },
            {
              _id: 8,
              test: 'test8'
            },
            {
              _id: 9,
              test: 'test9'
            },
            {
              _id: 10,
              test: 'test10'
            },
            {
              _id: 11,
              test: 'test11'
            }
          ]
        }
      ]
    }
    return {
      colorPalette,
      data,
      imageFullName: 'ex1.PNG',
      url: 'https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70'
    }
  }
  return {
    ...generateData(),
    str: generateData.toString()
    // ex1Img,
  }
})()
export const ex2 = {
  imageFullName: 'ex2.PNG',
  data: {
    notSave: true,
    creator: 'mr',
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
    sheet: [
      {
        name: 'family record',
        tabColor: '#a1b4c6',
        sortAndfilter: {
          mode: 'all'
        },
        protectionOption: {
          sheet: 1,
          formatCells: 0,
          formatColumns: 0,
          formatRows: 0,
          insertColumns: 0,
          insertRows: 0,
          insertHyperlinks: 0,
          deleteColumns: 0,
          deleteRows: 0,
          sort: 0,
          autoFilter: 0,
          pivotTables: 0
        },
        headers: [
          {
            label: 'id',
            text: 'ID'
          },
          {
            label: 'name',
            text: 'Name'
          },
          {
            label: 'surname',
            text: 'Surname'
          },
          {
            label: 'parentId',
            text: 'Parent Id'
          },
          {
            label: 'work',
            text: 'Work'
          },
          {
            label: 'birthDate',
            text: 'Birth Date'
          }
        ],
        data: dataset.slice(0, 10)
      },
      {
        state: 'hidden',
        headers: [
          {
            label: 'id',
            text: 'ID'
          },
          {
            label: 'name',
            text: 'Name'
          },
          {
            label: 'surname',
            text: 'Surname'
          },
          {
            label: 'parentId',
            text: 'Parent Id'
          },
          {
            label: 'work',
            text: 'Work'
          },
          {
            label: 'birthDate',
            text: 'Birth Date'
          }
        ],
        data: dataset
      }
    ]
  }
}
export const ex3 = (() => {
  function generateData() {
    const colorPalette = {
      c1: '08D9D6',
      c2: '252A34',
      c3: 'FF2E63',
      c4: 'EAEAEA'
    }
    return {
      imageFullName: 'ex3.PNG',
      url: 'https://colorhunt.co/palette/08d9d6252a34ff2e63eaeaea',
      colorPalette,
      data: {
        creator: 'mr',
        styles: {
          headerStyle: {
            backgroundColor: colorPalette.c2,
            fontFamily: 'Times New Roman',
            color: colorPalette.c4,
            size: 20
          },
          formulaStyle: {
            backgroundColor: colorPalette.c1,
            fontFamily: 'Times New Roman',
            color: colorPalette.c3,
            size: 15
          }
        },
        sheet: [
          {
            headerStyleKey: 'headerStyle',
            headerHeight: 30,
            headers: [
              {
                label: 'id',
                text: 'ID',
                size: 20,
                formula: {
                  type: 'COUNT',
                  styleId: 'formulaStyle'
                }
              },
              {
                label: 'name',
                text: 'Name',
                size: 20
              },
              {
                label: 'surname',
                text: 'Surname',
                size: 20
              },
              {
                label: 'parentId',
                text: 'Parent Id',
                size: 20
              },
              {
                label: 'work',
                text: 'Work',
                size: 20
              },
              {
                label: 'birthDate',
                text: 'Birth Date',
                size: 30
              }
            ],
            data: dataset.slice(0, 10)
          },
          {
            withoutHeader: true,
            headerStyleKey: 'headerStyle',
            // headerHeight: 100,
            headers: [
              {
                label: 'id',
                text: 'ID',
                size: 70,
                formula: {
                  type: 'COUNT',
                  styleId: 'formulaStyle'
                }
              },
              {
                label: 'name',
                text: 'Name',
                size: 12
              },
              {
                label: 'surname',
                text: 'Surname',
                size: 70
              },
              {
                label: 'parentId',
                text: 'Parent Id',
                size: 100
              },
              {
                label: 'work',
                text: 'Work',
                size: 100
              },
              {
                label: 'birthDate',
                text: 'Birth Date',
                size: 100
              }
            ],
            data: dataset.slice(0, 10)
          }
        ]
      }
    }
  }
  return {
    ...generateData(),
    str: generateData.toString()
  }
})()
export const ex4 = (() => {
  function generateData() {
    const colorPalette = {
      c1: '2B2E4A',
      c2: 'E84545',
      c3: '903749',
      c4: '53354A'
    }
    return {
      url: 'https://colorhunt.co/palette/2b2e4ae8454590374953354a',
      imageFullName: 'ex4.PNG',
      colorPalette,
      data: {
        creator: 'mr',
        styles: {
          headerStyle: {
            backgroundColor: colorPalette.c1,
            fontFamily: 'Times New Roman',
            color: colorPalette.c2
            // size: 20
          },
          customFormulaStyle: {
            backgroundColor: colorPalette.c2,
            fontFamily: 'Times New Roman',
            color: colorPalette.c1,
            size: 15,
            border: {
              full: {
                color: colorPalette.c4,
                style: 'dashDot'
              }
            }
          },
          formulaStyle: {
            backgroundColor: colorPalette.c1,
            fontFamily: 'Times New Roman',
            color: colorPalette.c2,
            size: 15,
            border: {
              full: {
                color: colorPalette.c3,
                style: 'medium'
              }
            }
          }
        },
        sheet: [
          {
            formula: {
              A8: {
                type: 'SUM',
                start: 'B2',
                end: 'D3',
                styleId: 'customFormulaStyle'
              },
              B8: {
                type: 'AVERAGE',
                start: 'A2',
                end: 'F6',
                styleId: 'customFormulaStyle'
              },
              C8: { type: 'SUM', start: 'A2', end: 'F6', styleId: 'customFormulaStyle' },
              D8: { type: 'MAX', start: 'A2', end: 'F6', styleId: 'customFormulaStyle' },
              E8: { type: 'MIN', start: 'A2', end: 'F6', styleId: 'customFormulaStyle' },
              F8: { type: 'COUNT', start: 'A2', end: 'F6', styleId: 'customFormulaStyle' }
            },
            headerStyleKey: 'headerStyle',
            headers: [
              { label: 'Date', text: 'Date', formula: { styleId: 'formulaStyle', type: 'COUNT' } },
              {
                label: 'Column 1',
                text: 'Column 1',
                formula: { styleId: 'formulaStyle', type: 'AVERAGE' }
              },
              {
                label: 'Column 2',
                text: 'Column 2',
                formula: { styleId: 'formulaStyle', type: 'SUM' }
              },
              {
                label: 'Column 3',
                text: 'Column 3',
                formula: { styleId: 'formulaStyle', type: 'MAX' }
              },
              {
                label: 'Column 4',
                text: 'Column 4',
                formula: { styleId: 'formulaStyle', type: 'MIN' }
              },
              {
                label: 'Column 5',
                text: 'Column 5',
                formula: { styleId: 'formulaStyle', type: 'COUNT' }
              }
            ],
            data: [
              {
                Date: '2023-08-01',
                'Column 1': 5,
                'Column 2': 10,
                'Column 3': 15,
                'Column 4': 20,
                'Column 5': 25
              },
              {
                Date: '2023-08-02',
                'Column 1': 7,
                'Column 2': 14,
                'Column 3': 21,
                'Column 4': 28,
                'Column 5': 35
              },
              {
                Date: '2023-08-03',
                'Column 1': 3,
                'Column 2': 6,
                'Column 3': 9,
                'Column 4': 12,
                'Column 5': 15
              },
              {
                Date: '2023-08-04',
                'Column 1': 12,
                'Column 2': 24,
                'Column 3': 36,
                'Column 4': 48,
                'Column 5': 60
              },
              {
                Date: '2023-08-05',
                'Column 1': 8,
                'Column 2': 16,
                'Column 3': 24,
                'Column 4': 32,
                'Column 5': 40
              }
            ]
          }
        ]
      }
    }
  }
  return {
    ...generateData(),
    srs: generateData.toString()
  }
})()
export const ex5 = (() => {
  function generateData() {
    const colorPalette = {
      c1: '2C3639',
      c2: '3F4E4F',
      c3: 'A27B5C',
      c4: 'DCD7C9'
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: colorPalette.c4
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: colorPalette.c2
    }
    return {
      url: 'https://colorhunt.co/palette/ffcfdffefdcae0f9b5a5dee5',
      imageFullName: 'ex5.PNG',
      colorPalette,
      data: {
        creator: 'mr',
        styles: {
          Date: {
            ...rowStyle,
            format: 'short_date'
          },
          Time: {
            ...rowStyle,
            format: 'time'
          },
          Percentage: {
            ...rowStyle,
            format: 'percentage'
          },
          Float: {
            ...rowStyle,
            format: 'float_2',
            alignment: {
              horizontal: 'left'
            }
          },
          Fraction: {
            ...rowStyle,
            format: 'fraction'
          },
          'Long Number Column 1': {
            ...rowStyle,
            format: 'dollar_2',
            alignment: {
              indent: 3,
              rtl: true,
              horizontal: 'left'
            }
          },
          'Long Number Column 2': {
            ...rowStyle,
            format: 'num_sep',
            alignment: {
              ltr: true,
              horizontal: 'left'
            }
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                if (colIndex == 0) {
                  return 'Date'
                } else if (colIndex == 1) {
                  return 'Time'
                } else if (colIndex == 2) {
                  return 'Percentage'
                } else if (colIndex == 3) {
                  return 'Float'
                } else if (colIndex == 4) {
                  return 'Fraction'
                } else if (colIndex == 5) {
                  return 'Long Number Column 1'
                } else {
                  return 'Long Number Column 2'
                }
              }
            },
            headers: [
              { label: 'Date', text: 'Date' },
              { label: 'Time', text: 'Time' },
              { label: 'Percentage', text: 'Percentage' },
              { label: 'Float', text: 'Float' },
              { label: 'Fraction', text: 'Fraction' },
              { label: 'Long Number Column 1', text: 'Long Number Column 1', size: 50 },
              { label: 'Long Number Column 2', text: 'Long Number Column 2', size: 50 }
            ],
            data: [
              {
                Date: '2023-08-01',
                Time: '09:00 AM',
                Percentage: 0.7525,
                Float: 0.7525,
                Fraction: '1/4',
                'Long Number Column 1': 123456789012345,
                'Long Number Column 2': 987654321098765
              },
              {
                Date: '2023-08-02',
                Time: '02:30 PM',
                Percentage: 0.4275,
                Float: 0.4275,
                Fraction: '3/8',
                'Long Number Column 1': 456789012345678,
                'Long Number Column 2': 876543210987654
              },
              {
                Date: '2023-08-03',
                Time: '10:45 AM',
                Percentage: 0.955,
                Float: 0.955,
                Fraction: '5/6',
                'Long Number Column 1': 789012345678901,
                'Long Number Column 2': 765432109876543
              },
              {
                Date: '2023-08-04',
                Time: '04:15 PM',
                Percentage: 0.2875,
                Float: 0.2875,
                Fraction: '2/7',
                'Long Number Column 1': 123450987654321,
                'Long Number Column 2': 654321098765432
              },
              {
                Date: '2023-08-05',
                Time: '08:20 AM',
                Percentage: 0.6,
                Float: 0.6,
                Fraction: '4/5',
                'Long Number Column 1': 543210987654321,
                'Long Number Column 2': 543210987654321
              }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()
export const ex6 = (() => {
  function generateData() {
    const colorPalette = {
      c1: 'DBE2EF',
      c2: '112D4E',
      c4: 'F9F7F7'
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: colorPalette.c4,
      border: {
        full: {
          style: 'medium',
          color: colorPalette.c1
        }
      },
      alignment: {
        horizontal: 'left',
        vertical: 'top'
      }
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: colorPalette.c2
    }
    const merge = []
    let mergeStart = false
    return {
      url: 'https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e',
      imageFullName: 'ex6.PNG',
      colorPalette,
      data: {
        creator: 'mr',
        styles: {
          Date: {
            ...rowStyle,
            format: 'short_date'
          },
          Time: {
            ...rowStyle,
            format: 'time'
          },
          Percentage: {
            ...rowStyle,
            format: 'percentage'
          },
          Float: {
            ...rowStyle,
            format: 'float_2'
          },
          Fraction: {
            ...rowStyle,
            format: 'fraction'
          },
          'Long Number Column 1': {
            ...rowStyle,
            format: 'dollar_2'
          },
          'Long Number Column 2': {
            ...rowStyle,
            format: 'num_sep'
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            mergeRowDataCondition(data, key, index, fromHeader) {
              if (fromHeader) {
                return false
              } else {
                if (mergeStart) {
                  if (merge[key] == data) {
                    return true
                  } else {
                    merge[key] = data
                    return false
                  }
                } else {
                  mergeStart = true
                  merge[key] = data
                  return true
                }
              }
            },
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                if (colIndex == 0) {
                  return 'Date'
                } else if (colIndex == 1) {
                  return 'Time'
                } else if (colIndex == 2) {
                  return 'Percentage'
                } else if (colIndex == 3) {
                  return 'Float'
                } else if (colIndex == 4) {
                  return 'Fraction'
                } else if (colIndex == 5) {
                  return 'Long Number Column 1'
                } else {
                  return 'Long Number Column 2'
                }
              }
            },
            headers: [
              { label: 'Date', text: 'Date' },
              { label: 'Time', text: 'Time' },
              { label: 'Percentage', text: 'Percentage' },
              { label: 'Float', text: 'Float' },
              { label: 'Fraction', text: 'Fraction' },
              { label: 'Long Number Column 1', text: 'Long Number Column 1', size: 50 },
              { label: 'Long Number Column 2', text: 'Long Number Column 2', size: 50 }
            ],
            data: [
              {
                Date: '2023-08-01',
                Time: '09:00 AM',
                Percentage: 0.7525,
                Float: 0.7525,
                Fraction: '1/4',
                'Long Number Column 1': 123456789012345,
                'Long Number Column 2': 987654321098765
              },
              {
                Date: '2023-08-01',
                Time: '02:30 PM',
                Percentage: 0.4275,
                Float: 0.4275,
                Fraction: '3/8',
                'Long Number Column 1': 123456789012345,
                'Long Number Column 2': 876543210987654
              },
              {
                Date: '2023-08-03',
                Time: '10:45 AM',
                Percentage: 0.955,
                Float: 0.955,
                Fraction: '5/6',
                'Long Number Column 1': 789012345678901,
                'Long Number Column 2': 765432109876543
              },
              {
                Date: '2023-08-04',
                Time: '04:15 PM',
                Percentage: 0.2875,
                Float: 0.2875,
                Fraction: '2/7',
                'Long Number Column 1': 123450987654321,
                'Long Number Column 2': 654321098765432
              },
              {
                Date: '2023-08-05',
                Time: '08:20 AM',
                Percentage: 0.6,
                Float: 0.6,
                Fraction: '4/5',
                'Long Number Column 1': 543210987654321,
                'Long Number Column 2': 543210987654321
              },
              {
                Date: '2023-08-05',
                Time: '08:20 AM',
                Percentage: 0.6,
                Float: 0.6,
                Fraction: '4/5',
                'Long Number Column 1': 543210987654321,
                'Long Number Column 2': 543210987654321
              },
              {
                Date: '2023-08-05',
                Time: '08:20 AM',
                Percentage: 0.6,
                Float: 0.61,
                Fraction: '4/5',
                'Long Number Column 1': 543210987654321,
                'Long Number Column 2': 543210987654321
              }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()
export const ex7 = (() => {
  function generateData() {
    const colorPalette = {
      c4: 'FCD1D1',
      c2: 'AEE1E1'
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: '112D4E',
      alignment: {
        horizontal: 'left',
        vertical: 'top'
      }
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: '112D4E'
    }
    return {
      imageFullName: 'ex7.PNG',
      colorPalette,
      url: 'https://colorhunt.co/palette/fcd1d1ece2e1d3e0dcaee1e1',
      data: {
        creator: 'mr',
        styles: {
          rowStyle: {
            ...rowStyle
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                return 'rowStyle'
              }
            },
            headers: [
              { label: 'ID', text: 'ID' },
              { label: 'Name', text: 'Name' },
              { label: 'Column 1', text: 'Column 1' },
              { label: 'Column 2', text: 'Column 2' },
              { label: 'Column 3', text: 'Column 3' },
              { label: 'Column 4', text: 'Column 4' },
              { label: 'Column 5', text: 'Column 5' }
            ],
            data: [
              {
                ID: 1,
                Name: 'Category A',
                'Column 1': 10,
                'Column 2': 20,
                'Column 3': 30,
                'Column 4': 40,
                'Column 5': 50,
                outlineLevel: 1
              },
              {
                ID: 2,
                Name: 'Item 1',
                'Column 1': 5,
                'Column 2': 10,
                'Column 3': 15,
                'Column 4': 20,
                'Column 5': 25,
                outlineLevel: 2
              },
              {
                ID: 3,
                Name: 'Item 2',
                'Column 1': 3,
                'Column 2': 6,
                'Column 3': 9,
                'Column 4': 12,
                'Column 5': 15,
                outlineLevel: 2
              },
              {
                ID: 4,
                Name: 'Item 3',
                'Column 1': 2,
                'Column 2': 4,
                'Column 3': 6,
                'Column 4': 8,
                'Column 5': 10,
                outlineLevel: 2
              },
              {
                ID: 5,
                Name: 'Category B',
                'Column 1': 20,
                'Column 2': 40,
                'Column 3': 60,
                'Column 4': 80,
                'Column 5': 100,
                outlineLevel: 1
              },
              {
                ID: 6,
                Name: 'Item 1',
                'Column 1': 10,
                'Column 2': 20,
                'Column 3': 30,
                'Column 4': 40,
                'Column 5': 50,
                hidden: 1,
                outlineLevel: 2
              },
              {
                ID: 7,
                Name: 'Item 2',
                'Column 1': 6,
                'Column 2': 12,
                'Column 3': 18,
                'Column 4': 24,
                'Column 5': 30,
                hidden: 1,
                outlineLevel: 2
              },
              {
                ID: 8,
                Name: 'Item 3',
                'Column 1': 4,
                'Column 2': 8,
                'Column 3': 12,
                'Column 4': 16,
                'Column 5': 20,
                hidden: 1,
                outlineLevel: 2
              },
              {
                ID: 9,
                Name: 'Category C',
                'Column 1': 30,
                'Column 2': 60,
                'Column 3': 90,
                'Column 4': 120,
                'Column 5': 150,
                outlineLevel: 1
              },
              {
                ID: 10,
                Name: 'Item 1',
                'Column 1': 15,
                'Column 2': 30,
                'Column 3': 45,
                'Column 4': 60,
                'Column 5': 75,
                outlineLevel: 2
              },
              {
                ID: 11,
                Name: 'Item 2',
                'Column 1': 9,
                'Column 2': 18,
                'Column 3': 27,
                'Column 4': 36,
                'Column 5': 45,
                outlineLevel: 2
              },
              {
                ID: 12,
                Name: 'Item 3',
                'Column 1': 6,
                'Column 2': 12,
                'Column 3': 18,
                'Column 4': 24,
                'Column 5': 30,
                outlineLevel: 2
              },
              {
                ID: 13,
                Name: 'Summary',
                'Column 1': 60,
                'Column 2': 120,
                'Column 3': 180,
                'Column 4': 240,
                'Column 5': 300,
                outlineLevel: 3
              }
            ]
          }
        ]
      }
    }
  }
  return {
    ...generateData(),
    str: generateData.toString()
  }
})()
export const ex8 = (() => {
  function generateData() {
    const colorPalette = {
      c4: 'F08A5D',
      c2: 'F9ED69'
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: '6A2C70',
      alignment: {
        horizontal: 'left',
        vertical: 'center'
      }
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: '6A2C70'
    }
    return {
      imageFullName: 'ex8.PNG',
      colorPalette,
      url: 'https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70',
      data: {
        creator: 'mr',
        mapSheetDataOption: {
          hidden: 'notShow',
          height: 'h',
          outlineLevel: 'group'
        },
        styles: {
          rowStyle: {
            ...rowStyle
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                return 'rowStyle'
              }
            },
            headers: [
              { label: 'ID', text: 'ID' },
              { label: 'Name', text: 'Name' },
              { label: 'Column 1', text: 'Column 1' },
              { label: 'Column 2', text: 'Column 2' },
              { label: 'Column 3', text: 'Column 3' },
              { label: 'Column 4', text: 'Column 4' },
              { label: 'Column 5', text: 'Column 5' }
            ],
            data: [
              {
                ID: 1,
                Name: 'Category A',
                'Column 1': 10,
                'Column 2': 20,
                'Column 3': 30,
                'Column 4': 40,
                'Column 5': 50,
                h: 30,
                group: 1
              },
              {
                ID: 2,
                Name: 'Item 1',
                'Column 1': 5,
                'Column 2': 10,
                'Column 3': 15,
                'Column 4': 20,
                'Column 5': 25,
                h: 30,
                group: 2
              },
              {
                ID: 3,
                Name: 'Item 2',
                'Column 1': 3,
                'Column 2': 6,
                'Column 3': 9,
                'Column 4': 12,
                'Column 5': 15,
                h: 30,
                group: 2
              },
              {
                ID: 4,
                Name: 'Item 3',
                'Column 1': 2,
                'Column 2': 4,
                'Column 3': 6,
                'Column 4': 8,
                'Column 5': 10,
                h: 30,
                group: 2
              },
              {
                ID: 5,
                Name: 'Category B',
                'Column 1': 20,
                'Column 2': 40,
                'Column 3': 60,
                'Column 4': 80,
                'Column 5': 100,
                h: 30,
                group: 1
              },
              {
                ID: 6,
                Name: 'Item 1',
                'Column 1': 10,
                'Column 2': 20,
                'Column 3': 30,
                'Column 4': 40,
                'Column 5': 50,
                notShow: 1,
                h: 30,
                group: 2
              },
              {
                ID: 7,
                Name: 'Item 2',
                'Column 1': 6,
                'Column 2': 12,
                'Column 3': 18,
                'Column 4': 24,
                'Column 5': 30,
                notShow: 1,
                h: 30,
                group: 2
              },
              {
                ID: 8,
                Name: 'Item 3',
                'Column 1': 4,
                'Column 2': 8,
                'Column 3': 12,
                'Column 4': 16,
                'Column 5': 20,
                notShow: 1,
                h: 30,
                group: 2
              },
              {
                ID: 9,
                Name: 'Category C',
                'Column 1': 30,
                'Column 2': 60,
                'Column 3': 90,
                'Column 4': 120,
                'Column 5': 150,
                h: 30,
                group: 1
              },
              {
                ID: 10,
                Name: 'Item 1',
                'Column 1': 15,
                'Column 2': 30,
                'Column 3': 45,
                'Column 4': 60,
                'Column 5': 75,
                h: 30,
                group: 2
              },
              {
                ID: 11,
                Name: 'Item 2',
                'Column 1': 9,
                'Column 2': 18,
                'Column 3': 27,
                'Column 4': 36,
                'Column 5': 45,
                h: 30,
                group: 2
              },
              {
                ID: 12,
                Name: 'Item 3',
                'Column 1': 6,
                'Column 2': 12,
                'Column 3': 18,
                'Column 4': 24,
                'Column 5': 30,
                h: 30,
                group: 2
              },
              {
                ID: 13,
                Name: 'Summary',
                'Column 1': 60,
                'Column 2': 120,
                'Column 3': 180,
                'Column 4': 240,
                'Column 5': 300,
                h: 30,
                group: 3
              }
            ]
          }
        ]
      }
    }
  }
  return {
    ...generateData(),
    str: generateData.toString()
  }
})()
export const ex9 = (() => {
  function generateData() {
    const colorPalette = {
      c4: '2B2E4A',
      c2: 'E84545'
    }
    const rowAlignment = {
      alignment: {
        horizontal: 'left',
        vertical: 'center'
      }
    }
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: 'Times New Roman',
      color: '6A2C70',
      ...rowAlignment
    }
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: 'Times New Roman',
      color: '#FFFFFF'
    }
    return {
      imageFullName: 'ex9.PNG',
      colorPalette,
      url: 'https://colorhunt.co/palette/2b2e4ae8454590374953354a',
      data: {
        creator: 'mr',
        styles: {
          'c0<0.3': {
            backgroundColor: 'DCD6F7',
            color: '424874s',
            ...rowAlignment
          },
          male: {
            backgroundColor: '95E1D3',
            color: '252A34',
            ...rowAlignment
          },
          female: {
            backgroundColor: 'F38181',
            color: '252A34',
            ...rowAlignment
          },
          rowStyle: {
            ...rowStyle
          },
          headerStyle: {
            ...headerStyle
          }
        },
        sheet: [
          {
            styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
              if (fromHeader) {
                return 'headerStyle'
              } else {
                if (colIndex == 0 && data < 0.3) {
                  return 'c0<0.3'
                } else if (colIndex == 3) {
                  if (data) {
                    return 'male'
                  } else {
                    return 'female'
                  }
                } else {
                  return 'rowStyle'
                }
              }
            },
            headers: [
              { label: 'c1', text: '**' },
              { label: 'c2', text: '++' },
              { label: 'c3', text: 'Name' },
              { label: 'c5', text: 'Gender' }
            ],
            data: [
              { c1: 0.756, c2: 150, c3: 'John', c5: 1 },
              { c1: 0.238, c2: 120, c3: 'Jane', c5: 0 },
              { c1: 0.865, c2: 180, c3: 'Michael', c5: 1 },
              { c1: 0.412, c2: 130, c3: 'Emily', c5: 0 },
              { c1: 0.587, c2: 160, c3: 'William', c5: 1 }
            ]
          }
        ]
      }
    }
  }
  return {
    str: generateData.toString(),
    ...generateData()
  }
})()
