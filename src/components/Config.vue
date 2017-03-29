<template>
  <div>
    <x-header style="background: #000;">App header</x-header>
    <group class="swiper-list">
      <cell title="用户信息" link="`/user/${id}`"></cell>
    </group>
    <tabbar>
      <tabbar-item link="/">
        <div slot="icon">
          <span class="fa fa-home" id="nav-home"></span>
        </div>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/product">
        <div slot="icon">
          <span class="fa fa-newspaper-o" id="nav-products"></span>
        </div>
        <span slot="label">列表</span>
      </tabbar-item>
      <tabbar-item link="/config" show-dot>
        <div slot="icon">
          <span class="fa fa-bars" id="nav-config"></span>
        </div>
        <span slot="label">设置</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { XHeader, Tab, TabItem, Tabbar, TabbarItem, Scroller, Group, Cell } from 'vux';

  export default {
    components: {
      XHeader,
      Tab,
      TabItem,
      Tabbar,
      TabbarItem,
      Scroller,
      Group,
      Cell,
    },
  };
</script>

<style lang="less" scope>
  .mixin_full_height {
    height: 100% !important;
  }

  .swiper-item img {
    width: 100%;
  }

  #swiper-list {
    .mixin_full_height;

    .weui_cells {
      margin-top: 0;
    }

    .vux-swiper {
      .mixin_full_height;
    }
  }
</style>
