module.exports = {
  HTML:function(title, list, body){ //템플릿으로 함수지정
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Manseon Control Website- ${title} </title>
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
    " style="color:#D8D8D8">Feeding</a></li>
          <li class="oxyzen"><a href="https://nathan-jung.github.io/han/han.oxyzen.html
    " style="color:#D8D8D8">Oxyzen</a></li>
          <li class="cctv"><a href="https://nathan-jung.github.io/han/han.cctv.html
    " style="color:#D8D8D8">CCTV</a></li>
          </ul>
        </nav>
        <article class="hentry">
          <hgroup>
            <h2 class="entry-title">안녕하세요 여러분</h2>
            ${body}
          </hgroup>
        </article>
      </body>
    </html>
    
    `;
  }
}
