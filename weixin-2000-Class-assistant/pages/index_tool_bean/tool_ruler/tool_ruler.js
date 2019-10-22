// pages/index_tool_bean/tool_ruler/tool_ruler.js
Page({

  data: {
    value: 0,
    styles: {
      line: '#dbdbdb',
      bginner: '#fbfbfb',
      bgoutside: '#dbdbdb',
      lineSelect: '#52b8f5',
      font: '#404040'
    }
  },

  bindvalue: function (e) {
    // console.log(e)
    this.setData({
      px_value: e.detail.value * 10,
      value: e.detail.value
    })
  },

  returnIt: function() {
    wx.navigateBack()
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },
})