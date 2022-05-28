function menuToggle(state) {
    var x = document.getElementById('menu');
    switch(state) {
      case 'show':
        x.style.opacity=1;
        x.style.color='rgb(96, 96, 96)';
        x.style.visibility='visible';
        x.style.transition='visibility 0s, opacity 0.3s';
        break;
      case 'hide':
        x.style.opacity=0;
        x.style.color='black';
        x.style.visibility='hidden';
        x.style.transition='visibility 0.3s, opacity 0.3s'; 
        break;
    }
  }

