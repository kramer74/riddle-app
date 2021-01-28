import { Injectable } from '@angular/core';
import { Riddle } from "./riddle";
import { Command } from "./command";
import { GameEvent } from "./gameevent";
import { Observable } from 'rxjs';
import  uuid from 'uuidv4'
import { HttpClient, HttpErrorResponse, HttpRequest, HttpEvent, HttpEventType} from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class RiddleService {

  constructor(private httpService: HttpClient) {
  }

  public getEvent(): Observable<GameEvent> {
    this.httpService.get<GameEvent>(environment.booksUrl+ '/events',{ observe: 'response' }).subscribe(res => {
      console.log(res.headers.get('X-Powered-By'));
      console.log(res.body);
    });

    return this.httpService.get<GameEvent>(environment.booksUrl+ '/events');
  }

  getData() {
    const req = new HttpRequest('GET', environment.booksUrl+ '/events', {
      reportProgress: true
    });

    this.httpService.request(req).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request sent!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header received!');
          break;
        case HttpEventType.DownloadProgress:
          const kbLoaded = Math.round(event.loaded / 1024);
          console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
          break;
        case HttpEventType.Response:
          console.log('😺 Done!', event.body);
      }
    });
  }


  public openGame() {
    console.log(uuid());
    let cmd: Command = {context:{ name: 'playing'}, aggregate: {name: 'game', id: uuid()}, name: 'open', id: uuid()};
    this.httpService.post(environment.booksUrl+ '/command', cmd).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }
}
