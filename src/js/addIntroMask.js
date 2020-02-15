// 添加一个MaskInto
import clearAll from './clearIntroMask';
import ClickIcon from '../assets/img/btn_click.png';
import ArrowIcon from '../assets/img/icon_arrow.png';

function getElementLeft(element) {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

function getElementTop(element) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

function addIntroMask(el) {
  const paddingLeft = 10;
  const paddingTop = 5;
  // 获取对应元素的位置参数
  const { clientWidth } = document.documentElement;
  const { clientHeight } = document.documentElement;
  const { left, top } = el.getBoundingClientRect();
  const height = el.offsetHeight + 10;
  const width = el.offsetWidth + 10;
  // 创建 Mask DOM
  const domTopStart = document.createElement('div');
  const domTopCenter = document.createElement('div');
  const domTopEnd = document.createElement('div');
  const domLeft = document.createElement('div');
  const domRight = document.createElement('div');
  const domBottomTop = document.createElement('div');
  const domBottomCenter = document.createElement('div');
  const domBottomEnd = document.createElement('div');
  // 添加到DOM
  domTopStart.className = 'easy-intro-mask';
  domTopStart.id = 'easy-intro-mask-top-start';
  domTopStart.setAttribute('style', `top: 0; left: 0; right: ${clientWidth - left + paddingLeft}px; bottom: ${clientHeight - top + paddingTop}px`);
  domTopCenter.className = 'easy-intro-mask';
  domTopCenter.id = 'easy-intro-mask-top-center';
  domTopCenter.setAttribute('style', `top: 0; left: ${left - paddingLeft}px; right: ${clientWidth - left - width}px; bottom: ${clientHeight - top + paddingTop}px`);
  domTopEnd.className = 'easy-intro-mask';
  domTopEnd.id = 'easy-intro-mask-top-end';
  domTopEnd.setAttribute('style', `top: 0; left: ${width + left}px; right: 0; bottom: ${clientHeight - top + paddingTop}px`);
  domLeft.className = 'easy-intro-mask';
  domLeft.id = 'easy-intro-mask-left';
  domLeft.setAttribute('style', `top: ${top - paddingTop}px; left: 0; right: ${clientWidth - left + paddingLeft}px; bottom: ${clientHeight - top - height - 5}px`);
  domRight.className = 'easy-intro-mask';
  domRight.id = 'easy-intro-mask-right';
  domRight.setAttribute('style', `top: ${top - paddingTop}px; left: ${width + left}px; right: 0; bottom: ${clientHeight - top - height - paddingTop}px`);
  domBottomTop.className = 'easy-intro-mask';
  domBottomTop.id = 'easy-intro-mask-bottom-start';
  domBottomTop.setAttribute('style', `top: ${top + height + paddingTop}px; left: 0; right:  ${clientWidth - left + paddingLeft}px; bottom: 0px`);
  domBottomCenter.className = 'easy-intro-mask';
  domBottomCenter.id = 'easy-intro-mask-bottom-center';
  domBottomCenter.setAttribute('style', `top: ${top + height + paddingTop}px; left: ${left - paddingLeft}px; right: ${clientWidth - left - width}px; bottom: 0px`);
  domBottomEnd.className = 'easy-intro-mask';
  domBottomEnd.id = 'easy-intro-mask-bottom-end';
  domBottomEnd.setAttribute('style', `top: ${top + height + paddingTop}px; left: ${width + left}px; right: 0; bottom: 0px`);
  document.body.appendChild(domTopStart);
  document.body.appendChild(domTopCenter);
  document.body.appendChild(domTopEnd);
  document.body.appendChild(domLeft);
  document.body.appendChild(domRight);
  document.body.appendChild(domBottomTop);
  document.body.appendChild(domBottomCenter);
  document.body.appendChild(domBottomEnd);
}


/**
 *
 * @param ref 传入需要加入引导的元素的Ref/elementDom
 * @param desc 传入对应的引导描述
 * @param realClick 是否可以点击
 * @param hint 是否出现点击引导动画
 * @returns {function(...[*]=)}
 */
function addIntro({
  el,
  desc,
  realClick= true,
  hint = true,
}) {
  clearAll(el);
  const paddingLeft = 10;
  const paddingTop = 5;
  // 获取对应元素的位置参数
  const { clientWidth } = document.documentElement;
  const { clientHeight } = document.documentElement;
  const { left, top } = el.getBoundingClientRect();
  const height = el.offsetHeight + 10;
  const width = el.offsetWidth + 10;
  const domDesc = document.createElement('span');
  const domClickButton = document.createElement('img');
  const domArrowIcon = document.createElement('img');
  // 设置样式
  if (hint) {
    el.classList.add('shine-animate');
  }
  if (!realClick) {
    const maskFull = document.createElement('div');
    maskFull.id = 'easy-intro-mask-full';
    maskFull.className = 'easy-intro-mask';
    document.body.appendChild(maskFull);
  }
  domDesc.innerHTML = desc || '';
  domDesc.id = 'easy-intro-desc';
  domDesc.setAttribute('style', `top: auto; left: ${left - paddingLeft}px; right: ${clientWidth - left - width}px; bottom: ${clientHeight - top + paddingTop + 50}px`);
  domArrowIcon.id = 'easy-intro-arrow';
  domArrowIcon.src = ArrowIcon;
  domArrowIcon.setAttribute('style', `left: ${left - paddingLeft + width / 2 - 25}px; bottom: ${clientHeight - top + paddingTop + 3}px;`);
  domClickButton.id = 'easy-intro-btn';
  domClickButton.src = ClickIcon;
  domClickButton.setAttribute('style', `top: ${top + height / 2}px; left: ${width / 2 + left}px;`);
  // 插入dom
  document.body.appendChild(domDesc);
  document.body.appendChild(domArrowIcon);
  if (hint) {
    document.body.appendChild(domClickButton);
  }
  addIntroMask(el);
  // 移除多余的dom
  return () => {
    clearAll(el);
  };
}


export default addIntro;
