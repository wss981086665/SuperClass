const api = require('../../api.js')
const util = require('../../utils/util.js');

Page({

  data: {
    classname:'',
    openid: '',
    userInfo: {}
  },

  courseinput:function(e) {
    var that = this
    that.setData({
      classname: e.detail.value
    })
  },

  creatit: function () {
    var that = this
    wx.showLoading({
      title: '正在创建',
    })
    var courseName = that.data.classname
    var code = ''
    var date = util.formatData(new Date())
    var openid = that.data.openid

    courseName = encodeURIComponent(courseName);
    courseName = encodeURIComponent(courseName);//二次编码

    if (courseName.length < 4){
      wx.showToast({
        title: '班级名称太短',
        icon:'none'
      })
    } else{
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
      for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      wx.request({
        method: 'POST',
        url: api.ip + 'course/insert?code=' + code + '&courseName=' + courseName + '&date=' + date + '&openid=' + openid,
        success:function() {
          setTimeout(function() {
            wx.showToast({
              title: '创建成功',
              success: function () {
                setTimeout(function () {
                  wx.navigateTo({
                    url: '../classiddisplay/classiddisplay?code=' + code,
                  })
                }, 700)
              }
            })
          },600)
        },
        fail:function() {
          wx.showToast({
            title: '服务器连接失败',
            icon:'none'
          })
        }
      })
    }
  },

  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userOpenid',
      success: function(res) {
        wx.getStorage({
          key: 'userInfo',
          success: function(ress) {
            that.setData({
              openid: res.data,
              userInfo:ress.data
            })
          },
        })
      },
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