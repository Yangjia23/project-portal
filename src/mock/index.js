import { projectTypes } from './mock-data';

const getClassification = () => {
  const list = [];
  projectTypes.forEach((item) => {
    list.push(...item.children);
  });
  projectTypes.unshift({
    value: 'All',
    children: list,
  });
  return projectTypes;
};

export const getProjectList = () => {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved(getClassification());
    }, 800);
  });
};
