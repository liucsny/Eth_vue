export default{
  install(Vue,options){
    Vue.prototype.compressString = function (str,limit) {
		if(str.length > limit){
			return str.substr(0,limit)+"...";
		}
		return str;
    };
	Vue.prototype.numSeparator = function(num){  
	    return num && num.toString().replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','));
	};
  }
}