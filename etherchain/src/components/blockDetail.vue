<template>
	<div class="container narrow">
		<div id ="pageName">
			区块查询
		</div>
		<div class="mainCard">
			<div class="cardTitle">
				区块 # {{blockData.height}}
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 区块高度：</div>
				<div class="cardData">{{blockData.height}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 时间戳：</div>
				<div class="cardData">{{blockData.timeStamp}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data:function(){
		return {
			blockData:{
				height: 4254223,
				timeStamp: "4h 33min age",
				transaction: {
					transactions: 88,
					contractInternal: 9, 
				},
				hash: "0x4fd1ae97bb1b52849bf972dd17878be2de780afdb15046ca19c232bb2d4dc430",
				parentHash: "0x07325390c47a22f6a98f32dfe9e13d4cfc1ea27d2f1de9175f91bfa8bfb8b003",
				Sha3Uncles: "0x8535d268642e9d158852d83368d49df1727abaad1f2ed51888a155b147a2e113",
				miner: "0x90e4be5cd24970a87e23e281f3ad40a89558b433",
				difficulty: 2325922740362359,
				totalDifficulty: 885438933632093739683,
				Size: 29061,
				gasUsed: 6688743,
				gasLimit: 6705843,
				Nonce: "0x88a2ae03a00886458b",
				blockReward: 5.373050127176468892,
				unclesReward: 0,
			},
			transactionList:{},
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
.cardTitle{
	background-color: #4c6bd8;
	padding: 25px 3% 22px 3%;
	color:white;
	font-size: 20px;
}

.cardDetail{
	padding: 20px 3% 20px 3%;
}

.cardDetail:nth-child(odd){
	background-color: #F5F8FC;
}

.cardItem{
	width: 10%;
}

.cardItem,.cardData{
	display: inline-block;
}
</style>