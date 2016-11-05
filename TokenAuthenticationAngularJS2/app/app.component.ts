import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationNotifyService } from './authentication-notify.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [AuthenticationNotifyService]
})
export class AppComponent {
    isLoggedIn: boolean;
    subscription: Subscription;

    constructor(private authenticationNotifyService: AuthenticationNotifyService) {
        authenticationNotifyService.missionConfirmed$.subscribe(
            astronaut => {
                this.isLoggedIn = astronaut;
            });
    }

  
    logOut(): void {
        console.log("current token is" + sessionStorage.getItem("token"));
        sessionStorage.removeItem("token") //"token" must be put to constant
        console.log("token is removed" + sessionStorage.getItem("token"));
        this.isLoggedIn = false;
    }

}
