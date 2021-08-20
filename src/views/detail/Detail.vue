<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick" />
		<scroll
			class="content"
			ref="scroll"
			:probe-type="3"
			@scroll="contentScroll"
		>
			<!-- 轮播图 -->
			<detail-swiper :top-images="topImages" />
			<!-- 商品信息 -->
			<detail-base-info :goods="goods" />
			<!-- 店家信息 -->
			<detail-shop-info :shop="shop" />
			<!-- 商品详细信息 -->
			<detail-goods-info :detail-info="detailInfo" />
			<!-- 商品参数 -->
			<detail-param-info ref="params" :param-info="paramInfo" />
			<!-- 评论 -->
			<detail-comment-info ref="comments" :comment-info="commentInfo" />
			<!-- 推荐 -->
			<goods-list ref="recommend" :goods="recommends" />
		</scroll>
		<detail-bottom-bar @addToCart="addToCart" />
	</div>
</template>

<script>
import DetailNavBar from './childComponent/DetailNavBar';
import DetailSwiper from './childComponent/DetailSwiper';
import DetailBaseInfo from './childComponent/DetailBaseInfo';
import DetailShopInfo from './childComponent/DetailShopInfo';
import DetailGoodsInfo from './childComponent/DetailGoodsInfo';
import DetailParamInfo from './childComponent/DetailParamInfo';
import DetailCommentInfo from './childComponent/DetailCommentInfo';
import DetailBottomBar from './childComponent/DetailBottomBar';

import Scroll from '../../components/common/scroll/Scroll';
import GoodsList from '../../components/content/goods/GoodsList';

import {
	getDetail,
	getRecommend,
	Goods,
	Shop,
	GoodsParam
} from '../../network/detail';
export default {
	name: 'Detail',
	components: {
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailGoodsInfo,
		DetailParamInfo,
		DetailCommentInfo,
		DetailBottomBar,

		Scroll,
		GoodsList
	},
	data() {
		return {
			iid: null,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			paramInfo: {},
			commentInfo: {},
			recommends: [],
			offsetTop: [],
			currentIndex: 0
		};
	},
	created() {
		this.iid = this.$route.params.iid;

		getDetail(this.iid).then(res => {
			const data = res.result;
			//获取轮播图
			this.topImages = data.itemInfo.topImages;
			//获取商品信息
			this.goods = new Goods(
				data.itemInfo,
				data.columns,
				data.shopInfo.services
			);
			//获取店铺信息
			this.shop = new Shop(data.shopInfo);
			//获取商品详细信息
			this.detailInfo = data.detailInfo;
			//获取参数信息
			this.paramInfo = new GoodsParam(
				data.itemParams.info,
				data.itemParams.rule
			);
			//获取评论信息
			if (data.rate.cRate !== 0) {
				this.commentInfo = data.rate.list[0];
			}
		});
		getRecommend().then(res => {
			this.recommends = res.data.list;
		});
	},
	methods: {
		titleClick(index) {
			if (this.offsetTop.length == 0) {
				this.offsetTop.push(0);
				this.offsetTop.push(this.$refs.params.$el.offsetTop);
				this.offsetTop.push(this.$refs.comments.$el.offsetTop);
				this.offsetTop.push(this.$refs.recommend.$el.offsetTop);
				this.offsetTop.push(Number.MAX_VALUE);
			}
			this.$refs.scroll.scrollTo(0, -this.offsetTop[index], 300);
		},
		contentScroll(position) {
			const positionY = -position.y;

			let length = this.offsetTop.length;
			for (let i = 0; i < length - 1; i++) {
				if (
					this.currentIndex !== i &&
					positionY >= this.offsetTop[i] &&
					positionY < this.offsetTop[i + 1]
				) {
					this.currentIndex = i;
					this.$refs.nav.currentIndex = this.currentIndex;
				}
			}
		},
		addToCart() {
			const goods = {};
			goods.image = this.topImages[0];
			goods.title = this.goods.title;
			goods.desc = this.goods.desc;
			goods.price = this.goods.finalPrice;
			goods.id = this.iid;

			this.$store.dispatch('addCart', goods);
		}
	}
};
</script>

<style scoped>
#detail {
	position: relative;
	z-index: 9;
	background-color: #fff;
	height: 100vh;
}
.detail-nav {
	position: relative;
	z-index: 9;
	background-color: #fff;
}
.content {
	overflow: hidden;

	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
}
</style>
