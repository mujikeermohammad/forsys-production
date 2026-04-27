import { Component, OnInit, HostListener, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, Subscription, combineLatest, of, timer } from 'rxjs';
import { Storefront, StorefrontService, UserService, User, Cart, Account, AccountService, CategoryService, OrderService, PriceListService, PriceList, AccountLocationService } from '@congarevenuecloud/ecommerce';
import { ExceptionService, MiniProfileComponent, ToasterPosition } from '@congarevenuecloud/elements';
import { PSConfigurationService, LanguageTranslateService, PSPlatformService, PSAccountService, PSUserService,PSQuoteService, PSCartService, PSOrderService } from 'src/app/services/ps-custom-services';
import { PSUser } from 'src/app/models/ps-user';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { take, map, switchMap, mergeMap } from 'rxjs/operators';
import { apiInternalService } from 'src/app/services/api-service';
import { OutputFieldComponent } from '@congarevenuecloud/elements';
import * as staticData from './../../../assets/staticData/countryStateList';
import { AutoLogoutService } from 'src/app/services/auto-logout.service';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '@congarevenuecloud/core';
import { AuthService } from 'src/app/auth/auth.service';
import { PSStorefront } from 'src/app/models/ps-storefront';
import { get, set, isUndefined, isNil } from "lodash"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PSQuote } from 'src/app/models/ps-quote';
const sv = (<any>window).sv;
enum Language {
  EN = 'EN',
  CN = 'CN'
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChild('profile', { static: false }) profile: MiniProfileComponent;
  @ViewChild('basicExampleNav') basicExampleNav: ElementRef;
  @ViewChild('togglerBtn') togglerBtn: ElementRef;
  pageTop: boolean = true;
  storefront$: Observable<Storefront>;
  user$: Observable<User>;
  psUser: PSUser;
  isLocal: boolean = false;
  logo$: Observable<string>;
  rightLogo: string;
  secondLogo: string;
  userName;
  displayActive: boolean;
  logo = {
    url: ''
  }
  internaluser: any = [];
  isGuestUser: boolean = true;

  showDropDown: boolean = false;
  showroute: boolean = true;
  selectedUser: any;
  currentUrl: string
  term: any;
  faqUrl: string;
  selectedLanguage: string = '';

  timerSubscription: Subscription;
  sfdcpollingSubscription: Subscription;
  @ViewChild('accountField', { static: false }) accountField: OutputFieldComponent;
  selectAccount: any;

  ssoCommunityURL: string;
  storefront: PSStorefront;
  is3rdPartyRep: boolean = false;
  constructor(
    private psConfigurationService: PSConfigurationService,
    private storefrontService: StorefrontService,
    private userService: UserService,
    private router: Router,
    private LanguageTranslateService: LanguageTranslateService,
    private priceListService: PriceListService,
    private apiService: ApiService,
    private psPlatformService: PSPlatformService,
    private authService: AuthService,
    private accountService: PSAccountService,
    private dataService: DataExchangeService,
    private cdf: ChangeDetectorRef,
    private categoryService: CategoryService,
    private api: apiInternalService,
    private renderer: Renderer2,
    private autoLogoutSer: AutoLogoutService,
    private translateService: TranslateService,
    private httpClient: HttpClient,
    private cartService: PSCartService,
    private exceptionService: ExceptionService,
    private psAccountService: PSAccountService,
    private AccountService: AccountService,
    private orderService: PSOrderService,
    private quoteService: PSQuoteService
  ) {
    this.userService.setType(PSUser);
    router.events.subscribe((event: NavigationStart) => {
      if (event instanceof NavigationStart) {
        let route = event.url.split('/')
        this.currentUrl = event.url;
        this.cdf.detectChanges();
        if (route[1] !== 'dashboard') {
          if (!this.isGuestUser && route[1] == "") {
            this.router.navigate(['/dashboard']);
            this.showroute = true;
          } else if (this.isGuestUser && route[1] == "") {
            this.router.navigate(['/home']);
            this.showroute = true;
          }
          else {
            this.showroute = false
          }
        } else {
          this.showroute = true
        }
        this.cdf.detectChanges();
      }
    })
    this.storefrontService.setType(PSStorefront);
    this.storefrontService.getStorefront().subscribe((val: any) => {
      this.storefront = val;
      localStorage.setItem('APTS_Community_ID_c', get(this.storefront, 'APTS_Community_ID_c'));
      if (get(this.storefront, 'APTS_Community_Name_c') === undefined)
        localStorage.setItem('APTS_Community_Name_c', environment.defaultCommunitySiteName);
      else
        localStorage.setItem('APTS_Community_Name_c', get(this.storefront, 'APTS_Community_Name_c'));
      localStorage.setItem('APTS_Salesforce_Site_Domain_c', get(this.storefront, 'APTS_Salesforce_Site_Domain_c'));
      localStorage.setItem('APTS_Salesforce_API_Version_c', get(this.storefront, 'APTS_Salesforce_API_Version_c'));
      this.ssoCommunityURL = localStorage.getItem('APTS_Community_Name_c') + '/login?retURL=/' + localStorage.getItem('APTS_Community_Name_c') || environment.defaultCommunitySiteName + '#/login/ssologin';

    })
  }

