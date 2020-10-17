document.getElementById("wd1").innerHTML = 
`<style>
#container1 { margin: 0 !important; padding: 0 !important; height:70%; width: 80% !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important; text-align: center; }
.container1 { position: relative; height: 650px; width:850px ; background-image:url('HPV Prevention.jpg');  background-repeat: no-repeat;  background-position: center; background-size: cover;}
input { display: none; }
p { margin: 0; }
.button { color: white; font-weight: bold; font-size: 20px; background-color: #d32f2f; display: block; padding: 10px 16px; border-radius: 100%; cursor: pointer; animation: fadein .5s; animation: pulse 1.5s infinite; }
.content { background: white; padding: 1rem 1rem 2rem 1rem; text-align: center; display: none; margin: 10%; border-radius: 8px; box-shadow: 0 4px 2px -2px rgba(211,47,47,0); }
.cross { font-weight: bold; }
#b3 { position: absolute; left: 80%; top: 64%; }
#b1 { position: absolute; left: 17%; top: 20%; }
#b2 { position: absolute; left: 80%; top: 22%; }
#b4 { position: absolute; left: 15%; top: 64%; }

#input1:checked ~ #content1,
#input2:checked ~ #content2,
#input3:checked ~ #content3,
#input4:checked ~ #content4,
#input5:checked ~ #content5{ display: block !important; animation: fadein .5s; },
input:checked ~ label .button { display: none !important; animation: fadeout .5s; }
.button:hover { color: #d32f2f; background: white; }
.cta { display: inline-block; background: #5AAC4E; color: white; padding: 12px 24px; margin-top: 48px; border-radius: 24px; text-decoration: none; transition: all .3s ease; }
.cta:hover { text-decoration: underline !important; box-shadow: 0 0 0 6px #5AAC4E; }
@keyframes fadein {
from { opacity: 0; }
to   { opacity: 1; }
}
@keyframes fadeout {
from { opacity: 0; }
to   { opacity: 1; }
}
@keyframes pulse {
from { box-shadow: 0 0 0 0px rgba(211, 47, 47); }
to { box-shadow: 0 0 0 15px rgba(0, 0, 0, 0); }
}


</style>

<div id="container1">
<div class="container1">
<input type="checkbox" class="input" id="input1" name="inputs">
<input type="checkbox" class="input" id="input2" name="inputs">
<input type="checkbox" class="input" id="input3" name="inputs">
<input type="checkbox" class="input" id="input4" name="inputs">
<input type="checkbox" class="input" id="input5" name="inputs">
<label for="input1">
<div id="b1" class="button">1</div>
</label>
<label for="input2">
<div id="b2" class="button">2</div>
</label>
<label for="input3">
<div id="b3" class="button">3</div>
</label>
<label for="input4">
<div id="b4" class="button">4</div>
</label>

<div id="content1" class="content">
<div style="text-align: right;">
  <label for="input1" class="cross">X</label>
</div>
<h2>Reduce Sex Partners</h2>
  <p class="bodyCopy"><b>Sex with Multiple Partners</b> main cause of HPV</p>
<!--    <a href="#" class="cta">Diseases Page</a>-->
</div>
<div id="content2" class="content">
<div style="text-align: right;">
  <label for="input2" class="cross">X</label>
</div>
<h2>HPV Vaccine</h2>
  <p class="bodyCopy"><b>Gardicella</b> is the certified vaccine for HPV</p>
<a href="#" class="cta">HPV Vaccines</a>
</div>
<div id="content3" class="content">
<div style="text-align: right;">
  <label for="input3" class="cross">X</label>
</div>
<h2>Quit Smoking</h2>
  <p class="bodyCopy"><b>Smoking</b> mainly affects lungs and also increases the risk of HPV</p>
<!--    <a href="#" class="cta">Diseases Page</a>-->
</div>
<div id="content4" class="content">
<div style="text-align: right;">
  <label for="input4" class="cross">X</label>
</div>
<h2>Use Condom</h2>
  <p class="bodyCopy"><b>Condom</b> usage reduces the risk of HPV</p>
<!--    <a href="#" class="cta">Diseases Page</a>-->
</div>
</div>
</div>`