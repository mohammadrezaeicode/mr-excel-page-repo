// import { ref } from 'vue'
import { defineStore } from 'pinia'
const listOfNavItems = [
  [
    {
      name: 'Interduction',
      childs: [
        { name: 'Installation', href: '#installation' },
        { name: 'Using a Package Manager', href: '#using-a-package-manager' },
        { name: 'Getting Started', href: '#getting-started' }
      ]
    }
  ],
  [
    {
      name: 'Examples',
      childs: [
        { href: '#general-option', name: 'General Option' },
        { href: '#header-option', name: 'Header Option' },
        { href: '#formula-option', name: 'Formula Option' },
        { href: '#styles-format-options', name: 'Styles & Format Options' },
        { href: '#merging-cells-options', name: 'Merging Cells Options' },
        { href: '#group-rows-options', name: 'Group Rows Options' },
        {
          href: '#complex-options',
          name: 'Complex Options',
          childs: [
            {
              href: '#adjusting-key-properties-and-row-height',
              name: 'Adjusting Key Properties and Row Height'
            },
            { href: '#conditional-styling', name: 'Conditional Styling' }
          ]
        }
      ]
    }
  ],
  [
    {
      name: 'API',
      childs: [
        { href: '#excel-table-object', name: 'ExcelTable Object' },
        { href: '#styles-object', name: 'Styles Object' },
        { href: '#sheet-object', name: 'Sheet Object' },
        { href: '#border-object', name: 'Border Object' },
        { href: '#formula-object', name: 'Formula Object' },
        { href: '#alignment-options', name: 'Alignment Object' }
      ]
    }
  ]
]
export const useSelectStore = defineStore({
  id: 'select',
  state: () => ({
    navItems:[],
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
      //console.log('changes')
      this.selected = num
    }
  }
})

// defineStore('selected', () => {
//   const count = ref(0)
//   // const doubleCount = computed(() => count.value * 2)
//   // function increment() {
//   //   count.value++
//   // }
//   function setSelected(num) {
//     //console.log('first')
//     count.value == num
//   }
//   return { count, setSelected }
// })
