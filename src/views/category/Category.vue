<template>
	<div class="category">
		<cate-nav-bar />
		<div class="left">
			<cate-tab-bar class="tab-bar" />
		</div>
		<div class="right">
			<cate-goods class="goods"></cate-goods>
		</div>
	</div>
</template>

<script>
import CateNavBar from './childComponents/CateNavbar';
import CateTabBar from './childComponents/CateTabBar';
import CateGoods from './childComponents/CateGoods';

export default {
	name: 'Category',
	components: {
		CateNavBar,
		CateTabBar,
		CateGoods
	}
};
</script>

<style scoped>
.category {
	position: fixed;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;

	overflow: hidden;
}
.left {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;

	overflow: scroll;
}
.right {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 95px;
	right: 0;

	overflow: scroll;
}
</style>
