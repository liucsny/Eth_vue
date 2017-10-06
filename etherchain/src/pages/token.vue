<template>
	<div class="container narrow">
		<div id ="pageName">
			代币查询
		</div>
		<div class="mainCard">
			<div>
				<img class="tokenImg" :src="token.img" alt="">
				<div class="tokenInfo">
					<div class="tokenName">{{token.name}}</div>
					<div class="tokenDetail">合约地址：<a class="link" href="#">{{token.adress}}</a></div>
					<div class="tokenDetail">联系方式：</div>
				</div>
			</div>
			<div class="tokenDataContainer">
				<div class="tokenData">
					<div class="tokenDataPrice">{{token.price.unit}} {{token.price.val}}
						<div class="change tokenDataChange">{{token.price.change}}</div>
					</div>
					<div class="tokenDataBTCPrice">{{token.btcPrice.val}} BTC
						<div class="change tokenDataBTCChange">{{token.btcPrice.change}}</div>
					</div>
				</div>
				<div class="divider"></div>
				<div class="tokenData">
					<div class="tokenDataName">
						<div class="tokenDataDetail">代币持有：</div>
						<div class="tokenDataDetail">交易数：</div>
						<div class="tokenDataDetail">代币位数：</div>
					</div>
					<div class="tokenDataValue">
						<div class="tokenDataDetail">{{numSeparator(token.holder)}} 个地址</div>
						<div class="tokenDataDetail">{{numSeparator(token.transaction)}}</div>
						<div class="tokenDataDetail">{{numSeparator(token.decimals)}}</div>
					</div>
				</div>
				<div class="divider"></div>
				<div class="tokenData">
					<div class="tokenDataName">
						<div class="tokenDataDetail">总市值：</div>
						<div class="tokenDataDetail">代币已供应量：</div>
						<div class="tokenDataDetail">代币总供应量：</div>
					</div>
					<div class="tokenDataValue">
						<div class="tokenDataDetail">¥ {{numSeparator(token.marketCap)}}</div>
						<div class="tokenDataDetail">{{numSeparator(token.supply.current)}}</div>
						<div class="tokenDataDetail">{{numSeparator(token.supply.total)}}</div>
					</div>
				</div>
			</div>
			<div>
				chartArea
			</div>
		</div>
		<div class="mainCard">
			<div class="tabContainer">
				<div @click="activeTab=1" :class="{tabActive:(activeTab===1),tabInactive:!(activeTab===1)}">交易</div>
				<div @click="activeTab=2" :class="{tabActive:(activeTab===2),tabInactive:!(activeTab===2)}">代币持有者</div>
				<div @click="activeTab=3" :class="{tabActive:(activeTab===3),tabInactive:!(activeTab===3)}">智能合约</div>
				<input @blur="inputBlur" class="subSearch subSearchHidden" type="text" placeholder="搜索代币信息">
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
			token:{
				name:"QTUM",
				unit:"QTUM",
				img:require("../assets/tokens/qtum.svg"),
				adress:"0x6B9EF02657339310E28a7A9D4B5f25F7c1F68d61",
				price: {
	              val:54.34,
	              change:+2.32,
	              unit:"¥",
	            },
	            btcPrice: {
	              val:0.0006743240,
	              change: -0.32,
	            },
	            holder:65265,
	            transaction:252092,
	            decimals: 18,
	            marketCap: 6247329942,
	            supply: {
	            	current: 59000000,
	            	total:100000000,
	            }
			},
			selectedComponent: "app-list",
			activeTab:1,
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
	mounted:function(){
		let elemChanged = document.getElementsByClassName('change');
		for(let ele of elemChanged){
			if(ele.innerHTML>0){
				ele.style.color="green";
				ele.innerHTML = "(+" + ele.innerHTML +"%)";
			}else{
				ele.style.color="red";
				ele.innerHTML = "(" + ele.innerHTML + "%)";	
			}
		}
	}
}
</script>

<style scoped>
.tokenImg{
	width: 180px;
	display: inline-block;
}
.tokenInfo{
	vertical-align: top;
	display: inline-block;
	padding: 16px;
}

.tokenName{
	font-size: 32px;
	margin-bottom: 10px;
}
.tokenDetail{
	font-size: 14px;
	margin: 12px 0;
}
.tokenDataContainer{
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
}
.divider{
	border-left: rgba(214,214,214,1) 1px solid;
}

.tokenData{
	/*border: 1px red solid;*/
	width: 33%;
	height: 130px;
	padding: 20px;
}

.tokenDataDetail{
	font-size: 14px;
	padding: 4px;
}

.tokenDataPrice{
	font-size: 32px;
}
.tokenDataChange{
	display: inline-block;
	font-size: 18px;
}

.tokenDataBTCChange{
	display: inline-block;
	font-size: 12px;
}


.tokenDataName,.tokenDataValue{
	/*border:red solid 1px;*/
	vertical-align: top;
	display: inline-block;
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

</style>






















