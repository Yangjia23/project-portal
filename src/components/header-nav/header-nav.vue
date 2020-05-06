<template>
  <div class="header-nav">
    <HeaderNavItem v-for="(nav, index) in list" :key="index" :item="nav" />
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
  },
  components: {
    HeaderNavItem,
  },
  data() {
    return {};
  },
  methods: {},
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
}
</style>
