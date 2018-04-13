let datas = require('../../datas/list-data');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    datas: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(datas) //{list_data: Array(7)}
    this.setData({
      datas: datas.list_data
    })
  },
  goD(event){ //todo 获取id 传给detail
    console.log(event);
    //type: "tap", timeStamp: 5192, target: {…}, currentTarget: {…}, detail: {…}, …}
    let id = event.currentTarget.dataset.detailid;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})