import {from, Observable} from 'rxjs';

export class JSONreader {
  public static getJSON(url: string, useProxy: boolean): Observable<any> {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    if (useProxy){
      url = proxyUrl + url;
    }
    return from(
      fetch(url)
        .then(blob => blob.json())
        .then(data => {
          return data;
        })
        .catch(e => {
          console.log(e);
          return e;
        })
    );
  }
}