  ngOnInit() {
    localStorage.removeItem('search');
    // TO DO EAP : need to fix this method
    this.getInternalUsers();
    this.storefrontService.setType(PSStorefront);
    this.rightLogo = (sv && sv.resource) ? sv.resource + "assets/images/hitachi.svg" : "assets/images/hitachi.svg";
    this.secondLogo = (sv && sv.resource) ? sv.resource + "assets/images/hitachi-energy-mark-red.svg" : "assets/images/hitachi-energy-mark-red.svg";
    combineLatest([this.storefrontService.getStorefront(), this.userService.me()]).subscribe(([storefront, user]) => {
      this.storefront$ = of(storefront);
      this.user$ = of(user);
      this.isLocal = this.psConfigurationService.isLocalSite();

      this.getUser();
      this.currentUrl = this.router.url;
      if (this.currentUrl.split('/')[1] !== 'dashboard') {
        this.showroute = false
      } else {
        this.showroute = true
      }
      this.cdf.detectChanges();
    });

    this.timerSubscription = timer(0, 120000).pipe(
      map(() => {
        if (localStorage.getItem['__UamR7Sg6__'] === 'true') {
          this.userService.isLoggedIn().subscribe((isLogged) => {
            if (!isLogged)
              this.doLogout();
          });
        }
      })
    ).subscribe();
    // let lang = localStorage.getItem('preferred_language');
    // if (lang === 'en_EU' || lang === 'en_US' || lang === null) {
    //   this.selectedLanguage = 'English (US)';
    //   localStorage.setItem('locale', 'en_US');
    // }
    // if (lang === 'zh_CN') {
    //   this.selectedLanguage = 'Chinese';
    //   localStorage.setItem('locale', 'zh_CN');
    // }
    // Get quoteId or orderId from sessionStorage

    const urlFromEmail = sessionStorage.getItem('urlFromEmail');

    // Check if urlFromEmail exists and handle quote retrieval
    if (!isNil(urlFromEmail)) {
      const urlSegments = urlFromEmail.split('/');
      
      // quote retrieval
      if (urlSegments[1] === 'quotes' && !isNil(urlSegments[2])) {
        const quoteId = urlSegments[2];
        
        this.quoteService.getQuoteById(quoteId).pipe(take(1)).subscribe(quoteres => {
          setTimeout(() => {
            this.changeAccount(quoteres['Account']['Id']);
          }, 300);
        });
      }

      // order retrieval
      if (urlSegments[1] === 'orders' && !isNil(urlSegments[2])) {
        const orderId = urlSegments[2];
        
        this.orderService.getOrder(orderId).pipe(take(1)).subscribe(orders => {
          setTimeout(() => {
            this.changeAccount(orders['BillToAccount']['Id']);
          }, 300);
        });
      }
    }

    
    if(isNil(sessionStorage.getItem('urlofRLPid'))){
    this.change_accfromId();
    }
    else{
      var quoteIdFromQT = sessionStorage.getItem('urlofRLPid');
        if (!isNil(sessionStorage.getItem('urlofRLPid')) && quoteIdFromQT.split('/')[1] == 'quotes') {
      this.quoteService.getQuoteById(quoteIdFromQT.split('/')[2]).pipe(take(1)).subscribe(quoteres => {
        sessionStorage.setItem('account',quoteres['Account']['Id'])
         this.changeAccount(quoteres['Account']['Id']);
        // this.cdf.detectChanges();
      });
    }
    }
  }

  change_accfromId(){
    let url = sessionStorage.getItem('urlfromQT')
    let rlId : string
    let path : string
    if(!isNil(url?.split('/')[1].split('?')[1])){
       this.psPlatformService.getRLPid(url?.split('/')[1].split('?')[1]).subscribe(resp =>{
        if(resp?.length > 0){
        rlId = resp[0].Id;
        path = '/quotes/' + rlId;
        sessionStorage.setItem('urlofRLPid',path);
        }
        else{
          path='/quotes'
          this.router.navigate([path])
        }
       })
    }
}

