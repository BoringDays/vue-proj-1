<template>
  <div>
    <swiper id="swiper" auto :loop="true" :aspect-ratio="300/800">
      <swiper-item class="swiper-item" v-for="item in swiperData" :key="item.id">
        <img :src="item.src" :alt="item.desc">
      </swiper-item>
    </swiper>
    <div class="weui-panel hottest-project">
      <div class="weui-panel__hd">最热项目</div>
      <div class="weui-panel__bd">
        <card v-for="item in listData" v-if="item.isHot" :key="item.id">
          <img slot="header" :src="item.descImg" style="width:100%;display:block;">
          <div slot="content" class="card-padding">
            <p class="project-title">{{item.name}}</p>
            <p class="project-content">{{item.content}}</p>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { Panel, Swiper, SwiperItem, Group, Cell, Card } from 'vux';
import * as types from '../vuex/mutations/types';

export default {
  components: {
    Panel,
    Swiper,
    SwiperItem,
    Group,
    Cell,
    Card,
  },
  computed: {
    ...mapGetters({
      getIndexSettings: types.GET_INDEX_DATA,
    }),
  },
  methods: {
    ...mapMutations({
      setHeaderState: types.SET_HEADER_STATE,
      setNavState: types.SET_NAV_STATE,
    }),
    ...mapActions({
      getIndexData: types.GET_INDEX_DATA,
    }),
  },
//  created() {
//    this.setHeaderState({
//      show: true,
//      setting: {
//        title: 'Index',
//        'left-options': {
//          showBack: false,
//        },
//      },
//    });
//    this.setNavState({
//      show: true,
//      activeIndex: 0,
//      itemSetting: {
//
//      },
//    });
//  },
  mounted() {
    // eslint-disable-next-line
    debugger;
    this.setHeaderState({
      show: true,
      setting: {
        title: 'Index',
        'left-options': {
          showBack: false,
        },
      },
    });
    this.setNavState({
      show: true,
      activeIndex: 0,
      itemSetting: {

      },
    });
    this.getIndexData().then(() => {
      this.swiperData = this.getIndexSettings.swiperInfo;
      this.listData = this.getIndexSettings.hotProjects;
    });
  },
  data() {
    return {
      swiperData: [],
      listData: [],
    };
  },
};
</script>

<style lang="less" scoped>
  .swiper-item img {
    width: 100%;
  }

  .card-padding {
    padding: 15px;
  }

  .hottest-project {
    .project-title {
      color:#999;
      font-size: 16px;
    }

    .project-content {
      font-size:14px;
      line-height:1.2;
    }
  }
</style>
