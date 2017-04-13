<template>
  <div style="height: 100%">
    <view-box>
      <app-header />
      <router-view></router-view>
      <app-navbar />
    </view-box>
  </div>
</template>

<script>
  import { ViewBox } from 'vux';
  import AppHeader from './components/AppHeader';
  import AppNavbar from './components/AppNavbar';

  export default {
    components: {
      ViewBox,
      AppHeader,
      AppNavbar,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="less">
  @import "~font-awesome/less/font-awesome.less";
  @import '~vux/src/styles/reset.less';
  @import "./assets/stylesheets/common.less";
</style>
