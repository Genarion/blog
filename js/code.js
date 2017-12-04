{
  let loginNode = document.getElementById('login');
  let loginFormNode = document.getElementsByClassName('login')[0];
  let closeLoginNode = document.getElementById('closeLogin');

  loginNode.addEventListener('click', ()=>{
    loginFormNode.style.display = 'block';
  }, false);

  closeLoginNode.addEventListener('click', ()=>{
    loginFormNode.style.display = 'none';
  }, false);
}
