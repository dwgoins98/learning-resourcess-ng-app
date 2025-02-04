import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input<string>('SafeLinkDirective', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective created');
  }

  onClick(event: MouseEvent): void {
    const wantsToLeave: boolean = window.confirm(
      'Are you sure you want to navigate to this page?'
    );

    if (wantsToLeave) {
      const address: string = this.hostElementRef.nativeElement.href;
      console.log(`Navigating to ${address}`);

      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();

      console.log('Navigation allowed');
      return;
    } else {
      event.preventDefault();
      console.log('Navigation cancelled');
    }
  }
}
