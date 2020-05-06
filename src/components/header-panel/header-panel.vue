<template>
  <div class="header-panel">
    <h2 class="header-panel-title">{{ title }}</h2>
    <p class="header-panel-subtitle">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderPanel',
  props: {
    title: {
      type: String,
      default: '项目展示',
    },
    subTitle: {
      type: String,
      default: '副标题',
    },
  },
  data() {
    return {};
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
  &-title {
    margin: 0;
    font-size: 32px;
    letter-spacing: 10px;
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
