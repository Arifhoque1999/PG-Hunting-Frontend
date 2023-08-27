import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { CalendarIcon } from 'primeng/icons/calendar';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DataViewModule } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  imports: [
    SidebarModule,
    DropdownModule,
    TabMenuModule,
    InputTextModule,
    InputSwitchModule,
    CheckboxModule,
    SliderModule,
    CascadeSelectModule,
    RatingModule,
    DynamicDialogModule,
    DialogModule,
    PaginatorModule,
    TableModule,
    CalendarIcon,
    CalendarModule,
    PasswordModule,
    KeyFilterModule,
    DataViewModule,
    SelectButtonModule,
  ],
  exports: [
    SidebarModule,
    DialogModule,
    DropdownModule,
    TabMenuModule,
    InputTextModule,
    InputSwitchModule,
    CheckboxModule,
    SliderModule,
    CascadeSelectModule,
    RatingModule,
    DynamicDialogModule,
    PaginatorModule,
    TableModule,
    CalendarIcon,
    CalendarModule,
    PasswordModule,
    KeyFilterModule,
    DataViewModule,
    SelectButtonModule,
  ],
})
export class NgprimeModule {}
