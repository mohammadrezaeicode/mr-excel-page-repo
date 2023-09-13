<template>
  <ul>
    <li class="clickable" v-for="(navitem, jIndex) in select.navItems" :key="navitem.name + '' + jIndex">
      <div class="d-flex justify-content-center align-item-center">{{ navitem.name }}</div>
      <ul>
        <li v-for="(item, index) in navitem.childs" :key="item.name + '' + index + item.mainId" :style="{}" :class="[
          'tes',
          {
            selected: select.selected == item.mainId
          }
        ]">
          <span class="nav-right-uniqe"><v-btn class="mn-uniqe w-100"
              :color="select.selected == item.mainId ? 'var(--c2)' : ''" variant="text" @click.prevent="
                select.setSelect(item.mainId);
              goTo(item.href)
                ">
              {{ item.name }}
            </v-btn></span>
          <ul v-if="item.childs">
            <li v-for="(item1, index1) in item.childs" :key="item1.name + '*' + index1 + item1.mainId" :style="{}" :class="[
              'tes',
              'inner',
              {
                selected: select.selected == item1.mainId
              }
            ]">
              <span class="nav-right-uniqe"><v-btn class="mn-uniqe w-100"
                  :color="select.selected == item1.mainId ? 'var(--c2)' : ''" variant="text" @click.prevent="
                    select.setSelect(item1.mainId);
                  goTo(item1.href)
                    ">
                  {{ item1.name }}
                </v-btn></span>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { useSelectStore } from '@/stores/select'
const select = useSelectStore()
function goTo(href) {
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
}
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
