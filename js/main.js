document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const chakraName = document.querySelector('input').value
    try{
        const response = await fetch(`api/${chakraName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.aka
    }catch(error){
        console.log(error)
    }
}