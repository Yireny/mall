<template>
	<div>
		<nav-bar class="nav">
			<div slot="center">用户信息</div>
		</nav-bar>
		<profile-info class="pro-info"></profile-info>
	</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar';
import ProfileInfo from './childComponents/ProfileInfo';

export default {
	name: 'Profile',
	components: {
		NavBar,
		ProfileInfo
	}
};
</script>

<style scoped>
.nav {
	background-color: #ff8198;
	color: #fff;
}
.pro-info {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	background-color: #f6f6f6;
}
</style>
