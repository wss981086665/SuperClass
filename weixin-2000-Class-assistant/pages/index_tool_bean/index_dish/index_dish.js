// pages/index_tool_bean/index_dish/index_dish.js

// "usingComponents": {
//   "i-spin": "../../dist/spin/index"
// }

const app = getApp()
const api = require('../../../api.js');

Page({

  data: {
    loading: false,
    display: false,

    name: '',
    description: '',
    image: []
  },

  chooseImage() {
    var that = this
    wx.chooseImage({
      count: 1,
      sourceType: ['album','camera'],
      success: function (res) {
        var filePath = res.tempFilePaths[0]
        that.setData({
          image: filePath
        })
        wx.uploadFile({
          url: api.ip + "tool/dish",
          filePath: filePath,
          name: 'file',
          success: function (ress) {
            var result = JSON.parse(ress.data)
            setTimeout(function() {
              wx.showToast({
                title: '识别成功',
              })
              that.setData({
                loading: false,
                display: true,
                name: result.result,
                description: result.msg,
              })
            }, 1000)
          }
        })
      },
      fail: function (error) {
        wx.navigateBack()
      }
    });
  },

  returnBack: function() {
    wx.navigateBack()
  },

  onLoad: function (options) {
    var that = this
    that.chooseImage()

    that.setData({
      loading: true
    })
  },

  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {

  }
})