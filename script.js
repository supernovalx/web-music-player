var song = [{
    name: "Havana",
    artist: "Camila Cabello, Young Thug",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/d/2/2/ed229c276ecfcbf764eb8a62dc584be5.jpg",
    id: "ZW80E696"
}, {
    name: "The River",
    artist: "Axel Johansson",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/4/4/44f914886aa4481469c11d072ac779e0_1517370518.jpg",
    id: "ZW9AE770"
}, {
    name: "Move Your Body (Alan Walker Remix)",
    artist: "Sia",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/8/e/8ecb6cb927e29a0e557187119db2399d_1476976593.jpg",
    id: "ZW78Z0E8"
}, {
    name: "Save Me",
    artist: "DEAMN",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/3/9/39247dd8f7a4a85f35647cf2d43d82ea_1487647777.jpg",
    id: "ZW79FA6Z"
}, {
    name: "Lily",
    artist: "Alan Walker, K-391, Emelie Hollow",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/5/7/6/7576fecea36f217fa1f314dc1e7fe791.jpg",
    id: "ZWA0OA6F"
}, {
    name: "Old Town Road (Remix)",
    artist: "Lil Nas X, Billy Ray Cyrus",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/f/5/5/3f556f4de25dd6ec3bacfc00bf57c0ba.jpg",
    id: "ZWACDCUO"
}, {
    name: "Talk",
    artist: "Khalid",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/1/e/8/b1e8fbed7351784fc9c348b35467413b.jpg",
    id: "ZWA8ZZ0E"
}, {
    name: "Ruin My Life",
    artist: "Zara Larsson",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/d/2/2/ed229c276ecfcbf764eb8a62dc584be5.jpg",
    id: "ZW9EUAWW"
}, {
    name: "Let You Love Me",
    artist: "RITA ORA",
    src: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/0/3/4/0034f0a682f0b6fadb968d823f801c77.jpg",
    id: "ZW9DCFBF"
}]

searchBoxOnInput();

function searchBoxOnInput() {
    console.log($("#search-box").val());
    var query = $("#search-box").val();

    // clear result
    $("#search-result").empty();

    // search
    song.forEach(function myFunction(item, index) {
        var s = item.name + item.artist;
        console.log(query, s);
        if (query === undefined || s.toLowerCase().includes(query.toLowerCase())) {
            display(item);
            console.log('display');
        }

    });
}

function display(item) {
    var card = "<div class='song' onclick=\"play('" + item.id + "');\"> <img class='song-logo' src='" + item.src + "'> <p class='song-name'>" + item.name + "</p> <p class='artist-name'>" + item.artist + "</p> </div>"
    $("#search-result").append(card);
}

function play(id) {
    var player = "<iframe scrolling='no' width=640 height=180 src=https://zingmp3.vn/embed/song/" + id + "?start=true frameborder='0' allowfullscreen='true'/>";

    $("#player").empty();
    $("#player").append(player);
}