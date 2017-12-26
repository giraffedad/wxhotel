"use strict";!function(e,t){function i(){var t=n.getBoundingClientRect().width;t/m>540&&(t=540*m);var i=t/7.5;n.style.fontSize=i+"px",d.rem=e.rem=i}var a,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),m=0,s=0,d=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var p=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(s=parseFloat(p[1]),m=parseInt(1/s))}else if(l){var c=l.getAttribute("content");if(c){var u=c.match(/initial\-dpr=([\d\.]+)/),f=c.match(/maximum\-dpr=([\d\.]+)/);u&&(m=parseFloat(u[1]),s=parseFloat((1/m).toFixed(2))),f&&(m=parseFloat(f[1]),s=parseFloat((1/m).toFixed(2)))}}if(!m&&!s){e.navigator.appVersion.match(/android/gi);var v=e.navigator.appVersion.match(/iphone/gi),h=e.devicePixelRatio;s=1/(m=v?h>=3&&(!m||m>=3)?3:h>=2&&(!m||m>=2)?2:1:1)}if(n.setAttribute("data-dpr",m),!o)if((o=r.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var x=r.createElement("div");x.appendChild(o),r.write(x.innerHTML)}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*m+"px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize=12*m+"px"},!1),i(),d.dpr=e.dpr=m,d.refreshRem=i,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXhpYmxlLmpzIl0sIm5hbWVzIjpbIndpbiIsImxpYiIsInJlZnJlc2hSZW0iLCJ3aWR0aCIsImRvY0VsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZHByIiwic3R5bGUiLCJmb250U2l6ZSIsInJlbSIsImZsZXhpYmxlIiwiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJtZXRhRWwiLCJmbGV4aWJsZUVsIiwic2NhbGUiLCJjb25zb2xlIiwid2FybiIsImdldEF0dHJpYnV0ZSIsIm1hdGNoIiwicGFyc2VJbnQiLCJjb250ZW50IiwiaW5pdGlhbERwciIsIm1heGltdW1EcHIiLCJ0b0ZpeGVkIiwicGFyc2VGbG9hdCIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJpc0lQaG9uZSIsImlzQW5kcm9pZCIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndyYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwidGlkIiwiZSIsInBlcnNpc3RlZCIsInJlYWR5U3RhdGUiLCJib2R5IiwicmVtMnB4IiwiZCIsInRoaXMiLCJ2YWwiLCJweDJyZW0iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJjQUFDLFNBQVVBLEVBQUtDLEdBaUVYLFNBQUFDLElBR0csSUFBSUMsRUFBUUMsRUFBTUMsd0JBQXdCRixNQUQ5Q0EsRUFBU0QsRUFBWSxNQUNiQyxFQUFRQyxJQUFNQyxHQUVkRixJQUFBQSxFQUFBQSxFQUFjRyxJQUNqQkYsRUFBQUcsTUFBQUMsU0FBQUMsRUFBQSxLQUNEQyxFQUFJRCxJQUFNTixFQUFRTSxJQUFsQkEsRUF2RUosSUFJSUgsRUFKQUssRUFBTVgsRUFBSVksU0FEaEJSLEVBQUFPLEVBQUFFLGdCQUNNRixFQUFNWCxFQUFJWSxjQUFkLHlCQUNJUixFQUFZUyxFQUFBQSxjQUFoQix5QkFDSUMsRUFBQUEsRUFDQUMsRUFBQUEsRUFFQUMsRUFBSmYsRUFBQVMsV0FBQVQsRUFBQVMsYUFFQSxHQUFJQSxFQUFBQSxDQUdBTyxRQUFRQyxLQUFLLHVCQURiSixJQUFBQSxFQUFRQSxFQUFBSyxhQUFBLFdBQUFDLE1BQUEsNEJBQ1JILElBQ0lHLEVBQVFOLFdBQU9LLEVBQUFBLElBQ2ZDLEVBQUpDLFNBQVcsRUFBQUwsU0FFUFYsR0FBQUEsRUFBZSxDQUNsQixJQUFBZ0IsRUFBQVAsRUFBQUksYUFBQSxXQU5MLEdBT09HLEVBQUlQLENBQ0hPLElBQUFBLEVBQVVQLEVBQVdJLE1BQUFBLDBCQUNyQkcsRUFBU0EsRUFBQUYsTUFBQSwwQkFDTEcsSUFDQUMsRUFBQUEsV0FBYUYsRUFBYyxJQUMzQkMsRUFBQUEsWUFBWSxFQUFBakIsR0FBQW1CLFFBQUEsS0FFWlQsSUFDSFYsRUFBQW9CLFdBQUFGLEVBQUEsSUFDR0EsRUFBQUEsWUFBWSxFQUFBbEIsR0FBQW1CLFFBQUEsTUFLdkIsSUFBQW5CLElBQUFVLEVBQUEsQ0FHbUJoQixFQUFJMkIsVUFBVUMsV0FBV1IsTUFBTSxhQUEvQyxJQURBUyxFQUFKN0IsRUFBb0IyQixVQUFBQyxXQUFBUixNQUFBLFlBQ1pVLEVBQWdCSCxFQUFBQSxpQkFjaEJyQixFQUFBQSxHQVZBQSxFQUhBdUIsRUFFQUEsR0FBVSxLQUFBdkIsR0FBQUEsR0FBQSxHQUNWLEVBQ0l5QixHQUEyQnpCLEtBQU9BLEdBQU9BLEdBQUksR0FDdkMsRUFFQSxFQUlQLEdBUVgsR0FIQ0YsRUFBQTRCLGFBQUEsV0FBQTFCLElBR0lRLEVBRURBLElBSEpWLEVBQU00QixFQUFBQSxjQUF5QjFCLFNBQy9CMEIsYUFBYSxPQUFBLFlBQ1RsQixFQUFBQSxhQUFhbUIsVUFBYyxpQkFBM0JqQixFQUFBLG1CQUFBQSxFQUFBLG1CQUFBQSxFQUFBLHNCQUNBRixFQUFPa0Isa0JBQ1BsQixFQUFPa0Isa0JBQWFFLFlBQVdwQixPQUMzQlYsQ0FDQUEsSUFBQUEsRUFBTStCLEVBQUFBLGNBQWtCRCxPQUQ1QkUsRUFFT0YsWUFBQXBCLEdBQ0hILEVBQUl5QixNQUFBQSxFQUFXSCxXQWN0QmpDLEVBQUFxQyxpQkFBQSxTQUFBLFdBR0dDLGFBQWFDLEdBRGJGLEVBQUFBLFdBQWlCbkMsRUFBVSxPQUMzQm9DLEdBQ0FDLEVBQUFBLGlCQUFpQnJDLFdBQVksU0FBN0JzQyxHQUZKQSxFQUFBQyxZQUlJSixhQUFpQkUsR0FDYkMsRUFBRUMsV0FBV3ZDLEVBQUEsUUFFYnFDLEdBSFIsYUFLRzVCLEVBTEgrQixXQVFJL0IsRUFBSWdDLEtBQUtwQyxNQUFNQyxTQUFXLEdBQUtGLEVBQU0sS0FBckNLLEVBQUlnQyxpQkFBV25DLG1CQUFmLFNBQUFnQyxHQUNHN0IsRUFBQWdDLEtBQUFwQyxNQUFBQyxTQUFBLEdBQUFGLEVBQUEsT0FDSEssR0FNSlQsSUFFQVEsRUFBU0osSUFBTU4sRUFBSU0sSUFBTUEsRUFBekJJLEVBQVNKLFdBQU1KLEVBQ2ZRLEVBQVNSLE9BQUFBLFNBQWFBLEdBQ3RCUSxJQUFBQSxFQUFTa0MsV0FBU0MsR0FBQUMsS0FBWXJDLElBSXpCLE1BSFNpQixpQkFBQUEsR0FBZ0JtQixFQUFLcEMsTUFBL0IsVUFDSXNDLEdBQU9GLE1BRVZFLEdBRUpyQyxFQU5Ec0MsT0FBQSxTQUFBSCxHQU9BbkMsSUFBQUEsRUFBU3NDLFdBQVNILEdBQUFDLEtBQVlyQyxJQUl6QixNQUhTaUIsaUJBQUFBLEdBQWdCbUIsRUFBS3BDLE1BQS9CLFNBQ0lzQyxHQUFPRixPQUVWRSxHQWhIUixDQW9IRUUsT0FBUUEsT0FBQUEsTUFBa0JBLE9BQUFBIiwiZmlsZSI6ImZsZXhpYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbih3aW4sIGxpYikge1xyXG4gICAgdmFyIGRvYyA9IHdpbi5kb2N1bWVudDtcclxuICAgIHZhciBkb2NFbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICB2YXIgbWV0YUVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJyk7XHJcbiAgICB2YXIgZmxleGlibGVFbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJmbGV4aWJsZVwiXScpO1xyXG4gICAgdmFyIGRwciA9IDA7XHJcbiAgICB2YXIgc2NhbGUgPSAwO1xyXG4gICAgdmFyIHRpZDtcclxuICAgIHZhciBmbGV4aWJsZSA9IGxpYi5mbGV4aWJsZSB8fCAobGliLmZsZXhpYmxlID0ge30pO1xyXG4gICAgXHJcbiAgICBpZiAobWV0YUVsKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCflsIbmoLnmja7lt7LmnInnmoRtZXRh5qCH562+5p2l6K6+572u57yp5pS+5q+U5L6LJyk7XHJcbiAgICAgICAgdmFyIG1hdGNoID0gbWV0YUVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpLm1hdGNoKC9pbml0aWFsXFwtc2NhbGU9KFtcXGRcXC5dKykvKTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgc2NhbGUgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgZHByID0gcGFyc2VJbnQoMSAvIHNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZsZXhpYmxlRWwpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IGZsZXhpYmxlRWwuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGluaXRpYWxEcHIgPSBjb250ZW50Lm1hdGNoKC9pbml0aWFsXFwtZHByPShbXFxkXFwuXSspLyk7XHJcbiAgICAgICAgICAgIHZhciBtYXhpbXVtRHByID0gY29udGVudC5tYXRjaCgvbWF4aW11bVxcLWRwcj0oW1xcZFxcLl0rKS8pO1xyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbERwcikge1xyXG4gICAgICAgICAgICAgICAgZHByID0gcGFyc2VGbG9hdChpbml0aWFsRHByWzFdKTtcclxuICAgICAgICAgICAgICAgIHNjYWxlID0gcGFyc2VGbG9hdCgoMSAvIGRwcikudG9GaXhlZCgyKSk7ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtYXhpbXVtRHByKSB7XHJcbiAgICAgICAgICAgICAgICBkcHIgPSBwYXJzZUZsb2F0KG1heGltdW1EcHJbMV0pO1xyXG4gICAgICAgICAgICAgICAgc2NhbGUgPSBwYXJzZUZsb2F0KCgxIC8gZHByKS50b0ZpeGVkKDIpKTsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkcHIgJiYgIXNjYWxlKSB7XHJcbiAgICAgICAgdmFyIGlzQW5kcm9pZCA9IHdpbi5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5tYXRjaCgvYW5kcm9pZC9naSk7XHJcbiAgICAgICAgdmFyIGlzSVBob25lID0gd2luLm5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9pcGhvbmUvZ2kpO1xyXG4gICAgICAgIHZhciBkZXZpY2VQaXhlbFJhdGlvID0gd2luLmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgaWYgKGlzSVBob25lKSB7XHJcbiAgICAgICAgICAgIC8vIGlPU+S4i++8jOWvueS6jjLlkowz55qE5bGP77yM55SoMuWAjeeahOaWueahiO+8jOWFtuS9meeahOeUqDHlgI3mlrnmoYhcclxuICAgICAgICAgICAgaWYgKGRldmljZVBpeGVsUmF0aW8gPj0gMyAmJiAoIWRwciB8fCBkcHIgPj0gMykpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcHIgPSAzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZVBpeGVsUmF0aW8gPj0gMiAmJiAoIWRwciB8fCBkcHIgPj0gMikpe1xyXG4gICAgICAgICAgICAgICAgZHByID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRwciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlhbbku5borr7lpIfkuIvvvIzku43ml6fkvb/nlKgx5YCN55qE5pa55qGIXHJcbiAgICAgICAgICAgIGRwciA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjYWxlID0gMSAvIGRwcjtcclxuICAgIH1cclxuXHJcbiAgICBkb2NFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZHByJywgZHByKTtcclxuICAgIGlmICghbWV0YUVsKSB7XHJcbiAgICAgICAgbWV0YUVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcclxuICAgICAgICBtZXRhRWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0Jyk7XHJcbiAgICAgICAgbWV0YUVsLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdpbml0aWFsLXNjYWxlPScgKyBzY2FsZSArICcsIG1heGltdW0tc2NhbGU9JyArIHNjYWxlICsgJywgbWluaW11bS1zY2FsZT0nICsgc2NhbGUgKyAnLCB1c2VyLXNjYWxhYmxlPW5vJyk7XHJcbiAgICAgICAgaWYgKGRvY0VsLmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgICAgICAgIGRvY0VsLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG1ldGFFbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHdyYXAgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQobWV0YUVsKTtcclxuICAgICAgICAgICAgZG9jLndyaXRlKHdyYXAuaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFJlbSgpe1xyXG4gICAgICAgIHZhciB3aWR0aCA9IGRvY0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGlmICh3aWR0aCAvIGRwciA+IDU0MCkge1xyXG4gICAgICAgICAgICB3aWR0aCA9IDU0MCAqIGRwcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbSA9IHdpZHRoIC8gNy41O1xyXG4gICAgICAgIGRvY0VsLnN0eWxlLmZvbnRTaXplID0gcmVtICsgJ3B4JztcclxuICAgICAgICBmbGV4aWJsZS5yZW0gPSB3aW4ucmVtID0gcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGlkKTtcclxuICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KHJlZnJlc2hSZW0sIDMwMCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUucGVyc2lzdGVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xyXG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KHJlZnJlc2hSZW0sIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChkb2MucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIGRvYy5ib2R5LnN0eWxlLmZvbnRTaXplID0gMTIgKiBkcHIgKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZG9jLmJvZHkuc3R5bGUuZm9udFNpemUgPSAxMiAqIGRwciArICdweCc7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVmcmVzaFJlbSgpO1xyXG5cclxuICAgIGZsZXhpYmxlLmRwciA9IHdpbi5kcHIgPSBkcHI7XHJcbiAgICBmbGV4aWJsZS5yZWZyZXNoUmVtID0gcmVmcmVzaFJlbTtcclxuICAgIGZsZXhpYmxlLnJlbTJweCA9IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICB2YXIgdmFsID0gcGFyc2VGbG9hdChkKSAqIHRoaXMucmVtO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycgJiYgZC5tYXRjaCgvcmVtJC8pKSB7XHJcbiAgICAgICAgICAgIHZhbCArPSAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgZmxleGlibGUucHgycmVtID0gZnVuY3Rpb24oZCkge1xyXG4gICAgICAgIHZhciB2YWwgPSBwYXJzZUZsb2F0KGQpIC8gdGhpcy5yZW07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSAnc3RyaW5nJyAmJiBkLm1hdGNoKC9weCQvKSkge1xyXG4gICAgICAgICAgICB2YWwgKz0gJ3JlbSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIHdpbmRvd1snbGliJ10gfHwgKHdpbmRvd1snbGliJ10gPSB7fSkpOyJdfQ==
