<template>
	<div class="mainCard">
<<<<<<< HEAD
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt placeat, doloremque explicabo alias deserunt, eveniet iusto, atque nobis quis, autem accusamus iste aut molestias? Ullam praesentium in vel eum dicta?</p>
=======
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
>>>>>>> 062bfebad908a4ef64c6a5bf2b182fe6ea8c30fe
	</div>
</template>

<script>
export default{
<<<<<<< HEAD
	data: function(argument) {
		return {

		}
	}
=======
	props:["cards"],
>>>>>>> 062bfebad908a4ef64c6a5bf2b182fe6ea8c30fe
}
</script>

<style scoped>
.mainCard{
	box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
	border: 1px solid rgba(214,214,214,.6);
	padding: 40px 45px 30px 45px;
<<<<<<< HEAD
	margin: 20px auto;
	background-color: #fff;
}
=======
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
>>>>>>> 062bfebad908a4ef64c6a5bf2b182fe6ea8c30fe
</style>