<template>
	<div class="home">
		<div class="banner">
			<el-carousel trigger="click" :height="imgHeight" :interval="3000">
				<el-carousel-item v-for="(item,index) in banner" :key="index">
					<router-link :to="{name:item.url}">
						<img ref="imgHeight" :src="item.image" :alt="item.name">
					</router-link>
				</el-carousel-item>
			</el-carousel>
		</div>

		<div class="wrap">
			<el-container>
				<el-main>
					<el-row class="trait">
						<el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="24" class="trait_item"><div class="item">特点一</div></el-col>
						<el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="24" class="trait_item"><div class="item">特点二</div></el-col>
						<el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="24" class="trait_item"><div class="item">特点三</div></el-col>
					</el-row>
					<!-- <div>
						<el-button>默认按钮</el-button>
						<el-button type="primary">主要按钮</el-button>
						<el-button type="success">成功按钮</el-button>
						<el-button type="info">信息按钮</el-button>
						<el-button type="warning">警告按钮</el-button>
						<el-button type="danger">危险按钮</el-button>
					</div> -->
					<div class="content">

					</div>

				</el-main>
			</el-container>
		</div>
	</div>
</template>

<script>
import Header from "./Header";
export default {
	name: "HelloWorld",
	data() {
		return {
			msg: "Welcome to Your Vue.js App",
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄"
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄"
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄"
				}
			],
			banner: [
				{
					id: 1,
					image: require("../assets/images/index/banner1.png"),
					url: "HtmlHome",
					name: "html"
				},
				{
					id: 2,
					image: require("../assets/images/index/banner2.png"),
					url: "CssHome",
					name: "css"
				},
				{
					id: 3,
					image: require("../assets/images/index/banner3.png"),
					url: "CssHome",
					name: "javascript"
				},
				{
					id: 4,
					image: require("../assets/images/index/banner4.png"),
					url: "CssHome",
					name: "jquery"
				}
			],
			imgHeight: ""
		};
	},
	components: {
		Header
	},
	mounted() {
		var that = this;
		window.onresize = function temp() {
			that.imgHeight = that.$refs.imgHeight[0].height + "px";
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.banner {
	border-bottom: 2px solid #f7f7f7;
	overflow: hidden;
}
.banner img {
	display: block;
	width: 100%;
}

.el-carousel__button {
	background: #a40000;
	border-radius: 8px;
	width: 8px;
	height: 8px;
}

.trait .trait_item {
	padding: 10px;
}
.trait .trait_item .item {
	background: #f7f7f7;
	height: 300px;
	line-height: 300px;
	text-align: center;
}
.content {
	height: 350px;
	background: #f7f7f7;
	margin: 20px 0 10px;
}
@media (max-width: 1200px) {
	.banner img {
		width: 150%;
		margin-left: -25%;
	}
}
@media (max-width: 767px) {
	.banner img {
		width: 180%;
		margin-left: -40%;
	}
}
</style>
