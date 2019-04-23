<template>
	<div class="header">
		<el-menu class="el-menu-demo" mode="horizontal"
		@select="handleSelect"
		background-color="#a40000"
		text-color="#fff"
		active-text-color="#8e0101">
			<el-menu-item index="0">Logo</el-menu-item>
			<el-menu-item v-for="(item,index) in nav" :key="index">
				<router-link :to="{name:item.Url,params: { id: item.id }}">{{item.name}}</router-link>
				<!-- <router-link :to="item.Url">{{item.name}}</router-link> -->
			</el-menu-item>
		</el-menu>
	</div>
</template>
<script>
export default {
	data() {
		return {
			// activeIndex: "0",
			nav: [
				{
					id: 1,
					name: "首页",
					Url: "Home"
				},
				{
					id: 2,
					name: "HTML",
					Url: "HtmlHome"
				},
				{
					id: 3,
					name: "CSS",
					Url: "CssHome"
				},
				{
					id: 4,
					name: "JavaScript",
					Url: "Javascript"
				},
				// {
				// 	id: 5,
				// 	name: "JQuery",
				// 	Url: "/"
				// },
				// {
				// 	id: 6,
				// 	name: "Echarts",
				// 	Url: "/"
				// },
				// {
				// 	id: 7,
				// 	name: "Git",
				// 	Url: "/"
				// },
				// {
				// 	id: 8,
				// 	name: "网站推荐",
				// 	Url: "/"
				// },
				// {
				// 	id: 9,
				// 	name: "问答",
				// 	Url: "/"
				// },
				{
					id: 10,
					name: "登录",
					Url: "/"
				}
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
<style scoped>
.el-row {
	margin-bottom: 20px;
}
.el-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
