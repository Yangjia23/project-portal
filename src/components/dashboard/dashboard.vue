<template>
  <div class="dashboard">
    <HeaderPanel :active-item="activeItem" />
    <div class="main-section">
      <HeaderNav :list="navList" v-model="activeType" />
      <ProjectWrap :list="activeItem.children" />
    </div>
  </div>
</template>

<script>
import HeaderPanel from '../header-panel';
import HeaderNav from '../header-nav';
import ProjectWrap from '../project-wrap';
import { getProjectList } from '../../mock';

export default {
  name: 'Dashboard',
  components: {
    HeaderPanel,
    HeaderNav,
    ProjectWrap,
  },
  data() {
    return {
      loading: false,
      activeType: '',
      projectTypeList: [],
    };
  },
  computed: {
    activeItem() {
      if (!this.activeType) return {};
      return this.projectTypeList.find((it) => it.value === this.activeType);
    },
    navList() {
      return this.projectTypeList.map((it) => {
        return { title: it.value, icon: it.value.toLowerCase() };
      });
    },
  },
  async created() {
    try {
      this.loading = true;
      const list = await getProjectList();
      this.projectTypeList = list;
      this.activeType = list[0].value;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="less" scoped>
.dashboard {
  height: 100%;
  .main-section {
    position: relative;
    top: -40px;
    min-width: 900px;
    margin: 0 120px;
  }
}
</style>
