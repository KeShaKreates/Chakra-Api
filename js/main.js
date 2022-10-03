document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const name = document.querySelector('input').value
    try{
        const response = await fetch(`https://chakras-api.herokuapp.com/api/${name}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.aka
    }catch(error){
        console.log(error)
    }
}