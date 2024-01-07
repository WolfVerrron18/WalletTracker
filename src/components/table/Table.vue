<template>
  <div class="ag-theme-quartz">
    <AgGridVue
      ref="AgGridVue"
      style="height: 500px"
      :headerHeight="40"
      :row-height="22"
      :getRowId="getRowId"
      :get-row-style="getRowStyle"
      :rowData="rowData"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      @body-scroll="onBodyScroll"
      @grid-ready="onGridReady"
      @row-clicked="onRowClicked"
      @model-updated="onModelUpdated"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

/** @module ag-grid-vue3 - Таблица данных Vue */
import { AgGridVue } from 'ag-grid-vue3'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

/** @module CellRenderers - Средства визуализации ячеек */
import CheckboxCellRenderer from '@/components/table/cell-renderers/CheckboxCellRenderer.vue'

export default {
  name: 'Table',

  components: { AgGridVue, CheckboxCellRenderer },

  props: {
    /** @property {Function} getRows - Получение строк таблицы */
    getRows: {
      type: Function,
      default: () => {}
    },

    /** @property {String} keyId - Ключ идентификации строки */
    keyId: {
      type: String,
      default: 'ID'
    }
  },

  emits: ['onRowClicked'],

  setup(props, { emit }) {
    const AgGridVue = ref(null)

    const defaultColDef = ref({
      filter: true
    })

    const rowData = ref([])

    const loadedRows = ref(0)

    const columnDefs = ref([
      { field: 'athlete', minWidth: 200 },
      { field: 'age' },
      { field: 'country', minWidth: 200 },
      { field: 'year' },
      { field: 'date', minWidth: 180 },
      { field: 'sport', minWidth: 200 },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' }
    ])

    const onBodyScroll = (r) => {
      console.log(r)
    }

    /** @function
     * @name onGridReady - Инициализация сетки */
    const onGridReady = async ({ api }) => {
      const updateData = (data) => rowData.value = data

        //const data = await props.getRows()

      updateData(data)
    }

    const onRowClicked = ({ data }) => emit('onRowClicked', data)

    /** @function
     * @name onModelUpdated - Обновление модели таблицы */
    const onModelUpdated = ({ api }) => {
      loadedRows.value = api.getDisplayedRowCount()
    }

    /** @function
     * @name getRowId - Получение ключа идентификации строки */
    const getRowId = (row) => row.data.age

    /** @function
     * @name getRowStyle - Получение стиля строки */
    const getRowStyle = (params) => {
      return { background: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`}
    }

    return {
      rowData,
      columnDefs,
      defaultColDef,
      loadedRows,
      AgGridVue,
      getRowId,
      onBodyScroll,
      onGridReady,
      onRowClicked,
      onModelUpdated,
      getRowStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.ag-theme-quartz {
  --ag-background-color: white;
}

/* change the font style of a single UI component */
.ag-theme-quartz .ag-header-cell-text {
  font-style: italic;
  color: #181818;
  background: #2c3e50;
}

.ag-theme-quartz .ag-header-container {
  background: #2c3e50;
}
</style>
