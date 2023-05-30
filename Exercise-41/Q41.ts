
const magicians: string[] = ['magician1', 'magician2', 'magician3', 'magician4', 'magician5'];

function show_magicians(magicians: string[]): void{
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

export default magicians;