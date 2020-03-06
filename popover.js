
for (let i = 1; i <= 10; i++) {
  const button = document.getElementsByClassName(`tooltip-${i}`)[0];
  const popover = document.getElementById(`popover-${i}`);
  tippy(button, {
    content: popover.innerHTML,
    allowHTML: true,
    animation: 'scale',
    trigger: 'click',
    placement: 'right',
    theme: 'material'
  });
  
}
