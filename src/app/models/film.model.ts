export class Usuario{
    constructor(
        public vote_average:      number,
        public vote_count:        number,
        public id:                number,
        public original_language: string,
        public original_title:    string,
        public overview:          string,
        public popularity:        number,
        public title:             string,
        public poster_path?:       string,
        public release_date?:      Date,
        public video?:             boolean,
        public adult?:             boolean,
        public backdrop_path?:     string,
        public genre_ids?:         number[],
    ){}
}