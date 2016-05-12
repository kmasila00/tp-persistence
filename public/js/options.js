var hotels, restaurants, activities;

$(function(){

	$.ajax({
		method: 'GET',
		url: '/api/hotels'
	})
	.then(function(hotels){
		hotels = hotels;
		hotels.forEach(function(hotel){
			$('#hotel-choices').append('<option data-type="hotel">' + hotel.name + '</option>')
		});
	})

	$.ajax({
		method: 'GET',
		url: '/api/restaurants'
	})
	.then(function(restaurants){
		restaurants = restaurants;
		restaurants.forEach(function(restaurant){
			$('#restaurant-choices').append('<option data-type="restaurant">' + restaurant.name + '</option>')
		});
	})

	$.ajax({
		method: 'GET',
		url: '/api/activities'
	})
	.then(function(activities){
		activities = activities;
		activities.forEach(function(activity){
			$('#activity-choices').append('<option data-type="activity">' + activity.name + '</option>')
		});
	})

})