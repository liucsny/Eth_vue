<template>
  <div class="container narrow">
    <div class="mainCard">
      <div class="cardTitle">{{ethereum.title}}</div>
      <div class="flexBox">
        <div v-for="(datum,name) in ethereum.data">
          <div class="cardSmallTitle">{{name}}</div>
          <div class="cardData">
            <a href="#"><div class="underline">{{datum.val}}</div></a>
            <div class="cardUnit">{{datum.unit}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="narrowCard">
          <div class="showAll">
            <a href="#"><div class="underline">查看全部<i class="ion-ios-arrow-forward"></i></div></a>
            <div class="cardTitle">{{blocks.title}}</div>
          </div>
          <hr>
          <div class="blockData" v-for="item in blocks.data">
            <a href="#"><div class="blueBlock">{{item[0].name}} {{item[0].val}}</div></a>
            <div class="blockDetail">
              <div>{{item[1].name}}: <a href="#"><div class="underline">{{compressString(item[1].val,12)}}</div></a></div>
              <div>{{item[2].name}}: <a href="#"><div class="underline">{{item[2].val}}{{item[2].unit}}</div></a></div>
            </div>
            <div class="blockTime">
              <div>{{item[3].val}}{{item[3].unit}}</div>
            </div>
          </div>
          <a href="#"><div class="morePlus"><div class="ion-android-add"></div></div></a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="narrowCard">
          <div class="showAll">
            <a href="#"><div class="underline">查看全部<i class="ion-ios-arrow-forward"></i></div></a>
            <div class="cardTitle">{{transactions.title}}</div>
          </div>
          <hr>
          <div class="blockData" v-for="item in transactions.data">
            <div class="txnBlockThin"></div>
            <div class="blockDetail">
              <div class="txnAmount">{{item[0].val}}  {{item[0].unit}}</div>
              <div class="txnHash">{{item[1].name}}: <a href="#"><div class="underline">{{compressString(item[1].val,20)}}</div></a></div>
            </div>
            <div class="txnTime">
              <div>{{item[2].val}}{{item[2].unit}}</div>
            </div>
          </div>
          <a href="#"><div class="morePlus"><div class="ion-android-add"></div></div></a>
        </div>
      </div>
    </div>
    <app-cardCarousel v-bind:cards="cardCarousel" >
      <div class="showAll">
        <a href="#"><div class="underline">查看全部<i class="ion-ios-arrow-forward"></i></div></a>
        <div class="cardTitle">代币</div>
      </div>
      <hr>
    </app-cardCarousel>
    <!-- <img v-attr="src:cardCarousel[0].data.img" alt=""> -->
  </div>
</template>

<script>
import cardCarousel from "./cardCarousel.vue"

export default {
  name: 'hello',
  components:{
    "app-cardCarousel":cardCarousel,
  },
  data:function(){
    return{
      ethereum:{
        title:"以太坊数据",
        data:{
          "价格": {val:2140.93,unit:"CNY"},
          "区块数": {val:4241242,unit:""},
          "区块时": {val:24.4,unit:"S"},
          "难度": {val:2369.933,unit:"TH"},
        },
      },
      blocks:{
        title:"区块",
        data:[
          [
            {name:"区块",val:4244708,unit:""},
            {name:"矿工",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"交易",val:324,unit:"笔"},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"区块",val:4244708,unit:""},
            {name:"矿工",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"交易",val:324,unit:"笔"},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"区块",val:4244708,unit:""},
            {name:"矿工",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"交易",val:324,unit:"笔"},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"区块",val:4244708,unit:""},
            {name:"矿工",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"交易",val:324,unit:"笔"},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"区块",val:4244708,unit:""},
            {name:"矿工",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"交易",val:324,unit:"笔"},
            {name:"时间",val:3,unit:"分钟前"},
          ],
        ]
      },
      transactions:{
        title:"交易",
        data:[
          [
            {name:"数额",val:44.78,unit:"Ether"},
            {name:"交易哈希",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"数额",val:0.8,unit:"Ether"},
            {name:"交易哈希",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"数额",val:0,unit:"Ether"},
            {name:"交易哈希",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"数额",val:4.9080967,unit:"Ether"},
            {name:"交易哈希",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"时间",val:3,unit:"分钟前"},
          ],
          [
            {name:"数额",val:10.898,unit:"Ether"},
            {name:"交易哈希",val:"0x829BD824B016326A401d083B33D092293333A830",unit:""},
            {name:"时间",val:3,unit:"分钟前"},
          ],
        ]
      },
      cardCarousel:[
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:-2.32,
              unit:"¥",
            },
          },
        },
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:-2.32,
              unit:"¥",
            },
          },
        },
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:+2.32,
              unit:"¥",
            },
          },
        },
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:-2.32,
              unit:"¥",
            },
          },
        },
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:-2.32,
              unit:"¥",
            },
          },
        },
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:-2.32,
              unit:"¥",
            },
          },
        },
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:2.32,
              unit:"¥",
            },
          },
        },
        {
          name:"OmiseGO",
          data:{
            img:require('../assets/tokens/omg.svg'),
            price:{
              val:54.34,
              change:-2.32,
              unit:"¥",
            },
          },
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
}
</script>

