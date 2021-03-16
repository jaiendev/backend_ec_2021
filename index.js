const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
var students = ['trung', 'hung']
app.use(express.json())
mongoose.connect('mongodb+srv://trungdang123:trungdeptrai123@cluster0.f3exi.mongodb.net/trung?retryWrites=true&w=majority', {
    
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser:true,
    
}).then(async () => {
    console.log('trung database connection created')
})
app.get('/get-student', (require, response) => {
    response.status(200).send(students)
})

app.post('/add-student', (require, response) => {
    students.push(require.body.username)
    response.status(200).send(students)
})

app.put('/edit-student', (require, response) => {
    
    students.forEach((e, i) => {
        e == require.body.oldname? students[i]=require.body.newname:0
    })
    response.status(200).send(students)
})
app.delete('/del-student', (require, response) =>{
    students.forEach((e,i)=> e==require.body.username ? students.splice(i,1):0)
    response.status(200).send(students)
})
app.listen(3000,() => console.log('Server run on port 3000'))
