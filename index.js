
let data = [
  {
  photo: './images/BlueSpace.jpg',
  title: 'Blue Space',
  description: 'Blue Space is really blue.He has blue stars'
},
{
  photo: './images/ExploStar.jpg',
  title: 'Explosive Space',
  description: 'This is fucking explsoive space BOOOM Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text'
},
{
  photo: './images/PurpleSpace.jpg',
  title: 'Purple Space',
  description: 'Nice purple space which is so nice like a slice and dice.Akskdk odod ppp ieruen kmxlksdf skndfk weriwie.'
},
{
  photo: './images/SpaceGalaxy.jpg',
  title: 'Space Galaxy',
  description: 'I think this is orange Galexy.But honestly i am not sure.Blasfl adsfk sdfkjwef4 mdnr  kdsksdfksdf k sdfl slsd. A sksks kdkdd oetiyjw . '
},
{
  photo: './images/SpaceNebula.jpg',
  title: 'Space Nebula',
  description: 'Some text for Nebula SpaceSome text Some text Some text Some text Some text'
},
{
  photo: './images/SpaceSky.jpg',
  title: 'Space Sky',
  description: 'Some text Some text Some text Some text Some text Some text Some text Some text Some text '
},
{
  photo: './images/SpaceUniverse.jpg',
  title: 'Space Universe',
  description: 'Some text Some text Some text Some text Some text'
}
];


let lvphoto = 0;
let arraysize = 0;
arraysize = (data.length) - 1;


//load prvej fotky
$('#photo').attr('src', data[0].photo);
$('#photo-title').text( data[0].title);
$('#photo-description').text(data[0].description);
//

//pravy button
$('.right').click(() => {
  if (lvphoto === arraysize ){
    lvphoto = 0;
    loadPhoto(lvphoto);
  }
  else
  {
  lvphoto++;
  loadPhoto(lvphoto);
};
})
//
//lavy button
$('.left').click(() => {
  if (lvphoto === 0)
  {
    lvphoto = arraysize;
    loadPhoto(lvphoto);
  }
  else
  {
  lvphoto--;
  loadPhoto(lvphoto);
};
})
//

//nacitanie fotiek po kliknuti
let loadPhoto = (cislobrazka) =>{
  $('#photo').attr('src', data[cislobrazka].photo);
$('#photo-title').text( data[cislobrazka].title);
$('#photo-description').text( data[cislobrazka].description);
}

// Tvorba thumbnailov
data.forEach(element =>{
    let lvindex = 0;
    lvindex = $(data).index(element);
    $(".thumbnail").append('<div class="td'+lvindex+'"><img src="' + element.photo + '"id="'+lvindex+'" class=thimg><div class=th'+lvindex+'>"'+element.title+'"</div></div>');

}  );
//


//  Kliknutie na thumbnail
$('.thumbnail').click((event) => {
  loadPhoto($(event.target).attr('id'));

})
//
