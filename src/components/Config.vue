<template>
  <div>
    <x-header style="background: #000;">App header</x-header>
    <flexbox :gutter="0" orient="vertical" :style="swiperListViewStyle">
      <flexbox-item style="height: 164px; flex: none">
        <swiper id="swiper" auto :loop="true" :aspect-ratio="300/800">
          <swiper-item class="swiper-item" v-for="item in swiperData">
            <img :src="item.src" :alt="item.desc">
          </swiper-item>
        </swiper>
        <tab>
          <tab-item class="tab-item" @on-item-click="tabClick()" selected>All</tab-item>
          <tab-item class="tab-item" @on-item-click="tabClick(1)">Type 1</tab-item>
          <tab-item class="tab-item" @on-item-click="tabClick(2)">Type 2</tab-item>
          <tab-item class="tab-item" @on-item-click="tabClick(3)">Type 3</tab-item>
        </tab>
      </flexbox-item>
      <flexbox-item>
        <swiper id="swiper-list" :show-dots="false" v-model="swiperListViewIndex">
          <swiper-item v-for="(item, i) in listData">
            <scroller lock-x scrollbar-y ref="swiperScroller" height="-265">
              <group class="swiper-list">
                <cell v-for="listItem in item" :key="listItem.id" :title="listItem.name" :inline-desc="listItem.desc"
                      :link="`/product/${listItem.id}`"></cell>
              </group>
            </scroller>
          </swiper-item>
        </swiper>
      </flexbox-item>
    </flexbox>
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
  import { XHeader, Flexbox, FlexboxItem, Swiper, SwiperItem, Tab, TabItem, Tabbar, TabbarItem, Scroller, Group, Cell } from 'vux';

  export default {
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      Swiper,
      SwiperItem,
      Tab,
      TabItem,
      Tabbar,
      TabbarItem,
      Scroller,
      Group,
      Cell,
    },
    created() {
      const self = this;

      self.swiperData = [
        {
          src: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
          desc: 'picture 1',
        },
        {
          src: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
          desc: 'picture 2',
        },
        {
          src: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
          desc: 'picture 3',
        },
      ];

      self.listData = [
        [
          {
            id: 1,
            name: 'Product A',
            desc: 'This is product A.',
            type: 1,
          }, {
            id: 2,
            name: 'Product B',
            desc: 'This is product B.',
            type: 1,
          }, {
            id: 3,
            name: 'Product C',
            desc: 'This is product C.',
            type: 2,
          }, {
            id: 4,
            name: 'Product D',
            desc: 'This is product D.',
            type: 1,
          }, {
            id: 5,
            name: 'Product E',
            desc: 'This is product E.',
            type: 2,
          }, {
            id: 6,
            name: 'Product F',
            desc: 'This is product F.',
            type: 3,
          },
        ], [

        ], [

        ], [

        ],
      ];
    },
    beforeMount() {
      this.swiperListViewStyle = {
        height: `${document.body.clientHeight - 44 - 55}px`,
      };
    },
    methods: {
      tabClick(type) {
        const self = this;

        if (type) {
          self.listData[type] = self.listData[0].filter(item => (item.type === type));
          self.swiperListViewIndex = type;
          self.$refs.swiperScroller[type].reset();
        } else {
          self.swiperListViewIndex = 0;
          self.$refs.swiperScroller[0].reset();
        }
      },
    },
    data() {
      return {
        listData: [[], [], [], []],
        swiperData: null,
        swiperListViewIndex: 0,
        swiperListViewStyle: {},
      };
    },
  };
</script>

<style lang="less">
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
