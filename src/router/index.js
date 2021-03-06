import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const ShopCart = () => import('../views/shopcart/ShopCart.vue');
const Profile = () => import('../views/profile/Proflie.vue');
const Detail = () => import('../views/detail/Detail.vue');

//安装插件
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/shopcart',
		component: ShopCart
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/detail:iid',
		component: Detail
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;
