<template>
  <div class="dashboard">
    <HeaderPanel :title="activeItem.title" :sub-title="activeItem.subTitle" />
    <div class="main-section">
      <HeaderNav :list="navList" />
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
      classification: [
        {
          title: 'All',
          subTitle: 'SubTitle',
          icon: '',
        },
        {
          title: 'Vue',
          subTitle: 'Vue 组件、自定义指令',
          icon: '',
        },
      ],
      projectList: [
        {
          title: 'Vue 动态表单',
          desc: '在 element 基础上，通过配置生成动态表单',
          disabled: false,
          github: '',
        },
        {
          title: 'Vue 动态表单',
          desc: '在 element 基础上，通过配置生成动态表单',
          disabled: false,
          github: '',
        },
        {
          title: 'Vue 动态表单',
          desc: '在 element 基础上，通过配置生成动态表单',
          disabled: false,
          github: '',
        },
      ],
      loading: false,
      projectTypeList: [],
      activeType: '',
    };
  },
  computed: {
    activeItem() {
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
  background: #f3f5f7;
  .main-section {
    position: relative;
    top: -40px;
    min-width: 900px;
    margin: 0 120px;
  }
}
</style>
