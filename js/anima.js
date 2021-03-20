if(localStorage.theme == 'light' && localStorage.anima == 'anima-on') {
  VANTA.FOG({
    el: "#anima",   /* anima */ 
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xffffff,
    midtoneColor: 0x727272,
    lowlightColor: 0xffffff,
    baseColor: 0xffffff,
    blurFactor: 0.43,
    zoom: 1.20
});
} else {
  if(localStorage.theme == 'dark' && localStorage.anima == 'anima-on') {
    VANTA.FOG({
      el: "#anima",   /* anima */ 
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x9b9b9b,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0x0,
      blurFactor: 0.52
});
}
}

