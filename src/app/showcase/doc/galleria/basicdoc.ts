import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-basic-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Galleria requires a <i>value</i> as a collection of images, <i>item</i> template for the higher resolution image and <i>thumbnail</i> template to display as a thumbnail.</p>
        </app-docsectiontext>
        <div class="card">
            <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ width: '100%' }" [numVisible]="5">
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.previewImageSrc" style="width: 100%;" />
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                    <div class="grid grid-nogutter justify-content-center">
                        <img [src]="item.thumbnailImageSrc" />
                    </div>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code" selector="galleria-basic-demo"></app-code>
    </section>`
})
export class GalleriaBasicDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    images: any[];

    responsiveOptions: any[];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }

    code: Code = {
        basic: `
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{'width': '100%'}" [numVisible]="5">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.previewImageSrc" style="width: 100%;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" />
        </div>
    </ng-template>
</p-galleria>`,
        html: `
<div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{'width': '100%'}" [numVisible]="5">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-basic-demo',
    templateUrl: './galleria-basic-demo.html',
    styleUrls: ['./galleria-basic-demo.scss']
})
export class GalleriaBasicDemo implements OnInit {
    images: any[];
    
    responsiveOptions: any[];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,
        service: ['PhotoService']
    };
}
