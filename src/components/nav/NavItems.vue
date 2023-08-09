<template>
  <ul>
    <li class="clickable" v-for="(navitem, jIndex) in navItems" :key="navitem.name + '' + jIndex">
      <!-- <div
        class="ml-n2 d-flex justify-content-center align-item-center"
        @click.prevent="changeSelectedGroup(jIndex)"
      >
        <v-icon color="var(--c2)" icon="mdi-chevron-down" v-if="openSection[jIndex]"></v-icon>
        <v-icon color="var(--c2)" icon="mdi-chevron-right" v-else></v-icon>
        {{ navitem.name }}
      </div> -->
      <ul v-if="openSection[jIndex]">
        <li
          v-for="(item, index) in navitem.childs"
          :key="item.name + '' + index"
          :style="{
            background: selected.up == jIndex && selected.down == index ? 'var(--c5)' : ''
          }"
          :class="[
            'tes',
            {
              selected: selected.up == jIndex && selected.down == index
            }
          ]"
        >
          <span class="pl-uniqe"
            ><v-btn
              class="mn-uniqe w-100"
              style="text-transform: none"
              :color="selected.up == jIndex && selected.down == index ? 'var(--c2)' : ''"
              variant="text"
              @click.prevent="changeSelected(jIndex, index, item.path)"
            >
              {{ item.name }}
            </v-btn></span
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const navItems = ref([
  {
    name: 'interduction',
    childs: [
      {
        name: 'Introduction',
        path: '/'
      },
      {
        name: 'Examples',
        path: '/examples'
      },
      {
        name: 'API'
      }
    ]
  }
  // {
  //   name: 'setup',
  //   childs: [
  //     {
  //       name: 'test1'
  //     },
  //     {
  //       name: 'test2'
  //     }
  //   ]
  // }
])
let selected = ref({ up: 0, down: 0 })
function changeSelected(up, down, path) {
  selected.value = { up, down }
  router.push({ path })
}
let openSection = ref({
  0: true
})
// function changeSelectedGroup(index) {
//   openSection.value[index] = !openSection.value[index]
// }
</script>

<style scoped>
li {
  list-style: none;
}
.clickable {
  cursor: pointer;
  user-select: none;
}
li.tes {
  border-left: 1px solid var(--c1);
}
li.tes.selected {
  border-left: 1px solid var(--c2);
}
.pl-uniqe {
  padding-left: 40px;
}
.mn-uniqe {
  margin-left: -40px;
}
</style>
<style>
.pl-uniqe span.v-btn__content {
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
}
</style>
