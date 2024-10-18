import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class ShCoreService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShCoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShCoreService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShCoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ShCoreComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShCoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: ShCoreComponent, isStandalone: true, selector: "lib-sh-core", ngImport: i0, template: `
    <p>
      sh-core works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShCoreComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sh-core', standalone: true, imports: [], template: `
    <p>
      sh-core works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of sh-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ShCoreComponent, ShCoreService };
//# sourceMappingURL=sh-core.mjs.map
