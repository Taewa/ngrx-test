import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CharactersService {
    catApi = "http://test.hr.gwapit.in:9081/api/cat/";
    zombieApi = "http://test.hr.gwapit.in:9081/api/zombie/";

    constructor(private http: HttpClient) {
    }

    getCats() {
        return this.http.get(this.catApi);
    }

    getZombies() {
        return this.http.get(this.zombieApi);
    }
}
