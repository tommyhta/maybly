var mongoose = require('mongoose')
var Template = mongoose.model('Template')
var Option = mongoose.model('Option')
var Request = require('request')

module.exports = {
    getAlls : function(request, response){
        Template.find({}, function(error, data){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Data: data})
            }
        })
    },
    createTemplate : function(request, response){
        Template.findOne({name: request.body.name}, function(error, data){
            if(data){
                response.json({ServerMessage: "Error", Error: "Please use a different name"})
            }else{
                Template.create(request.body, function(error, data){
                    if(error){
                        response.json({ServerMessage: "Error", Error: error})
                    }else{
                        response.json({ServerMessage: "Success", Data: data})
                    }
                })
            }
        })
    },
    getTemplate : function(request, response){
        Template.findOne({_id: request.params.id}, function(error, data){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Data: data})
            }
        })
    },
    editTemplate : function(request, response){
        Template.findOneAndUpdate({_id: request.params.id}, {$push: request.body}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success"})
            }
        })
    },
    deleteTemplate: function(request, response){
        Template.findOneAndRemove({_id: request.params.id}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success"})
            }
        })
    },
    createOption : function(request, response){
        Option.create(request.body, function(error, option){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                Template.findOneAndUpdate({_id: request.params.id}, {$push: {options: option}}, function(error, data){
                    if(error){
                        response.json({ServerMessage: "Error", Error: error})
                    }else{
                        response.json({ServerMessage: "Success", Data: data})
                    }
                })
            }
        })
    },
    deleteComment : function(request, response){
        Template.findOneAndUpdate({_id: request.params.id}, {$pull: {options:{_id:request.params.oid}}}, function(error, item){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Data: data})
            }
        })
    },
    getOptions : function(request, response){
        Option.find({}, function(error, data){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Data: data})
            }
        })
    },
    callYelp : function(request, response){
        Request({url: 'https://api.yelp.com/v3/businesses/search?limit=50&term='+request.body.term+'&categories='+request.body.category+'&location='+request.body.location,
                headers: {'Authorization':'Bearer ixjZP6yLv3VcJlEIiFPUfohCQDBPxwkeS81cDfIBr6__2WLSIvhrbMyievW3Y5FLop69SDx88xVFF_V4gwrRbOU8FHjFSSqA4kKTU-2SEh008BAoLaDGRseL3q5zW3Yx'}
        }, function(error, data, body){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                var info = JSON.parse(body);
                response.json({ServerMessage: "Success" ,Data:info['businesses']})
            }
        })
    }
}