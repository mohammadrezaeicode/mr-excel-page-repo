import { defineStore } from 'pinia'

const defaultState = {
  headers: [],
  selectedItem: -1,
  headBackgroundColor: '',
  headColor: '',
  shiftLeft: 0,
  shiftTop: 0,
  dataBackgroundColor: '',
  dataColor: '',
  sheetName: '',
  tabColor: '',
  sortAndfilter: false
}

export const playgroundStore = defineStore({
  id: 'playGround',
  state: () => ({
    ...defaultState
  }),
  actions: {
    updateBaseOnKey(key, value) {
      this[key] = value
    },
    changeSelectedItem(selItem) {
      this.selectedItem = selItem
    },
    addHeader(head) {
      this.headers.push(head)
      console.log(this.headers)
    },
    reset() {
      Object.keys(defaultState).forEach((key) => {
        this[key] = defaultState[key]
      })
    }
  }
})
