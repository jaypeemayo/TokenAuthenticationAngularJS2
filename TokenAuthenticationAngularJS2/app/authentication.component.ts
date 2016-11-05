import { Component, Input } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { AuthenticationNotifyService } from './authentication-notify.service';

@Component({
    moduleId: module.id,
    selector: "authentication",
    templateUrl: 'authentication.component.html',
    providers: [AuthenticationService]
})
export class AuthenticationComponent {

    constructor(private authenticationService: AuthenticationService,
        private router: Router,
        private authenticationNotifyService: AuthenticationNotifyService) { }

    userName: string;
    password: string;
    token: string;
    onLogin() {
       
        this.authenticationService.login(this.userName, this.password)

            .then(token => {
                console.log(token);
                sessionStorage.setItem('token', token);
                this.authenticationNotifyService.confirmMission(true);
                this.router.navigate(['/dashboard']);
            })
            .catch(reason => { alert(reason); })
    }   
}