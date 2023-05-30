
function make_album( artist: string, title: string, numOfTracks?: number) : object{
    const album: { artist: string, title: string, numOfTracks?: number} = {
        artist,
        title,
    };

    if(numOfTracks){
        album.numOfTracks = numOfTracks;
    }

    return album;
}


const album1 = make_album('atif aslam', 'Album-1');
const album2 = make_album('Artist2', 'Album-2');
const album3 = make_album('Artist3', 'Album-3');
const album4 = make_album('Artist4', 'Album-4', 10);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);