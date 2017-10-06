<template>
	<div class="container narrow">
		<div id ="pageName">
			账户查询
		</div>
		<div v-if="contractAccount.status" class="mainCard contractCard">
			<img :src="contractAccount.img" alt="">
			<div class="contractCardInfo">
				<div class="contractCardTitle">
					{{contractAccount.name}} 智能合约地址
				</div>
				<div class="contractCardDetail">合约创建：由 <a class="link" href="#">{{compressString(contractAccount.creation.account,7)}}</a> 于交易 <a class="link" href="#">{{compressString(contractAccount.creation.transaction,7)}}</a> 创建</div>
				<div class="contractCardDetail">联系方式：</div>
			</div>
		</div>
		<div class="mainCard">
			<div class="valueInt">¥ {{numSeparator(parseInt(account.value))}}</div>
			<div class="valueDigi">.{{account.value.toString().split(".")[1]}}</div>
			<div class="cardIcon">
				<i class="ion-android-create"></i>
				<i class="ion-android-star-outline"></i>
			</div>
			<div class="accountBox">
				<div class="accountDetail">
					<div class="detail">地&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp址：&nbsp&nbsp{{account.adress}} <img class="qrCode" src="../assets/icons/qrCode.svg" alt=""></div>
					<div class="detail">挖矿获得：&nbsp&nbsp区块{{account.mined.block}}&nbsp&nbsp叔块{{account.mined.uncles}}</div>
					<div class="detail">交易次数：&nbsp&nbsp{{numSeparator(account.transactions)}}次</div>
					<div class="detail">
						<div class="assetsTitle">资&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp产：</div>
						<div class="assets">
							<div v-for="(item,property) of account.assets">{{property}}: {{numSeparator(item.val)}} {{item.unit}}</div>
						</div>
					</div>
				</div>
				<div class="viewMore">
					<div>更多 <i class="ion-ios-arrow-down"></i></div>
				</div>
			</div>
		</div>
		<div class="mainCard">
			<div class="tabContainer">
				<div @click="activeTab=1" :class="{tabActive:(activeTab===1),tabInactive:!(activeTab===1)}">交易</div>
				<div @click="activeTab=2" :class="{tabActive:(activeTab===2),tabInactive:!(activeTab===2)}">代币交易</div>
				<div @click="activeTab=3" :class="{tabActive:(activeTab===3),tabInactive:!(activeTab===3)}">获得区块</div>
				<div @click="activeTab=4" :class="{tabActive:(activeTab===4),tabInactive:!(activeTab===4)}">获得数块</div>
				<div v-if="contractAccount.status" @click="activeTab=5" :class="{tabActive:(activeTab===5),tabInactive:!(activeTab===5)}">智能合约</div>
				<input @blur="inputBlur" class="subSearch subSearchHidden" type="text" placeholder="搜索账户信息">
				<i @click="iconClicked" class="ion-ios-search-strong"></i>
			</div>
			<component :is="selectedComponent" :transactionList="transactionList"></component>
		</div>
	</div>
</template>

<script>
import blockDetailList from "../components/blockDetailList.vue"

export default{
	components:{
		"app-list":blockDetailList,
	},
	data:function() {
		return {
			contractAccount:{
				status:true,
				name:"BAT",
				img:require("../assets/tokens/bat.svg"),
				creation:{
					account:"0x6B9EF02657339310E28a7A9D4B5f25F7c1F68d61",
					transaction:"0x8fc9ffbdce5b13c500c9df6bfc145d66d3d4ef73d8c5bb14e87029864b4b4892"
				},
			},
			selectedComponent: "app-list",
			activeTab:1,
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
			},
			transactionList:[
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
				{
					transactionHash: "0xcd1c8e715101091779b64755ffcfd4694c8aed39a9b4c50f4da9f476f9a83131",
					timeStamp: "23s ago",
					from: "0xc4e8e6047bbe9cc4da13ab165741cbbde03cb0e0",
					to: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
					value: 0.003,
					TxFee: 0.00010392
				},
			],
		}
	},
	methods:{
		iconClicked: function(){
			let searchIcon = document.querySelector(".subSearch");
			searchIcon.focus();
			searchIcon.style.borderBottom = "solid #4c6bd8 1.5px";
			searchIcon.style.width = 30 + "%";
		},
		inputBlur:function(){
			let searchIcon = document.querySelector(".subSearch");
			searchIcon.style.width = 0;
			searchIcon.style.borderBottom = "none";
		}
	},
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

.tabContainer{
	padding: 10px 10px 0 10px;
	font-size: 14px;
	border-bottom: rgba(214,214,214,.4) 2px solid;
	margin-bottom: 20px;
}
.tabActive{
	cursor: pointer;
	margin: 0 20px -2px 0; 
	padding: 10px;
	border-bottom:#4c6bd8 2px solid;
	display: inline-block;
	width: 100px;
	text-align: center;
}

.tabInactive{
	cursor: pointer;
	color: rgba(214,214,214,.8);
	margin: 0 20px -2px 0; 
	padding: 10px;
	display: inline-block;
	width: 100px;
	text-align: center;
}
.ion-ios-search-strong{
	margin-top: 14px;
	margin-right: 5px;
	font-size: 18px;
	float: right;
	cursor: pointer;
}
.subSearch{
	transition: width ease .2s;
	margin-top: 14px;
	padding-bottom: 1px;
	float:right;
	outline:none;
	font-size: 14px;
	font-weight: 500;
	border-top:none;
	border-left:none;
	border-right:none;
	color: #455f75;
}


.subSearch::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #E6E6E6;
}
.subSearch::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: #E6E6E6;
   opacity:  1;
}
.subSearch::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: #E6E6E6;
   opacity:  1;
}
.subSearch::-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #E6E6E6;
}
.subSearch::-ms-input-placeholder { /* Microsoft Edge */
   color: #E6E6E6;
}
.subSearchHidden{
	transition: width ease .2s;
	width: 0px;
}

.contractCard>img{
	margin: 0;
	padding: 0;
	height: 160px;
	max-width: 180px;
	display: inline-block;
}


.contractCard{
	padding: 0;
}

.contractCardInfo{
	vertical-align: top;
	/*border: 1px red solid;*/
	display: inline-block;
	padding: 10px 20px 10px 20px;
}

.contractCardTitle{
	font-size: 30px;
	/*border: 1px red solid;*/
	display: inline-block;
	padding: 24px 20px 10px 20px;
}

.contractCardDetail{
	font-size: 14px;
	padding: 0 20px 10px 20px;

}

</style>





























