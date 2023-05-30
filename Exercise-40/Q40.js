function make_album(artist, title, numOfTracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (numOfTracks) {
        album.numOfTracks = numOfTracks;
    }
    return album;
}
var album1 = make_album('atif aslam', 'Album-1');
var album2 = make_album('Artist2', 'Album-2');
var album3 = make_album('Artist3', 'Album-3');
var album4 = make_album('Artist4', 'Album-4', 10);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
