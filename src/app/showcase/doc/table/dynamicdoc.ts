import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-dynamic-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Columns can be defined dynamically using the <i>*ngFor</i> directive.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template pTemplate="header" let-columns>
                    <tr>
                        <th *ngFor="let col of columns">
                            {{ col.header }}
                        </th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowData let-columns="columns">
                    <tr>
                        <td *ngFor="let col of columns">
                            {{ rowData[col.field] }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-dynamic-demo" [extFiles]="extFiles"></app-code>
    </section>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDynamicDemo {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    cols: any[];

    constructor(private productService: ProductService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }

    code: Code = {
        basic: `
<p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
            <tr>
                <td *ngFor="let col of columns">
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-dynamic-demo',
    templateUrl: 'table-dynamic-demo.html'
})
export class TableDynamicDemo {

    products: Product[];

    cols: any[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
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
