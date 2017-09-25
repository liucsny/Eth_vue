<template>
	<div>
		<table>
			<tr>
				<th>交易哈希</th>
				<th>时间</th>
				<th>来自</th>
				<th></th>	
				<th>转入</th>
				<th>交易额</th>
				<th>交易费用</th>
			</tr>
			<tr v-for="txn in shortTransactionList">
				<td><a href="#">{{compressString(txn.transactionHash,10)}}</a></td>
				<td>{{txn.timeStamp}}</td>
				<td><a href="#">{{compressString(txn.from,10)}}</a></td>
				<td><i class="ion-android-arrow-forward"></i></td>
				<td><a href="#">{{compressString(txn.to,10)}}</a></td>
				<td>{{txn.value}} Ether</td>
				<td>{{txn.TxFee}}</td>
			</tr>
		</table>
		<app-pagination v-bind:list="List" @pageIndex="changeBeginPoint($event)"></app-pagination>
	</div>
</template>

<script>
import Pagination from "./Pagination.vue"

export default{
	components:{
		"app-pagination": Pagination,
	},
	props:["transactionList"],
	data:function() {
		return {
			beginPoint: 0,
			listPorperties:{
				length:30,
			},
		}
	},
	methods:{
		compressString:function(str,limit){
			if(str.length>limit){
				return str.substr(0,limit)+"...";
			}
				return str;
		},
		changeBeginPoint:function(beginPoint){
			this.beginPoint = (beginPoint-1)*this.listPorperties.length;
			console.log(this.beginPoint);
		},
	},
	computed:{
		shortTransactionList:function(){
			return this.transactionList.slice(this.beginPoint, this.beginPoint + this.listPorperties.length);
		},
		List:function(){
			let listLenght = Math.ceil(this.transactionList.length/this.listPorperties.length);
			return {
				listLenght,
			}
		}
	}
}
</script>

<style scoped>	

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
	padding: 20px 0;
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

.ion-android-arrow-forward{
	font-weight: 800;
	color:#4c6bd8;
}
</style>