import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'virtualscroll-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance
                issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-dropdown [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38"></p-dropdown>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class VirtualScrollDocComponent {
    @Input() id: string;

    @Input() title: string;

    items: SelectItem[];

    selectedItem: string;

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }

    code: Code = {
        html: `
<p-dropdown [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" 
    [virtualScroll]="true" [virtualScrollItemSize]="38"></p-dropdown>`,

        typescript: `
import { SelectItem } from 'primeng/api';
        
export class DropdownDemo {
    items: SelectItem[];
    
    selectedItem: string;

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
}`
    };
}
