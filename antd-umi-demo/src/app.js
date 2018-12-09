
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState : {
      products:[
        {name:"苹果",id:1},
        {name:"香蕉",id:2},
        {name:"西瓜",id:3}
      ]
    }
  },
};

