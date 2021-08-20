<template>
	<div>
		<nav-bar class="nav">
			<div slot="left">
				<icon name="comment-dots" scale="1.5" class="icon"></icon>
			</div>
			<div slot="center" class="center">
				<div>
					<input id="s" type="text" placeholder="请输入关键字" />
				</div>
			</div>
			<div slot="right">
				<icon name="cart-arrow-down" scale="1.5" class="icon"></icon>
			</div>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar';

export default {
	name: 'CateNavBar',
	components: {
		NavBar
	}
};
</script>

<style scoped>
.nav {
	background-color: #ff8198;
}
.center input {
	height: 28px;
	line-height: 28px;
	width: 90%;
	outline-style: none;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 15px;
}
.center input:focus {
	border-color: #66afe9;
	outline: 0;
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
		0 0 8px rgba(102, 175, 233, 0.6);
}
.icon {
	color: #f6f6f6;
}
</style>
