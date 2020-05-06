<template>
  <div class="project-wrapper">
    <ProjectItem
      class="project-wrapper-item"
      v-for="project in list"
      :key="project.name"
      :item="project"
    />
  </div>
</template>

<script>
import ProjectItem from './project-item';

export default {
  name: 'ProjectWrap',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ProjectItem,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.project-wrapper {
  padding: 30px 10px 0;
  display: flex;
  flex-wrap: wrap;
  &-item {
    width: 300px;
  }
}
</style>
