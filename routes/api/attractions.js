var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');

router.get('/api/activities', function(req,res){

    Activity.findAll({
        include: [Place]
    })
    .then(function(activity){
    	res.send(activity);
    })

})

router.get('/api/hotels', function(req,res){

	Hotel.findAll({
        include: [Place]
    })
    .then(function(hotels){
    	res.send(hotels);
    })

	
})



router.get('/api/restaurants', function(req,res){

    Restaurant.findAll({
        include: [Place]
    })
    .then(function(restaurant){
    	res.send(restaurant);
    })
	
})

module.exports = router;












	