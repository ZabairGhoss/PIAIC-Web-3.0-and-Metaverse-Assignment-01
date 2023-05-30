
import magicians from '../Exercise-41/Q41';


function make_great(magicians: string[]){
    const modified_magicians = magicians.map(
        (magician) => {
            return `great ${magician}`;
        }
    )

    return modified_magicians;
}

function show_magicians(magicians: string[]): void{
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const magiciansArray = magicians;
const modified_magicians = make_great(magicians);

show_magicians(modified_magicians);
