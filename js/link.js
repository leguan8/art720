// 定义不同 iframe 对应的 URL
var urls = {
  1: "aHR0cHM6Ly93d3cuNzIweXVuLmNvbS92ci9lYzBqejdzeXV2Mg==",
  2: "aHR0cHM6Ly93d3cuNzIweXVuLmNvbS92ci80Njdqa2RtdXZ2MQ==",
  3: "aHR0cHM6Ly93d3cuNzIweXVuLmNvbS92ci84ZDFqTzc0T095Nw==",
  4: "aHR0cHM6Ly93d3cuNzIweXVuLmNvbS92ci9iYTIyODlpZHFlYQ==",
  5: "aHR0cHM6Ly93d3cuNzIweXVuLmNvbS92ci8zZGNqTzdzdU95NA=="
};
function _0x2eb9(){var _0x21c374=['324984VBdFvS','getAttribute','addEventListener','1824uVPyxt','1665785XshSWo','getElementsByTagName','4vKosNq','20WDoFjH','src','156832yxttRg','iframe','16611BwGmPz','2528235qtrwhw','15tZdQSG','36825252mJMKUR','DOMContentLoaded','261NryKtD','44132qewGIH'];_0x2eb9=function(){return _0x21c374;};return _0x2eb9();}var _0x494cbc=_0x2eba;(function(_0x57961b,_0xe9a142){var _0x5be398=_0x2eba,_0x33500d=_0x57961b();while(!![]){try{var _0x32eeb5=-parseInt(_0x5be398(0xd1))/0x1*(parseInt(_0x5be398(0xd7))/0x2)+-parseInt(_0x5be398(0xcc))/0x3*(-parseInt(_0x5be398(0xd0))/0x4)+-parseInt(_0x5be398(0xcb))/0x5+-parseInt(_0x5be398(0xd4))/0x6*(parseInt(_0x5be398(0xca))/0x7)+parseInt(_0x5be398(0xda))/0x8*(-parseInt(_0x5be398(0xcf))/0x9)+parseInt(_0x5be398(0xd8))/0xa*(-parseInt(_0x5be398(0xd5))/0xb)+parseInt(_0x5be398(0xcd))/0xc;if(_0x32eeb5===_0xe9a142)break;else _0x33500d['push'](_0x33500d['shift']());}catch(_0x234a1b){_0x33500d['push'](_0x33500d['shift']());}}}(_0x2eb9,0x5baf7));function _0x2eba(_0x4d8c77,_0x567aca){var _0x2eb993=_0x2eb9();return _0x2eba=function(_0x2ebaa6,_0x4c0838){_0x2ebaa6=_0x2ebaa6-0xc9;var _0xf78809=_0x2eb993[_0x2ebaa6];return _0xf78809;},_0x2eba(_0x4d8c77,_0x567aca);}function decodeAndSetIframeSrc(_0x2b227d){var _0x359e84=_0x2eba,_0x705035=_0x2b227d[_0x359e84(0xd2)]('data-index'),_0x53458d=urls[_0x705035],_0x21007d=atob(_0x53458d);_0x2b227d[_0x359e84(0xd9)]=_0x21007d;}document[_0x494cbc(0xd3)](_0x494cbc(0xce),function(){var _0x19da99=_0x494cbc,_0x223f63=document[_0x19da99(0xd6)](_0x19da99(0xc9));for(var _0x32a0e5=0x0;_0x32a0e5<_0x223f63['length'];_0x32a0e5++){decodeAndSetIframeSrc(_0x223f63[_0x32a0e5]);}}); /*base64编码*/

function toggleHidden(num) {
      var divs = document.getElementsByClassName('hiddenaaa');
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
      }
      document.getElementById('hidden' + num).style.display = 'block';
    } /*service页面中的隐藏层按钮*/

/*反馈表单的按钮*/
document.getElementById('submitLink').addEventListener('click', function(event) {
            event.preventDefault();
            const form = document.querySelector('form');
            const nameInput = form.elements.namedItem('name');
            const wechatInput = form.elements.namedItem('wechat');
            const phoenInput = form.elements.namedItem('phone');
            const requirementInput = form.elements.namedItem('requirement');
            if (!nameInput.value ||!wechatInput.value ||!requirementInput.value) {
                alert('对不起，请您填写完整所有信息！');
            } else {
                form.submit();
            }
        });/*检查是否都填写了*/

//720全屏
function requestFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}
// 例如，可以在某个按钮的点击事件中调用此函数
document.getElementById("fullScreenBtn").addEventListener("click", requestFullScreen);


//向php页面发送网址post请求的代码
function sendPostRequest() {
      fetch('get_iframe_url.php', { //这是网址php文件
        method: 'POST'
      })
      .then(response => response.text())
      .then(data => {
          document.getElementById('result').innerHTML = data;
        })
      .catch(error => {
          console.error('发生错误:', error);
        });
    }

