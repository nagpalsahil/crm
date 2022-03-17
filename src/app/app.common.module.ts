import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgPrimeModule } from './app.ngprime.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        FormsModule,
        ReactiveFormsModule,
        RadioButtonModule
    ]
})
export class AppCommonModule {

}