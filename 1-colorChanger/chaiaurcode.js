const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll('body');

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',()=>{
        console.log(e.target);
        switch(val){
            case 'grey':
                body.style.backgroundColor = val;
            case 'white':
                body.style.backgroundColor = val;
            case 'blue':
                body.style.backgroundColor = val;
            case 'yellow':
                body.style.backgroundColor = val;
        }
    })
})