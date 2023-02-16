import { Component } from '@angular/core';
import { StyleDocComponent } from '../../doc/dock/styledoc';
import { AdvancedDocComponent } from '../../doc/dock/advanceddoc';
import { BasicDocComponent } from '../../doc/dock/basicdoc';
import { EventsDocComponent } from '../../doc/dock/eventsdoc';
import { ImportDocComponent } from '../../doc/dock/importdoc';
import { MenuItemDocComponent } from '../../doc/dock/menuitemdoc';
import { MethodsDocComponent } from '../../doc/dock/methodsdoc';
import { PropsDocComponent } from '../../doc/dock/propsdoc';

@Component({
    templateUrl: './dockdemo.html',
    styleUrls: ['./dockdemo.scss']
})
export class DockDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'props',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        },
        {
            id: 'menuitem',
            label: 'MenuItem API',
            component: MenuItemDocComponent
        }
    ];
}
