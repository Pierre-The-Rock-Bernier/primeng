import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-single-column-sort-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>
                A column can be made sortable by adding the <i>pSortableColumn</i> directive whose value is the field to sort against and a sort indicator via <i>p-sortIcon</i> component. For dynamic columns, setting
                <i>pSortableColumnDisabled</i> property as true disables sorting for that particular column.
            </p>
            <p>Default sorting is executed on a single column, in order to enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="products" [tableStyle]="{ 'min-width': '60rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
                        <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
                        <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
                        <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
                        <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.price | currency: 'USD' }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-single-column-sort-demo" [extFiles]="extFiles"></app-code>
    </section>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSingleColumnSortDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    constructor(private productService: ProductService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });
    }

    code: Code = {
        basic: `
<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
            <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
            <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
            <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.price | currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
                <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
                <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
                <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price | currency: 'USD'}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-single-column-sort-demo',
    templateUrl: 'table-single-column-sort-demo.html'
})
export class TableSingleColumnSortDemo implements OnInit {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
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
