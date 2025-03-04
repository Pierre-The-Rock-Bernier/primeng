import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'datatable-doc',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Sample DataTable implementation using different Skeleton components and PrimeFlex CSS utilities.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td><p-skeleton></p-skeleton></td>
                        <td><p-skeleton></p-skeleton></td>
                        <td><p-skeleton></p-skeleton></td>
                        <td><p-skeleton></p-skeleton></td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code"></app-code>
    </section>`
})
export class DataTableDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: any[];

    ngOnInit() {
        this.products = Array.from({ length: 5 }).map((_, i) => `Item #${i}`);
    }

    code: Code = {
        basic: `
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td><p-skeleton></p-skeleton></td>
            <td><p-skeleton></p-skeleton></td>
            <td><p-skeleton></p-skeleton></td>
            <td><p-skeleton></p-skeleton></td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [value]="products" responsiveLayout="scroll">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td><p-skeleton></p-skeleton></td>
                <td><p-skeleton></p-skeleton></td>
                <td><p-skeleton></p-skeleton></td>
                <td><p-skeleton></p-skeleton></td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './skeletondemo.html',
    styleUrls: ['./skeletondemo.scss']
})
export class SkeletonDemo implements OnInit {

    products: any[];

    ngOnInit() {
        this.products = Array.from({ length: 5 }).map((_, i) => \`Item #\${i}\`);
    }
}`
    };
}
