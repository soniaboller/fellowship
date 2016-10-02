console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['Rivendell','The Shire', 'Mordor'];
var body = document.body;
var section = '<section></section>';


$(document).ready(function(){
console.log('document ready');

  function makeMiddleEarth() {
    $(body).html(section);
    $('section').prop('id', 'middle-earth');
    for (var place in lands) {
      var index = parseInt(place);
      var article = $('<article>');
      $('section').append(article);
      var h1 = $('<h1>');
      $(article).append(h1);
      $(h1).text(lands[index]);
    }
    $(body).append(section);

    // $.each(lands, function(index) {
    //   console.log(index);
    // });
  }
  makeMiddleEarth();

  function makeHobbits(){
    // display an `unordered list` of hobbits in the shire
    // (which is the second article tag on the page)
    // give each hobbit a class of `hobbit`
    for (var hobbit in hobbits){
      var list = $('<ul>');
      var index = parseInt(hobbit);
      $('article:nth-child(2)').append(list);
      $(list).text(hobbits[index]);
      $(list).addClass('hobbit');
    }
  }
  makeHobbits();

  function keepItSecretKeepItSafe(){
    var div = $('<div>');
    $('ul:first').append(div); //first works?
    $(div).prop('id','the-ring');
    $(div).addClass('magic-imbued-jewelry');


  // create a div with an id of `'the-ring'`
    // give the div a class of `'magic-imbued-jewelry'`
    // add the ring as a child of `Frodo`
  }
  keepItSecretKeepItSafe();

  function makeBuddies() {
    var sidebar = $('<aside>');
    $('article:first').append(sidebar);
    for (var buddy in buddies) {
      var list = $('<ul>');
      var index = parseInt(buddy);
      $(list).text(buddies[index]);
      $(sidebar).append(list);
    }
  }
  // create an `aside` tag
  // attach an `unordered list` of the `'buddies'` in the aside
  // insert your aside as a child element of `rivendell`
  makeBuddies();

  function beautifulStranger() {
    $('aside ul:nth-child(4)').text("Aragorn");
    // change the `'Strider'` text to `'Aragorn'`
  }
  beautifulStranger();

  function leaveTheShire() {
    $('.hobbit').appendTo('article:first');
    // assemble the `hobbits` and move them to `rivendell`
  }
  leaveTheShire();

  function forgeTheFellowship() {
    var div = $('<div>');
    $('article:first').append(div);
    $(div).text('the-fellowship');
    $(div).prop('id', 'the-fellowship');
    $('ul').each(function(){
      $(this).appendTo('#the-fellowship');
      console.log($(this).text() + ' has joined the fellowship');
    });

       // $('ul').appendTo('#the-fellowship');
    // create a new div called `'the-fellowship'` within `rivendell`
    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
    // after each character is added make an console.log that they // have joined your party
  }

  forgeTheFellowship();

  function theBalrog() {
    var gandalf = $('ul:first-child');
    $(gandalf).text('Gandalf the White');
    $(gandalf).css('background', '#fff');
    $(gandalf).css('border', 'solid #d3d3d3 1px');

  }

  theBalrog();

  function hornOfGondor() {
    console.log('the horn of gondor has been blown!');
    $('ul:nth-child(5)').remove();
  }

  hornOfGondor();

  function itsDangerousToGoAlone() {
    $('ul:nth-child(5)').appendTo('article:nth-child(3)');
    $('ul:nth-child(5)').appendTo('article:nth-child(3)');
    var div = $('<div>');
    var articleThree = $('article')[2];
    $(articleThree).append(div);
    var child = $(articleThree).children('div');
    $(child).prop('id', 'mount-doom');
    console.log(child);
    // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
    // add a div with an id of `'mount-doom'` to `Mordor`
  }

  itsDangerousToGoAlone();

  function weWantsIt() {
    var div = $('<div>');
    $('article:nth-child(3)').append(div);
    var articleThree = $('article')[2];
    var gollum = $(articleThree).children('div')[1];
    $(gollum).prop('id','gollum');
    $('#gollum').appendTo('#mount-doom');

  }

  weWantsIt();

  function thereAndBackAgain() {
    // remove `Gollum` and `the Ring` from the document
    // Move all the `hobbits` back to `the shire`
    $('#gollum').remove();
    $('#the-ring').remove();
    var articleTwo = $('article')[1];
    $('.hobbit').appendTo(articleTwo);

  }

  thereAndBackAgain();
});
