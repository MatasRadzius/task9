export default class Movies {
    constructor(title, director, budget) {
        this.title = title
        this.director = director
        this.budget = budget 
    }
   
    
}

export function wasExpensive (movie) {
    if ( movie.budget > 100000000 ){
        console.log(true)
    } else {
        console.log(false)
    }
}