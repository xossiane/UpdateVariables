import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
    <p> Hello :)
    </p>
  </div>
`
const inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
  console.log(this.value)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));


