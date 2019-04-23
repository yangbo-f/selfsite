<template>
	<div class="content">
		neorong ye{{pageid}}
	</div>
</template>

<script>
export default {
	data(){
		return{
			pageid:''
		}
	},
watch: {
    '$route' (to, from) {
      var id = this.$route.params.userid
		this.pageid = id
    }
  },
	mounted(){
		var id = this.$route.params.userid
		this.pageid = id
	}
}
</script>
<style scoped>

</style>

