alert('clik the cates')
var numClicks = 0;
var elem = document.getElementById('my-elem');
var elemName = document.getElementById('my-elem-name');
elemName.innerHTML = 'Twiddles';
elem.addEventListener('click', function(){
  numClicks++;
  document.getElementById('num-clicks').innerHTML = numClicks;
}, false);

var numClicks2=0;
var elemName2 = document.getElementById('my-elem-name2');
elemName2.innerHTML = 'Booper';
var elem2 = document.getElementById('my-elem2');
elem2.addEventListener('click', function(){
  numClicks2++;
  document.getElementById('num-clicks2').innerHTML = numClicks2;
}, false);