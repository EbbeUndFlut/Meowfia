import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 8989
app.use(cors())
app.use(express.json()) // Welcher contenttype muss gesetzt sein damit der body geparsed wird: application/json

let nextId = 1
app.get('/api/members', (req, res) => {
    res.sendStatus(200)
})

app.post('/api/members', (req, res) => {
    const cat = req.body
    cat.id = Date.now()
    cat.avatarUrl = `https://robohash.org/${cat.name}.png?set=set4`
    console.log(cat)
    res.sendStatus(201)
})

//https://robohash.org/christ.png?set=set4
//  Domain              /name_der_Katze.png?set=set4  set4 ist für katzen
//  {
//     "id": 2,
//     "name": "Miaufioso",
//     "rank": "Capo",
//     "specialty": "Informationsbeschaffung",
//     "avatarUrl": "https://api.dicebear.com/10.x/sprouts/svg?seed=Miaufioso",
//     "status": "active"
//   }
app.listen(PORT, () => console.log(`Die Meowfia schnurrt auf Port: ${PORT}`))