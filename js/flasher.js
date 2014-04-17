var text = $('#flashcont').text();
var countmax;
var c = 0;

function flash(){
  split = text.split(" ");
  countmax = split.length;
    if(c % 2 === 0){
      $('body, #back').css('background-color', 'white')
      $('body, #back').css('color', 'purple')
    } else {
        $('body, #back').css('background-color', 'purple')
        $('body, #back').css('color', 'white')
    }
  $("#flashit").text(split[c]);

  c = c + 1;
  if (c > countmax)
    c = 0
  setTimeout("flash()", 300);
}

flash();