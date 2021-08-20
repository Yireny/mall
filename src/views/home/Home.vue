<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<tab-control
			:titles="['流行', '新款', '精选']"
			@tabClick="tabClick"
			ref="tabControl1"
			class="tab-control"
			v-show="isTabFixed"
		/>
		<scroll
			class="content"
			ref="scroll"
			:probe-type="3"
			:pull-up-load="true"
			@scroll="contentScroll"
			@pullingUp="loadMore"
		>
			<home-swiper
				:banners="banners"
				@swiperImageLoad="swiperImageLoad"
			></home-swiper>
			<home-recommend-view :recommends="recommends"></home-recommend-view>
			<feature-view></feature-view>
			<tab-control
				:titles="['流行', '新款', '精选']"
				@tabClick="tabClick"
				ref="tabControl2"
			/>
			<goods-list :goods="showGoods" />
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop" />
	</div>
</template>

<script>
//common组件
import NavBar from '../../components/common/navbar/NavBar';
import Scroll from '../../components/common/scroll/Scroll';

//content组件
import TabControl from '../../components/content/tabControl/TabControl';
import GoodsList from '../../components/content/goods/GoodsList';
import GoodsListItem from '../../components/content/goods/GoodsListItem';
import BackTop from '../../components/content/backtop/BackTop';

//child组件
import HomeSwiper from './childCompoents/HomeSwiper';
import HomeRecommendView from './childCompoents/HomeRecommendView';
import FeatureView from './childCompoents/FeatureView';

import { getHomeMultidata, getHomeGoods } from '../../network/home';

export default {
	name: 'Home',
	components: {
		//common组件
		NavBar,
		Scroll,
		//content组件
		TabControl,
		GoodsList,
		GoodsListItem,
		BackTop,
		//child组件
		HomeSwiper,
		HomeRecommendView,
		FeatureView
	},
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			},
			currentType: 'pop',
			isShowBackTop: false,
			tabOffsetTop: 0,
			isTabFixed: false,
			saveY: 0
		};
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		}
	},

	activated() {
		this.$refs.scroll.scrollTo(0, this.saveY, 0);
		this.$refs.scroll.refresh();
	},

	deactivated() {
		this.saveY = this.$refs.scroll.getScrollY();
	},

	created() {
		//请求数据
		this.getHomeMultidata();
		//请求商品数据
		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');
	},
	methods: {
		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = 'pop';
					break;
				case 1:
					this.currentType = 'new';
					break;
				case 2:
					this.currentType = 'sell';
					break;
			}
			this.$refs.tabControl1.currentIndex = index;
			this.$refs.tabControl2.currentIndex = index;
		},
		getHomeMultidata() {
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			});
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1;
			getHomeGoods(type, page).then(res => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;

				this.$refs.scroll.finishPullUp();
			});
		},
		backClick() {
			this.$refs.scroll.scrollTo(0, 0);
		},
		contentScroll(position) {
			//回到顶部组件是否显示
			this.isShowBackTop = -position.y > this.tabOffsetTop;

			//tabControl组件是否吸顶
			this.isTabFixed = -position.y > this.tabOffsetTop;
		},
		loadMore() {
			this.getHomeGoods(this.currentType);
		},
		swiperImageLoad() {
			this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
		}
	}
};
</script>

<style scoped>
#home {
	height: 100vh;
	position: relative;
}

.home-nav {
	background-color: #ff8198;
	color: #fff;
	position: relative;
}

.content {
	overflow: hidden;

	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
}

.tab-control {
	position: relative;
	z-index: 9;
}
</style>
