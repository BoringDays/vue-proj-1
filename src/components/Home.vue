<template>
  <div>
    <app-header />
    <swiper id="swiper" auto :loop="true" :aspect-ratio="300/800">
      <swiper-item class="swiper-item" v-for="item in swiperData">
        <img :src="item.src" :alt="item.desc">
      </swiper-item>
    </swiper>
    <div class="weui_panel hottest-project">
      <div class="weui_panel_hd">最热项目</div>
      <div class="weui_panel_bd">
        <card v-for="item in listData" v-if="item.isHot">
          <img slot="header" :src="item.descImg" style="width:100%;display:block;">
          <div slot="content" class="card-padding">
            <p class="project-title">{{item.name}}</p>
            <p class="project-content">{{item.content}}</p>
          </div>
        </card>
      </div>
    </div>
    <app-navbar />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Panel, Swiper, SwiperItem, Group, Cell, Card } from 'vux';
// import axios from 'axios';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';

export default {
  components: {
    AppHeader,
    Panel,
    Swiper,
    SwiperItem,
    Group,
    Cell,
    Card,
    AppNavbar,
  },
  computed: {
    ...mapGetters([
      'getIndexSettings',
    ]),
  },
  methods: {
    ...mapActions({
      getIndexData: 'GET_INDEX_SETTINGS',
    }),
  },
  mounted() {
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

<style lang="less">
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
