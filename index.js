document.addEventListener('DOMContentLoaded',()=>{
    const root = document.querySelector('#app')
    const result = greetings({username: 'John Deer'})
    root.innerHTML = result
})