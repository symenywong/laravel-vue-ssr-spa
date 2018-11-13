const state={
  menuShrink:false,
  redirectUrl:'',//跳转返回地址
};
const getters={
  menuShrink:state=>state.menuShrink,
  redirectUrl:state=>state.redirectUrl
};
const actions={

};
const mutations={
  toggleMenuShrink(state,payload){
    state.menuShrink=!state.menuShrink;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
}
