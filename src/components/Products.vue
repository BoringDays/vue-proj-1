<template>
  <div>
    <app-header />
    <flexbox :gutter="0" orient="vertical" :style="swiperListViewStyle">
      <flexbox-item class="tabStyle">
        <tab>
          <tab-item class="tab-item" @on-item-click="tabClick()" selected>All</tab-item>
          <tab-item class="tab-item" @on-item-click="tabClick(1)">Type 1</tab-item>
          <tab-item class="tab-item" @on-item-click="tabClick(2)">Type 2</tab-item>
          <tab-item class="tab-item" @on-item-click="tabClick(3)">Type 3</tab-item>
        </tab>
      </flexbox-item>
      <flexbox-item id="productList">
        <scroller lock-x scrollbar-y ref="scroller" height="-145">
          <group class="swiper-list">
            <cell v-for="item in currentListData" :key="item.id" :title="item.name" :inline-desc="item.desc"
                  :link="`/product/${item.id}`"></cell>
          </group>
        </scroller>
      </flexbox-item>
    </flexbox>
    <app-navbar />
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Swiper, SwiperItem, Tab, TabItem, Scroller, Group, Cell } from 'vux';
  import axios from 'axios';
  import AppHeader from './AppHeader';
  import AppNavbar from './AppNavbar';

  export default {
    components: {
      AppHeader,
      Flexbox,
      FlexboxItem,
      Swiper,
      SwiperItem,
      Tab,
      TabItem,
      Scroller,
      Group,
      Cell,
      AppNavbar,
    },
    beforeCreate() {
      const self = this;

      axios.get('/static/datas/product_list.json').then((res) => {
        self.listData = res.data.data;
        self.currentListData = self.listData;
      }).catch(() => {
        self.listData = [];
        self.currentListData = [];
      });
    },
    beforeMount() {
      this.swiperListViewStyle = {
        height: `${document.body.clientHeight - 46 - 55}px`,
      };
    },
    methods: {
      tabClick(type) {
        const self = this;

        if (type) {
          self.currentListData = self.listData.filter(item => (item.type === type));
          self.swiperListViewIndex = type;
        } else {
          self.currentListData = self.listData;
          self.swiperListViewIndex = 0;
        }

        self.$refs.scroller.reset();
      },
    },
    data() {
      return {
        listData: [],
        currentListData: [],
        swiperListViewStyle: {},
      };
    },
  };
</script>

<style lang="less">
  @import "./../assets/stylesheets/common.less";

  .tabStyle {
    flex: none !important;
    height: 44px;
  }

  #productList {
    .mixin_full_height;
  }

  #productList .weui_cells {
    margin-top: 0;
  }
</style>
