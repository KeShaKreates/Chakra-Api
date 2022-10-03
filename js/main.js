document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const name = document.querySelector('input').value
    try{
        const response = await fetch(`https://chakras-api.herokuapp.com/api/${name}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('span').innerText = data.aka

        console.log(data)
        document.querySelector('p').innerText = data.focus

        console.log(data)
        document.querySelector('h3').innerText = data.location
    }catch(error){
        console.log(error)
    }
}