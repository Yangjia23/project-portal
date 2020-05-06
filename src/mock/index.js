import { projectTypes } from './mock-data';

const getClassification = () => {
  const list = [];
  projectTypes.forEach((item) => {
    list.push(...item.children);
  });
  projectTypes.unshift({
    title: '项目展示',
    subTitle: '个人项目展示',
    value: 'All',
    children: list,
  });
  return projectTypes;
};

export const getProjectList = () => {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved(getClassification());
    }, 2000);
  });
};
