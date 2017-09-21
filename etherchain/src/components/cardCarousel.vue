<template>
	<div class="mainCard">
			<slot></slot>
			<div>
				<i class="ion-ios-arrow-left carouselButton" @click="Arrow('left')"></i>
				<div class="cutCard">
					<div class="cardCarousel">
						<div v-for="token in cards" class="card">
							<a href="#">
								<img :src="token.data.img" alt="tokenimg">
								<div class="tokenCardTitle">{{token.name}}</div>
								<div>{{token.data.price.unit}}{{token.data.price.val}}<div class="change">{{token.data.price.change}}</div></div>
							</a>
						</div>
						<a href="#" class="card viewMore">
							<div>
								<p>查看更多</p>
							</div>
						</a>
					</div>
				</div>
				<i class="ion-ios-arrow-right carouselButton" @click="Arrow('right')"></i>
				</div>
		</div>
	</div>
</template>

<script>
export default{
	props:["cards"],
	data:function(){
		return {
			cardCarousel:{
				position:0,
				step:0,
				amount:8,
			},
		}
	},
	methods:{
		Arrow:function(direction){
			let cardCarousel = document.getElementsByClassName("cardCarousel")[0];

			let card = document.getElementsByClassName("card")[0],
				width = card.offsetWidth,
				marginLeft = window.getComputedStyle(card).marginLeft,
				stepWidth = parseFloat(width) +parseFloat(marginLeft)*2;

			let leftBtn = document.getElementsByClassName("ion-ios-arrow-left")[0],
				rightBtn = document.getElementsByClassName("ion-ios-arrow-right")[0];

			if (direction === "left") {
				this.cardCarousel.position -= 1;
				if(this.cardCarousel.position < this.cardCarousel.amount-5){
					rightBtn.style.visibility = "visible";
				}
				if(this.cardCarousel.position <= 0){
					leftBtn.style.visibility = "hidden";
				}
			} else if(direction === "right") {
				this.cardCarousel.position += 1;
				if(this.cardCarousel.position <= 1){
					leftBtn.style.visibility = "visible";
				}else if(this.cardCarousel.position === this.cardCarousel.amount-5){
					rightBtn.style.visibility = "hidden";
				}
			}

			console.log(this.cardCarousel.position);
			this.cardCarousel.step = stepWidth*this.cardCarousel.position;

			cardCarousel.style.transform = "translate( -"+ this.cardCarousel.step +"px,0)";
		},
	},
	watch:{
	},
	mounted:function(){
		(function(){
			let elemChanged = document.getElementsByClassName('change');
			for(let ele of elemChanged){
				if(ele.innerHTML>0){
					ele.style.color="green";
					ele.innerHTML = "+" + ele.innerHTML;
				}else{
					ele.style.color="red";
				}
			}
		})();
	}
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

.mainCard > div{
	display: flex;
	justify-content:space-between;
	align-items:center;
}

.mainCard > div > i{
	cursor: pointer;
}

.mainCard > div > i:hover {
	color: #1038ff;
}

.cutCard{
	/*border:red 1px solid;*/
	padding-bottom: 20px;
	overflow: hidden;
	width: 96%;
}

.cardCarousel{
	width:160%;
	margin-top: 30px;
	transition: .5s;
	display: flex;
}

.carouselButton{
	font-size: 30px;
	display: inline-block;
}

.card{
	border:red 1px solid;
	background-color: #fff;
	box-shadow: 0 1px 4px 2px rgba(0,34,107,.1);
	border: none;
	width: 9.8%;
	height: 220px;
	margin: 0 1.3%;
	display: inline-block;
	transition: .2s;
}

.card:hover{
	box-shadow: 0 1px 16px 4px rgba(0,34,107,.1);
}

.card > a{
	color: #4b5963;
	text-decoration: none;
}

.viewMore{
	text-align:center;
	padding-top: 80px;
	text-decoration: none; 
	color: #4c6bd8;
	font-size: 18px;
}

.ion-ios-arrow-left{
	visibility:hidden;
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