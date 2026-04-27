import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-main",
  template: ` <app-header></app-header>

    <main [ngClass]="showNotificationBanner ? 'mtscustom' : 'mtscustom2'">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>`,
  styles: [
    `
      main {
        min-height: calc(100vh - 108px);
        display: flex;
        flex-direction: column;
      }
      main > *:not(router-outlet) {
        flex: 1 1 auto !important;
        flex-direction: column;
        display: flex;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  constructor() {}

  private tabId: string;

  ngOnInit() {
    
    // this.tabId = this.generateTabId();

    // window.addEventListener('storage', (event) => {
    //   if (event.key === 'activeTabId') {
    //     this.checkForNewTab(event.newValue);
    //   }
    // });
    // const activeTabId = localStorage.getItem('activeTabId');
    // if (activeTabId && activeTabId !== this.tabId) {
    //   this.blockNewTab(); 
    // } else {    
    //   localStorage.setItem('activeTabId', this.tabId);
    // }

  }
  // generateTabId(): string {
  //   return 'tab-' + Math.random().toString(36).substr(2, 9);
  // }
  
  // checkForNewTab(newTabId: string) {
  //   if (newTabId && newTabId !== this.tabId) {
  //     this.blockNewTab();
  //   }
  // }
 
  // blockNewTab() {
  //   alert('Powershop is already open in another tab.');
  //   window.location.href = 'about:blank'; 
  // }

  // @HostListener('window:beforeunload', ['$event'])
  // unloadHandler(event: Event) {
  //   const activeTabId = localStorage.getItem('activeTabId');
  //   if (activeTabId === this.tabId) {
  //     localStorage.removeItem('activeTabId');
  //   }
  // }
  

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  showNotificationBanner: boolean = true;
  
  shownotification() {
    this.showNotificationBanner = true;
  }

  hidenotification() {
    this.showNotificationBanner = false;
  }

}