  getInternalUsers() {
    const userId: string = localStorage.getItem('userId');
    // check logged in user is third party user or not
     this.userService.getCurrentUser()
      .pipe(take(1),
      switchMap((userResponse) => {
        if (userResponse.Alias !== 'guest') {
          return this.psPlatformService.isThirdPartyUser(userResponse.Id).pipe(
            take(1),
            map((res) => {
              this.is3rdPartyRep = res;
              this.dataService.isThirdPartyUser = res;
              return userResponse;
            })
          );
        }
        return of(userResponse);
      }),
        switchMap((userDetails: PSUser) => {
          localStorage.setItem('Timezone', get(JSON.parse(get(userDetails, 'Timezone')), 'TimezoneId'));

          const localeName = get(JSON.parse(get(userDetails, 'Locale')), 'Name');
          localStorage.setItem('locale__Name', localeName);

          if (localeName === 'zh_CN' || localeName === 'zh') {
            this.setSelectedLanguageAndLocale(Language.CN, 'zh');
          } else {
            this.setSelectedLanguageAndLocale(Language.EN, 'en_US');
          }

          /**
          const lang = this.getPreferredLanguage(userDetails);
          switch (lang) {
            case 'zh_CN':
            case 'zh':
              this.setSelectedLanguageAndLocale(Language.CN, 'zh');
              break;
            case 'en_EU':
            case 'en_US':
            case 'en-US':
            default:
              this.setSelectedLanguageAndLocale(Language.EN, 'en_US');
              break;
          }        
          */
          // for 3rd party & internal users call getEntitledAccounts or create empty array 
        // let isInternalUserLoggedIn  = (userDetails.Contact_c == null && userDetails.Alias !== 'guest') ? true : false;
        // if(isInternalUserLoggedIn )
        //   localStorage.setItem('isInternalUserLoggedIn','true');
        // else
        // localStorage.setItem('isInternalUserLoggedIn','false'); 
        const userDetails$ = (userDetails && userDetails.Alias !== 'guest' && (this.is3rdPartyRep || !userDetails.Contact_c))
        ? this.psPlatformService.getEntitledAccounts(userDetails.Id)
        : of([]);

        return combineLatest([this.accountService.getCurrentAccount(), userDetails$]);
        }), take(1),
        switchMap(([activeAcccount, output]: any) => {
          let defaultAccountValue, defaultAccount$;
          this.showDropDown = output?.length > 0 ? true : false;
          /* Internal user login and check if the user associated to multiple accounts */
          if (output?.length > 0) {
            this.internaluser = output;
            defaultAccountValue = output.filter(data => data.accountId === localStorage.getItem('account'))[0];
            if(!isNil(sessionStorage.getItem('urlofRLPid'))){
              defaultAccountValue = output.filter(data => data.accountId === sessionStorage.getItem('account'))[0];
            }
            if (!defaultAccountValue) {
              defaultAccountValue = output.filter(data => data?.isDefault)[0];
            }
            defaultAccount$ = isUndefined(defaultAccountValue) ? output[0] : defaultAccountValue;
            if (!defaultAccount$) {
              return [];
            }
            localStorage.setItem('account', defaultAccount$.Id);
            localStorage.setItem('accountName', defaultAccount$.Name);
            const priceListId = defaultAccount$.priceListId;

            if (priceListId) {
              localStorage.setItem(staticData.I_PRICELIST_ID, priceListId);
              localStorage.setItem('pricelistId', priceListId);
            }
          } else {
            /* external user login */
            defaultAccount$ = activeAcccount
            set(defaultAccount$, 'accountId', activeAcccount?.Id);
          }

        return this.accountService.getAccountById(defaultAccount$.accountId).pipe(
          take(1),
          map(acc => {
            this.psConfigurationService.internalUserPriceListId.next(get(acc.PriceList, 'Id'));
            this.psConfigurationService.setCurrencyAndLocale(this.priceListService);
            localStorage.setItem('pricelistId', get(acc.PriceList, 'Id'));
            
            this.selectedUser = defaultAccount$.Name;
            this.account.Id = defaultAccount$.accountId;
            this.changeAccount(this.account.Id);

              if (acc?.['GUID_c']) {
                localStorage.setItem('defaultAccount', 'false');
                localStorage.setItem('isInternalUser', 'false');
              } else if (acc?.['ICV_ID_c']) {
                localStorage.setItem('defaultAccount', 'true');
                localStorage.setItem('isInternalUser', 'true');
              } else {
                localStorage.setItem('defaultAccount', 'false');
                localStorage.setItem('isInternalUser', 'false');
              }
            })
          );
        })
      ).pipe(take(1)).subscribe(() => {
        this.cdf.detectChanges();
      }, (err) => {
        console.error('Failed to get user details', err);
      });
  }

