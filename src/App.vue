<template>
  <div id="app">
    <transition name="el-fade-in" mode="out-in">
      <Dashboard></Dashboard>
    </transition>
  </div>
</template>

<script>
import Dashboard from './components/dashboard';

export default {
  name: 'app',
  components: {
    Dashboard,
  },
};
</script>

<style>
#app {
  background: #f3f5f7;
  height: 100%;
}
</style>
