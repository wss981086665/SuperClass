const api = require('../../api.js');

Page({

  data: {
    classid:'',
    democlass:{},
    teacher:'',
    truename:'',
    openid:''
  },

  addclass:function() {
    wx.showLoading({
      title: '正在添加',
    })
    var that = this
    var teacher = that.data.teacher
    var openid = ''
    var truename = ''
    var classid = that.data.classid
    var topenid = teacher.openid
    var tavatarUrl = teacher.avatarUrl
    var classname = that.data.democlass.classname
    wx.getStorage({
      key: 'userName',
      success: function(res) {
        truename = res.data
        truename = encodeURIComponent(truename);
        truename = encodeURIComponent(truename);//二次编码
        classname = encodeURIComponent(classname);
        classname = encodeURIComponent(classname);//二次编码
        wx.getStorage({
          key: 'userOpenid',
          success: function(ress) {
            openid = ress.data
            wx.request({
              method: 'POST',
              url: api.ip + 'relation/insertrelation?openid='+openid+'&truename='+truename+'&classid='+classid+'&topenid='+topenid + '&tavatarUrl=' + tavatarUrl + '&con1='+classname,
              success: function (res) {
                // 返回的插入信息
                var result = res.data.result
                if(result == "success") {
                  setTimeout(function () {
                    wx.showToast({
                      title: '添加成功',
                      success: function () {
                        setTimeout(function () {
                          wx.navigateTo({
                            url: '../myclass/myclass'
                          })
                        }, 1000)
                      }
                    })
                  }, 500)
                } else if (result == "exist") {
                  setTimeout(function () {
                    wx.showToast({
                      title: '失败：重复添加！',
                      icon: 'none'
                    })
                  }, 500)
                }
              },
              fail:function() {
                wx.showToast({
                  title: '添加失败',
                })
              }
            })
          },
        })
      },
      fail:function() {
        wx.showToast({
          title: '本地数据错误',
          icon:'none',
          success:function() {
            setTimeout(function() {
              wx.navigateTo({
                url: '../myclass/myclass'
              })
            },1200)
          }
        })
      }
    })
  },

  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    })
    var that = this
    var classid = options.classid
    wx.getStorage({
      key: 'democlass',
      success: function(res) {
        wx.request({
          method: 'GET',
          url: api.ip + '/operateuser/getforumuser?openid=' + res.data.openid,
          success: function (ress) {
            var teachers = ress.data.forumusers
            if (teachers == null) {
              var toastText = '获取数据失败' + res.data.errMsg;
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000 //弹出时间
              })
            } else  {
              that.setData({
                teacher: teachers[0],
                democlass: res.data,
                classid: classid,
              })
              wx.hideLoading()
            }
          },
          fail: function () {
            wx.showToast({
              title: '获取数据失败',
            })
          }
        })
      },
      fail:function() {
        wx.showToast({
          title: '本地数据异常',
          icon:'none',
          success:function() {
            setTimeout(function() {
              wx.navigateTo({
                url: '../index/index',
              })
            },1500)
          }
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