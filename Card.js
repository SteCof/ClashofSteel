var Card = function(settings) {
  var name = settings.name;
  var resTime = settings.resTime;
  var type = settings.type
  var image = settings.image
  this.getName = function() {
    return name;
  }
  this.getResTime = function() {
    return resTime;
  }
  this.getType = function() {
    return type;
  }
  this.getImage = function() {
    return image;
  }
  this.display = function() {
    var displayCard = document.createElement('article');
    var displayImg = document.createElement('img');
    displayImg.src = this.getImage();
    var displayHeading = document.createElement('h1');
    displayCard.className = "clash-of-steel-card";
    var displayName = document.createTextNode(this.getName());
    displayHeading.appendChild(displayName);
    displayCard.appendChild(displayHeading);
    displayCard.appendChild(displayImg);
    document.body.appendChild(displayCard);
  }
  return this;
}