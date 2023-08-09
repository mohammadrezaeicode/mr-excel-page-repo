export const ex1 = (function () {
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
        fg: colorPalette.c3,
        border: {
          full: {
            style: 'medium',
            color: colorPalette.c1
          }
        }
      },
      headerStyle: {
        fg: colorPalette.c1,
        fontColor: colorPalette.c2,
        bold: true
      },
      rowStyle: {
        fg: colorPalette.c2,
        fontColor: colorPalette.c1
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
        styleCellCondition: function (dataM, fullData, colIndex, rowIndex, fromHeader, stylekeys) {
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
    url: 'https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70'
  }
})()
