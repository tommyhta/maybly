var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mayBlyTemplates')

var OptionSchema = new mongoose.Schema({
    name: {type: String, required: true},
})

var TemplateSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, default:''},
    options : [OptionSchema]
}, {timestamps:true})

mongoose.model('Option', OptionSchema)
mongoose.model('Template', TemplateSchema)