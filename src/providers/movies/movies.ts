import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

   BasePath="https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

 
   getlastestMovies(): Observable<any>{
     return this.http.get(this.BasePath+"/movie/latest/550?api_key=47bb1e079e91f4e1fe77c1494051f43b");
   }


    
   Movielatest(){
    return this.http.get("http://taqui.local/wp-json/wp/v2/posts/");
         
    
   }
    

   getAll() {
    return new Promise((resolve, reject) => {
 
      let url = (this.BasePath + '/movie/latest/550?api_key=47bb1e079e91f4e1fe77c1494051f43b');
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
