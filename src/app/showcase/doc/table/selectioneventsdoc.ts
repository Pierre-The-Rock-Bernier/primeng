import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-selection-events-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>Table provides <i>onRowSelect</i> and <i>onRowUnselect</i> events to listen selection events.</p>
        </app-docsectiontext>
        <div class="card">
            <p-toast></p-toast>
            <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code" (onRowSelect)="onRowSelect($event)" (onRowUnselect)="onRowUnselect($event)" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr [pSelectableRow]="product">
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-selection-events-demo" [extFiles]="extFiles"></app-code>
    </section>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MessageService]
})
export class TableSelectionEventsDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    selectedProduct: Product;

    constructor(private productService: ProductService, private messageService: MessageService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });
    }

    onRowSelect(event) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
    }

    onRowUnselect(event) {
        this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code"
    (onRowSelect)="onRowSelect($event)" (onRowUnselect)="onRowUnselect($event)" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr [pSelectableRow]="product">
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-toast></p-toast>
    <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code"
        (onRowSelect)="onRowSelect($event)" (onRowUnselect)="onRowUnselect($event)" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr [pSelectableRow]="product">
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-selection-events-demo',
    templateUrl: 'table-selection-events-demo.html',
    providers: [MessageService]
})
export class TableSelectionEventsDemo implements OnInit{
    products: Product[];

    selectedProduct: Product;

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    onRowSelect(event) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
    }

    onRowUnselect(event) {
        this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
    }
}`,

        service: ['ProductService']
    };

    extFiles = [
        {
            path: 'src/domain/product.ts',
            content: `
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`
        }
    ];
}
