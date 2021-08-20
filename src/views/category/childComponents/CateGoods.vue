<template>
	<div>
		<tab-control :titles="['综合', '销量', '新品']" class="tab-control" />
		<goods-list :goods="showGoods" class="goods"></goods-list>
	</div>
</template>

<script>
import TabControl from '../../../components/content/tabControl/TabControl';
import GoodsList from '../../../components/content/goods/GoodsList';

import { getHomeGoods } from '../../../network/home';

export default {
	name: 'CateGoods',
	components: {
		TabControl,
		GoodsList
	},
	data() {
		return {
			goods: {
				page: 0,
				list: []
			}
		};
	},
	computed: {
		showGoods() {
			return this.goods.list;
		}
	},
	methods: {
		getHomeGoods(type) {
			const page = this.goods.page + 1;
			getHomeGoods(type, page).then(res => {
				this.goods.list.push(...res.data.list);
				this.goods.page += 1;
			});
		}
	},
	created() {
		this.getHomeGoods('pop');
	}
};
</script>

<style scoped>
.tab-control {
	position: fixed;
	top: 44px;
	left: 95px;
	right: 0;

	z-index: 9;
}
.goods {
	margin-top: 40px;
}
</style>
