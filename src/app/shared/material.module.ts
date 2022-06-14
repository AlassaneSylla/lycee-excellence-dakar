import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';


const MODULES = [
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
]
@NgModule({
    imports: MODULES ,
    exports: MODULES
})
export class MaterialModule {}