document.addEventListener('DOMContentLoaded',()=>{
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const counter = document.getElementById('counter');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const commentForm  = document.getElementById('comment-form');
    let counterInterval = 0;
    
    const countingFunction = function(){
    counterInterval=setInterval(counterFunction,1000)} 
    countingFunction();
    minusButton.addEventListener('click',minusFunction);
    plusButton.addEventListener('click',plusFunction);
    likeButton.addEventListener('click',likingFunction);
    pauseButton.addEventListener('click',pauseFunction);
    commentForm.addEventListener('submit',addCommentFunction);

    //Auntomatic increment
    function  counterFunction(){
    let value = parseInt(counter.textContent)   //Take the currentValue of the counter and converts to int and adds one
    counter.textContent = value + 1; 
    }
    //Minus on click
    function  minusFunction(){
      let value = parseInt(counter.textContent);
      counter.textContent = value-1;
    }
    
    //Add on click
    function plusFunction(){
        let value = parseInt(counter.textContent);
        counter.textContent = value +1
    }
    
    //Like on click
    function  likingFunction(){
     let value = counter.textContent
     let newLike = document.createElement(['li']);
     newLike.appendChild(document.createTextNode(`${value} has been Liked.`))
     document.getElementsByClassName('likes')[0].appendChild(newLike);
    }
        
    //pause on click
    function pauseFunction(event){
     clearInterval(counterInterval);
     event.target.textContent = 'Resume';
     event.target.classList.add('resumed');
     likeButton.disabled = true;
     plusButton.disabled = true;
     minusButton.disabled = true;
     document.getElementsByClassName("resumed")[0].addEventListener('click',resumeCounter)
    }

    function addCommentFunction(event){
    event.preventDefault();
    const newComment = document.createElement('p');
    newComment.textContent=(document.querySelector('#comment-input').value);
    document.querySelector('#list').appendChild(newComment)
    }     

    function resumeCounter(event){
    countingFunction();
    likeButton.disabled = false;
    plusButton.disabled = false;
    minusButton.disabled = false;
    event.target.classList.remove('resumed');
    event.target.textContent = 'pause';
    }
}); 


