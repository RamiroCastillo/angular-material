import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatBadgeModule,
  MatBottomSheetModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo que permite cargar todos aquellos modulos y componentes de Angular Material que vayamos a necesitar

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatBadgeModule,
    MatBottomSheetModule
  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatBadgeModule,
    MatBottomSheetModule
    
  ]
})
export class MaterialModule { }
