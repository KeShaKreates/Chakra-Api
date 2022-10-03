const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000

app.use(cors())

const chakras = {
   'root chakra':{
    'aka': 'Muladhara',
    'focus': 'Focuses on our foundation and stability',
    'location': 'Located at the base of spine',
},
'sacral chakra':{
    'aka': 'Swadhisthana',
    'focus': 'Focuses on our creative and sexual energy',
    'location': 'Located at the lower abdomen',

},
'solar plexus chakra':{
    'aka': 'Manipura',
    'focus': 'Focuses on our confidence levels',
    'location': 'Located at the upper abdomen',
},
'heart chakra':{
    'aka': 'Anahata',
    'focus': 'Focuses on our ability to give and receive love unconditionally',
    'location': 'Located at center of chest',
},
'throat chakra':{
    'aka': 'Vishuddha',
    'focus': 'Focuses on our ability to communicate<',
    'location': 'Located at the throat',
},
'third-eye chakra':{
    'aka': 'Ajna',
    'focus': 'Focuses on our connection to our intiution',
    'location': 'Located between the eyes',
},
'crown chakra':{
    'aka': 'Sahasrara',
    'focus': 'Focuses on our ability to be connect spiritually',
    'location': 'Located at the top of the head',
},
'unknown':{
    'aka': 'unknown',
    'focus': 'unknown',
    'location': 'unknown',
},
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:chakraName', (request, response)=>{
    const chakrasName = request.params.chakraName.toLowerCase()
    if(chakras[chakrasName]){
        response.json(chakras[chakrasName])
    }else{
        response.json(chakras['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})