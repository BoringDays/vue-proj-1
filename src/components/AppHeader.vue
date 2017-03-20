<template>
  <div>
    <x-header style="background: #000;" :model="msg">{{msg}}</x-header>
  </div>
</template>
<style lang="less" scope>

</style>
<script>
  import { XHeader } from 'vux';

  export default{
    data() {
      return {
        msg: 'App header',
      };
    },
    components: {
      XHeader,
    },
  };
</script>
