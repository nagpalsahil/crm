import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/models/appconfig';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/service/app.config.service';
import { User } from 'src/app/models/user.model';
import { UserDataService } from 'src/app/service/user-data.service';
import { ToastService } from 'src/app/service/toast.service';
import { RouteStateService } from 'src/app/service/route-state.service';
import { SessionService } from 'src/app/service/session.service';
import { TranslateService } from '@ngx-translate/core';
import { UserContextService } from 'src/app/service/user-context.service';
import { LoaderService } from 'src/app/service/loader.service';
import { JwtDecoderService } from 'src/app/service/jwt-decoder.service';
import { Login } from 'src/app/models/login.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  
  password: string;
  
  config: AppConfig;
  
  subscription: Subscription;

  constructor(private userService: UserDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private userContextService: UserContextService,
    private jwtdecoder: JwtDecoderService,
    private loaderService: LoaderService,
    public configService: ConfigService,
    public messageService: MessageService){ }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  onClickLogin() {
    let user: User = new User();
    this.loaderService.show();
    this.toastService.addSingle('error', '', 'Invalid user.');
    if(this.userService.getUserByUserNameAndPassword(this.login)){
      //let usr: any = this.jwtdecoder.getJWTPayload();
      user.userName = this.login.username;
      user.userId = 1;
      this.userContextService.setUser(user);
      this.routeStateService.add('Dashboard', '/main/dashboard', null, true);   
    
      this.loaderService.hide();
    }
    else {
      user = null;
      //this.toastService.clear();
      this.messageService.clear();
      this.messageService.add({key: 'loginerror', severity:'error', summary: 'Error', detail: 'Invalid username and password'});
      //this.toastService.addSingle('error', '', 'Invalid user.');
      this.loaderService.hide();
    }
  }
}
