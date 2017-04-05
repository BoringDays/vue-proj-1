<template>
  <div class="header-container" v-if="headerState.show">
    <x-header class="app-header" :left-options="headerState.setting['left-options']">{{headerState.setting.title}}</x-header>
  </div>
</template>
<style lang="less" scoped>
  .header-container {
    height: 46px;
  }

  .app-header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    background: #000;
  }
</style>
<script>
//  import { mapGetters } from 'vuex';
  import { XHeader } from 'vux';
//  import * as types from '../vuex/mutations/types';

  export default{
    props: ['headerState'],
    data() {
      return {};
    },
    components: {
      XHeader,
    },
  };
</script>
