export default {
	addCart(content, payload) {
		//查找当前数组中是否有该商品
		let isGoods = content.state.cartList.find(item => {
			return item.id === payload.id;
		});
		//判断添加商品或者增加数量
		if (isGoods) {
			content.commit('addCount', isGoods);
		} else {
			payload.count = 1;
			content.commit('addToCart', payload);
		}
	}
};