<style scoped>
.mainCard{
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
  border: 1px solid rgba(214,214,214,.6);
  padding: 40px 45px 30px 45px;
  margin: 16px auto 10px auto;
  background-color: #fff;
}
.narrow{
  width: 84%;
}

.narrowCard{
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
  border: 1px solid rgba(214,214,214,.6);
  padding: 40px 45px 30px 45px;
  width: 100%;
  margin: 10px auto;
}


.cardTitle{
  font-size: 20px;
  font-weight: 800;
}
.flexBox{
  /*border: 1px solid red;*/
  /*border: 1px blue solid;*/
  display: flex;
  justify-content: space-between;
}
.cardSmallTitle{
  margin-top: 20px;
  font-size: 12px;
  opacity: .6;
  font-weight: 800;
}
.cardData{
  /*border: 1px blue solid;*/
  display: flex;
  margin-top: 4px;
  font-family: helvetica,sans-serif;
  font-weight: 200;
  font-size: 32px;
}

.underline{
  display: inline-block;
}
.underline:hover{
  border-bottom: 1.4px #1038ff solid;
}

.cardUnit{
  /*border: 1px blue solid;*/
  font-size: 14px;
  font-weight: 500;
  margin: 16px 5px;
}

.showAll a{
  float: right;
  margin-top: 8px;
  text-decoration: none;
  color:#4b5963; 
  font-size: 14px;
}

i{
  margin-left: 8px;
}
a{
  text-decoration-line: none;
  color:#4b5963;
}
a:hover{
  color: #1038ff;
}
hr{
  border: 1px solid rgba(104,114,114,.2);
  border-top: none;
  border-left: none;
  border-right: none;
  margin:10px 0 8px 0;
}

.blockData{
  height:78px;
  background-color: #f5f8fc;
  margin:10px 0;
  padding: 0;
}

.blueBlock{
  background-color: #4c6bd8;
  padding:30px 18px;
  height:100%;
  color:white;
  font-size: 14px;
  /*display: inline-block;*/
  float: left;
  transition: .2s;
}
.blueBlock:hover {
  background-color: #1038ff;
  transition: .2s;
}

.blockDetail{
  color: #77848c;
  font-size: 14px;
  padding: 20px;
  float: left;
  /*display: inline-block;*/
}
.blockDetail div{
  height: 22px;
}
.blockDetail a{
  color: #4c6bd8;
}
.blockDetail a:hover{
  color: #1038ff;
}
.blockTime{
  color: #77848c;
  font-size: 12px;
  padding: 20px;
  float: right;
}

.txnBlockThin{
  background-color: #4c6bd8;
  padding:2px;
  height:100%;
  float: left;
}
.txnAmount{
  color:#4b5963;
  font-size: 16px;  
  display: inline-block;
  padding-bottom: 4px;
}
.txnHash{
  font-size: 12px;
}

.txnTime{
  color: #77848c;
  font-size: 12px;
  padding: 20px;
  float: right;
}
.morePlus{
  height:26px;
  background-color: #f5f8fc;
  margin:10px 0 0 0;
  padding: 0;
  text-align: center;
  padding:1px;
}
.ion-android-add{
  color: #4c6bd8;
  margin-top: 2px;
}
.morePlus{
  transition: .2s;
}
.morePlus:hover{
  background-color: #1038ff;
  transition: .2s;
}

.morePlus:hover .ion-android-add{
  color: #fff;
  transition: .2s;
}
</style>
