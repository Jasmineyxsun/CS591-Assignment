import { Injectable, Input } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// import { Artist } from './artist';
// import { ARTISTS } from './mock-artists';
import { MessageService } from './message.service';

/*@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  constructor(private messageService: MessageService) { }

  getArtists(): Observable<Artist[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ArtistService: fetched artists');
    return of(ARTISTS);
  }
}
 */

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }
  private log(message: string) {
    this.messageService.add(`ArtistService: ${message}`);
  }
}
