<template>
	<div class="asidemen">
		侧边目录
		<!-- {{id}} -->
		<ul>
			<li v-for="(item,index) in aside.aside" :key="index">
				<router-link :to="{ name: aside.name, params: { userid: item.id }}">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
data(){
	return{

	}
},
props:["aside",'id']
}
</script>
<style scoped>

</style>


