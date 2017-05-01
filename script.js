var empty
var basketballTeams = ['Toronto   Raptors', 'Chicago   Bulls', 'Dallas   Mavericks', 'Boston   Celtics', 'Cleveland   Cavaliers', 'Los   Angeles   Lakers',
                       'Utah   Jazz', 'Golden   State   Warriors', 'Houston   Rockets', 'Charlotte   Hornets', 'Indiana   Pacers', 'Atlanta   Hawks',
                       'Brooklyn   Nets', 'Denver   Nuggets', 'Detroit   Pistons', 'Los   Angeles   Clippers', 'Memphis   Grizzlies', 'Milwaukee   Bucks',
                       'Minnesota   Timberwolves', 'New   Orleans   Pelicans', 'New   York   Knicks', 'Oklahoma   City   Thunder', 'Orlando   Magic', 'Philadelphia   76ers',
                       'Phoenix   Suns', 'Portland   Trail   Blazers', 'Sacramento   Kings', 'San   Antonio   Spurs', 'Washington  Wizards']
var random
var randomLetters
var lettersLength
var randomLength
var mistakes

window.onload = function() {
  $('.alphabet').css('display', 'none')
  $('#picture1').css('display', 'inline-block')
};

$(function newGame() {
  $('.newGame').on('click', function() {
    empty = [];
    $('.title').html('HANGMAN BASKETBALL TEAMS')
    $('button').removeAttr('disabled', 'disabled')
    $('.photo').css('display', 'none')
    $('#picture1').css('display', 'inline-block')
    random = basketballTeams[Math.floor(Math.random() * 29)];
    mistakes = 1;
    randomLetters = random.split('')
    lettersLength = randomLetters.length
    randomLength = random.length
    document.getElementById(this.id.id)
  $('.letters').html('');
    console.log(random)
    var counter = 0
      for (i=0; i < randomLength; i++) {
        if (randomLetters[i] !== ' ') {
        $('.letters').append('<div class="underlined"><h1 class = individualLetters' + randomLetters[i].toLowerCase() + '>' + randomLetters[0+i] + '</h1></div>')
            $('.individualLetters' + randomLetters[i].toLowerCase()).css({"padding-left" : "10px",
                                                                          "visibility"   : "hidden",
                                                                          "display"      : "inline-block"})
      } else if (randomLetters[i] === ' ') {
        empty.push(randomLetters[i])
          $('.letters').append('<h1 class = individualLetters> a </h1>')
          $('.individualLetters').css({"padding-left" : "10px",
                                      "visibility"   : "hidden",
                                      "display"      : "inline-block"})
        } else {
          console.log('why')
        }
  };
    var counter = 0;
      for (i=0; i < randomLength - 1; i++) {
            $('.alphabet').css('display', 'inline')
      };
  });
});

$(function chooseLetter() {
  mistakes = 1;
  $('.alphabet').on('click', function() {
    console.log(this.id)
  $('#' + this.id).attr('disabled', 'disabled')
    var buttonLetter = (document.getElementById(this.id).id)
    var i = 0
    var found = false;
      for (i=0; i < lettersLength; i++) {
        var letterCapital = (randomLetters[i].toUpperCase());
        if (buttonLetter === letterCapital) {
            empty.push(randomLetters[i])
            console.log(empty)
            found = true
            $('.individualLetters' + randomLetters[i].toLowerCase()).css({'display' : 'inline-block',
                                                                          'visibility' : 'initial',
                                                                          'color' : 'blue'         });
          }
      }
      if (found === false) {
        mistakes += 1
      }
      if (mistakes === 1) {
      $('.photo').css('display', 'none');
      $('#picture1').css({'display' : 'block',
                          'float'   : 'left',
                          'padding' : '30px 0px 0px 20px'})

      } else if (mistakes === 2) {
        $('.photo').css('display', 'none');
        $('#picture2').css({'display' : 'block',
                            'float'   : 'left',
                            'padding' : '30px 0px 0px 20px'})
      } else if (mistakes === 3) {
          $('.photo').css('display', 'none');
          $('#picture3').css({'display' : 'block',
                              'float'   : 'left',
                              'padding' : '30px 0px 0px 20px'})
      }else if (mistakes === 4) {
          $('.photo').css('display', 'none');
          $('#picture4').css({'display' : 'block',
                              'float'   : 'left',
                              'padding' : '30px 0px 0px 20px'})
      }else if (mistakes === 5) {
          $('.photo').css('display', 'none');
          $('#picture5').css({'display' : 'block',
                              'float'   : 'left',
                              'padding' : '30px 0px 0px 20px'})
      }else if (mistakes === 6) {
          $('.photo').css('display', 'none');
          $('#picture6').css({'display' : 'block',
                              'float'   : 'left',
                              'padding' : '30px 0px 0px 20px'})
      }else if (mistakes === 7) {
          $('.photo').css('display', 'none');
          $('#picture7').css({'display' : 'block',
                              'float'   : 'left',
                              'padding' : '30px 0px 0px 20px'})
          $('.title').html('YOU LOST!')
          $('.alphabet').attr('disabled', 'disabled')
      }
      if (empty.length === lettersLength) {
        $('.title').html('YOU WON!')
      }
  });
});
