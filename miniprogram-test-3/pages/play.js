Page({

  /**
   * 页面的初始数据
   */
  data: {
    impaper: "../pages/resources/paper.png",
    imstone:"../pages/resources/stone.png",
    imscissors: "../pages/resources/scissors.png",

    image1:"",
    image2:"",
    name1: "name",
    style1: 0,
    stat1: "biu",
    name2: "computer",
    style2: 0,
    stat2: "baba",
    },


  paper1:function(e){
    this.setData({
      style1:1,
      style2: Math.floor(Math.random() * 3) + 1
    })
    if (this.data.style2 === 1) {
      this.setData({
        stat2 : "paper",
        image2: this.data.impaper
        })
    }
    else if (this.data.style2 === 2) {
      this.setData({ stat2 : "stone",
      image2: this.data.imstone
      })
    }
    else {
      this.setData({ stat2: "scissors",image2: this.data.imscissors })
    }
    this.setData({ stat1 : "paper",
      image1: this.data.impaper })

  },
  stone: function (e) {
    this.setData({
      style1: 1,
      style2: Math.floor(Math.random() * 3) + 1
    })
    if (this.data.style2 === 1) {
      this.setData({
        stat2: "paper",
        image2: this.data.impaper
      })
    }
    else if (this.data.style2 === 2) {
      this.setData({
        stat2: "stone",
        image2: this.data.imstone
      })
    }
    else {
      this.setData({ stat2: "scissors", image2: this.data.imscissors })
    }
    this.setData({ stat1: "stone",
      image1: this.data.imstone })

  },
  scissors: function (e) {
    this.setData({
      style1: 1,
      style2: Math.floor(Math.random() * 3) + 1
    })
    if (this.data.style2 === 1) {
      this.setData({
        stat2: "paper",
        image2: this.data.impaper
      })
    }
    else if (this.data.style2 === 2) {
      this.setData({
        stat2: "stone",
        image2: this.data.imstone
      })
    }
    else {
      this.setData({ stat2: "scissors",
        image2: this.data.imscissors })
    }
    this.setData({ stat1: "scissors",
      image1: this.data.imscissors })

  },
  

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  paper2: "resources/paper.png",
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
    
  }
})