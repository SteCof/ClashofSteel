var Card = function(settings) {
  var name = settings.name;
  var resTime = settings.resTime;
  var type = settings.type;
  var image = settings.image;
  var subtype = settings.subtype;
  var rules = settings.rules;
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
  this.getRules =function() {
	return rules;
  }
  this.display = function() {
    var displayCard = document.createElement('article');
	displayCard.className = "clash-of-steel-"+this.getType();
    var displayImg = document.createElement('img');
    displayImg.src = this.getImage();
    var displayHeading = document.createElement('h1');
	var displayHeadingName = document.createElement('span');
	displayHeadingName.className="clash-of-steel-heading-name";
	var displayName = document.createTextNode(this.getName());
	var displayResTime = document.createElement('span');
    displayResTime.className = "clash-of-steel-res-time";
	displayResTime.appendChild(document.createTextNode(" " + this.getResTime()));
	var displayTypeLine=document.createElement('h2');
	displayTypeLine.appendChild(document.createTextNode(this.getType()));
	var displayRulesText=document.createElement('p');
	displayRulesText.className="clash-of-steel-rules-text";
	displayRulesText.appendChild(document.createTextNode(this.getRules()));
    displayHeadingName.appendChild(displayName);
	displayHeading.appendChild(displayHeadingName);
	displayHeading.appendChild(displayResTime);
    displayCard.appendChild(displayHeading);
    displayCard.appendChild(displayImg);
	displayCard.appendChild(displayTypeLine);
	displayCard.appendChild(displayRulesText);
    document.body.appendChild(displayCard);
  }
  return this;
}