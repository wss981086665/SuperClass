// pages/index_tools/index_tools.js
const app = getApp()
const api = require('../../api.js');

Page({

  data: {
    times: '00:00',
    index: 0,
    visible: false
  },

  onLoad: function (options) {
    
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onShareAppMessage: function () {
    return {
      title: '超级课堂汇',
      desc: '实用的课堂辅助工具!',
      path: '/page/index_tool/index_tool'
    }
  },

  useRuler: function() {
    wx.navigateTo({
      url: '../index_tool_bean/tool_ruler/tool_ruler',
    })
  },
  usePaper: function() {
    wx.navigateTo({
      url: '../index_tool_bean/tool_paper/tool_paper',
    })
  },
  useBinary: function() {
    console.log('准备跳转')
    wx.navigateTo({
      url: '../index_tool_bean/index_binary/index_binary',
    })
  },
  useTimging: function() {
    wx.navigateTo({
      url: '../index_tool_bean/index_timing/index_timing',
    })
  },
  useCompass: function() {
    wx.navigateTo({
      url: '../index_tool_bean/index_compass/index_compass',
    })
  },
  useTiming: function () {
    this.setData({
      visible: true
    })
  },

  //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    var that = this
    wx.navigateTo({
      url: '../index_tool_bean/index_timing/index_timing?second=' + that.time_to_sec(e.detail.value),
      success: function () {
        that.setData({
          times: '00:00'
        })
      }
    })
  },

  time_to_sec: function (time) {
    var s = '';
    var hour = time.split(':')[0];
    var min = time.split(':')[1];
    s = Number(hour * 3600) + Number(min * 60);
    return s;
  },
  useDish: function() {
    wx.navigateTo({
      url: '../index_tool_bean/index_dish/index_dish',
    })
  //   wx.request({
  //     method: 'POST',
  //     url: api.ip + 'tool/dish',
  //     success: function(res) {
  //       var name = res.data.result
  //       var description = res.data.msg
  //       console.log("菜品=" + name)
  //       console.log("描述=" + description)
  //     }
  //   })
  }
})