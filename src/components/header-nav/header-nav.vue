<template>
  <div class="header-nav">
    <HeaderNavItem
      class="header-nav-item"
      v-for="(nav, index) in list"
      :key="index"
      :item="nav"
      :class="{ 'is-active': nav.title === value }"
      @item-click="onItemClick"
    />
  </div>
</template>

<script>
import HeaderNavItem from './header-nav-item';

export default {
  name: 'HeaderNav',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  components: {
    HeaderNavItem,
  },
  data() {
    return {};
  },
  methods: {
    onItemClick(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="less" scoped>
.header-nav {
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(7, 17, 27, 0.1);
  display: flex;
  align-items: center;
  padding: 0 40px;
  &-item {
    &.is-active {
      border-bottom: 2px solid #ff7260;
    }
  }
}
</style>
