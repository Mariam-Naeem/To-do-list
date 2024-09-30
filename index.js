let input = document.getElementById('input');
 let button = document.getElementById('button');
  let list1 = document.getElementById('list');
  
    displayd();
    function addElement() { if (input.value == '') {
         alert('please enter text'); }
          else { let lis = document.createElement('li');
             lis.innerHTML = input.value; 
             list1.appendChild(lis);
              let span = document.createElement('span'); 
              span.innerHTML = 'x';
               lis.appendChild(span); }
                input.value = ''; SaveLocal(); }
                 list1.addEventListener('click', function(e) { if (e.target.tagName === 'LI')
                     { e.target.classList.toggle('active'); SaveLocal(); } 
                     else if (e.target.tagName === 'SPAN') { e.target.parentElement.remove(); SaveLocal(); } }, false); function SaveLocal() { localStorage.setItem('data', list1.innerHTML); }
     function displayd() {
        
         list1.innerHTML = localStorage.getItem('data'); }