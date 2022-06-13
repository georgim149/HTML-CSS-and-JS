exports.getDate = function(){
  const today = new Date();
  return today.toLocaleDateString("en-GB");
}
