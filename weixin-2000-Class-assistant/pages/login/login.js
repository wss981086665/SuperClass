//获取应用实例
const app = getApp()
const api = require('../../api.js');
const util = require('../../utils/util.js');

Page({

  data: {
    ifhidden: true,
    name: '',
    user: {},
    userid:''
  },

  next: function() {
    var name = this.data.name
    if(name == ''){
      wx.showToast({
        title: '姓名不能为空',
        icon: 'none'
      })
    }else{
      this.setData({
        ifhidden: false
      })
    }
  },

  prev: function () {
    this.setData({
      ifhidden: true
    })
  },

  iname:function(e) {
    this.setData({
      name: e.detail.value
    })
  },

  getUserInfo: function (e) {
    wx.showLoading({
      title: '正在登录',
    })
    var that = this
    wx.setStorage({
      key: 'userInfo',
      data: e.detail.userInfo,
      success:function() {
        app.globalData.userInfo = e.detail.userInfo
      },
      fail: function () {
        wx.showToast({
          title: '设置UserInfo失败！',
          icon: 'none',
          duration: 500,
        })
      }
    })

    var userInfo = e.detail.userInfo
    var gender = userInfo.gender;
    var name = that.data.name;    name = encodeURIComponent(name);    name = encodeURIComponent(name);//二次编码
    var date = util.formatData(new Date())
    wx.getStorage({
      key: 'code',                                               //code
      success: function (res) {
        wx.request({
          url: api.ip + 'user/getUserInfo',
          data: { code: res.data  },
          header: { 'content-type': 'application/json' },
          success: function (ress) {
            const userOpenid = JSON.parse(ress.data.result).openid                     //openid
            wx.setStorage({//存储到本地
              key: "userOpenid",
              data: userOpenid,
              success: function () {
                wx.request({
                  method: 'GET',
                  url: api.ip + 'user/insertUser?openid=' + userOpenid + '&gender=' + gender + '&name=' + name + '&creatTime=' + date,
                  success: function (resss) {
                    var user = resss.data.result
                    if (user == null) {
                      var toastText = '获取数据失败' + resss.data.errMsg;
                      wx.showToast({
                        title: toastText,
                        icon: '',
                        duration: 2000 //弹出时间
                      })
                    } else {
                      that.setData({
                        user: user,
                      });
                      wx.setStorage({
                        key: 'user',
                        data: user,
                        success: function () {
                          wx.setStorage({
                            key: 'hasUserInfo',
                            data: true,
                            success: function () {
                              setTimeout(function () {
                                wx.showToast({
                                  title: '登录成功',
                                  success: function () {
                                    setTimeout(function () {
                                      wx.navigateTo({
                                        url: '../index/index',
                                      })
                                    }, 1000)
                                  },
                                  fail: function () {
                                    wx.hideLoading()
                                  }
                                })
                              }, 1500)
                            },
                            fail: function () {
                              wx.hideLoading()
                            }
                          })
                        },
                        fail: function () {
                          wx.hideLoading()
                        }
                      })
                    }
                  },
                  fail: function () {
                    wx.showToast({
                      title: '登录失败',
                      icon: 'none',
                      duration: 500,
                    })
                  }
                })
              },
              fail: function () {
                wx.hideLoading()
              }
            })
          },
          fail: function () {
            wx.showToast({
              title: '登录失败',
              icon: 'none',
              duration: 500,
            })
          }
        })
      },
      fail: function () {
        wx.showToast({
          title: '获取Code失败！',
          icon: 'none',
          duration: 500,
        })
      }
    })
  },

  onLoad: function (options) {
    
  },

  onReady: function () {
    
  },

  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'hasUserInfo',
      success: function (res) {
        if (res.data == true) {
          wx.showToast({
            title: '正在登录',
            icon: 'loading',
            success: function() {
              setTimeout(function() {
                wx.showToast({
                  title: '登录成功',
                  success:function() {
                    setTimeout(function() {
                      wx.navigateTo({
                        url: '../index/index',
                      })
                    },500)
                  }
                })
              },800)
            }
          })
        }
      },
      fail: function () {
        wx.setStorage({
          key: 'hasUserInfo',
          data: false,
        })
      }
    })
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