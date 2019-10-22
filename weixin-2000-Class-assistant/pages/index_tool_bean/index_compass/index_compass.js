// pages/index_tool_bean/index_compass/index_compass.js
Page({

  data: {
    angle: '',
    direction: ''
  },

  onLoad: function (options) {
    var res = wx.getSystemInfoSync()
    var h
    if (res.model.substring(0, 6) == 'iPhone') {
      h = res.screenHeight - 64;
    } else {
      h = res.screenHeight - 71;
    }
    this.setData({
      height: h + "px",
      text: h / 4 - 60 + "px",
      pic: h / 2 - 100 + "px",
      btn: h - 60 + "px"
    })
    // 罗盘Api
    var that = this;
    wx.onCompassChange(function (res) {
      var directions = res.direction.toFixed(2);
      that.setData({
        angle: directions,
        rotate: 360 - directions,
        direction: check(directions)
      })
    })
    // 判断文字
    function check(i) {
      if (22.5 < i && i < 67.5) {
        return '东北'
      } else if (67.5 < i && i < 112.5) {
        return '正东'
      } else if (112.5 < i && i < 157.5) {
        return '东南'
      } else if (157.5 < i && i < 202.5) {
        return '正南'
      } else if (202.5 < i && i < 247.5) {
        return '西南'
      } else if (247.5 < i && i < 292.5) {
        return '正西'
      } else if (292.5 < i && i < 337.5) {
        return '西北'
      } else {
        return '正北'
      }
    } 
  },

  onReady: function () {

  },

  onShow: function () {

  }
})