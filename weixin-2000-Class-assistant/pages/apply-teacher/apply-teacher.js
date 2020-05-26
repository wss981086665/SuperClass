const api = require('../../api.js')

Page({

  data: {
    index: 0.3,
    school: '',
    institute: '',
    profession: '',
    course: '',
    name: '',
    tell: '',

    userOpenid: '',
  },

  submit:function() {
    if (this.data.institute && this.data.profession && this.data.name && this.data.course && this.data.tell) {
      wx.showLoading({
        title: '正在提交',
      })
      var openid = this.data.userOpenid;
      var school = this.data.school;
      var profession = this.data.profession;
      var course = this.data.course;
      var name = this.data.name;
      var tell = this.data.tell;
      school = encodeURIComponent(school); school = encodeURIComponent(school);//二次编码
      profession = encodeURIComponent(profession); profession = encodeURIComponent(profession);//二次编码
      course = encodeURIComponent(course); course = encodeURIComponent(course);//二次编码
      name = encodeURIComponent(name); name = encodeURIComponent(name);//二次编码
      tell = encodeURIComponent(tell); tell = encodeURIComponent(tell);//二次编码

      setTimeout(function () {
        wx.getStorage({
          key: 'userid',
          success: function (res) {
            wx.request({
              method: 'POST',
              url: api.ip + 'teacher/insert?openid=' + openid + '&school=' +
                school + '&profession=' + profession + '&course=' + course + '&name=' + name + '&tell=' + tell + '&pros1=' + res.data,
              success: function () {
                wx.showToast({
                  title: '提交成功',
                  success: function () {
                    setTimeout(function () {
                      wx.switchTab({
                        url: '../myself/myself'
                      })
                    }, 1000)
                  }
                })
              },
              fail: function () {
                wx.showToast({
                  title: '请求失败',
                })
              }
            })
          },
        })
      }, 1000)
    }
  },

  schoolinput: function (e) {
    this.setData({
      school: e.detail.value
    })
    this.judge()
  },
  instituteinput: function (e) {
    this.setData({
      institute: e.detail.value
    })
    this.judge()
  },
  professioninput: function (e) {
    this.setData({
      profession: e.detail.value
    })
    this.judge()
  },
  courseinput: function (e) {
    this.setData({
      course: e.detail.value
    })
    this.judge()
  },
  nameinput: function (e) {
    this.setData({
      name: e.detail.value
    })
    this.judge()
  },
  tellinput: function (e) {
    this.setData({
      tell: e.detail.value
    })
    this.judge()
  },

  judge: function () {
    var that = this
    setTimeout(function () {
      if (that.data.institute && that.data.profession && that.data.course && that.data.tell && that.data.name) {
        that.setData({ index: 1 })
      } else {
        that.setData({ index: 0.3 })
      }
    }, 100)
  },

  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'userOpenid',
      success: function (res) {
        that.setData({
          userOpenid: res.data
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

  onUnload: function () {

  },

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