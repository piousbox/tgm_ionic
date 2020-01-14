export class City {
    //Sample: 
    //{"id":"5074a31d1bab8e8e3f000024","name":"Albuquerque","cityname":"Albuquerque","x":35.074665,"y":-106.63971,"photo":"https://s3.amazonaws.com/ISh-development/photos/thumb/519829a4332fe8e0a100000b/Albuquerque.jpg?1368926622"}
    id: string = "";
    name: string = "";
    cityName: string = "";
    x: number = null;
    y: number = null;
    photoPath: string = "";

    static fromJson(obj: object): City {
        const city = new City;
        city.id = obj['id'] || "";
        city.name = obj['name'] || "";
        city.cityName = obj['cityname'] || "";
        city.x = obj['x'] || null;
        city.y = obj['y'] || null;
        city.photoPath = obj['photo'] || "";
        return city;
    }

    toJson(): object {
        return {
            id: this.id || '',
            name: this.name || '',
            cityname: this.cityName || '',
            x: this.x || null,
            y: this.y || null,
            photo: this.photoPath || ''
        }
    }
}
