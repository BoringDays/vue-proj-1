// 模拟后台请求用
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
const products = [
  {
    id: 1,
    name: 'Product A',
    desc: 'This is product A.',
    descImg: 'http://placeholder.qiniudn.com/640x300',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum in quam quas rem rerum unde, voluptas! Ad animi error excepturi in magni maiores, maxime pariatur quasi suscipit vitae. Autem.',
    isHot: false,
    type: 1,
  }, {
    id: 2,
    name: 'Product B',
    desc: 'This is product B.',
    descImg: 'http://placeholder.qiniudn.com/640x300',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos distinctio ea, facilis illo illum numquam quisquam saepe veniam. Alias atque consectetur consequatur id ipsum magnam maiores non velit veritatis.',
    isHot: false,
    type: 1,
  }, {
    id: 3,
    name: 'Product C',
    desc: 'This is product C.',
    descImg: 'http://placeholder.qiniudn.com/640x300',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est laudantium nihil rerum. Adipisci aliquid atque beatae deleniti dolorum eaque, fugit in neque odio quae tenetur veritatis vitae, voluptate voluptatem, voluptates.',
    isHot: true,
    type: 2,
  }, {
    id: 4,
    name: 'Product D',
    desc: 'This is product D.',
    descImg: 'http://placeholder.qiniudn.com/640x300',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, consequuntur, cupiditate delectus dolore doloremque eius illo ipsa, molestiae molestias nesciunt non obcaecati pariatur quae quidem quis quos sunt veniam.',
    isHot: false,
    type: 1,
  }, {
    id: 5,
    name: 'Product E',
    desc: 'This is product E.',
    descImg: 'http://placeholder.qiniudn.com/640x300',
    content: 'Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..',
    isHot: true,
    type: 2,
  }, {
    id: 6,
    name: 'Product F',
    desc: 'This is product F.',
    descImg: 'http://placeholder.qiniudn.com/640x300',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est facere ipsum neque nihil perferendis quae, qui quo reiciendis rem voluptatem! Debitis deserunt eius fugit inventore ipsa ipsum nemo unde vitae.',
    isHot: false,
    type: 3,
  },
];

mock.onGet('/products').reply(200, {
  data: products,
});

// todo: 用express或koa搭个真实后台代替
mock.onGet('/product').reply(200, {
  data: products.filter(item => item.id === 1),
});

mock.onGet('/user', { params: { id: 1 } }).reply(200, {
  data: {
    Name: 'John Doe',
    Age: 24,
    Sex: 'Male',
    Hobby: 'Football',
    unreadMessages: 5,
  },
});

mock.onGet('/indexSettings').reply(200, {
  data: {
    hotProjects: products.filter(item => item.isHot === true),
    swiperInfo: [
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
    ],
  },
});
