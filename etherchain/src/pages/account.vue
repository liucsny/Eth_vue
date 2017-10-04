<template>
	<div class="container narrow">
		<div id ="pageName">
			账户查询
		</div>
		<div class="mainCard">
			<div class="valueInt">¥ {{parseInt(account.value)}}</div>
			<div class="valueDigi">.{{account.value.toString().split(".")[1]}}</div>
			<div class="cardIcon">
				<i class="ion-android-create"></i>
				<i class="ion-android-star-outline"></i>
			</div>
			<div class="accountBox">
				<div class="accountDetail">
					<div class="detail">地&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp址：&nbsp&nbsp{{account.adress}} <img class="qrCode" src="../assets/icons/qrCode.svg" alt=""></div>
					<div class="detail">挖矿获得：&nbsp&nbsp区块{{account.mined.block}}&nbsp&nbsp叔块{{account.mined.uncles}}</div>
					<div class="detail">交易次数：&nbsp&nbsp{{account.transactions}}次</div>
					<div class="detail">
						<div class="assetsTitle">资&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp产：</div>
						<div class="assets">
							<div v-for="(item,property) of account.assets">{{property}}: {{item.val}} {{item.unit}}</div>
						</div>
					</div>
				</div>
				<div class="viewMore">
					<div>更多 <i class="ion-ios-arrow-down"></i></div>
				</div>
			</div>
		</div>
		<div class="mainCard">
		</div>
	</div>
</template>

<script>
export default{
	data:function() {
		return {
			account:{
				value: 23443.84673,
				adress: "0x9a642d6b3368ddc662CA244bAdf32cDA716005BC",
				mined: {
					block: 484925,
					uncles: 35135
				},
				transactions:3463044,
				assets:{
					ETH: {
						val: 10.573927243372813667,
						unit: "Ether"
					},
					OMG: {
						val: 43.582034584560973406,
						unit: "OMG"
					},
					QTUM: {
						val: 2.3645725472434634553,
						unit: "QTUM"
					},
					PAY: {
						val: 10.406473657945946872,
						unit: "PAY"
					},
				},
			}
		}
	}
}
</script>

<style scoped>
.valueInt{
	font-size: 40px;
	display: inline-block;
	margin: 0 0 20px 0;
}
.valueDigi{
	font-size: 16px;
	display: inline-block;
}
.cardIcon{
	float: right;
}
.ion-android-create{
	font-size: 20px;
	display:inline-block;
	margin: 10px;
}

.ion-android-star-outline{
	font-size: 22px;
	display:inline-block;
	margin: 10px;
}
.detail{
	/*border:red 1px solid;*/
	margin: 14px 0;
	font-size: 14px;
}

.assets{
	/*border:red 1px solid;*/
	display: inline-block;
	margin: 2px;
}
.assets>div{
	margin: 0 0 15px 0;
}
.qrCode{
	width:12px;
	margin-left: 10px;
}
.assetsTitle{
	margin: 3px 0 0 0;
	vertical-align: top;
	display: inline-block;
}
.viewMore{
	/*border:red 1px solid;*/
	float:right;
	margin-bottom: 10px;
	position: relative;
	width: 100px;
}
.viewMore>div{
	/*border:red 1px solid;*/
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: 14px;
}
.accountBox{
	display: flex;
	justify-content:space-between;
}
</style>