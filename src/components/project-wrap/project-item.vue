<template>
  <div class="project-item">
    <div class="project-item-head" @click="jumpToShow(item)">
      <img class="project-image" :src="getImg(item.img)" alt="" />
    </div>
    <div class="project-item-content">
      <h3 class="project-title">{{ item.title }}</h3>
      <p class="project-desc">{{ item.desc }}</p>
      <div class="project-link">
        <span><a :href="item.preview" target="_blank">Preview</a></span>
        <span><a :href="item.code" target="_blank">Code</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
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
    getImg(img) {
      if (!img) return '';
      return require(`../../assets/images/project/${img}`);
    },
    jumpToShow({ preview, code }) {
      const url = preview || code || '';
      url && window.open(url, 'black');
    },
  },
};
</script>

<style lang="less" scoped>
.project-item {
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 10px 30px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  background: #fff;
  &-head {
    box-sizing: border-box;
    width: 100%;
    height: 168px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    padding: 10px 8px;
    display: flex;
    justify-content: center;
    .project-image {
      flex-grow: 0;
      width: 100%;
      height: auto;
      display: block;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      .project-image {
        transform: scale(1.1);
      }
    }
  }
  &-content {
    border-top: 1px solid #eee;
    padding: 10px 12px 14px;
    .project-title {
      margin: 0;
      font-size: 16px;
      line-height: 32px;
      color: #303133;
    }
    .project-desc {
      margin: 0;
      font-size: 14px;
      line-height: 26px;
      color: #909399;
    }
    .project-link {
      margin-top: 6px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      span a {
        color: #ff7260;
        text-decoration: none;
      }
    }
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    border-radius: 1px;
    background: #fff;
    margin: 0 auto;
  }
  &::before {
    bottom: -4px;
    width: 94%;
    left: 3%;
  }
  &::after {
    bottom: -8px;
    width: 90%;
    left: 5%;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  }
  &:hover {
    box-shadow: 0 8px 10px 0 rgba(7, 17, 27, 0.2);
  }
}
</style>
