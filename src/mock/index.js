import Mock from 'mockjs';
import carouselData from './home/carousel';
import gridData from './home/grid';
import goodsData from './home/homeGoods';


Mock.mock('/carousel/getAllCarousel', 'post', carouselData);
Mock.mock('/grid/getAllGrid', 'post', gridData);
Mock.mock('/goods/getAllGoods', 'post', goodsData);
