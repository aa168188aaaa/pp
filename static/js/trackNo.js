// 定义一个独立的函数来获取 trackNo
function getTrackNo (callback) {
  var trackNo; // 定义变量 trackNo

  $.ajax({
    type: "POST",
    url: "https://apisem.softload.cn/api/v1/stats/Log/push",
    data: {
      "href": window.location.href,
    },
    success: function (result) {
      console.log('First request success:', result);
      trackNo = result.trackNo; // 将结果赋值给 trackNo
      callback(trackNo); // 回调函数传入 trackNo
    },
    error: function (error) {
      console.error('Error:', error);
      callback(null); // 如果出错，回调函数传入 null
    }
  });
}