<template>
	<div class="mainCard">
		<div class="cutCard">
			<slot></slot>
			<div class="cardCarousel">
				<div v-for="token in cards" class="card">
					<a href="#">
						<img :src="token.data.img" alt="tokenimg">
						<div class="tokenCardTitle">{{token.name}}</div>
						<div>{{token.data.price.unit}}{{token.data.price.val}}<div class="change">{{token.data.price.change}}</div></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:["cards"],
	methods:{
	},
	watch:{
	},
	mounted:function(){
		let elemChanged = document.getElementsByClassName('change');
		for(let ele of elemChanged){
			if(ele.innerHTML>0){
				ele.style.color="green";
				ele.innerHTML = "+" + ele.innerHTML;
			}else{
				ele.style.color="red";
			}
		}
	}
}
</script>

<style scoped>
.mainCard{
	box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
	border: 1px solid rgba(214,214,214,.6);
	padding: 20px 45px 30px 45px;
	margin: 10px auto;
	background-color: #fff;
}

.cutCard{
	padding: 20px 0;
	overflow: hidden;
}

.cardCarousel{
	/*border:red 1px solid;*/
	width:160%;
	margin-top: 30px;
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
	width: 9.8%;
	margin: 0 1.3%;
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
	padding: 10px 20px;
	font-size: 20px;
}

.tokenCardTitle + div{
	font-size: 14px;
	padding: 0 22px;
}

.tokenCardTitle + div > div{
	display: inline-block;
	font-size: 12px;
	padding: 0 0 20% 6px;
}
</style>