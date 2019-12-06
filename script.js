/**Creating an array of images with image details */
const thumb =[
    {'url': './images/baby1.jpeg',  'tname': 'Slipping Baby', 'alt':'Baby Image' },
    {'url': './images/baby2.jpeg',  'tname': 'Laughing Baby On Carpet', 'alt':'Baby Image'},
    {'url': './images/baby3.jpeg', 'tname': 'Baby With Teddy', 'alt':'Baby Image'},
    {'url': './images/baby4.jpeg',  'tname': 'Baby Looking at Sky', 'alt':'Baby Image' },
    {'url': './images/baby5.jpeg',  'tname': 'Baby Smiling', 'alt':'Baby Image' },
    {'url': './images/baby6.jpeg', 'tname': 'Baby Siting Outside', 'alt':'Baby Image' },
    {'url': './images/baby7.jpeg',  'tname': 'Baby Eating', 'alt':'Baby Image' },
    {'url': './images/baby8.jpeg',  'tname': 'Baby Talking on Phone', 'alt':'Baby Image' },
    {'url': './images/baby9.jpeg',  'tname': 'Baby Eating Birhthday Cake', 'alt':'Baby Image' },
    {'url': './images/baby10.jpeg',  'tname': 'Baby Playing with Flower', 'alt':'Baby Image' },
    {'url': './images/baby11.jpeg', 'tname': 'Baby With Mommy', 'alt':'Baby Image' },
    {'url': './images/baby12.jpeg', 'tname': 'Baby In Senta Dress', 'alt':'Baby Image' },
    {'url': './images/baby13.jpeg',  'tname': 'Baby Reading Book', 'alt':'Baby Image' },
    {'url': './images/baby14.jpeg', 'tname': 'Baby With Sister', 'alt':'Baby Image' },
    {'url': './images/baby15.jpeg', 'tname': 'Baby Laughing', 'alt':'Baby Image' },
    {'url': './images/baby16.jpeg', 'tname': 'Baby Laughing', 'alt':'Baby Image' }]
      

const $data = []  /**defining array of images */
/**Pushing HTML code in Javascriptfor all images with the help of for loop */
for (let image = 0; image < thumb.length; image++) {
    $data.push(`<div class="photo" id="${image}" name="${thumb[image].tname}" ></div>`)
}
const $sectionsgrid = document.querySelector('.sectionsgrid') /** Retrival of grid section area */
/**Joining grid array using join \n */
  $sectionsgrid.innerHTML += $data.join('\n')
/** Styling thumbnail for all images in array using for loop */
for (let image = 0; image < thumb.length; image++) {
    const $data1 = document.getElementById(`${image}`)
    /** Styling of javascript variable taken reference from https://www.w3schools.com/js/js_htmldom_css.asp 
     * & https://www.freecodecamp.org/news/master-the-art-of-looping-in-javascript-with-these-incredible-tricks-a5da1aa1d6c5/
*/ 
    $data1.style.backgroundImage = `url(${thumb[image].url})`    /** Styling the photo */
    $data1.style.backgroundSize = 'cover' 
    $data1.style.backgroundRepeat ='norepet' 
    $data1.style.backgroundColor='transparent'
  }
  
  const $thumbnail = document.querySelector('.thumbnail')
  const $photos = document.querySelectorAll('.photo')
const $thumbnailname = document.querySelector('.thumbnailname')
const $picture = document.querySelector('.picture')



for (const $photo of $photos) {

$photo.addEventListener('click', function (e) {
  const selectedImage = thumb[e.target.id]
  $thumbnail.style.display = 'block'
  $picture.src = selectedImage.url
  $thumbnailname.textContent = selectedImage.tname
 
})
}
  /**Taken Reference from W3 School */
$thumbnail.addEventListener('click', function (e) {
  $thumbnail.style.display = 'none'
})


$thumbnail.addEventListener('keypress', function (e) {
  if (e.key === 'Escape') {
    $thumbnail.style.display = 'none'
  }
  
})

$sectionsgrid.classList.add('animated', 'zoomIn')


$thumbnail.addEventListener('mouseover',function(e){
  $photo.style.opacity = 'red'
})







