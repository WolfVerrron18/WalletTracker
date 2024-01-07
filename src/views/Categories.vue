<script setup>
import Table from '@/components/table/Table.vue'

const getRows = () => {
  let rows = []

  return fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(resp => resp.json())
    .then(data => rows = data)
}
</script>

<template>
  <main>
    <Table :get-rows="getRows" />
  </main>
</template>
