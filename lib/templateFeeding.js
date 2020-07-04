module.exports = {
    FeedTable:function(mountFeed, datetime, control){
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
            <header>
              <div class="uppermenu">
                <ul>
                  <li><a class="Login" href="/page/Login">Login</a></li>
                  <li><a class="Sign-Up" href="#">Sign Up</a></li>
                </ul>
                </div>
              <div>
              <p class="title"><a href="/" style="color:white">Team 만선</a></p>
              <p class="subtitle"><small>control Website</small></p>
              </div>
            </header>
      
          <nav class="navlist">
              <ul>
                <li class="food"><a href="/page/Feeding
         " style="color:#86E57F">Feeding</a></li>
                <li class="oxyzen"><a href="/page/Oxyzen
         " style="color:#D8D8D8">Oxyzen</a></li>
                <li class="cctv"><a href="/page/CCTV
        " style="color:#D8D8D8">CCTV</a></li>
            </ul>
          </nav>
        </header>
          <article class="hentry">
            <hgroup>
              <h1 class="entry-title">먹이</h1>
            </hgroup>
            <table border="1" align="center" width="500" style="margin-top:50px">
              <tr height="100" >
                <th>Feed_p</th>
                <th>Feed_p_time</th>
              </tr>
              <tr height="40" align="center">
                <td>${mountFeed}</td>
                <td>${datetime}</td>
              </tr>
            </table>
            ${control}
          </article>
        </body>
      </html>       
       `;
    },
}