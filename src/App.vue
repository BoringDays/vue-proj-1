<template>
  <div style="height: 100%">
    <view-box>
      <app-header :headerState="headerState" />
      <router-view></router-view>
      <app-navbar :navState="navState" />
    </view-box>
  </div>
</template>

<script>
  import {
//    mapState,
    mapGetters,
//    mapMutations,
//    mapActions
  } from 'vuex';
  import { ViewBox } from 'vux';
  import * as types from './vuex/mutations/types';
  import AppHeader from './components/AppHeader';
  import AppNavbar from './components/AppNavbar';

  export default {
    components: {
      ViewBox,
      AppHeader,
      AppNavbar,
    },
    data() {
      return {
        headerState: {
          show: true,
          setting: {},
        },
        navState: {
          show: true,
          activeIndex: 0,
          itemSetting: {},
        },
      };
    },
    watch: {
      $route: 'changeComponentStatus',
    },
    methods: {
      ...mapGetters({
        getHeaderState: types.GET_HEADER_STATE,
        getNavState: types.GET_NAV_STATE,
      }),
      changeComponentStatus() {
        // eslint-disable-next-line
        debugger;
        this.headerState = this.getHeaderState;
        this.navState = this.getNavState;
      },
    },
//    mounted() {
//      this.headerState = this.getHeaderState;
//    },
  };
</script>

<style lang="less">
  @import "~font-awesome/less/font-awesome.less";
  @import '~vux/src/styles/reset.less';
  @import "./assets/stylesheets/common.less";
</style>
