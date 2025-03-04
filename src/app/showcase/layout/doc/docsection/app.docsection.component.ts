import { ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppDocSectionTextComponent } from '../docsectiontext/app.docsectiontext.component';
import { Doc } from 'src/app/showcase/domain/doc';
import { DomHandler } from 'primeng/dom';

interface Props {
    id: string;
    title: string;
    component: any;
    level?: number;
}

@Component({
    selector: 'app-docsection',
    templateUrl: './app.docsection.component.html'
})
export class AppDocSectionsComponent implements OnInit {
    @Input() docs!: Doc[];

    currentDocIndex = -1;

    @ViewChild('Doc', { read: ViewContainerRef }) Doc: ViewContainerRef;

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        for (let index = 0; index < this.docs.length; index++) {
            this.loadComponent();
        }
    }

    loadComponent() {
        this.cd.detectChanges();
        this.currentDocIndex = (this.currentDocIndex + 1) % this.docs.length;
        const newComponent: any = this.docs[this.currentDocIndex];

        const viewContainerRef = this.Doc;
        let component;
        if (newComponent.component !== undefined) {
            component = viewContainerRef.createComponent<Props>(newComponent.component);
            component.instance.id = newComponent.id;
            component.instance.title = newComponent.label;

        } else {
            component = viewContainerRef.createComponent(AppDocSectionTextComponent);
            component.instance.id = newComponent.id;
            component.instance.title = newComponent.label;
            component.instance.level = 2;
        }
        if (newComponent.children) {
            for (let i = 0; i < newComponent.children.length; i++) {
                const children = newComponent.children[i];
                component = viewContainerRef.createComponent<Props>(children.component);
                component.instance.id = children.id;
                component.instance.title = children.label;
            }
        }
        
        if(component) {
            DomHandler.findSingle(component.location.nativeElement, 'section').classList.add('py-3')
        }
    }
}
