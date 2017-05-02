<template>
  <div class="header-container" v-if="headerState.show">
    <x-header class="app-header" :left-options="headerState.setting['left-options']">
      {{headerState.setting.title}}
      <a :class="[headerState.rightLink.show ? '': 'hidden']" slot="right">{{headerState.rightLink.title}}</a>
    </x-header>
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
  import { mapGetters } from 'vuex';
  import { XHeader } from 'vux';
  import * as types from '../vuex/mutations/types';

  export default{
    data() {
      return {};
    },
    components: {
      XHeader,
    },
    computed: {
      // 教训，直接取getters就好了，无需自己手动声明data或者watch去调用，不然可能会出现组件的data跟你通过getters拿到的data不一致的笑话
      ...mapGetters({
        headerState: types.GET_HEADER_STATE,
      }),
    },
  };
</script>
