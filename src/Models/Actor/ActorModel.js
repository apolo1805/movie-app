

// A class represents a movie actress. An actor has first name, last name, birthday, an image and IMDB link 
class ActorModel {

    constructor(fname, lname, birthday, actorImage, imdbLink) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.actorImage = "https://m.media-amazon.com/images/" + actorImage;
        this.imdbLink = "https://www.imdb.com/name/" + imdbLink;
    }


    getAge() {
        let birthYear = this.birthday.substring(0,4);
        let currentYear = new Date().getFullYear();
    
        return currentYear - birthYear;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}

export default ActorModel;