export default {
  namespace:'products',
  state:[],
  reducers:{
    'delete'(state,{payload:id}){
      return state.filter(item=>item.id!==id);
    },
    'add'(state){
      console.log(state);
      return [...state,{name:"测试add",id:state[state.length-1].id + 1}];
    },
  },
}
