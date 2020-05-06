<template>
  <div class="header-panel" :class="`panel-${curPanel.activeType}`">
    <h2 class="header-panel-title">{{ curPanel.title }}</h2>
    <p class="header-panel-subtitle">{{ curPanel.subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderPanel',
  props: {
    activeItem: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    curPanel() {
      const { title, subTitle, value } = this.activeItem;
      return {
        activeType: value && value.toLowerCase(),
        title: title || 'Project Portal',
        subTitle: subTitle || 'Person Project & Demo',
      };
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.header-panel {
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #ff9d6c 10%, #bb4e75 100%);
  color: #fff;
  &.panel-js {
    background-image: linear-gradient(135deg, #ffdb01 10%, #0e197d 100%);
  }
  &.panel-css {
    background-image: linear-gradient(135deg, #fff886 10%, #f072b6 100%);
  }
  &.panel-vue {
    background-image: linear-gradient(135deg, #79f1a4 10%, #0e5cad 100%);
  }
  &.panel-react {
    background-image: linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%);
  }
  &-title {
    margin: 0;
    font-size: 32px;
    letter-spacing: 6px;
    margin-bottom: 12px;
    text-shadow: 0 4px 8px rgba(7, 17, 27, 0.2);
  }
  &-subtitle {
    margin: 0;
    font-size: 14px;
    line-height: 28px;
    font-weight: 200;
    text-shadow: 0 4px 8px rgba(7, 17, 27, 0.2);
  }
}
</style>
