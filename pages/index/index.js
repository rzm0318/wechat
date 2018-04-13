// pages/index/index.js
Page({
  data: {
    msg:"hgn"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //异步操作，修改状态
    this.setData({
      msg: "hgn"
    }),
      //获取用户信息
      wx.getUserInfo({
      success: (res) =>  {
          console.log(res);
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
  },
    headel(){
      //定向
      wx.navigateTo({
        url: "/pages/list/list"
      })
    }
  
 

})