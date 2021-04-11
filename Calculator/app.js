const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

for(let btn of buttons){
    btn.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        
        if (buttonText === 'x'){
            input.value += '*';
        }
        else if (buttonText === 'C'){
            input.value = "";
        }
        else if (buttonText === '='){

            try{
                input.value = eval(input.value);
            }catch (e){
                input.value = "Invalid Input. Try Again";
            }
        }
        else{
            input.value += buttonText;
        }

    })
}