<template>
	<nav>
		<div class="container">
			<img src="../assets/logo.svg" id="logo">
			<div class="navTab">
				<ul>
					<a href="#"><div class="navUnderline"><li>首页</li></div></a>
					<a href="#"><div class="navUnderline"><li>区块链</li></div></a>
					<a href="#"><div class="navUnderline"><li>地址</li></div></a>
					<a href="#"><div class="navUnderline"><li>代币</li></div></a>
					<a href="#"><div class="navUnderline"><li>图表</li></div></a>
					<a href="#"><div class="navUnderline"><li>其他</li></div></a>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
nav{
	background: white;
	height: 70px;
    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
	border-bottom: 1px solid rgba(214,214,214,.6);
	padding: 1px;
}

#logo{
	height: 42px;
	width: auto;
	margin-top: 16px;
	display: inline-block;
	float: left;
}

.navTab{
	font-size: 14px;
	display: inline-block;
	ul{
		margin:0;
		.navUnderline{
			display: inline-block;
			float: left;
			li{
				list-style: none;
				margin: 0 24px 24px 24px;
				padding-top: 28px;
				float:left;
				color: #455f75;
			}
		}
		.navUnderline:hover{
			li{
				color: #4c6bd8;
			}
		}
	}
}
</style>