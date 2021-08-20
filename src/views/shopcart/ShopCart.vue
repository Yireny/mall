<template>
	<div>
		<nav-bar class="nav-bar">
			<div slot="center">购物车({{ cartLength }})</div>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar';

export default {
	name: 'ShopCart',
	components: {
		NavBar
	},
	computed: {
		cartLength() {
			return this.$store.state.cartList.length;
		}
	}
};
</script>

<style scoped>
.nav-bar {
	background-color: #ff8198;
	color: #fff;
}
</style>
