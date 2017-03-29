<template>
  <div>
    <app-header />
    <form-preview :header-label="productDetail.headerLabel" header-value="&nbsp;" :bodyItems="productDetail.list"></form-preview>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
  import { FormPreview } from 'vux';
  import axios from 'axios';
  import AppHeader from './AppHeader';

  export default{
    beforeRouteEnter(to, from, next) {
      axios.get('/static/datas/product_list.json').then((res) => {
        const resData = res.data.data.filter(item => (item.id === Number(to.params.id)));

        next((vm) => {
          // eslint-disable-next-line
          vm.productDetail.list = [{
            label: 'Name',
            value: resData[0].name,
          }, {
            label: 'Description',
            value: resData[0].desc,
          }, {
            label: 'Content',
            value: resData[0].content,
          }];
        });
      }).catch(() => {
        next(false);
      });
    },
//    beforeCreate() {
//      const self = this;
//
//      axios.get('/static/datas/product_list.json').then((res) => {
//        const resData = res.data.data;
//
//        self.productDetail.list = [{
//          label: '',
//          value: ''
//        }];
//      }).catch(() => {
//        self.productDetail.list = [];
//      });
//    },
    data() {
      return {
        error: false,
        productDetail: {
          headerLabel: 'Product Details',
          list: [],
        },
      };
    },
    components: {
      AppHeader,
      FormPreview,
    },
  };
</script>