  private getPreferredLanguage(userDetails) {
    var language = sessionStorage.getItem('preferred_language')
      ? sessionStorage.getItem('preferred_language')
      : (localStorage.getItem(staticData.LOCALE_SELECTED) === '' || localStorage.getItem(staticData.LOCALE_SELECTED) === null
        ? get(JSON.parse(userDetails.Locale), 'Name')
        : localStorage.getItem('preferred_language'));

    this.translateService.use(language).subscribe();
    return language;
  }

  private setSelectedLanguageAndLocale(language: string, locale: string) {
    this.selectedLanguage = language;
    localStorage.setItem('locale', locale);
  }


  getUser() {
    this.userService.getCurrentUser().subscribe(userDetails => {
      this.isGuestUser = (userDetails.Alias === 'guest') ? true : false;
      this.dataService.userDetails = userDetails;
      this.dataService.isGuestUser = this.isGuestUser;
      if (!this.isGuestUser) {
        this.quoteService.describe(PSQuote, 'APTS_RW_Incoterm_c').pipe(take(1)).subscribe(resp => {this.psPlatformService.incoTermHeaderLevelInfoPGTR.next(resp?.['picklistValues']?.[resp?.['picklistValues']?.length -1]?.DisplayText)});
        this.userName = userDetails.FirstName + ' ' + userDetails.LastName;
        /*if (localStorage.getItem('account'))
        {
          let accId = localStorage.getItem('account');
          this.accountDetailsObj[accId] = {accountid: accId};
        }*/
        this.sfdcpollingSubscription = timer(0, 600000).pipe(
          map(() => {
            this.psPlatformService.getToggleNotificationInfo(this.httpClient)
              .subscribe(res => { }, (err) => {
                if (err.status === 401) {
                  this.doLogout();
                }
              });
          })
        ).subscribe();
      }
    });
  }

  doLogout() {
    this.routeTo();
    this.userService.logout();
  }

  timer = this.autoLogoutSer.autoLogOut({
    timeout: 1800, //in secs
    onTimeout: () => {
      let isLoggedIn = false
      this.user$ = this.userService.me();
      this.user$.subscribe(userDetails => {
        isLoggedIn = (userDetails.Alias === 'guest') ? false : true;
        if (isLoggedIn) {
          this.doLogout();
        }
      });

    }
  })

