// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectStore = defineStore({
  id: 'select',
  state: () => ({
    navItems: [
      {
        name: 'interduction',
        childs: [
          { name: 'Installation' },
          { name: 'Using a Package Manager' },
          { name: 'Getting Started' }
        ]
      }
    ],
    selected: 0
  }),

  getters: {
    selectedV(state) {
      return state.selected
    }
  },
  actions: {
    setSelect(num) {
      console.log('changes')
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
//     console.log('first')
//     count.value == num
//   }
//   return { count, setSelected }
// })
