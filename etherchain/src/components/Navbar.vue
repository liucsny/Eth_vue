<template>
	<nav>
		<div class="container">
			<a href="#"><div class="logoDiv"><img src="../assets/logo.svg" id="logo"></div></a>
			<div class="navTab">
				<ul>
					<li><a href="#">首页</a></li>
					<li>
						<a href="#">区块链</a>
						<ul class="subMenu">
							<li><a href="#">查询区块</a></li>
							<li><a href="#">查询叔块</a></li>
							<hr/>
							<li><a href="#">查询完成交易</a></li>
							<li><a href="#">查询进行交易</a></li>
							<li><a href="#">查询合约内交易</a></li>
						</ul>
					</li>
					<li>
						<a href="#">地址</a>
						<ul class="subMenu">
							<li><a href="#">地址列表</a></li>
							<li><a href="#">普通地址</a></li>
							<li><a href="#">合约地址</a></li>
						</ul>
					</li>
					<li>
						<a href="#">代币</a>
						<ul class="subMenu">
							<li><a href="#">代币列表</a></li>
							<li><a href="#">代币交易</a></li>
							<li><a href="#">代币持有者</a></li>
						</ul>
					</li>
					<li><a href="#">图表</a></li>
					<li><a href="#">其他</a></li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
}
</script>

<style scoped>
#logo{
	height: 42px;
	width: auto;
	display:inline-block;
}
.logoDiv{
	display: inline-block;
	padding: 14px 18px 12px 10px;
}

hr{
	border-color: rgba(104,114,114,.2);
	border-top: none;
	border-left: none;
	border-right: none;
	margin:2px 8px 6px 8px;
}

nav{
	margin: 0;
	box-sizing: border-box;
	background: white;
	height: 68px;
    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
	border-bottom: 1px solid rgba(214,214,214,.6);
	padding: 1px;
}

.navTab{
	font-size: 14px;
	display:inline-block;
	position: absolute;
}

.navTab ul{
	padding: 0;
	margin: 0;
}

.navTab li{
	list-style: none;
	padding: 0;
	margin: 0;
	display:inline-block;
}

.navTab a{
	display: inline-block;
	padding: 26px 24px;
	text-decoration: none;
	color:#455f75;
}
.navTab a:hover{
	color:#4c6bd8;
}

.subMenu{
	display: none;
	position: absolute;
	top: 56px;
}

.navTab ul li:hover .subMenu{
	display: block;
	background-color: white;
	padding: 6px 0;
    box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
	border: 1px solid rgba(214,214,214,.6);
}

.subMenu li{
	display: block;
	width: 150px;
	line-height: 0px;
	/*border:solid red .1px;*/
}

.subMenu li a{
	padding: 24px;
}

</style>









