<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="img">
            <img src="../assets/logo3.svg" alt="">
          </div>
        </div>
      </div>
      <hr>
      <div class="copyRight"> <p>&copy 2017 ChainData Project</p> </div>
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

.col-md-2{
  /*border: red 1px solid;*/
}

.img{
  margin: 30px 80px 30px 10px;
}

hr{
  border:1px solid rgba(214,214,214,.6);
}
</style>