<template>
	<div class="mainCard">
		<div class="cutCard">
			<div class="cardCarousel">
				<div v-for="token in cards" class="card">
					<a href="#">
						<img :src="token.data.img" alt="tokenimg">
						<div class="tokenCardTitle">{{token.name}}</div>
					</a>
				</div>
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

.cutCard{
	padding: 20px 0;
	overflow: hidden;
}

.cardCarousel{
	/*border:red 1px solid;*/
	width:1630px;
	transition: .5s;
}

.cardCarousel:hover{
	transform: translate(-202px,0);
	transition: .5s;
}

.card{
	background-color: #fff;
	box-shadow: 0 1px 4px 2px rgba(0,34,207,.1);
	border: none;
	width: 150px;
	height: 210px;
	margin: 0 26px;
	display: inline-block;
	transition: .2s;
}

.card:hover{
	box-shadow: 0 1px 16px 4px rgba(0,34,207,.1);
}

.card > a{
	color: #4b5963;
	text-decoration: none;
}
.tokenCardTitle{
	padding: 12px 20px;
	font-size: 18px;
}
</style>