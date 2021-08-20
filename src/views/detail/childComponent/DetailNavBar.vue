<template>
	<div>
		<nav-bar class="nav-bar">
			<div slot="left" class="left" @click="backClick">
				<img src="../../../assets/img/common/back.svg" alt="" />
			</div>
			<div slot="center" class="center">
				<div
					v-for="(item, index) in titles"
					class="center-item"
					:class="{ active: index === currentIndex }"
					@click="titleClick(index)"
				>
					{{ item }}
				</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar';
export default {
	name: 'DetailNavBar',
	components: {
		NavBar
	},
	data() {
		return {
			titles: ['商品', '参数', '评论', '推荐'],
			currentIndex: 0
		};
	},
	methods: {
		titleClick(index) {
			this.currentIndex = index;
			this.$emit('titleClick', index);
		},
		backClick() {
			this.$router.back();
		}
	}
};
</script>

<style scoped>
.nav-bar {
	background-color: #fff;
}
.left img {
	margin-top: 12px;
}
.center {
	display: flex;
	font-size: 15px;
}
.center-item {
	flex: 1;
}
.active {
	color: #ff8198;
}
</style>
