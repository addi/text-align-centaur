var centaur_org = '   x|  xxx|  xxx|  xxx|  xxx|  xxx|  xxx|xxxxxxx      xxxxx|  xxx       xxxxxxx       xxx|  xxx       xxxxxxx       xxx|  xxx       xxxxxxx       xxx|  xxx         xxx         xxx|  xxxx       xxxxx       xxxx|    xxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|          xxxxxxxxxxxxxx              xxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxx|          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxx|           xxxxxxxx                 xxxxxxxxxxxxx     xxxx|            xxxxxx                    xxxxxxxx       xxxx|             xxxx                      xxxxxx        xxx|            xxxx                       xxxxx         xx|           xxxx                       xxxxx          xx|            xxxx                       xxxxx         x|            xxxx                       xxxxx|             xxxx                      xxxx|             xxxx                      xxxx|            xxxxxx                    xxxxxx|            xxxxxx                    xxxxxx';
var centaur_flip = '';

var lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, leo non varius cursus, sapien nulla fermentum nisl, sit amet faucibus lorem ligula a lorem. Vestibulum scelerisque sem tortor. Nulla dignissim mattis mattis. Proin tincidunt sapien non purus sagittis iaculis ac non urna. Cras sodales dapibus diam, at auctor neque cursus mattis. Vestibulum nec porta urna. Suspendisse eros erat, pulvinar vel facilisis id, gravida vel sapien. Donec aliquam ante sed leo egestas varius. Fusce imperdiet nulla lacinia massa feugiat a commodo justo ullamcorper. Aliquam tincidunt consequat ornare. Vestibulum tristique suscipit nibh eu dignissim. Donec nec elit elit, sit amet pellentesque dolor. Aenean volutpat odio vel turpis posuere eu feugiato.';

var flip = false;

document.addEventListener("DOMContentLoaded", function() {
  var qs = function(sel) { return document.querySelector(sel); };
  var textarea = qs("textarea");
  var message = qs("#message");
  textarea.innerHTML = lipsum;

  centaur_lines = centaur_org.split('|');

  var maxLenth = 0;

  for (var ls =  0; ls < centaur_lines.length; ls++)
  {
    if(centaur_lines[ls].length > maxLenth)
      maxLenth = centaur_lines[ls].length;
  }

  for (var l =  0; l < centaur_lines.length; l++)
  {		
    for (var s = centaur_lines[l].length; s < maxLenth; s++)
      centaur_lines[l] += " ";

	centaur_lines[l] = centaur_lines[l].split('').reverse().join('');
  }

  centaur_flip = centaur_lines.join('|')

  qs("input[type=submit]").addEventListener("click", function() {
	
	var centaur = '';
	
	if(flip)
	{
		centaur = centaur_flip;
		flip = false;
	}
	else
	{
		centaur = centaur_org;
		flip = true;
	}
	
    var text = textarea.value.replace(/[^a-zA-Z0-9]/g, '');
    var centaured_text = [];
    if(text.length >= centaur.replace(/[^a-zA-Z0-9]/g, '').length) {
      text = text.split('').reverse();
      for (var i =  0; i < centaur.length; i++) {
        var c = centaur[i];
        if (c === '|') {
          centaured_text.push('\n');
        } else if (c === ' ') {
          centaured_text.push(c);
        } else {
          centaured_text.push(text.pop());
        }
      }
  	 textarea.value = centaured_text.join('') + text.join('');
    } else {
      message.innerHTML = "Cannot Centaur Text: Needs More Letters";
    }
  }, false);
}, false);
