import Mock from 'mockjs';
import carouselData from './home/carousel';
import gridData from './home/grid';
import goodsData from './home/homeGoods';
import notificationData from './info/notification';
import userList from './user/lists';
import cartList from './chats/cartList';


Mock.mock('/carousel/getAllCarousel', 'post', carouselData);
Mock.mock('/grid/getAllGrid', 'post', gridData);
Mock.mock('/goods/getAllGoods', 'post', goodsData);
Mock.mock('/info/getAllNotification', 'post', notificationData);
Mock.mock('/user/getUserList', 'post', userList);
Mock.mock('/chats/getAllCartlist', 'post', cartList);
