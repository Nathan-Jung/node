module.exports = {
    HTML:function(title, list, body){ //템플릿으로 함수지정
      return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Manseon Control Website </title>
        <link rel="stylesheet" href="/css/mainstyle.css">
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
            <li class="oxyzen"><a href="https://nathan-jung.github.io/han/han.oxyzen.html
      " style="color:#D8D8D8">산소공급장치</a></li>
            <li class="cctv"><a href="https://nathan-jung.github.io/han/han.cctv.html
      " style="color:#D8D8D8">CCTV</a></li>
            </ul>
          </nav>
          <article class="hentry">
            <hgroup>
              ${body}
            </hgroup>
          </article>
        </body>
      </html>
      
      `;
    },list:function(filelist){
        var list = '<ul>';
        var i = 0;
        while(i < filelist.length){
          list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list+'</ul>';
        return list;
      }
  }
  