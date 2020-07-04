module.exports = {
    HTML:function(body){
      return `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Manseon Control Website </title>
          <link rel="stylesheet" href="../public/css/mainstyle.css">
        </head>
        <body>
          <header>
            <div class="uppermenu">
            <ul>
              <li><a class="Login" href="https://nathan-jung.github.io/han/han.login.html">Login</a></li>
              <li><a class="Sign-Up" href="#">Sign Up</a></li>
            </ul>
            </div>
          <div>
          <p class="title"><a href="https://nathan-jung.github.io/han/han.main.html" style="color:white">Team 만선</a></p>
          <p class="subtitle"><small>control Website</small></p>
          </div>
          </header>
          <nav class="navlist">
            <ul>
            <li class="food"><a href="https://nathan-jung.github.io/han/han.feeding.html
      " style="color:#D8D8D8">먹이공급장치</a></li>
            <li class="oxyzen"><a href="https://nathan-jung.github.io/han/oxyzen.html
      " style="color:#D8D8D8">산소공급장치</a></li>
            <li class="cctv"><a href="https://nathan-jung.github.io/han/cctv.html
      " style="color:#D8D8D8">CCTV</a></li>
            </ul>
          </nav>
          <article class="hentry">
            <hgroup>
              <h2 class="entry-title">로그인</h2>
            </hgroup>
            <div style="text-align:center">
            <span style="padding-right:52px;">
            ID
          </span>
            <span class="id">
            <input type="text" style="text-align:center;">
          </span><br><br>
          <span>
          Password
        </span>
            <span class="password">
            <input type="password" value="" id="myInput" >
          </span>
            <form action="/create_process" method="post">
              <p><input type="submit" value="확인" style="cursor:pointer;"></p>
              <input type="checkbox" onclick="loginclick" style="cursor:pointer;"> show password
            </form>
            <script src="writefile.js"></script>
              <script>
                function loginclick(){
                  var x = document.getElementById("myInput");
                  if(x.type === "password"){
                    x.type = "t ext";
                  }
                  else {
                    x.type = "password";
                  }
                }
              </script>
          </article>
        </body>
      </html>
        
       `;
    }
  }