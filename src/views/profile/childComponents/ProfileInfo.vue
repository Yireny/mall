<template>
	<div class="pro-info">
		<div class="header">
			<div class="user">
				<div class="left">
					<img src="../../../assets/img/profile/avatar.svg" />
				</div>
				<div class="right">
					<h3>登录/注册</h3>
					<img src="../../../assets/img/profile/phone.svg" alt="" />
					<span>暂未绑定手机号</span>
				</div>
			</div>
			<div class="user-info">
				<div>
					<span>0.00</span>
					元
					<br />
					我的余额
				</div>
				<div>
					<span>0</span>
					个
					<br />
					我的优惠
				</div>
				<div>
					<span>0</span>
					分
					<br />
					我的积分
				</div>
			</div>
		</div>
		<div class="main">
			<ul>
				<li>
					<img src="../../../assets/img/profile/message.svg" alt="" />
					我的消息
				</li>
				<li>
					<img src="../../../assets/img/profile/pointer.svg" alt="" />
					积分商城
				</li>
				<li>
					<img src="../../../assets/img/profile/vip.svg" alt="" />
					会员卡
				</li>
			</ul>
		</div>
		<div class="footer">
			<ul>
				<li>
					<img src="../../../assets/img/profile/cart.svg" alt="" />
					我的购物车
				</li>
				<li>
					<img src="../../../assets/img/profile/shopping.svg" alt="" />
					下载购物APP
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProfileInfo'
};
</script>

<style scoped>
.user {
	display: flex;
	height: 100px;
	width: 100%;
	background-color: #ff8198;
	color: #fff;
}
.left img {
	height: 70px;
	width: 70px;
	margin-top: 15px;
	margin-left: 15px;
}
.right {
	margin-top: 25px;
	margin-left: 15px;
}
.right img {
	height: 20px;
	width: 20px;
}
.user-info {
	display: flex;
	text-align: center;
	height: 80px;
}
.user-info div {
	padding: 10px 0;
	margin: 0 1px;
	flex: 1;
	background-color: #fff;
}
.user-info span {
	color: #ff8198;
	font-size: 20px;
}
ul {
	margin-top: 15px;
}
li {
	height: 40px;
	line-height: 40px;
	padding: 0 15px;
	margin: 2px 0;
	background-color: #fff;
}
li img {
	height: 20px;
	width: 20px;
	vertical-align: middle;
}
.footer {
	height: 50%;
	background-color: #fff;
}
</style>
