var Card = function(settings) {
  var name = settings.name;
  
  this.getName = function() {
    return name;
  }

  return this;
}