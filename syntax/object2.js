  //arrray, object

  var f = function(){
    console.log(1+1);
    console.log(1+2);
  }
  var b = function(){
    console.log(1+3);
  }
  var a= [f, b];
  a[1]();

  var o = {
    func : f
  }
  o.func();   // function은 배열과 객체에 담을수 있다.
