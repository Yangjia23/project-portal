<template>
  <div class="nav-item" @click="onNavItemClick">
    <i class="nav-item-icon" :class="`icon-${item.icon}`"></i>
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
  methods: {
    onNavItemClick() {
      this.$emit('item-click', this.item.title);
    },
  },
};
</script>

<style lang="less" scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 82px;
  cursor: pointer;
  &-icon {
    display: block;
    width: 36px;
    height: 36px;
    margin: 0 auto;
    background-image: url('../../assets/images/nav-icons.png');
    background-size: cover;
    transition: all 0.1s linear;
    &.icon-all {
      background-position: 0px 0px;
    }
    &.icon-js {
      background-position: 0px -36px;
    }
    &.icon-css {
      background-position: 0px -108px;
    }
    &.icon-vue {
      background-position: 0px -144px;
    }
    &.icon-react {
      background-position: 0px -72px;
    }
  }
  &-text {
    font-size: 14px;
    line-height: 22px;
    color: #303133;
    text-shadow: 0 4px 8px rgba(7, 17, 27, 0.2);
    transition: all 0.1s linear;
  }

  &:hover {
    .nav-item-icon,
    .nav-item-text {
      transform: translateY(-3px);
    }
    // transform: translateY(-3px);
  }
  // #image1 { background-image: url(./image_4696.png); background-position: 0px 0px; width: 64px; height: 64px; }
  // #image2 { background-image: url(./image_4696.png); background-position: 0px -64px; width: 64px; height: 64px; }
  // #image3 { background-image: url(./image_4696.png); background-position: 0px -128px; width: 64px; height: 64px; }
  // #image4 { background-image: url(./image_4696.png); background-position: 0px -192px; width: 64px; height: 64px; }
  // #image5 { background-image: url(./image_4696.png); background-position: 0px -256px; width: 64px; height: 64px; }
}
</style>
