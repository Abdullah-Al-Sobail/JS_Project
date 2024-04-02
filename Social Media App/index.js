let form=document.getElementById('form');
let postText=document.getElementById('postText');
let warning=document.getElementById('warning');
let posts=document.getElementById('posts');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('button clicked');
    formValidation();
});

let formValidation=()=>{
    if(postText.value===''){
        warning.innerHTML=`Post can't be blank`;
        console.log('failed');
    }else{
        console.log('Successful');
        warning.innerHTML='';
    }

};