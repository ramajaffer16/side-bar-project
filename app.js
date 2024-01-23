const btns = document.querySelectorAll('button');
const sidebar = document.querySelector('aside');

// btns.forEach(function(btn){
//   btn.addEventListener('click',function(e){
//     if(sidebar.classList.contains('show-sidebar')){
//       sidebar.classList.remove('show-sidebar');
//     }else if (!sidebar.classList.contains('show-sidebar')){
//       sidebar.classList.add('show-sidebar');
//     }
//   })
// })

btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    sidebar.classList.toggle('show-sidebar')
  })
})