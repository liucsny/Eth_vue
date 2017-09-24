<template>
	<nav>
		<div class="container">
			<div class="fixedNav">
				<a href="#"><div class="logoDiv"><img src="../assets/logo2.svg" id="logo"></div></a>
				<div class="navTab">
					<ul>
						<li><a href="#">首页</a></li>
						<li>
							<a href="#">区块链<i class="ion-ios-arrow-down"></i></a>
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
							<a href="#">地址<i class="ion-ios-arrow-down"></i></a>
							<ul class="subMenu">
								<li><a href="#">地址列表</a></li>
								<li><a href="#">普通地址</a></li>
								<li><a href="#">合约地址</a></li>
							</ul>
						</li>
						<li>
							<a href="#">代币<i class="ion-ios-arrow-down"></i></a>
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
				<div class="logIn"> 
					<div>
						<a href="#">注册</a>
					</div>
					<div>
						<a href="#">登录</a>
					</div>
				</div>
			</div>
			<div class="searchContainer">		    
				<i class="ion-ios-search-strong"></i>
		    	<input type="text" placeholder="搜索以太坊地址、交易、区块、代币">
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
	padding: 18px 18px 12px 10px;
}

hr{
	border: 1px solid rgba(104,114,114,.2);
	border-top: none;
	border-left: none;
	border-right: none;
	margin:4px 10px 8px 10px;
}

nav{
	margin: 0 0 70px 0;
	box-sizing: border-box;
	background: white;
	height: 78px;
    box-shadow: 0 1px 10px 1px rgba(0,34,177,.08);
    /*box-shadow: 0 1px 16px 4px rgba(0,34,207,.1);*/
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
	padding: 32px 22px;
	text-decoration: none;
	color:#455f75;
}
.navTab a:hover{
	color: #1038ff;
}

.subMenu{
	display: none;
	position: absolute;
	top: 64px;
}

.navTab ul li:hover .subMenu{
	display: block;
	background-color: white;
	padding: 6px 0;
    box-shadow: 0 1px 10px 1px rgba(0,34,177,.08);
	border: 1px solid rgba(214,214,214,.6);
}

.navTab ul li:hover a .ion-ios-arrow-down{
	transform: rotate(180deg) translate(0,-0.1px);
	transition: .2s;
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

.logIn{
	float: right;
}

.logIn a{
	display: inline-block;
	padding: 32px 14px;
	text-decoration: none;
	color:#455f75;
	font-size: 14px;
}

.logIn a:hover{
	color: #1038ff;
}

.logIn > div{
	display: inline-block;
}

.searchContainer{
	display: flex;
	margin:20px auto;
	width: 97%;
}

.ion-ios-search-strong{
	padding-right: 1.3%;
}

input[type="text"]{
	outline:none;
	width: 97%;
	font-size: 14px;
	font-weight: 500;
	border-top:none;
	border-left:none;
	border-right:none;
	padding: 2px 0 10px 0;
	color: #455f75;
}

.ion-ios-arrow-down{
	display: inline-block;
	margin-left: 10px;
	transform: translate(0,1.5px);
	transition: .1s;
}

input[type="text"]::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #d1d1d1;
}
input[type="text"]::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #d1d1d1;
   opacity:  1;
}
input[type="text"]::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #d1d1d1;
   opacity:  1;
}
input[type="text"]::-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #d1d1d1;
}
input[type="text"]::-ms-input-placeholder { /* Microsoft Edge */
   color:    #d1d1d1;
}

input[type="text"]:focus{
	  border-bottom: solid #4c6bd8 1.5px;
}
</style>









