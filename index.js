
let data = [
  {
  photo: './images/BlueSpace.jpg',
  title: 'Blue Space',
  description: 'Blue Space is really blue.He has blue stars'
},
{
  photo: './images/ExploStar.jpg',
  title: 'Explosive Space',
  description: 'This is fucking explsoive space BOOOM'
},
{
  photo: './images/PurpleSpace.jpg',
  title: 'Purple Space',
  description: 'Nice purple space which is so nice like a slice and dice'
},
{
  photo: './images/SpaceGalaxy.jpg',
  title: 'Space Galaxy',
  description: 'I think this is orange Galexy.But honestly i am not sure'
},
{
  photo: './images/SpaceNebula.jpg',
  title: 'Space Nebula',
  description: 'Some text for Nebula Space'
},
{
  photo: './images/SpaceSky.jpg',
  title: 'Space Sky',
  description: 'Some text Some text Some text Some text '
},
{
  photo: './images/SpaceUniverse.jpg',
  title: 'Space Universe',
  description: 'Some text Some text Some text Some text Some text'
}
];


let lvphoto = 0;


$('#photo').attr('src', data[0].photo);
$('#photo-title').text( data[0].title);
$('#photo-description').text(data[0].description);


$('.right').click(() => {
  if (lvphoto === 6 ){
    lvphoto = 0;
    loadPhoto(lvphoto);
  }
  else
  {
  lvphoto++;
  loadPhoto(lvphoto);
  console.log(lvphoto);
};
})

$('.left').click(() => {
  if (lvphoto === 0)
  {
    lvphoto = 6;
    loadPhoto(lvphoto);
  }
  else
  {
  lvphoto--;
  loadPhoto(lvphoto);
  console.log(lvphoto);
};
})


let loadPhoto = (cislobrazka) =>{
  $('#photo').attr('src', data[cislobrazka].photo);
$('#photo-title').text( data[cislobrazka].title);
$('#photo-description').text( data[cislobrazka].description);
}


data.forEach(element =>{
    let lvindex = 0;
    lvindex = $(data).index(element);
    console.log(lvindex);
   $("#thumbnail").append('<img src="' + element.photo + '"id="'+lvindex+'" class=thimg>');
}  );

$('.thumbnail').click((event) => {
  loadPhoto($(event.target).attr('id'));

})
