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
        if (res.data == false) {
          wx.navigateTo({
            url: '../login/login',
          })
        }
      },
      fail: function () {
        that.setData({
          hasUserInfo: false
        })
        wx.setStorage({
          key: 'hasUserInfo',
          data: false,
          success:function() {
            wx.navigateTo({
              url: '../login/login',
            })
          }
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
    wx.navigateTo({
      url: '../index_myself/index_myself',
    })
  },
  goSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toMyhomework: function () {
    wx.navigateTo({
      url: '../index_myHomework/index_myHomework',
    })
  },
  toPasswork: function () {
    wx.navigateTo({
      url: '../index_passedWork/index_passedWork',
    })
  },
  toCreakwork: function () {
    wx.navigateTo({
      url: '../index_creatWork/index_creatWork',
    })
  },
  toMyclass: function () {
    wx.navigateTo({
      url: '../index_myClass/index_myClass',
    })
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
    wx.navigateTo({
      url: '../index_checkName/index_checkName',
    })
  },
  toMore: function () {
    wx.navigateTo({
      url: '../index_more/index_more',
    })
  },
})
