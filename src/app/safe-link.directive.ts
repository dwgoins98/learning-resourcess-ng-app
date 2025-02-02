import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective created');
  }

  onClick(event: MouseEvent): void {
    const wantsToLeave: boolean = window.confirm(
      'Are you sure you want to navigate to this page?'
    );

    if (wantsToLeave) {
      return;
    } else {
      event.preventDefault();
      console.log('Navigation cancelled');
    }
  }
}
