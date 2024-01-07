<template>
  <div class="menu">
    <!-- Логотип -->
    <SvgLogo />

    <!-- Категории -->
    <ul class="menu__list">
      <li class="menu__list-item">
        <router-link to="">dd</router-link>
        <router-link to="eee">ddffvdf</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SvgLogo from '@/components/icons/SvgLogo.vue'

export default {
  name: 'Menu',

  components: { SvgLogo },

  props: {},

  setup() {

  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  padding: 10px 20px;
  background-color: #181818;

  &__list {
    list-style: none;

    &-item {

    }
  }
}
</style>
