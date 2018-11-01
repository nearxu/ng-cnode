import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TabComponent } from '../tab/tab.component';
import { PageComponent } from './page.component';
import { PageListComponent } from './page-list.component';

@NgModule({
    imports: [
        HttpClientModule,
        PageRoutingModule,
        CommonModule
    ],
    declarations: [TabComponent, PageComponent, PageListComponent],
    // exports: [PageComponent, PageListComponent]
})
// imports，这让 CustomersModule 可以访问它的路由模块
// declarations 数组中，这表示 CustomerListComponent 属于 CustomersModule。

export class PageModule { }