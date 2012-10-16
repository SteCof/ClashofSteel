var Card = function(settings) {
  var name = settings.name;
  var resTime = settings.resTime;
  var type = settings.type;
  var image = settings.image;
  var subtype =settings.subtype
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
	var displayType=document.createElement('article');
    var displayImg = document.createElement('img');
    displayImg.src = this.getImage();
    var displayHeading = document.createElement('h1');
	var displayHeadingName = document.createElement('span');
	var displayResTime = document.createElement('span');
	displayHeadingName.className="clash-of-steel-heading-name";
    displayType.className = "clash-of-steel-"+this.getType();
    displayResTime.className = "clash-of-steel-res-time";
    var displayName = document.createTextNode(this.getName());
	displayResTime.appendChild(document.createTextNode(" " + this.getResTime()));
    displayHeadingName.appendChild(displayName);
	displayHeading.appendChild(displayHeadingName);
	displayHeading.appendChild(displayResTime);
    displayType.appendChild(displayHeading);
    displayType.appendChild(displayImg);
	displayCard.appendChild(displayType)
    document.body.appendChild(displayCard);
  }
  return this;
}