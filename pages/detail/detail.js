const datas=require('../../datas/list-data')
console.log(datas);//{list_data:list-data(Array)}
Page({
  data:{
    
  },
  onLoad:function (option) {
    let index=option.id
    console.log(index);
    // 通过index获取对应的数据对象
    const detailObj= datas.list_data[index];
    // 更新数据到当前页面的实例data中
    this.setData({
      detailObj,index
    })
  }
})