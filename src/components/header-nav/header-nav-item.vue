<template>
  <div class="nav-item">
    <i class="nav-item-icon"></i>
    <span class="nav-item-text">{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 100px;
  cursor: pointer;
  transition: all 0.1s linear;
  &-icon {
    display: block;
    width: 36px;
    height: 36px;
    margin: 0 auto;
    background-image: url('../../assets/images/nav-icons.png');
    background-position: 0 0;
    background-size: cover;
  }
  &-text {
    font-size: 14px;
    line-height: 24px;
    // font-weight: 200;
    text-shadow: 0 4px 8px rgba(7, 17, 27, 0.2);
  }

  &:hover {
    transform: translateY(-3px);
  }
}
</style>
