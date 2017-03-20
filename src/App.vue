<template>
  <div style="height: 100%">
    <view-box>
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox } from 'vux';

  export default {
    components: {
      ViewBox,
    },
  };
</script>

<style lang="less">
  @import "~font-awesome/less/font-awesome.less";
  @import '~vux/src/styles/reset.less';
  @import "./assets/stylesheets/common.less";
</style>
