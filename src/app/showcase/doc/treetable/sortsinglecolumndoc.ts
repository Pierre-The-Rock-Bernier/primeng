import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Code } from '../../domain/code';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-table-sort-single-column-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Sorting on a column is enabled by adding the <i>ttSortableColumn</i> property.</p>
        </app-docsectiontext>
        <div class="card">
            <p-treeTable [value]="files" [columns]="cols">
                <ng-template pTemplate="header" let-columns>
                    <tr>
                        <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                            {{ col.header }}
                            <p-treeTableSortIcon [field]="col.field"></p-treeTableSortIcon>
                        </th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
                    <tr>
                        <td *ngFor="let col of columns; let i = index">
                            <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>
                            {{ rowData[col.field] }}
                        </td>
                    </tr>
                </ng-template>
            </p-treeTable>
        </div>
        <app-code [code]="code" selector="tree-table-sort-single-column-demo"></app-code>
    </section>`
})
export class SortSingleColumnDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    files: TreeNode[];

    cols: any[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }

    code: Code = {
        basic: `
<p-treeTable [value]="files" [columns]="cols">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                {{ col.header }}
                <p-treeTableSortIcon [field]="col.field"></p-treeTableSortIcon>
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr>
            <td *ngFor="let col of columns; let i = index">
                <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treeTable>`,

        html: `
<div class="card">
    <p-treeTable [value]="files" [columns]="cols">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                    {{ col.header }}
                    <p-treeTableSortIcon [field]="col.field"></p-treeTableSortIcon>
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
            <tr>
                <td *ngFor="let col of columns; let i = index">
                    <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treeTable>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-table-sort-single-column-demo',
    templateUrl: './tree-table-sort-single-column-demo.html',
})
export class TreeTableSortSingleColumnDemo implements OnInit {
    files: TreeNode[];

    cols: any[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,

        service: ['NodeService']
    };
}
