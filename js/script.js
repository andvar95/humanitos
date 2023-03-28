let preveiwContainer = document.querySelector('.services-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.services-container .services').forEach(services =>{
  services.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = services.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});