import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'speeddial-custom-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>SpeedDial sample with an outlined button, custom icons and <i>transitionDelay</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="height: 500px" class="flex justify-content-center">
                <p-toast></p-toast>
                <p-speedDial [model]="items" direction="up" transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined"></p-speedDial>
            </div>
        </div>
        <app-code [code]="code" selector="speeddial-custom-demo"></app-code>
    </section>`,
    providers: [MessageService]
})
export class CustomDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];
    }

    code: Code = {
        basic: `
<p-speedDial [model]="items" direction="up" transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined"></p-speedDial>`,

        html: `
<div class="card">
    <div style="height: 500px" class="flex justify-content-center">
        <p-toast></p-toast>
        <p-speedDial [model]="items" direction="up" transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined"></p-speedDial>
    </div>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speeddial-custom-demo',
    templateUrl: './speeddial-custom-demo.html',
    styleUrls: ['./speeddial-custom-demo.scss'],
    providers: [MessageService]
})
export class SpeeddialCustomDemo implements OnInit {
    items: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];
    }
}`
    };
}
