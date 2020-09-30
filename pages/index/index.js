//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    newthing: '',
    todolist: [
    ],
  },
  // 完成事情处理函数
  taggleHandle: function (e) {
    // 当前被点的事情索引
    var current = Number(e.target.dataset.index)
    var todolist = this.data.todolist
    // console.log(current)
    if (todolist) {
      todolist[current].isChecked = !this.data.todolist[current].isChecked
      this.setData({
        todolist: todolist
      })
    }
  },
  // 输入事情,点击添加后处理函数
  addThingHandle: function (e) {
    var todolist = this.data.todolist
    if (this.data.newthing) {
      var newthing = {
        content: this.data.newthing,
        isChecked: false
      }
      todolist.push(newthing)
      this.setData({
        todolist: todolist,
        newthing: '',
      })
    }
  },
  inputHandle: function (e) {
    // 获取输入框中输入的内容
    // console.log(e.detail.value)
    var newthing = e.detail.value
    this.setData({
      newthing: newthing
    })
  },
  clearAllHandle: function() {
    var that = this
    // 删除所有提示
    wx.showModal({
      title: '提示',
      content: '确定一定要删除吗宝贝？',
      success (res) {
        if (res.confirm) {
          that.setData({
            todolist: '',
            newthing: '',
          })
        } else if (res.cancel) {
          return
        }
      }
    })    
  }
})