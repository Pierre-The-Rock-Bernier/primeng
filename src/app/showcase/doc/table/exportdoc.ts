import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-export-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Table can export its data in CSV format using the built-in <i>exportCSV()</i> function. By default, all data is exported. If you'd like to export only the selection then pass a config object with <i>selectionOnly</i> property as true. Note that columns should be dynamic for export functionality to work, and column objects must define field/header properties. </p>
            <p>PDF and EXCEL export are also available using 3rd party libraries such as jspdf. Example below demonstrates how to implement all three export options.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table #dt [columns]="cols" [value]="products" selectionMode="multiple" [(selection)]="selectedProducts" [exportHeader]="'customExportHeader'" [tableStyle]="{'min-width': '50rem'}">
                <ng-template pTemplate="caption">
                    <div class="flex">
                        <button type="button" pButton pRipple icon="pi pi-file" (click)="dt.exportCSV()" class="mr-2" pTooltip="CSV" tooltipPosition="bottom"></button>
                        <button type="button" pButton pRipple icon="pi pi-file-excel" (click)="exportExcel()" class="p-button-success mr-2"  pTooltip="XLS" tooltipPosition="bottom"></button>
                        <button type="button" pButton pRipple icon="pi pi-file-pdf" (click)="exportPdf()" class="p-button-warning mr-2" pTooltip="PDF" tooltipPosition="bottom"></button>
                        <button type="button" pButton pRipple icon="pi pi-filter" (click)="dt.exportCSV({selectionOnly:true})" class="p-button-info ml-auto" pTooltip="Selection Only" tooltipPosition="bottom"></button>
                    </div>
                </ng-template>
                <ng-template pTemplate="header" let-columns>
                    <tr>
                        <th *ngFor="let col of columns">
                            {{col.header}}
                        </th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowData let-columns="columns">
                    <tr [pSelectableRow]="rowData">
                        <td *ngFor="let col of columns">
                            {{rowData[col.field]}}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-export-demo" [extFiles]="extFiles"></app-code>
    </div>`
})
export class TableExportDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    selectedProducts: Product[];

    constructor(private productService: ProductService) {}

    cols: any[];

    exportColumns: any[];

    ngOnInit() {
        this.productService.getProductsMini().then((data) => (this.products = data));

        this.cols = [
            { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(this.exportColumns, this.products);
                doc.save('products.pdf');
            });
        });
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, 'products');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
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
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
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
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-export-demo',
    templateUrl: 'table-export-demo'
})
export class TableExportDemo implements OnInit{
    products: Product[];

    selectedProducts: Product[];

    constructor(private productService: ProductService) {}

    cols: any[];

    exportColumns: any[];

    ngOnInit() {
        this.productService.getProductsMini().then((data) => (this.products = data));

        this.cols = [
            { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(this.exportColumns, this.products);
                doc.save('products.pdf');
            });
        });
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, 'products');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
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
