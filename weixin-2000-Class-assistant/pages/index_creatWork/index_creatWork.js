const app = getApp()
const api = require('../../api.js');
const util = require('../../utils/util.js');
const { $Message } = require('../../dist/base/index');

Page({

  data: {
    image: '',
    worktip: '',
    workcon: '',
    classnames: [],
    classids: [],
    classname: '未选择',
    classvalue: -1,
    userInfo: {},
    userOpenid: ''
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
      fail: function () {
        wx.showToast({
          title: '添加图片失败',
          icon: 'none',
          duration: 500
        })
      }
    })
  },

  inputtip: function (e) {
    var that = this
    that.setData({
      worktip: e.detail.value
    })
  },
  inputcon: function (e) {
    var that = this
    that.setData({
      workcon: e.detail.value
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      classvalue: e.detail.value,
      classname: this.data.classnames[e.detail.value]
    })
  },

  checkValue: function() {
    var that = this
    var topic = that.data.worktip
    var content = that.data.workcon
    var classvalue = that.data.classvalue
    if(topic == '') {
      $Message({
        content: '作业题目不能为空！',
        type: 'warning'
      });
    } else if (content == '') {
      $Message({
        content: '题目描述不能为空！',
        type: 'warning'
      });
    } else if (classvalue == -1) {
      $Message({
        content: '请选择课程！',
        type: 'warning'
      });
    } else {
      this.worksubmit()
    }
  },

  worksubmit: function () {
    var that = this;
    var classvalue = that.data.classvalue
    var userInfo = that.data.userInfo

    var code = ''
    var classid = that.data.classids[classvalue]
    var imgurl = ''
    var openid = that.data.userOpenid
    var topic = that.data.worktip
    var content = that.data.workcon
    var date = util.formatData(new Date())

    topic = encodeURIComponent(topic);
    topic = encodeURIComponent(topic);//二次编码
    content = encodeURIComponent(content);
    content = encodeURIComponent(content);//二次编码

    var image = that.data.image
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (var i = 0; i < 4; i++) {
      var index = Math.floor(Math.random() * 36);
      code += random[index];
    }
    if (image != '') {
      wx.showLoading({
        title: '正在上传图片',
      })
      wx.uploadFile({
        url: api.ip + 'handle/uploadfile',
        filePath: image,
        name: 'file',
        header: {
          'content-type': 'multipart/form-data'
        }, // 设置请求的 header
        success: function (res) {
          imgurl = res.data
          wx.request({
            method: 'POST',
            url: api.ip + "homework/insert?code=" + code + "&classid=" + classid + "&imgurl=" + imgurl + "&openid=" + openid + "&topic=" + topic + "&content=" + content + "&date=" + date,
            success: function () {
              wx.showToast({
                title: '发布成功',
                success: function () {
                  setTimeout(function () {
                    wx.navigateTo({
                      url: '../codedisplay/codedisplay?code=' + code,
                    })
                  }, 1000)
                }
              })
            },
            fail: function () {
              wx.showToast({
                title: '上传失败',
                icon: 'none',
                duration: 500
              })
            }
          })
        },
        fail: function () {
          wx.showToast({
            title: '上传图片失败',
            icon: 'none',
            duration: 500
          })
        }
      })
    } else {
      wx.showLoading({
        title: '正在上传',
      })
      wx.request({
        method: 'POST',
        url: api.ip + "homework/insert?code=" + code + "&classid=" + classid + "&imgurl=" + imgurl + "&openid=" + openid + "&topic=" + topic + "&content=" + content + "&date=" + date,
        success: function () {
          wx.showToast({
            title: '发布成功',
            success: function () {
              setTimeout(function () {
                wx.navigateTo({
                  url: '../codedisplay/codedisplay?code=' + code,
                })
              }, 1000)
            }
          })
        },
        fail: function () {
          wx.showToast({
            title: '上传失败',
            icon: 'none',
            duration: 500
          })
        }
      })
    }
  },

  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userOpenid',
      success: function (res) {
        that.setData({
          userOpenid: res.data
        })
        wx.request({
          method: 'GET',
          url: api.ip + "democlass/getclassinfo?openid=" + res.data,
          success: function (res) {
            var classnames = res.data.classnames;
            var classids = res.data.classids
            if (classnames == null) {
              var toastText = '获取数据失败' + res.data.errMsg;
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000 //弹出时间
              })
            } else {
              that.setData({
                classnames: classnames,
                classids: classids
              })
            }
          }
        })
      },
    })
  },

  onReady: function () {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data
        })
      }
    })
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