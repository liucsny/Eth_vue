<template>
  <div class="container">
    <div class="card">
      <div class="cardTitle">{{ethereum.title}}</div>
      <div class="flexBox">
        <div v-for="(datum,name) in ethereum.data">
          <div class="cardSmallTitle">{{name}}</div>
          <div class="cardData">
            <a href="#">{{datum.num}}</a>
            <div class="cardUnit">{{datum.unit}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      ethereum:{
        title:"以太坊数据",
        data:{
          "价格": {num:2140.93,unit:"CNY"},
          "区块数": {num:4241242,unit:""},
          "区块时": {num:24.4,unit:"S"},
          "难度": {num:2369.933,unit:"TH"},
        }
      }
    }
  }
}
</script>

<style scoped>
.card{
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
  border: 1px solid rgba(214,214,214,.6);
  width: 90%;
  padding: 40px 45px 30px 45px;
  margin: 70px auto;
}
.cardTitle{
  font-size: 24px;
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
.cardData a{
  text-decoration-line: none;
  color:#4b5963;
}

.cardData a:hover{
  color: #4c6bd8;
}
.cardUnit{
  /*border: 1px blue solid;*/
  font-size: 14px;
  font-weight: 500;
  margin: 16px 5px;
}

</style>
