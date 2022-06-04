// JavaScript Document

// Get all the images
image_array = [
	'img4.jpg',
	'img4.jpg',
	'gif2.gif',
	'gif3.gif'
]


function get_random_image(){
 // Get a random index

 random_index = Math.floor(Math.random() * image_array.length);

 // Get an image at the random_index
 selected_image = image_array[random_index]
 	
 // display	the image
document.getElementById('image_shower').src = `./resoursers/images/${selected_image}`
}
