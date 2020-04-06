<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    </head>

    <body>
        <div id="container">
            <div id="header">
                <div><img src="logo.png" id="logo" alt=""></div>
                <div><input type="text" id="search-box" oninput="searchBoxOnInput()"
                        placeholder="Search for songs, artists,..."></div>
            </div>

            <div id="search-result">

            </div>

            <div id="player"></div>
        </div>
        <script src="script.js"></script>
    </body>

</html>