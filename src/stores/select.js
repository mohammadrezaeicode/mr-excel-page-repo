// import { ref } from 'vue'
import { defineStore } from 'pinia'
const listOfNavItems = [
  [
    {
      name: 'Interduction',
      childs: [
        { name: 'Installation', mainId: 0, href: '#installation' },
        { name: 'Using a Package Manager', mainId: 1, href: '#using-a-package-manager' },
        { name: 'Getting Started', mainId: 2, href: '#getting-started' }
      ]
    }
  ],
  [
    {
      name: 'Examples',
      childs: [
        { mainId: 0, href: '#general-option', name: 'General Option' },
        { mainId: 1, href: '#header-option', name: 'Header Option' },
        { mainId: 2, href: '#formula-option', name: 'Formula Option' },
        { mainId: 3, href: '#styles-format-options', name: 'Styles & Format Options' },
        { mainId: 4, href: '#merging-cells-options', name: 'Merging Cells Options' },
        { mainId: 5, href: '#group-rows-options', name: 'Group Rows Options' },
        {
          mainId: 6,
          href: '#new-feature',
          name: 'New Feaure',
          childs: [
            {
              mainId: 7,
              href: '#shift-title',
              name: 'Shift & Title option'
            },
            { mainId: 8, href: '#convert-table', name: 'Convert tabale to excel' },
            { mainId: 9, href: '#comment', name: 'Comment Option' },
            { mainId: 10, href: '#mstyle', name: 'Multi Style value Option' },
            { mainId: 11, href: '#images', name: 'Images Option' }
          ]
        },
        {
          mainId: 12,
          href: '#complex-options',
          name: 'Complex Options',
          childs: [
            {
              mainId: 13,
              href: '#adjusting-key-properties-and-row-height',
              name: 'Adjusting Key Properties and Row Height'
            },
            { mainId: 14, href: '#conditional-styling', name: 'Conditional Styling' }
          ]
        }
      ]
    }
  ],
  [
    {
      name: 'API',
      childs: [
        { mainId: 0, href: '#excel-table-object', name: 'ExcelTable Object' },
        { mainId: 1, href: '#styles-object', name: 'Styles Object' },
        { mainId: 2, href: '#sheet-object', name: 'Sheet Object' },
        { mainId: 3, href: '#border-object', name: 'Border Object' },
        { mainId: 4, href: '#formula-object', name: 'Formula Object' },
        { mainId: 5, href: '#alignment-options', name: 'Alignment Object' },
        { mainId: 6, href: '#side-by-side', name: 'Side by Side / Line by Line Object' }
      ]
    }
  ]
]
export const useSelectStore = defineStore({
  id: 'select',
  state: () => ({
    navItems: [],
    navIndex: -1,
    selected: 0
  }),

  getters: {
    selectedV(state) {
      return state.selected
    }
  },
  actions: {
    setNavBar(num) {
      this.navIndex = num
      this.navItems = listOfNavItems[num]
    },
    setSelect(num) {
      this.selected = num
    }
  }
})
