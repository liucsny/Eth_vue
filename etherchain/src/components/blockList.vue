<template>
	<div class="container narrow">
		<div id ="pageName">
			以太坊区块列表
		</div>
		<table>
			<tr>
				<th>区块高度</th>
				<th>时间</th>
				<th>交易数</th>
				<th>矿工</th>
				<th>GasLimit</th>
				<th>难度</th>
				<th>哈希率</th>
				<th>区块奖励</th>
			</tr>
			<tr v-for="block in shortBlockList">
				<td><a href="#">{{block.blockHeight}}</a></td>
				<td>{{block.time}}</td>
				<td><a href="#">{{block.transactions}}</a></td>
				<td><a href="#">{{compressString(block.miner,10)}}</a></td>
				<td>{{block.gasLimit}}</td>
				<td>{{block.difficulty}} TH</td>
				<td>{{block.hashRate}} GH/s</td>
				<td>{{block.blockReward}} Ether</td>
			</tr>
		</table>
		<app-pagination v-bind:list="List"></app-pagination>
	</div>
</template>

<script>
import Pagination from "./Pagination.vue"


export default {
	components:{
		"app-pagination": Pagination,
	},
	data: function(){
		return {
			listPorperties:{
				length:4,
			},
			blockList:[
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
				{
					blockHeight: 4254662,
					time: "23秒前",
					transactions: 216,
					miner: "0x829BD824B016326A401d083B33D092293333A830",
					gasLimit: 6712392,
					difficulty: 2325.923,
					hashRate: 92633.03,
					blockReward: 5.41031,
				},
			],
		}
	},
	methods:{
		compressString:function(str,limit){
			if(str.length>limit){
				return str.substr(0,limit)+"...";
			}
				return str;
		},
	},
	computed:{
		shortBlockList:function(){
			return this.blockList.splice(0, this.listPorperties.length)
		},
		List:function(){
			let listLenght = Math.ceil(this.blockList.length/this.listPorperties.length);
			return {
				listLenght,
			}
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

table{
	border-collapse: collapse;
	width: 100%;
}

tr:nth-child(odd){
	background-color: #F5F8FC;
}

tr{
	margin: 2px 0;
	font-size: 14px;
}

tr > th{
	/*background-color: #f0f3f7;*/
	padding: 20px 0;
	/*border:red 1px solid;*/
	background-color: #F0F3F7;
	margin: 0;
}

tr > td{
	padding: 15px 0;
	text-align: center;
}

tr > td > a{
	color: #4c6bd8;
	text-decoration: none;
}
tr > td > a:hover{
	color: #1038ff;
	text-decoration: underline;
}
</style>