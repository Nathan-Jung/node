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
              " style="color:#86E57F">CCTV</a></li>
          </ul>
        </nav>
      </header>
        <article class="hentry">
          <hgroup>
            <h2 class="entry-title">산소공급 부분</h2>
          </hgroup>
          </article>
        </body>
      </html>     
       `;
    }
  }