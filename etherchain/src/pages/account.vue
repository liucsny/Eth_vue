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
.narrow{
	width: 84%;
}
#pageName{
	font-size: 36px;
	color: #67666e;
	margin: 100px 0 30px 0;
}
.mainCard{
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
  border: 1px solid rgba(214,214,214,.6);
  padding: 30px 3%;
  margin: 16px auto 10px auto;
  background-color: #fff;
}
</style>