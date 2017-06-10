//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    hiddent: true,
    items:[],
    loadicon:"",
    loadresult:"",
    userInfo: {},
    inputShowed: true,
    inputVal: ""
  },
  //事件处理函数
  bindViewTap: function(e) {
  console.log("加载数据");
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //加载数据
    this.getusermessage();
   
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  scrollower:function(){
    this.setData({
      hiddent: false,
      loadicon:"weui-loading",
      loadresult:"加载中..."
    })
    
    this.getusermessage();
    this.bindViewTap();

  },
  scrollupper:function(){

  },
  getusermessage:function(){
    var itemss = [
      {
        name: 'Anywhere I Go',
        id: 1,
        hope: "123132"
      },
      {
        name: 'East Of Eden',
        id: 2,
        hope: "65456"
      },
      {
        name: 'Finggers',
        id: 3,
        hope: "543"
      },
      {
        name: 'Prayer In C',
        id: 4,
        hope: "89789"
      },
      {
        name: 'Staring At You',
        id: 5,
        hope: "8796"
      }];
    var sitem=JSON.stringify(itemss);
    this.setData({
      items:itemss,
      hiddent: true,
    });   
  }
})
