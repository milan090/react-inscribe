export const setCaretToElement = (el: HTMLElement, offset = 0) => {
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();

  if (!sel) return;

  range.setStart(el, offset);
  range.collapse(false);

  sel?.removeAllRanges();
  sel?.addRange(range);
};
