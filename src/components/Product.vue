<template>
  <div>
    <form-preview :header-label="productDetail.headerLabel" header-value="&nbsp;" :bodyItems="productDetail.list"></form-preview>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import { FormPreview } from 'vux';
  import * as types from '../vuex/mutations/types';

  export default{
//    beforeRouteEnter(to, from, next) {
//      axios.get('/static/datas/product_list.json').then((res) => {
//        const resData = res.data.data.filter(item => (item.id === Number(to.params.id)));
//
//        next((vm) => {
//          // eslint-disable-next-line
//          vm.productDetail.list = [{
//            label: 'Name',
//            value: resData[0].name,
//          }, {
//            label: 'Description',
//            value: resData[0].desc,
//          }, {
//            label: 'Content',
//            value: resData[0].content,
//          }];
//        });
//      }).catch(() => {
//        next(false);
//      });
//    },
    data() {
      return {
        productDetail: {
          headerLabel: 'Product Details',
          list: [],
        },
      };
    },
    computed: {
      ...mapGetters({
//        getHeaderState: types.GET_HEADER_STATE,
        getProductData: types.GET_PRODUCT,
      }),
    },
    methods: {
      ...mapMutations({
        setHeaderState: types.SET_HEADER_STATE,
        setNavState: types.SET_NAV_STATE,
      }),
      ...mapActions({
        getProduct: types.GET_PRODUCT,
      }),
    },
    components: {
      FormPreview,
    },
    created() {
      this.setHeaderState({
        show: true,
        setting: {
          title: 'Product',
          'left-options': {
            showBack: false,
          },
        },
      });
      this.setNavState({
        show: false,
        activeIndex: 1,
        itemSetting: {

        },
      });
    },
    mounted() {
      // eslint-disable-next-line
//      console.log(this.$route);
      this.getProduct(this.$route.params.id).then(() => {
        const res = this.getProductData[0];
        this.productDetail.list = [{
          label: 'Name',
          value: res.name,
        }, {
          label: 'Description',
          value: res.desc,
        }, {
          label: 'Content',
          value: res.content,
        }];
      });
    },
  };
</script>
