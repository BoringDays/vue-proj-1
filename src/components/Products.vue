<template>
  <router-view></router-view>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import * as types from '../vuex/mutations/types';

  export default {
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
    },
    methods: {
      ...mapMutations({
        setHeaderState: types.SET_HEADER_STATE,
        setNavState: types.SET_NAV_STATE,
      }),
      ...mapActions({
        getProducts: types.GET_PRODUCTS,
      }),
      addProduct(){
        this.$route.push('/product/add');
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

</style>
