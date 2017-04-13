<template>
  <div>
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
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import { Flexbox, FlexboxItem, Swiper, SwiperItem, Tab, TabItem, Scroller, Group, Cell } from 'vux';
  import * as types from '../vuex/mutations/types';

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      Swiper,
      SwiperItem,
      Tab,
      TabItem,
      Scroller,
      Group,
      Cell,
    },
    computed: {
      ...mapGetters({
//        getHeaderState: types.GET_HEADER_STATE,
        getProductsData: types.GET_PRODUCTS,
      }),
    },
    created() {
      this.setHeaderState({
        show: true,
        setting: {
          title: 'Products',
          'left-options': {
            showBack: false,
          },
        },
      });
      this.setNavState({
        show: true,
        activeIndex: 1,
        itemSetting: {

        },
      });
      this.swiperListViewStyle = {
        height: `${document.body.clientHeight - 46 - 55}px`,
      };
    },
    mounted() {
      // eslint-disable-next-line
//      console.log('header has set');
      this.getProducts().then(() => {
        this.listData = this.getProductsData;
        this.currentListData = this.listData;
      });
    },
    methods: {
      ...mapMutations({
        setHeaderState: types.SET_HEADER_STATE,
        setNavState: types.SET_NAV_STATE,
      }),
      ...mapActions({
        getProducts: types.SET_PRODUCTS,
      }),
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
