<template>
  <footer>
    <div class="container">
      <div class="row">

        <div class="col-md-3 ftContiner">
          <div class="img">
            <img src="../assets/logo3.svg" alt="">
          </div>
          <div class="slogan">
            <p>
              ChainData 是一个基于区块链技术的区块链数据浏览、查询、分析平台。我们希望每个人都能享受到公开与透明的区块链技术。
            </p>
          </div>
        </div>
        <div class="col-md-3 ftContiner">
        </div>

      </div>
      <hr>
      <div class="copyRight">
        <p>&copy 2017 ChainData Project</p>
        <p><a href="#">Email: 1234567@chaindata.cn</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
footer{
  background-color: white;
  border-top: 1.5px solid rgba(214,214,214,.6);
  height: fit-content;
  bottom: 0;
  width: 100%;
  margin-top: 50px;
}

.copyRight{
  color:#CCCCCC;
  bottom: 10px;
  font-size: 12px;
  font-weight: 800;
  margin: auto;
}

.copyRight p{
  display: inline-block;
  padding: 0;
  margin:0 12px 20px 0;
}
.copyRight p a{
  color:#CCCCCC;
  text-decoration: none;
}
.copyRight p a:hover{
  color: #4b5963;
}

.img{
  margin: 0 80px 0 20px;
}

.img img{
  width: 80px;
}

.slogan{
  padding: 0 0 0 20px;
}

.ftContiner{
  margin: 30px 0;
  font-size: 12px;
  line-height: 20px;
  color: #ACB3B3;
}

hr{
  border:1px solid rgba(214,214,214,.6);
}
</style>