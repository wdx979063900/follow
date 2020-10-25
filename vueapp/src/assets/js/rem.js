;
(function (win) {
  const doc = win.document;
  const docEl = doc.documentElement;
  let tid;
  function refreshRem() {
    const width = docEl.getBoundingClientRect().width;
    /*  getBoundingClientRect()返回元素的大小及其相对于视口左上角的位置（不包含页面看不见的部分）。
    该函数返回一个Object对象，该对象有6个属性：top, left, bottom, right, width, height；这里的top、
    left和css中的理解很相似，width、height是元素自身的宽高，但是right，bottom和css中的理解有点不一样。
    right是指元素右边界距窗口最左边的距离，bottom是指元素下边界距窗口最上面的距离  */
    const rem = width / 6.4;//将屏幕宽度分成6.4份，1份为1rem
    docEl.style.fontSize = rem + 'px';
    //  console.log(0.14*rem);
  };
  win.addEventListener ('resize', function() {
      //  监听调整窗口大小
      clearTimeout(tid);
      tid = setTimeout(refreshRem,10);
  },false);
  win.addEventListener('pageshow',function(e){
      if(e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(refreshRem,10);
      }
  },false)  
  refreshRem();

}(window));