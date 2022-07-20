import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VvService {

  constructor(private http: HttpClient) { }

  getPDF(
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/zip')
      .set('timeout', '6000000');
    return (
      this.http.get(`https://uploads.strikinglycdn.com/files/f0b5bc51-60d1-4e95-8ffd-5bf1aff05dc4/vv-cv-1p.pdf?id=3907611`, {
        headers, responseType: 'blob',
      }).pipe(delay(3000), map((data) => this.downLoadFile(data, 'application/pdf', 'récapitulatif.pdf'))));
  }
  /**
  * Method is use to download file.
  * @param data - Array Buffer data
  * @param type - type of the document.
  */
   downLoadFile = (data: any, type: string, fileName: string): void => {
    const a = document.createElement('a');
    document.body.appendChild(a);
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
