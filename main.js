//tabs
var i, tabContent, tabLinks;
tabContent = document.getElementsByClassName('tab-content');
tabLinks = document.getElementsByClassName('tablink');

function openCity(event, navBar){ 
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(navBar).style.display = "block";
}
document.getElementById("defaultOpen").click();

for(i = 0; i < tabLinks.length; i++){
  tabLinks[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += ' active';
  })
}

//modal
  var modalBtn = document.getElementById('modalBtn');
  var modal = document.getElementById('modal')
  var cancel = document.getElementsByClassName('cancel')[0]

  modalBtn.onclick = function(){
    modal.style.display = 'block'
  }
  cancel.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
     modal.style.display = "none";
    }
  }
//navigation scroll and scroll indicator
  var nav = document.getElementById('nav');
  var icons = document.getElementsByClassName('logo_social')
  window.onscroll = function(){
    if(this.scrollY >= 500 ){
      nav.classList.add('scroll')
    }
    else{
      nav.classList.remove('scroll')
    }
    let windowScroll = document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById('mybar').style.width = scrollAmount + '%';
  }    
