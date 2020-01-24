let comments = [];
let flag = false;
/*loadComments();*/ 

document.getElementById('comment-add').onclick = function(){
    event.preventDefault()

    document.getElementById("comment-field").style.display = "block";
    
    let commentBody = document.getElementById('comment-body');

    let comment = {
       
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }

    
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();

}
document.onkeydown = function(event) {
    if (event.code == 'ControlRight') flag = true;
    if (event.code == 'Enter' && flag) {
        flag = false;
    document.getElementById("comment-field").style.display = "block";

    let commentBody = document.getElementById('comment-body');

    let comment = {
       
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }

    
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();

}}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}
/*
function loadComments(){
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
} сохранять историю комментариев при обновление */

function showComments(){
    let commentField = document.getElementById('comment-field');
    let out ='';
    comments.forEach(function(item){
      out += `<p class="text-left">${timeConverter(item.type)}</p>`;
      out += `<p class="alert">${item.body}</p>`;  
    });
    commentField.innerHTML = out;
}

function timeConverter(){
    var a = new Date();
    var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var year = a.getFullYear();
    var months = months[a.getMonth()];
    var date = a.getDate();
   /*
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();*/
    var time = date + ' ' +months +' '+ year ;
    return time;
}