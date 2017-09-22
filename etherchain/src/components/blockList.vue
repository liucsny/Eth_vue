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
			<tr>
				<td>a</td>
				<td>s</td>
				<td>d</td>
				<td>f</td>
				<td>g</td>
				<td>h</td>
			</tr>
			<tr>
				<td>12321w</td>
				<td>2wsqasz</td>
				<td>d</td>
				<td>wqdqwd</td>
				<td>dwz</td>
				<td>dwd</td>
			</tr>
		</table>
	</div>
</template>

<script>

export default {
	components:{
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
	margin: 20px 0;
}

table{
	border-collapse: collapse;
	width: 100%;
}

tr{
	background-color: #f0f3f7;
	margin: 2px 0;
	font-size: 14px;
}

tr > th{
	/*background-color: #f0f3f7;*/
	padding: 10px 0;
	/*border:red 1px solid;*/
	margin: 0;
}
</style>