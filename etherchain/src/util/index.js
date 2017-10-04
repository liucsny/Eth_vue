export default{
  install(Vue,options){
    Vue.prototype.compressString = function (str,limit) {
		if(str.length > limit){
			return str.substr(0,limit)+"...";
		}
		return str;
    };
  }
}