import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'tab-menu-basic-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>TabMenu requires a collection of menuitems as its model.</p>
        </app-docsectiontext>
        <div class="card">
            <p-tabMenu [model]="items"></p-tabMenu>
        </div>
        <app-code [code]="code" selector="tab-menu-basic-demo"></app-code>
    </section>`
})
export class TabMenuBasicDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];
    }

    code: Code = {
        basic: `
<p-tabMenu [model]="items"></p-tabMenu>`,

        html: `
<div class="card">
    <p-tabMenu [model]="items"></p-tabMenu>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tab-menu-basic-demo',
    templateUrl: './tab-menu-basic-demo.html'
})
export class TabMenuBasicDemo implements OnInit {

    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];
    }
}`
    };
}
