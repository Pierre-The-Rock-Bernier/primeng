import { Component, Input } from '@angular/core';

@Component({
    selector: 'accessibility-doc',
    template: ` <app-developmentsection>
        <app-docsectiontext [title]="title" [id]="id">
            <h3>Screen Reader</h3>
            <p>
                Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic,
                <i>aria-live</i> may be utilized as well. In case badges need to be tabbable, <i>tabIndex</i> can be added to implement custom key handlers.
            </p>

            <h4>Keyboard Support</h4>
            <p>Component does not include any interactive elements.</p>
        </app-docsectiontext>
    </app-developmentsection>`
})
export class AccessibilityDoc {
    @Input() id: string;

    @Input() title: string;
}
