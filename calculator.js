let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map( buttons =>{
    buttons.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText=  '';
                break;
            case '←':
                if(display.innerText){
                display.innerText= display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                display.innerText = eval(display.innerText);
                }catch {
                    display.innerText = 'Buir asbe bokachoda';
                }

                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});