import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Code } from '../../domain/code';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-table-multiple-single-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is necessary to add to existing selections however this can be configured with
                disabling the <i>metaKeySelection</i> property. Note that in touch enabled devices, TreeTable always ignores metaKey. In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a
                boolean to indicate selection.
            </p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex gap-3 align-items-center justify-content-center mb-4">
                <p-inputSwitch [(ngModel)]="metaKeySelection"></p-inputSwitch>
                <span>Metakey</span>
            </div>
            <p-treeTable [value]="files" [columns]="cols" selectionMode="multiple" [(selection)]="selectedNodes" dataKey="name" [metaKeySelection]="metaKeySelection">
                <ng-template pTemplate="header" let-columns>
                    <tr>
                        <th *ngFor="let col of columns">
                            {{ col.header }}
                        </th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
                    <tr [ttRow]="rowNode" [ttRow]="rowNode" [ttSelectableRow]="rowNode">
                        <td *ngFor="let col of columns; let i = index">
                            <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>
                            {{ rowData[col.field] }}
                        </td>
                    </tr>
                </ng-template>
            </p-treeTable>
        </div>
        <app-code [code]="code" selector="tree-table-selection-multiple-demo"></app-code>
    </section>`
})
export class SelectionMultipleDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    metaKeySelection: boolean = true;

    files: TreeNode[];

    selectedNodes: TreeNode[];

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
<p-inputSwitch [(ngModel)]="metaKeySelection"></p-inputSwitch>
<p-treeTable [value]="files" [columns]="cols" selectionMode="multiple" [(selection)]="selectedNodes" dataKey="name" [metaKeySelection]="metaKeySelection">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treeTable>`,

        html: `
<div class="card">
    <div class="flex gap-3 align-items-center justify-content-center mb-4">
        <p-inputSwitch [(ngModel)]="metaKeySelection"></p-inputSwitch>
        <span>Metakey</span>
    </div>
    <p-treeTable [value]="files" [columns]="cols" selectionMode="multiple" [(selection)]="selectedNodes" dataKey="name" [metaKeySelection]="metaKeySelection">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ttRow]="rowNode" [ttSelectableRow]="rowNode">
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
    selector: 'tree-table-selection-multiple-demo',
    templateUrl: './tree-table-selection-multiple-demo.html',
})
export class TreeTableSelectionMultipleDemo implements OnInit {
    metaKeySelection: boolean = true;

    files: TreeNode[];

    selectedNodes: TreeNode[];

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
