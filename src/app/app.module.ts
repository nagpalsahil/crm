import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuService } from './service/app.menu.service';
import { ConfigService } from './service/app.config.service';
import { AuthGuard } from './core/guards/auth.gaurd';
import { AppCommonModule } from './app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MasterComponent } from './modules/master/master.component';
import { HeaderComponent } from './modules/master/header/header.component';
import { FooterComponent } from './modules/master/footer/footer.component';
import { SidebarComponent } from './modules/master/sidebar/sidebar.component';
import { ConfigComponent } from './modules/master/config/config.component';
import { MenuitemComponent } from './modules/master/sidebar/menuitem.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { HttpLoaderFactory } from './modules/login/login.module';
import { LoaderService } from './service/loader.service';
import { CustomerService } from './service/customerService';
import { PolicyService } from './service/policyService';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        //UserIdleModule.forRoot({ idle: 900, timeout: 300, ping: 120 }),
        HttpClientModule,
        AppCommonModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          }),
    ],
    declarations: [
        AppComponent,
        ConfigComponent,
        MasterComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        MenuitemComponent
    ],
    providers: [
        AuthGuard,
        MenuService,
        ConfigService,
        MessageService,
        ConfirmationService,
        CookieService,
        CustomerService,
        PolicyService,
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
