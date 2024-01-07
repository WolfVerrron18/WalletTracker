<template>
  <!-- Меню -->
  <Menu />

  <!-- Активное представление -->
  <div class="container">
    <router-view class="active-view" v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Menu from '@/layouts/menu/Menu.vue'

export default {
  name: 'MainLayout',

  components: { Menu },

  props: {},

  setup() {
  }
}
</script>

<style lang="scss" scoped>
.active-view {
  margin-top: 20px;
}
</style>
