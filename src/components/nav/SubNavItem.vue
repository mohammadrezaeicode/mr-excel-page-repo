<template>
  <ul>
    <li
      class="clickable"
      v-for="(navitem, jIndex) in select.navItems"
      :key="navitem.name + '' + jIndex"
    >
      <div class="d-flex justify-content-center align-item-center">{{ navitem.name }}</div>
      <ul>
        <li
          v-for="(item, index) in navitem.childs"
          :key="item.name + '' + index"
          :style="{}"
          :class="[
            'tes',
            {
              selected: select.selected == index
            }
          ]"
        >
          <span class="nav-right-uniqe"
            ><v-btn
              class="mn-uniqe w-100"
              :color="select.selected == index ? 'var(--c2)' : ''"
              variant="text"
              @click.prevent="
                select.setSelect(index);
                goTo(item.href)
              "
            >
              {{ item.name }}
            </v-btn></span
          >
          <ul v-if="item.childs">
            <li
              v-for="(item1, index1) in item.childs"
              :key="item1.name + '*' + index1"
              :style="{}"
              :class="[
                'tes',
                'inner',
                {
                  selected: select.selected == index1 + navitem.childs.length
                }
              ]"
            >
              <span class="nav-right-uniqe"
                ><v-btn
                  class="mn-uniqe w-100"
                  :color="select.selected == index1 + navitem.childs.length ? 'var(--c2)' : ''"
                  variant="text"
                  @click.prevent="
                    select.setSelect(index1 + navitem.childs.length);
                    goTo(item.href)
                  "
                >
                  {{ item1.name }}
                </v-btn></span
              >
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
// import { reactive } from 'vue'
import { useSelectStore } from '@/stores/select'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const props = defineProps(['name', 'items'])
const select = useSelectStore()
function goTo(href) {
  //console.log(href)
  // router.push({ hash: href })
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
}
// const navItems = reactive()
// //console.log(select.count.value, select)
// select.$subscribe((val) => {
//   //console.log(val)
// })
// let selected = ref(select.selected)

// function changeSelected(index) {
//   selected.value = index
// }
// watch(select.selected, async (newV, oldV) => {
//   //console.log(newV,oldV,"watch")
// })
</script>

<style scoped>
li {
  list-style: none;
}
.clickable {
  cursor: pointer;
  user-select: none;
}
.inner {
  margin-bottom: 10px;
  padding-left: 20px;
}
li.tes {
  border-left: 1px solid var(--c1);
}
li.tes.selected {
  border-left: 1px solid var(--c2);
}
.nav-right-uniqe {
  padding-left: 40px;
}
.mn-uniqe {
  margin-left: -40px;
}
</style>
<style>
.nav-right-uniqe span.v-btn__content {
  /* margin-right: auto; */
  /* display: flex; */
  /* width: 100%; */
  /* justify-self: stretch; */
  /* align-self: center; */
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: unset !important;
  grid-area: none !important;
  -ms-flex-wrap: wrap;
  -ms-word-wrap: wrap;
  flex-wrap: wrap;
  text-wrap: wrap;
  text-align: left;
  font-size: 0.7rem;
}
</style>
