import {from, Observable} from 'rxjs';

export class JSONreader {
  public static getJSON(url: string): Observable<any> {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return from(
      fetch(proxyUrl + url)
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
