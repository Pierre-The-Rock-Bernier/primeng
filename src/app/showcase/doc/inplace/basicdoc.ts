import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p><i>Inplace</i> component requires <i>display</i> and <i>content</i> templates to define the content of each state.</p>
        </app-docsectiontext>
        <div class="card">
            <p-inplace>
                <ng-template pTemplate="display">
                    <p>View Content</p>
                </ng-template>
                <ng-template pTemplate="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </ng-template>
            </p-inplace>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card">
    <p-inplace>
        <ng-template pTemplate="display">
            <p>View Content</p>
        </ng-template>
        <ng-template pTemplate="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ng-template>
    </p-inplace>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inplacedemo.html'
})

export class InplaceDemo {
}`
    };
}
