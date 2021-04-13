// pages/index_checkName/checkName/checkName.js
const api = require('../../../api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [],
    hasvalue: true,
    name: '未开始',
    success: false,
  },

  dianming: function() {
    var that = this
    var students = that.data.students
    var len = students.length

    var i=0
    setTimeout(function x(){
        var m = Math.floor(Math.random() * len)
        that.setData({
            name: students[m].name
        })
        i++;
       if(i<40) setTimeout(x,100);
      if(i==40) {
        that.setData({
          success:true
        })
      }
    },200);
  },

  onLoad: function (options) {
    var that = this
    var code = options.code

    wx.request({
      method: 'GET',
      url: api.ip + 'relation/getUserByCode?code=' + code,
      success: function (res) {
        var students = res.data.result
        if (students == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000 //弹出时间
          })
        } else {
          if (students.length == 0) {
            that.setData({
              hasvalue: false
            })
          } else {
            that.setData({
              students: students
            });
            that.dianming()
          }
          setTimeout(function () {
            wx.hideLoading()
          }, 100)
        }
      }
    })
  },

  onReady: function () {

  },

  onShow: function () {

  },

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