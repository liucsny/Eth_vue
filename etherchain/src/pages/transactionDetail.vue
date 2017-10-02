<template>
	<div class="container narrow">
		<div id ="pageName">
			交易查询
		</div>
		<div class="mainCard">
			<div class="cardTitle">
				<div class="txnBlockThin"></div>
				<div class="transactionVal">
					{{transactionData.value}} Ether
				</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 交易哈希：</div>
				<div class="cardData">{{transactionData.transactionHash}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 区块高度：</div>
				<div class="cardData">{{transactionData.blockHeight}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 时间戳：</div>
				<div class="cardData">{{transactionData.timeStamp}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 来自：</div>
				<div class="cardData">{{transactionData.from}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 转入：</div>
				<div class="cardData">{{transactionData.to}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 交易额：</div>
				<div class="cardData">{{transactionData.value}} Ether</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 交易消耗Gas：</div>
				<div class="cardData">{{transactionData.gasUsed}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> Gas价格：</div>
				<div class="cardData">{{transactionData.gasPrice}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 实际交易费：</div>
				<div class="cardData">{{transactionData.actualTxFee}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 累计Gas使用：</div>
				<div class="cardData">{{transactionData.cumulativeGasUsed}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> Nonce：</div>
				<div class="cardData">{{transactionData.Nonce}}</div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 输入数据：</div>
				<div class="cardData"><input type="text"></div>
			</div>
			<div class="cardDetail">
				<div class="cardItem"> 注释：</div>
				<div class="cardData"><input type="text"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data:function(){
		return {
			transactionData:{
				value: 0.23123,
				transactionHash: "0xfc788e72cb06530c61f36167f5f78a696edf407e56f25d24e5ff8c0d97db86f2",
				blockHeight: 4257427,
				timeStamp: "23s ago",
				from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
				to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
				gasLimit: 21000,
				gasUsed: 51963,
				gasPrice: 0.000000002,
				actualTxFee: 0.000103926,
				cumulativeGasUsed: 6718111,
				Nonce: 206,
			},
		}
	}
}
</script>

<style scoped>



.cardTitle{
	background-color: #f5f8fc;
}

.txnBlockThin{
	background-color: #4c6bd8;
	padding:2px;
	height: 81px;
	display: inline-block;
	float: left;
	margin: 0;
	/*border:red solid 1px;*/
}

.transactionVal{
	/*border:red solid 1px;*/
	padding: 25px 3% 22px 3%;
	color: #4c6bd8;
	font-size: 26px;
	font-weight: 600;
	display: inline-block;
}

.cardDetail{
	padding: 20px 3% 26px 3%;
}

.cardDetail:nth-child(odd){
	background-color: #F5F8FC;
}

.cardItem{
	width: 15%;
}

.cardItem,.cardData{
	display: inline-block;
}

input[type="text"]{
	width: 620%;
	height: 26px;
	border: 1px solid #E6E6E6;
}

</style>