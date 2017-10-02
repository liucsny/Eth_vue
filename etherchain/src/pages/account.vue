<template>
	<div class="container narrow">
		<div id ="pageName">
			账户查询
		</div>
		<div class="mainCard">
			¥ {{account.value}}
		</div>
	</div>
</template>

<script>
export default{
	data:function() {
		return {
			account:{
				value: 23443.84673,
				adress: 0x9a642d6b3368ddc662CA244bAdf32cDA716005BC,
				mined: {
					block: 484925,
					uncles: 35135
				},
			}
		}
	}
}
</script>

<style scoped>

</style>