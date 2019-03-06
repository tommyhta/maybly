var controller = require('./controller')
var path = require('path')

module.exports = function(app){
    app.get('/template', function(request, response){
        controller.getAlls(request, response);
    })
    app.post('/template', function(request, response){
        controller.createTemplate(request, response);
    })
    app.get('/template/:id', function(request, response){
        controller.getTemplate(request, response);
    })
    app.put('/template/:id', function(request, response){
        controller.editTemplate(request, response);
    })
    app.delete('/template/:id', function(request, response){
        controller.deleteTemplate(request, response)
    })
    app.get('/options', function(request, response){
        controller.getOptions(request, response)
    })
    app.post('/template/:id/option', function(request, response){
        controller.createOption(request, response)
    })
    app.delete('/template/:id/option/:oid', function(request, response){
        controller.deleteOption(request, response)
    })
    
    app.use('/yelpapi', function(request, response){
        controller.callYelp(request, response)
    })

    app.all("*", (request, response, next)=>{
        response.sendFile(path.resolve(__dirname+ "../../public/dist/public/index.html"))
    })
}