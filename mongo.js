/*const mongoose = require('mongoose')

if (process.argv.length < 3 ) {
    console.log('give pass')
    process.exit(1)
}

const password = process.argv[2]

const mongoUrl = `mongodb+srv://fullstackPhonebook:${password}@cluster0.spc5a.mongodb.net/Phonebook?retryWrites=true&w=majority`
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)
if (process.argv.length === 3){
    Person.find({}).then(result => {
        console.log("Phonebook:")
        result.forEach(person => {
        console.log(person.name, " ", person.number)
        })
        mongoose.connection.close()
    })
}
 else if(process.argv.length === 5){
        const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
        })
        person.save().then(response => {
        console.log(` ${process.argv[3]} was added to the phonebook`)
        mongoose.connection.close()
        })
        }

        */