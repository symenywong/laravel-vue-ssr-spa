function plugin(Vue) {
  Vue.prototype.$jump=function(name,query){
    this.$router.push({name:name,query:query});
  };

  Vue.prototype.$validateUrl=function(url){
    var reg=/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
    return reg.test(url);
  };
  Vue.prototype.$validatePhoneNo=function(phoneNo){
    var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(phoneNo);
  };


}
export default plugin;
