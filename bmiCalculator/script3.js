const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const msg = document.querySelector('#msg')
if(height < 0 || height > 250 || height == '' || isNaN(height)){
   result.innerHTML = "Please give a valid height"; 
}
if(weight < 0 || weight > 250 || weight == '' || isNaN(weight)){
   result.innerHTML = "Please give a valid weight"; 
}
else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi < 18.6){
        msg.innerHTML = "You are under weight";
        result.innerHTML = `<span>${bmi}</span>`;
    }
    else if(bmi > 24.9){
        msg.innerHTML = "You are over weight";
        result.innerHTML = `<span>${bmi}</span>`;
    }
    else {
        msg.innerHTML = "Your weight is normal";
        result.innerHTML = `<span>${bmi}</span>`;
    }
    
}
});