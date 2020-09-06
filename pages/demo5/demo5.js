// pages/demo5/demo5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      // {
      //   title: "标题1标题1标题1标题1标题1标题1标题1",
      //   pic: "/image/home.png",
      //   time: "2020-19-06"
      // },
      // {
      //   title: "标题2标题2标题2标题2标题2标题2标题2",
      //   pic: "/image/home (1).png",
      //   time: "2020-29-06"
      // },
      // {
      //   title: "标题3标题3标题3标题3标题3标题3标题3",
      //   pic: "/image/home.png",
      //   time: "2020-39-06"
      // },
      // {
      //   title: "标题4标题4标题4标题4标题4标题4标题4",
      //   pic: "/image/home (1).png",
      //   time: "2020-49-06"
      // }
    ]
  },
  num: 1,
  nextpage: function () {
    this.getList(this.num++)
  },
  getList: function (page = 1) {
    wx.request({
      url: 'http://edu.newsight.cn/wxList.php',
      data: {
        num: 5,
        page
      },
      success: res => {
        console.log(res.data)
        this.setData({
          dataList: res.data.map(e => {
            return {
              title: e.title,
              pic: /^http/.test(e.picurl.toString()) ? e.picurl : '',
              time: e.posttime * 1e3,
              author: e.author
            }
          })
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})