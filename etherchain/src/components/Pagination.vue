<template>
	<div class="paginationContainer">
		<div>
			<div class="pagination paginationHover" @click="changePage('left')">上一页</div>

			<div class="pagination paginationHover" @click="jumpToPage()" v-show="centerIndex!==1">1</div>

			<div class="pagination" v-show="centerIndex>3">...</div>

			<div class="pagination paginationHover" @click="jumpToPage()" v-show="centerIndex==list.listLenght">{{centerIndex-2}}</div>

			<div class="pagination paginationHover" @click="jumpToPage()" v-show="centerIndex>2">{{centerIndex-1}}</div>

			<div class="pagination paginationHover active" @click="jumpToPage()">{{centerIndex}}</div>

			<div class="pagination paginationHover" @click="jumpToPage()" v-show="centerIndex !== list.listLenght">{{centerIndex+1}}</div>

			<div class="pagination paginationHover" @click="jumpToPage()" v-show="centerIndex==1">{{centerIndex+2}}</div>

			<div class="pagination" v-show="centerIndex<list.listLenght-2">...</div>

			<div class="pagination paginationHover" @click="jumpToPage()" v-show="centerIndex<list.listLenght-1">{{list.listLenght}}</div>

			<div class="pagination paginationHover" @click="changePage('right')">下一页</div>
		</div>
		<div>
			<div class="jumpTo">跳转到:</div>	
			<input type="text" @keyup.enter="jumpToPageInput()">
			<div class="jumpTo">页</div>
			<!-- <div @click="jumpToPageInput" class="jumpTo"><i class="ion-android-arrow-forward"></i></div> -->
		</div>
	</div>
</template>

<script>
export default{
	props:["list"],
	data: function(){
		return{
			centerIndex:1
		}
	},
	methods:{
		changePage:function(dir){
			if(dir === "left"){
				if(this.centerIndex>1){
					this.centerIndex -= 1;					
				}
			}else{
				if(this.centerIndex < this.list.listLenght){
					this.centerIndex += 1;
				}
			}
			this.$emit("pageIndex",this.centerIndex);
		},
		jumpToPage: function(){
			this.centerIndex = parseInt(event.target.innerHTML);
			this.$emit("pageIndex",this.centerIndex);
		},
		jumpToPageInput:function(){
			let pageIndex = parseInt(event.target.value);
			if(pageIndex &&(pageIndex>0)&&(pageIndex<=this.list.listLenght)){
				this.centerIndex = pageIndex;
			}
			event.target.value = "";
			this.$emit("pageIndex",this.centerIndex);
		},
	}
}
</script>

<style scoped>
.paginationContainer{
	margin: 0 auto;
	width: fit-content;
}

.paginationContainer > div{
	padding-left: 50px;
	width: fit-content;
	margin: 0 auto;
	display: inline-flex;
	margin-top: 10px;
}
.pagination{
	margin: 5px;
	font-size: 14px;
}

.paginationHover:hover{
	border-bottom:1px #1038ff solid;
	color:#1038ff;
	cursor: pointer;
}

.active{
	color: #1038ff;
	border-bottom:1px #1038ff solid;
}

.jumpTo{
	margin: 5px;
	font-size: 14px;
}

.ion-android-arrow-forward{
	font-size: 16px;
	cursor: pointer;
}

input[type="text"]{
	width: 50px;
	outline:none;
	text-align: center;
	font-size: 15px;
	font-weight: 500;
	border-top:none;
	border-left:none;
	border-right:none;
	border-bottom: 1px solid #abaaba;
	color: #4c6bd8;
}


input[type="text"]:focus{
	  border-bottom: solid #4c6bd8 1.5px;
}

</style>