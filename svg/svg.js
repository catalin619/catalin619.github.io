document.getElementsByClassName("id_logic_version").innerHTML = "Logic version = 2019.12.06.0";
document.getElementById("id_button").addEventListener("click", on_cere_permisiuni);
if (typeof(DeviceOrienationEvent.requestPermission) == "function"){

}
else
      window.addEventListener("deviceorienation", on_orentation_uab);
  window.addEventListener("devicemotion", on_motion_uab);

  function f_ok(p)
  {
    if (p == "granted")
      window.addEventListener("deviceorienation", on_orentation_uab);
    else
      alert("Permisiune respinsa");
  }

function f_not_ok(p)
  {
      alert("Permisiune respinsa");

  }

function on_cere_permisiuni()
{
    DeviceOrienationEvent.requestPermission().then(f_ok).catch(f_not_ok);
}

function desenare(beta,gamma)
{
    var svg = document.getElementById("id_svg");
    var cerc = document.getElementById("id_circle");

    var r = cerc.getAttribute("r");
    var svg_height = svg.getAttribute("height");
    var svg_width = svg.getAttribute("width");

    var x = svg.width / 2 + beta / 90 * (svg.width / 2 - r);
    var y = svg.height / 2 + gamma / 90 * (svg.height / 2 - r);

    cerc.setAttribute("cx", x)
    cerc.setAttribute("cy", y);
}

 function on_orentation_uab(e)
 {
   document.getElementById("id_alpha").innerHTML = Math.round(e.alpha * 100)/100;
   document.getElementById("id_beta").innerHTML = Math.round(e.beta * 100)/100;
   document.getElementById("id_gamma").innerHTML = Math.round(e.gamma * 100)/100;

   desenare(e.beta,e.gamma);
 }

function on_montion_uab(e)
{
  var acc = e.accelerationIncludingGravity;

  document.getElementById("id_acc_x").innerHTML = Math.round(acc.x*100)/100;
  document.getElementById("id_acc_y").innerHTML = Math.round(acc.y*100)/100;
  document.getElementById("id_acc_z").innerHTML = Math.round(acc.z*100)/100;

  var beta = -Math.atan(acc.y / acc.z) / Math.PI * 180;
  var gamma = Math.atan(acc.x / acc.z) / Math.PI * 180;
  document.getElementById("id_beta_acc").innerHTML = Mah.round(beta * 100)/100;
  document.getElementById("id_gamma_acc").innerHTML = Math.round(gamma * 100)/100;

  desenare(beta, gamma);
}

