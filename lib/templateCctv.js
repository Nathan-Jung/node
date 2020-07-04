module.exports = {
  HTML:function(body){ //템플릿으로 함수지정
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
            <li><a class="Login" href="hanLogin.html">Login</a></li>
            <li><a class="Sign-Up" href="#">Sign Up</a></li>
          </ul>
          </div>
        <div>
        <p class="title"><a href="hanMain.html" style="color:white">Team 만선</a></p>
        <p class="subtitle"><small>control Website</small></p>
        </div>
        </header>
        <nav class="navlist">
          <ul>
          <li class="food"><a href="hanFeeding.html
    " style="color:#D8D8D8">먹이공급장치</a></li>
          <li class="oxyzen"><a href="hanOxyzen.html
    " style="color:#D8D8D8">산소공급장치</a></li>
          <li class="cctv"><a href="hanCctv.html
    " style="color:#86E57F">CCTV</a></li>
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
