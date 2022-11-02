const diceBtn = document.querySelector('[data-dice]')
const quote = document.querySelector('[data-quote]')
const quoteid = document.querySelector('[data-id]')

const getAdvice = async ()=> {
    let resp = await fetch('https://api.adviceslip.com/advice')
    
    let data = await resp.json();
    return data.slip
}
diceBtn.addEventListener('click' , async ()=>{
    let slip = await getAdvice();
    let {id , advice} = slip;
   quoteid.innerText = `#${id}`;
   quote.innerText = advice;
})