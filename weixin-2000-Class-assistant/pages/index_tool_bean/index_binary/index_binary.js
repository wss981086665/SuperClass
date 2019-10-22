// pages/index_tool_bean/index_ binary/index_ binary.js
Page({

  data: {
    value2: 0,
    value8: 0,
    value10: 0,
    value16: 0
  },

  input2: function(e) {
    var that = this
    var value2 = e.detail.value
    var value10 = parseInt(value2, 2)

    
    that.setData({
      value2: value2,
      value8: (value10).toString(8),
      value10: value10,
      value16: (value10).toString(16)
    })
  },
  input8: function (e) {
    var that = this
    var value8 = e.detail.value
    var value10 = parseInt(value8, 8)

    that.setData({
      value2: (value10).toString(2),
      value8: value8,
      value10: value10,
      value16: (value10).toString(16)
    })
  },
  input10: function (e) {
    var that = this
    var value10 = parseInt(e.detail.value)

    that.setData({
      value2: (value10).toString(2),
      value8: (value10).toString(8),
      value10: value10,
      value16: (value10).toString(16)
    })
  },
  input16: function (e) {
    var that = this
    var value16 = e.detail.value
    var value10 = parseInt(value16, 16)

    that.setData({
      value2: (value10).toString(2),
      value8: (value10).toString(8),
      value10: value10,
      value16: value16
    })
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  }
})