import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AuthenticationNotifyService {
    
    private missionConfirmedSource = new Subject<boolean>();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();
    confirmMission(astronaut: boolean) {
        this.missionConfirmedSource.next(astronaut);
    }
}