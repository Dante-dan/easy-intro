function clearAll(el) {
  if (el) {
    console.log(el);
    el.classList.remove('shine-animate');
  }
  const domId = [
    'easy-intro-mask-full',
    'easy-intro-mask-top-start',
    'easy-intro-mask-top-center',
    'easy-intro-mask-top-end',
    'easy-intro-mask-bottom-start',
    'easy-intro-mask-bottom-center',
    'easy-intro-mask-bottom-end',
    'easy-intro-mask-left',
    'easy-intro-mask-right',
    'easy-intro-btn',
    'easy-intro-desc',
    'easy-intro-arrow',
  ];
  domId.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      document.body.removeChild(element);
    }
  });
}

export default clearAll;
