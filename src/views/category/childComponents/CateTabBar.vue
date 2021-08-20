<template>
	<div class="bar">
		<ul class="list">
			<li
				v-for="(item, index) in titles"
				@click="itemClick(index)"
				class="list-item"
				:class="{ active: index == currentIndex }"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CateTabBar',
	data() {
		return {
			titles: [
				'正在流行',
				'上衣',
				'裤子',
				'裙子',
				'内衣',
				'女鞋',
				'男友',
				'包包',
				'运动',
				'配饰',
				'美妆',
				'个护',
				'家居',
				'百货',
				'母婴',
				'食品'
			],
			currentIndex: 0
		};
	},
	methods: {
		itemClick(index) {
			this.currentIndex = index;
		}
	}
};
</script>

<style scoped>
.bar {
	background-color: #f6f6f6;
	width: 95px;
}
.list {
	text-align: center;
}
.list-item {
	height: 40px;
	line-height: 40px;
}
.active {
	background-color: #fff;
	font-weight: 900;
	color: #ff8198;
	border-left: 2px #ff8198 solid;
}
</style>
