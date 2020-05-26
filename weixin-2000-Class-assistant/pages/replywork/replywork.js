// pages/replywork/replywork.js
const util = require('../../utils/util.js');
const api = require('../../api.js');
const { $Message } = require('../../dist/base/index');

Page({

  data: {
    homework: {},
    image: '',
    replycon:'',
    userInfo: {},
    openid:''
  },

  addphoto: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: function (res) {
        const filePath = res.tempFilePaths[0]
        that.setData({
          image: filePath
        })
      },
      fail:function() {
        wx.showToast({
          title: '添加图片失败',
          icon: 'none',
          duration: 500,
        })
      }
    })
  },

  inputcon: function (e) {
    var that = this
    that.setData({
      replycon: e.detail.value
    })
  },

  checkValue: function() {
    var that = this
    var content = that.data.replycon
    if(content == '') {
      $Message({
        content: '题解内容不能为空！',
        type: 'warning'
      });
    } else {
      that.reply()
    }
  },

  reply: function() {
    var that = this
    var image = that.data.image

    wx.showModal({
      title: '温馨提示',
      content: '确定要提交吗？',
      confirmColor: '#32CD32',
      confirmText: '提交',
      success: function (res) {
        if (res.confirm) {
          var homework = that.data.homework

          var codeid = homework.code + homework.id
          var openid = that.data.openid
          var imgurl = ''
          var content = that.data.replycon
          var date = util.formatData(new Date())
         
          content = encodeURIComponent(content);
          content = encodeURIComponent(content);//二次编码

          if (image != '') {
            wx.showLoading({
              title: '正在提交',
            })
            wx.uploadFile({
              url: api.ip + 'handle/uploadfile',
              filePath: image,
              name: 'file',
              header: {
                'content-type': 'multipart/form-data'
              }, // 设置请求的 header
              success: function (ress) {
                imgurl = imgurl + ress.data
                wx.request({
                  method: 'POST',
                  url: api.ip + 'reply/insert?codeid=' + codeid + '&openid=' + openid + '&imgurl=' + imgurl + '&content=' + content + '&date=' + date,
                  success: function () {
                    setTimeout(function () {
                      wx.showToast({
                        title: '提交成功',
                        success: function () {
                          setTimeout(function () {
                            wx.navigateTo({
                              url: '../index/index'
                            })
                          }, 1000)
                        }
                      })
                    }, 500)
                  },
                  fail:function() {
                    wx.showToast({
                      title: '连接服务器失败',
                      icon: 'none',
                      duration: 500,
                    })
                  }
                })
              },
              fail:function() {
                wx.showToast({
                  title: '上传图片失败',
                  icon: 'none',
                  duration: 500,
                })
              }
            })
          } else {
            wx.showLoading({
              title: '正在提交',
            })
            wx.request({
              method: 'POST',
              url: api.ip + 'reply/insert?codeid=' + codeid + '&openid=' + openid + '&imgurl=' + imgurl + '&content=' + content + '&date=' + date,
              success: function () {
                setTimeout(function () {
                  wx.showToast({
                    title: '提交成功',
                    success: function () {
                      setTimeout(function () {
                        wx.navigateTo({
                          url: '../index/index'
                        })
                      }, 1000)
                    }
                  })
                }, 500)
              },
              fail: function () {
                wx.showToast({
                  title: '连接服务器失败',
                  icon: 'none',
                  duration: 500,
                })
              }
            })
          }
        }
      }
    })
  },

  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'homework',
      success: function (res) {
        wx.getStorage({
          key: 'userInfo',
          success: function(ress) {
            wx.getStorage({
              key: 'userOpenid',
              success: function (resa) {
                that.setData({
                  homework: res.data,
                  userInfo: ress.data,
                  openid: resa.data
                })
              },
            })
          },
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})