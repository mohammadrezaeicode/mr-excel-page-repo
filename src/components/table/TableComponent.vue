<template>
  <div class="d-flex">
    <div class="p-1 mx-auto p-table mt-2 mb-5">
      <table>
        <tr class="he">
          <th class="px-3 py-2">Name</th>
          <th class="px-3 py-2">type</th>
          <th class="px-3 py-2">Description</th>
        </tr>
        <tr v-for="(row, key) in prop.rows" :key="row.name + 'key' + key">
          <td class="px-3 py-2" v-html="row.name"></td>
          <td class="px-3 py-2" v-html="row.type"></td>
          <td class="px-3 py-2" v-html="row.des"></td>
        </tr>
      </table>
    </div>
    <div class="mr-auto"></div>
  </div>
</template>

<script setup>
const prop = defineProps(['name', 'rows'])
</script>

<style scoped>
.p-table {
  background: var(--c2);
  border-radius: 5px;
}
.he {
  background: var(--c5);
}
.he th {
  font-weight: bolder;
  text-align: start;
}
</style>
