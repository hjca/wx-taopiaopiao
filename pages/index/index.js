const app = getApp();
import wxRequest from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    swiperList:"",
    movieList:[]
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
    let that = this;
    app.getUserBaseInfo();
    wxRequest('/index/swiperList',function(data){
      that.setData({
        swiperList:data.data.list
      })
    })

    // 获取电影列表
    this.getMovieListData();
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
    return {
      title:"微信小程序-仿淘票票",
      path:"/pages/index/index",
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544965247&di=0a88562cd9e30039c913088762e2c871&imgtype=jpg&er=1&src=http%3A%2F%2Fimg2.jiemian.com%2F101%2Foriginal%2F20180416%2F152388740726638200_a580xH.jpg"
    }
  },

  // 选择菜单
  selectType(e){
    this.setData({
      current:parseInt(e.currentTarget.dataset.current)
    })
  },

  // 活动主题内容
  changeSwiper(e){
    this.setData({
      current: e.detail.current
    })
  },

  // 获取电影数据列表
  getMovieListData(){
    let that = this;
    wxRequest('/index/movieList',function(data){
      that.setData({
        movieList: that.data.movieList.concat(data.data.list)
      })
    })
  },

  // 滑动底部
  lower(e){
    // console.log(e)
    this.getMovieListData();
  },

  // 查看电影详情
  loadMovieDetail(e){
    app.globalData.movieDetail = e.currentTarget.dataset.moviditem;
    wx.navigateTo({
      url: '/pages/movieDetail/movieDetail?movieid=' + e.currentTarget.dataset.movieid,
    })
  }
})