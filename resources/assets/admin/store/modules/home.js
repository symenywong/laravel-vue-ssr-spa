const state={
  menuShrink:false,
};
const getters={
  menuShrink:state=>state.menuShrink
};
const actions={

};
const mutations={
  toggleMenuShrink(state,payload){
    console.log(111);
    state.menuShrink=!state.menuShrink;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
}
