var text = $('#flashcont').text();
var countmax;
var c = 0;

function flash(){
  split = text.split(" ");
  countmax = split.length;
    if(c % 2 === 0){
      $('body').css('background-color', 'white')
      $('body').css('color', '#e5509a')
    } else {
        $('body').css('background-color', '#e5509a')
        $('body').css('color', 'white')
    }
  $("#flashit").text(split[c]);

  c = c + 1;
  if (c > countmax)
    c = 0
  setTimeout("flash()", 230);
}

flash();