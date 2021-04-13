//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  onLoad: function () {
    
  },
  onReady:function() {

  },
  onShow: function() {
    var that = this;
    wx.getStorage({
      key: 'hasUserInfo',
      success: function (res) {
        that.setData({
          hasUserInfo: res.data
        })
      },
      fail: function () {
        that.setData({
          hasUserInfo: false
        })
        wx.setStorage({
          key: 'hasUserInfo',
          data: false
        })
      }
    })
  },

  onShareAppMessage: function () {
    return {
      title: '超级课堂汇',
      desc: '实用的课堂辅助工具!',
      path: '/page/index/index'
    }
  },

  toMyself: function () {
    var that = this;
    if(that.data.hasUserInfo == true) {
      wx.navigateTo({
        url: '../index_myself/index_myself',
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'success'
      })
    }
  },
  goSearch: function () {
    var that = this;
    if(that.data.hasUserInfo == true) {
      wx.navigateTo({
        url: '../search/search',
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'success'
      })
    }
  },
  toMyhomework: function () {
    var that = this;
    if(that.data.hasUserInfo == true) {
      wx.navigateTo({
        url: '../index_myHomework/index_myHomework',
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'success'
      })
    }
  },
  toPasswork: function () {
    var that = this;
    if(that.data.hasUserInfo == true) {
      wx.navigateTo({
        url: '../index_passedWork/index_passedWork',
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'success'
      })
    }
  },
  toCreakwork: function () {
    var that = this;
    if(that.data.hasUserInfo == true) {
      wx.navigateTo({
        url: '../index_creatWork/index_creatWork',
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'success'
      })
    }
  },
  toMyclass: function () {
    var that = this;
    if(that.data.hasUserInfo == true) {
      wx.navigateTo({
        url: '../index_myClass/index_myClass',
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'success'
      })
    }
  },
  toTool: function () {
    wx.navigateTo({
      url: '../index_tool/index_tool',
    })
  },
  toGame: function () {
    wx.navigateTo({
      url: '../index_game/index_game',
    })
  },
  toCheckName: function () {
    var that = this;
    if(that.data.hasUserInfo == true) {
      wx.navigateTo({
        url: '../index_checkName/index_checkName',
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'success'
      })
    }
  },
  toMore: function () {
    wx.navigateTo({
      url: '../index_more/index_more',
    })
  },

  toLogin: function() {
    wx.navigateTo({
      url: '../login/login',
    })
  }
})
