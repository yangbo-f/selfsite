<template>
	<div class="html_home wrap">
		<el-container>
			<el-aside>
				<div class="aside">
					<AsideMenu  :aside="asides"></AsideMenu>
				</div>
			</el-aside>
			<el-main>
				<div class="main_content">
				sfdasfa main
				<router-view/>
				</div>
			</el-main>
		</el-container>
	</div>
</template>
<script>
import AsideMenu from "../components/AsideMenu";
import asideData from '../assets/libs/tpl.js'
export default {
	data(){
		return{
			pageid:'',
			asides:''
		}
	},
	components:{
		AsideMenu
	},
	watch: {
    '$route' (to, from) {
      var id = this.$route.params.id
		this.pageid = id
		this.asides =asideData[id-1]
		console.log(asideData[id])
    }
  },
	mounted(){
		var id = this.$route.params.id
		this.pageid = id
		this.asides =asideData[id-1]
	}
};
</script>

<style scoped>
.html_home {
	margin: 20px auto;
}
</style>
