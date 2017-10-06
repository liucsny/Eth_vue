<template>
	<div>
		<div class="cardDetail">
			<div class="cardItem"> 区块高度：</div>
			<div class="cardData">{{blockData.height}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 时间戳：</div>
			<div class="cardData">{{blockData.timeStamp}}</div>
		</div>
		<slot></slot>
		<div class="cardDetail">
			<div class="cardItem"> 哈希：</div>
			<div class="cardData">{{blockData.hash}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 父哈希：</div>
			<div class="cardData">{{blockData.parentHash}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 叔区块哈希：</div>
			<div class="cardData">{{blockData.Sha3Uncles}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 矿工：</div>
			<div class="cardData">{{blockData.miner}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 难度：</div>
			<div class="cardData">{{numSeparator(blockData.difficulty)}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 总难度：</div>
			<div class="cardData">{{numSeparator(blockData.totalDifficulty)}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 区块大小：</div>
			<div class="cardData">{{numSeparator(blockData.Size)}} byte</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> Gas Used：</div>
			<div class="cardData">{{numSeparator(blockData.gasUsed)}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> Gas Limit：</div>
			<div class="cardData">{{numSeparator(blockData.gasLimit)}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> Nonce：</div>
			<div class="cardData">{{blockData.nonce}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 区块奖励：</div>
			<div class="cardData">{{blockData.blockReward}}</div>
		</div>
		<div class="cardDetail">
			<div class="cardItem"> 叔块奖励：</div>
			<div class="cardData">{{blockData.unclesReward}}</div>
		</div>
	</div>
</template>

<script>
export default{
	props:["blockData"],
	data:function(){
		return {
		}
	}
}
</script>

<style scoped>	

.cardTitle{
	background-color: #4c6bd8;
	padding: 25px 3% 22px 3%;
	color:white;
	font-size: 24px;
}

.cardDetail{
	padding: 26px 3% 26px 3%;
}

.cardDetail:nth-child(even){
	background-color: #F5F8FC;
}

.cardItem{
	width: 15%;
}

.cardItem,.cardData{
	display: inline-block;
}
</style>