  redirectToHome() {
    if (this.isGuestUser) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/dashboard'])
    }
  }

  handleSignIn() {
    localStorage.setItem('signInClicked', 'true');
    localStorage.removeItem('accountName');
    this.showNotificationBanner = false;
    if (this.isLocal || environment.enableSSO == false) {
      this.userService.login();
    } else {
      window.location.href = this.ssoCommunityURL;
    }
  }

  registernow() {
    this.showNotificationBanner = false;
    this.router.navigate(['/leads/register']);
  }

  routeTo() {
    this.showNotificationBanner = false;
    // this.router.navigate(['/products']);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.pageTop = window.pageYOffset <= 0;
  }

  accountDetailsObj: any = {};
  /* fetch the current account details */
  getTheSelectedAccountDetails(id) {
    if (this.currentUrl.includes('dashboard')) {
      this.dataService.updateLoaderValue(true);
    }
    if (this.accountDetailsObj[id] !== undefined || this.accountDetailsObj[id]?.accountid !== id) {
      localStorage.removeItem('account');
      localStorage.setItem('account', id);
      this.psAccountService.getAccountById(id).pipe(take(1)).subscribe(data => {
        if (!isNil(data) && data['length'] > 0 && data[0].Id === id) {
          this.accountDetailsObj[id] = { accountid: data[0].Id, accObj: data[0] };
          this.changeAccount(data[0].Id)
        }
      })
    } else {
      this.changeAccount(id)
    }

  }
  account: Account = new Account();
  changeAccount(id) {

    // Only change account if id is different than

    // these both are used in checkout page for shipping address
    localStorage.removeItem('locId');
    localStorage.removeItem('checkoutNewAddress');
    localStorage.removeItem('cart_supplier');
    localStorage.removeItem('PLength');
    localStorage.removeItem('firstProduct');
    localStorage.removeItem('supplierInfo');
    localStorage.removeItem('local-cart');
    sessionStorage.removeItem('displayPrice');
    localStorage.setItem('eConfigRevalidate', 'true')
    //Let's the cache, shall we:
    // this.psPlatformService.checkCache();
    // commented by venkat because not able to switch the account for internal user
    // _.memoize.Cache = new (_.memoize.Cache as any);

    this.internaluser.forEach(data => {
      if (data.accountId == id) {
        this.selectedUser = data.accountName;
        localStorage.removeItem(staticData.CART_ID);
        localStorage.setItem('account', id);
        localStorage.setItem('accountName', data.accountName)
        if (data.currencyCode != null && data.currencyCode != '') {
          this.userService.setCurrency(data.currencyCode);
        }

        if (data.priceListId != null && data.priceListId != '') {
          localStorage.setItem(staticData.I_PRICELIST_ID, data.priceListId);
        } else {
          localStorage.removeItem(staticData.I_PRICELIST_ID);
          localStorage.removeItem(staticData.CURRENCY);
        }
      }
    });

    this.psAccountService.getAccountById(id).pipe(take(1),
      switchMap((data) => {
        if (!isNil(data) && data['length'] > 0 && data[0].Id === id) {
          var acc = data[0];

          this.psConfigurationService.internalUserPriceListId.next(get(acc.PriceList, 'Id'));
          if (acc?.['GUID_c']) {
            localStorage.setItem('defaultAccount', 'false');
            localStorage.setItem('isInternalUser', 'false');
          } else if (acc?.['ICV_ID_c']) {
            localStorage.setItem('defaultAccount', 'true');
            localStorage.setItem('isInternalUser', 'true');
          } else {
            localStorage.setItem('defaultAccount', 'false');
            localStorage.setItem('isInternalUser', 'false');
          }
          return this.accountService.setAccount(acc)
        }
      })).pipe(take(1))
      .subscribe(acc => {
        this.psConfigurationService.setCurrencyAndLocale(this.priceListService);
        this.storefrontService.refresh();
        if(!this.isGuestUser) this.cartService.reprice();
        this.dataService.updateLoaderValue(false);
        this.api.dataChange.next(true);
      }, (err) => {
        this.cartService.getMyCart().pipe(take(1)).subscribe((c) => {
          if (c.get('isProcessingPending') && !this.isGuestUser) {
            this.psConfigurationService.setCurrencyAndLocale(this.priceListService);
            this.storefrontService.refresh();
            this.api.dataChange.next(true);
            this.exceptionService.showError('CART.CORRUPTED_CART', 'Error', null, ToasterPosition.TOP_RIGHT);
          }
        }, error => {
          this.dataService.updateLoaderValue(false);
          console.error('Error in the cart: ', error);
        })
      })
  }

  translateLang(ev) {
    // if(ev.target.innerHTML === 'French') {
    //   this.selectedLanguage = ev.target.innerHTML;
    //   // localStorage.setItem(staticData.LOCALE, 'fr');
    //   this.translateService.use('fr');
    //   localStorage.setItem('preferred_language', 'fr');
    // }
    if (ev.currentTarget.value === 1) {
      this.selectedLanguage = Language.EN;
      localStorage.setItem(staticData.LOCALE_SELECTED, "true");
      this.translateService.use('en');
      localStorage.setItem('preferred_language', 'en_US');
      sessionStorage.setItem('preferred_language', 'en_US');
    }

    if (ev.currentTarget.value === 2) {
      this.selectedLanguage = Language.CN;
      // localStorage.setItem(staticData.LOCALE, 'en_US');
      localStorage.setItem(staticData.LOCALE_SELECTED, "true");
      this.translateService.use('zh');
      localStorage.setItem('preferred_language', 'zh');
      sessionStorage.setItem('preferred_language', 'zh');
    }
    setTimeout(() => {
      this.LanguageTranslateService.languageSwitched$.next(true);
    }, 1000)
  }

  hideBasicExampleNav() {
    this.renderer.addClass(this.togglerBtn.nativeElement, 'collapsed')
    this.renderer.removeClass(this.basicExampleNav.nativeElement, 'show');
  }

  getvalue() {
    if (document.getElementById('unidac-industries').getAttribute('aria-expanded')) {
      this.term = ''
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  showNotificationBanner: boolean = true;
  shownotification() {
    this.showNotificationBanner = true;
  }

  hidenotification() {
    this.showNotificationBanner = false;
  }

  openFavorites() {
    this.router.navigate(['/favorites']);
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    this.sfdcpollingSubscription.unsubscribe();
    this.psPlatformService.incoTermHeaderLevelInfoPGTR.unsubscribe();
  }

}
