const express = require( "express");
const router = express.Router();
const mongoose = require( "mongoose");
const schema = mongoose.Schema;


const schematickets = new schema({
    email: String,
    product:String,
    description: String,
    idticket: String,
    date: Date,
    staffComments:String,
    staff: String,
    updated: Date,
    status: String
})

const ticketsmodel = mongoose.model('tickets', schematickets)
module.exports = router

router.get('/getTickets', (req, res)=>{
    ticketsmodel.find({},function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }

    })
})

router.post('/getTicketData', (req, res)=>{
    ticketsmodel.find({idticket:req.body.idticket},function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }

    })
})

router.post('/editTicketData', (req, res)=>{

    
    ticketsmodel.findOneAndUpdate({idticket:req.body.idTicket}, {
        email:  req.body.ticketEmail,
        description: req.body.description,
        product: req.body.product,
        status: req.body.status,
        staffComments:req.body.staffComments,
        staff: req.body.staff,
        updated: new Date,
    },(err) => {

        if(!err){
            res.send('Ticket Updated') 
        }else{
            res.send(err)
        }

    })

})

router.post('/addTicket', (req, res)=>{

    
    const newTicket = new ticketsmodel({
        email:  req.body.ticketEmail,
        description: req.body.description,
        product: req.body.product,
        idticket: req.body.idTicket,
        date: new Date,
        staffComments:'',
        staff: '',
        updated: '',
        status: ''
    })

    newTicket.save(function(err){
        if(!err){
            res.send('Ticket Sent') 
        }else{
            res.send(err)
        }
    })

})