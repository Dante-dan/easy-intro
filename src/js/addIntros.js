import addIntro from './addIntro';
import clearIntroMask from './removeAllIntro';

/**
 * 创建一组引导
 * @param intros {ref, desc}
 */

function addIntros(intros = []) {
  if (Array.isArray(intros) && intros.length > 0) {
    let stepIndex = 1;
    let clearItem = null;
    const step = intros.length;
    clearItem = addIntro({
      hint: false,
      ...intros[0],
    });
    const element = document.getElementById('easy-intro-mask-full');
    function nextIntro() {
      if(typeof clearItem == 'function') {
        clearItem();
      }
      if (intros[stepIndex]) {
        clearItem = addIntro({
          realClick: false,
          hint: false,
          ...intros[stepIndex],
        });
      }
      const tempEl = document.getElementById('easy-intro-mask-full');
      if (stepIndex > step) {
        tempEl.removeEventListener('click', nextIntro);
        clearIntroMask();
      } else {
        stepIndex += 1;
        if(tempEl) {
          tempEl.addEventListener('click', nextIntro);
        }
      }
    }
    element.addEventListener('click', nextIntro);
  }
}

export default addIntros;
