import {Component, Injectable, OnInit} from '@angular/core';

import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class ArtistsComponent implements OnInit {

  selectedArtist: Artist;

  artists: Artist[];

  private value;

  constructor(
    private http: HttpClient,
    private artistService: ArtistService) {
  }

  private artistsUrl = 'http://localhost:3000/ps4/';

  ngOnInit() {
    this.getArtists();
  }

  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }

  processBlur(value: string) {
    this.value = value;
  }


  getArtists(): Observable<Artist[]> {
    console.log(this.value);
    return this.http.get<Artist[]>(this.artistsUrl + this.value);
  }

  getArtists1(): void {
    this.getArtists()
      .subscribe(artists => {
        this.artists = artists;
        console.log(`Contacts: ${this.artists}`);
      });
  }
  }
