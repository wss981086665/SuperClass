// pages/index_tool_bean/index_timing/index_timing.js
Page({

  data: {
    clock: '',
    isStop: false
  },

  /* 秒级倒计时 */
  countdown: function(second) {
    var that = this
    // 渲染倒计时时钟
    that.setData({
      clock: that.dateformat(second)//格式化时间
    });

    if(second <= 0) {
      that.setData({
        clock: "计时结束"
      });
      // timeout则跳出递归
      return;
    }
    //settimeout实现倒计时效果
    setTimeout(function () {
      // 放在最后--
      if(!that.data.isStop) {
        second -= 1;
      }
      that.countdown(second);
    }, 1000)//注意毫秒的步长受限于系统的时间频率，于是我们精确到0.01s即10ms
  },

  end: function() {
    wx.showModal({
      title: '温馨提示',
      content: '确定要结束计时吗？',
      confirmColor: '#32CD32',
      confirmText: '退出',
      success: function (res) {
        if (res.confirm) {
          wx.navigateBack()
        }
      }
    })
  },

  stop:function() {
    var that = this
    var isStop = that.data.isStop
    that.setData({
      isStop: !isStop
    })
  },

  onLoad: function (options) {
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
    this.countdown(options.second)
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload({ next }) {
    wx.showModal({
      title: '温馨提示',
      content: '确定要结束计时吗？',
      confirmColor: '#32CD32',
      confirmText: '退出',
      success: function (res) {
        if (res.confirm) {
          wx.navigateBack()
        }
      }
    })
  },

  // 时间格式化输出，如12:12 。每1s都会调用一次
  dateformat: function(second) {
    // 小时位
    var hour = Math.floor(second / 3600);
    // 分钟位
    var min = Math.floor((second - 3600 * hour) / 60);
    if (min <= 9) min = "0" + min
    // 秒位
    var sec = (second - hour * 3600 - min * 60);  // equal to => var sec = second % 60;
    if (sec <= 9) sec = "0" + sec
    // 毫秒位，保留2位
    return hour + ":" + min + ":" + sec;
  }
})