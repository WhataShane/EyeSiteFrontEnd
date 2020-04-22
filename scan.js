var imgs = document.getElementsByTagName("img");

for(var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function() {
      array = [this.src]
      x = postImages ("https://eyesite-199719.appspot.com", array)
    });
}

function gatherImages() {
  var imgs = document.getElementsByTagName("img");
  var imgSrcsArray = [];
  for (var i = 0; i < imgs.length; i++) {

    var pattern = /^((http|https|ftp):\/\/)/;
    var img = imgs[i].src;

    if(pattern.test(img)) {
      imgSrcsArray.push(img);
    }
  }
  return imgSrcsArray;
}

function postImages (url, imageSrc) {

  var data = JSON.stringify({srcs: imageSrc})

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    alert(this.responseText)
  }
  });

  xhr.open("POST", url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(data);

}
