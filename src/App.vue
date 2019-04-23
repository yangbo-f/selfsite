<template>
  <div id="app">
	  <el-container>
		<el-header>
			<Header></Header>
		</el-header>

		<router-view/>

		 <el-footer>
			 <Footer></Footer>
		 </el-footer>
	</el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
	name: "App",
	components: {
		Header,
		Footer
	}
};
</script>

<style>
@import "../src/assets/css/reset.css";
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

.el-header,
.el-footer {
	padding: 0;
	height: auto;
}
.el-main {
	width: 1200px;
	margin: 0 auto;
}

.el-carousel__button {
	background: #a40000;
}
</style>
