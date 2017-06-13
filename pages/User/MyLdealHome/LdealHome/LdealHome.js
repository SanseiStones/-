// LdealHome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lh_lv_image:'/img/ldealhome/ilike.png',
    lh_dz_image:'/img/ldealhome/idea.png',
    lh_pl_image:'/img/ldealhome/comment.png',
    lh_bj_image:'/img/ldealhome/make.png',
    lh_lvoe:0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
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
  
  },
  navClick:function(event){
    var clickID=event.target.id;
    switch(clickID){
      case 'nav_like':
      this.setData({
        lh_lvoe: lh_lvoe+1
      })
      break;
      case 'nav_dz':
        this.setData({
          lh_nav_dz: 'weui-bar__item_on',
          test_text:'lh_nav_dz',
          lh_dz_image:'/img/ldealhome/idea-on.png'
        })
        break;
      case 'nav_pl':
        this.setData({
          lh_nav_pl: 'weui-bar__item_on',
          test_text: 'lh_nav_pl',
          lh_pl_image:'/img/ldealhome/comment-on.png'
                  })
        break;
      case 'nav_bj':
        this.setData({
          lh_nav_bj: 'weui-bar__item_on',
          test_text: 'lh_nav_bj'         
        })
        break;
      default:
      break;
    }
  }
})