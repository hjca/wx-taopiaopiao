let constUrl = "https://result.eolinker.com/2nWUrmu97c673038e5ccb5b83c388c397daccc565d19545?uri=";

function wxRequestData(url,successFun,errorFun,methods="GET",data="",isLoadding="1"){
  // 是否设置loadding
  if(isLoadding == "1"){
    wx.showLoading()
  }

  // 开始请求数据
  wx.request({
    url: constUrl + url,
    data:data,
    method:methods,
    success:(res) => {
      if (res.statusCode == 200){
        successFun(res.data)
      }
    },
    fail:(res) => {
    },
    complete:(res) => {
      wx.hideLoading();
    }
  })
}

export default wxRequestData;