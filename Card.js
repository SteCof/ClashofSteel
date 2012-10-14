var Card = function(settings) {
  var name = settings.name;
  var resTime = settings.resTime;
  var type = settings.type
  this.getName = function() {
    return name;
  }
  this.getResTime = function() {
    return resTime;
  }
  this.getType = function() {
    return type;
  }
  return this;
}