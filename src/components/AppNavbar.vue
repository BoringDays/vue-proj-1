<template>
  <div>
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
  import { Tabbar, TabbarItem } from 'vux';
//  import Router from 'vue-router';

  export default {
    components: {
      Tabbar,
      TabbarItem,
    },
//    methods: {
//      navbarClick(e) {
//        const elem = e.target;
//
//        // eslint-disable-next-line
//        console.log(elem);
//
//        switch (elem.querySelector('.nav_icon').id) {
//          case 'nav-main':
//            Router.push('/');
//            break;
//          case 'nav-content':
//            Router.push('/content');
//            break;
//          case 'nav-config':
//            Router.push('/config');
//            break;
//          default:
//            break;
//        }
//      },
//    },
  };
</script>

<style scope lang="less">
  /* mixin. miss scss's mixin */
  .nav_icon {
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
  }

  #nav-home {
    .nav_icon;
    color: #37a;
  }

  #nav-products {
    .nav_icon;
    color: #666;
  }

  #nav-config {
    .nav_icon;
    color: #072;
  }
</style>
