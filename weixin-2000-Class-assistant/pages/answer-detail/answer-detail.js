// pages/answer-detail/answer-detail.js
const api = require('../../api.js');

Page({

  data: {
    id: -1,
    answer: {},
    name: '',
    hasimage: false,
    score: 60
  },

  handleChange1 ({ detail }) {
    this.setData({
      score: detail.value
    })
},

  previewImage: function (e) {
    var articles = [e.currentTarget.dataset.src];
    wx.previewImage({
      urls: articles
    })
  },

  putScore: function() {
    var that = this
    wx.showLoading({
      title: '正在提交评分',
    })
    wx.request({
      url: api.ip + 'reply/putScore?id=' + that.data.id + '&factor1=' + that.data.score,
      method: 'POST',
      data: {},
      success: function (res) {
        wx.hideLoading({
          complete: (res) => {
            wx.navigateBack()
          },
        })
      },
      fail: function () {
        wx.showToast({
          title: '获取数据失败',
          icon: 'none'
        })
      }
    })
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      name: options.name,
      id: options.id
    })

    wx.request({
      url: api.ip + 'reply/getById?id=' + options.id,
      method: 'GET',
      data: {},
      success: function (res) {
        var answer = res.data.result
        if (answer.imgurl != 'default.jpg') {
          that.setData({
            hasimage: true
          })
        }
        // 拼接图片url
        answer.imgurl = 'http://www.xztywss.top/img/homeworkup/' + answer.imgurl
        setTimeout(function () {
          that.setData({
            answer: answer
          })
        }, 100)
      },
      fail: function () {
        wx.showToast({
          title: '获取数据失败',
          icon: 'none'
        })
      }
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

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})