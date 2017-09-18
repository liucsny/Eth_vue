<template>
	<div class="mainCard">
		<div class="cardCarousel">
			<div v-for="token in cards">
				<div>{{token.name}}</div>
				<!-- {{token.data.img}} -->
				<img :src="token.data.img" alt="omg">
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:["cards"],
}
</script>

<style scoped>
.mainCard{
	box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
	border: 1px solid rgba(214,214,214,.6);
	padding: 40px 45px 30px 45px;
	margin: 10px auto;
	background-color: #fff;
}

.cardCarousel{
	border:red 1px solid;
}
</style>