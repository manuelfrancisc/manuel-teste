webpackJsonp([13],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/profile/profile.html"*/'<ion-content>\n    <ion-grid>\n        <ion-row>\n        <ion-col text-center>\n            <img src=" assets/imgs/taqui-ilustration-activities.png" class="img-center">\n            <p> Manuel Octávio</p>\n             <h6> Developer</h6>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-center>\n              <p> Lorem, ipsum dolor sit ldmsdkkfknojnfjoenbow <br>nsdonsodnons cdcdcdcdcdc dfdfdfddond.</p>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n       <ion-row padding> \n         \n        <ion-col text-center>\n            <button ion-button  color="taqui" outline id="btn" > Meu Perfil</button>\n            <button ion-button  color="gray" outline  id="btn"> Convidar Amigos</button>\n            <button ion-button  color="gray" outline  id="btn"> Editar Perfil</button>\n         </ion-col>\n       </ion-row>\n\n            <ion-grid>\n                <h4 text-center><b>locais Sugeridos</b></h4> \n              <ion-row class="row-padding">\n                <ion-col class="ion-col" >\n                  <img  src=" assets/imgs/taqui-ilustration-activities.png" (click)="Onhotepage()" >\n                  <p text-center > Natureza</p>\n                </ion-col>\n                <ion-col  class="ion-col">\n                  <img  src=" assets/imgs/taqui-ilustration-activities.png"  (click)="onMovPage()" >\n                    <p text-center > Cinema</p>\n                </ion-col>\n                <ion-col class="ion-col" >\n                  <img  src=" assets/imgs/taqui-ilustration-activities.png"  (click)="Onhotepage()" >\n                  <p text-center > Restaurante </p>\n                </ion-col>\n              </ion-row>\n   \n             </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_movies_movies__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, afs, http) {
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.http = http;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.startobs = this.startAt.asObservable();
        this.endobs = this.endAt.asObservable();
    }
    //Icone Link
    HomePage.prototype.ProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.getallclubs().subscribe(function (clubs) {
            _this.allclubs = clubs;
        });
        __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__["Observable"].combineLatest(this.startobs, this.endobs).subscribe(function (value) {
            _this.firequery(value[0], value[1]).subscribe(function (clubs) {
                _this.clubs = clubs;
            });
        });
        this.ml();
    };
    //Json
    HomePage.prototype.ml = function () {
        var _this = this;
        this.http.get("http://fc66e15e.ngrok.io/wp-json/wp/v2/posts/")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.data2 = data; console.log(data); })
            , function (error) { console.log(error); };
    };
    HomePage.prototype.search = function ($event) {
        var q = $event.target.value;
        if (q != '') {
            this.startAt.next(q);
            this.endAt.next(q + "\uf8ff");
        }
        else {
            this.clubs = this.allclubs;
        }
    };
    HomePage.prototype.firequery = function (start, end) {
        return this.afs.collection('epl', function (ref) { return ref.limit(4).orderBy('club').startAt(start).endAt(end); }).valueChanges();
    };
    HomePage.prototype.getallclubs = function () {
        return this.afs.collection('epl', function (ref) { return ref.orderBy('club'); }).valueChanges();
    };
    //Navigating-Routes  (Pages)
    HomePage.prototype.HotelPage = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */], { manuel: "Hotel" }); };
    HomePage.prototype.ActivityPage = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */], { manuel: "Actividade" }); };
    HomePage.prototype.NaturePage = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */], { manuel: "Natureza" }); };
    HomePage.prototype.BeachPage = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */], { manuel: "Praia" }); };
    HomePage.prototype.RestaurantePage = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */], { manuel: "Restaurante" }); };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/home/home.html"*/'<ion-header padding>\n<ion-item id="search"> \n  <ion-label id="icon"><ion-icon name="search"></ion-icon></ion-label>\n  <ion-input placeholder="Ex: Hotel Tivoli" type="text" [(ngModel)]="searchterm" (keydown)="search($event)"> </ion-input>\n</ion-item>\n<ion-avatar right top> <img src="https://firebasestorage.googleapis.com/v0/b/taquiclient.appspot.com/o/25398685_1466687843447834_8763177209878655648_n.jpg?alt=media&token=040e9581-ea10-4d3d-99bc-aa87389d1d2c" id="avatar" (click)=" ProfilePage()"></ion-avatar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="searchterm">\n    <div *ngFor="let club of clubs">\n      <ion-item>\n         <ion-avatar item-start> <img src="{{club.image}}"> </ion-avatar>\n        <h3>{{club.club | uppercase}}</h3>\n        <h3  style="color:rgb(235, 98, 121)"><ion-icon name="ios-star"></ion-icon> <ion-icon name="ios-star"></ion-icon> <ion-icon name="ios-star"> </ion-icon> <ion-icon name="ios-star"></ion-icon>  <ion-icon name="ios-star-outline"></ion-icon> </h3>  \n        <h3>{{club.country}}</h3>   \n      </ion-item>\n      <hr>\n    </div>\n\n    \n    </div>\n      <div *ngIf="!searchterm">\n          <ion-grid>\n                  <h4> <b> Pesquisa</b></h4> \n                <ion-row class="row-padding">\n                  <ion-col class="ion-col" >\n                    <img  src="assets/imgs/taqui-ilustration-nature.png" (click)="NaturePage()" >\n                    <p text-center > Natureza</p>\n                  </ion-col>\n                  <ion-col  class="ion-col">\n                      <img  src="assets/imgs/taqui-ilustration-beach.png"  (click)="BeachPage()">\n                      <p text-center >  Praias</p>\n                    </ion-col> \n                  <ion-col class="ion-col" >\n                    <img  src="assets/imgs/taqui-ilustration-restauran.png"  (click)="RestaurantePage()">\n                    <p text-center > Restaurante </p>\n                  </ion-col>\n                </ion-row>\n  \n                <ion-row class="row-padding"> \n                  <ion-col  class="ion-col">\n                    <img  src="assets/imgs/taqui-ilustration-hotel.png "  (click)="HotelPage()" >\n                    <p text-center> Hotéis</p>\n                  </ion-col>\n                  <ion-col  class="ion-col">\n                    <img  src=" assets/imgs/taqui-ilustration-activities.png"  (click)="ActivityPage()" >\n                    <p text-center >  Actividades</p>\n                 \n                  </ion-col>   \n                  <ion-col  class="ion-col">\n                  \n                    </ion-col> \n                </ion-row>\n          \n              </ion-grid>\n\n              <ion-grid>\n                  <h4> <b> Melhores Hoteis</b></h4> \n                <ion-row class="row-padding">\n                  <ion-col  >\n                      <img  src="assets/imgs/taqui-ilustration-hotel.png " >\n                    <p text-center > Natureza</p>\n                    \n                  </ion-col>\n                  <ion-col>\n                      <img  src="assets/imgs/taqui-ilustration-hotel.png " >\n                      <p text-center > Cinema</p>\n                  </ion-col>\n                  <ion-col >\n                      <img  src="assets/imgs/taqui-ilustration-hotel.png " >\n                    <p text-center > Restaurante </p>\n                  </ion-col>\n                </ion-row>        \n              </ion-grid>\n\n             \n              <ion-grid>\n                  <h4> <b> Melhores Restaurantes</b></h4>\n                <ion-row class="row-padding">\n                  <ion-col >\n                      <img  src="assets/imgs/taqui-ilustration-restauran.png"  >\n                    <p text-center > Natureza</p>\n                    \n                  </ion-col>\n                  <ion-col>\n                      <img  src="assets/imgs/taqui-ilustration-restauran.png"  >\n                      <p text-center > Cinema</p>\n                  </ion-col>\n                  <ion-col >\n                      <img  src="assets/imgs/taqui-ilustration-restauran.png"   >\n                    <p text-center > Restaurante </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n            \n              <ion-grid>\n                  <h4> <b> Melhores Praias</b></h4>\n                <ion-row class="row-padding">\n                  <ion-col  >\n                      <img  src="assets/imgs/taqui-ilustration-beach.png">\n                    <p text-center > Natureza</p>\n                    \n                  </ion-col>\n                  <ion-col>\n                      <img  src="assets/imgs/taqui-ilustration-beach.png">\n                      <p text-center > Cinema</p>\n                  </ion-col>\n                  <ion-col >\n                      <img  src="assets/imgs/taqui-ilustration-beach.png">\n                    <p text-center > Restaurante </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n               \n              <ion-grid>\n                  <h4> <b>Melhores Locais Naturais</b></h4> \n                <ion-row class="row-padding">\n                  <ion-col  >\n                    <img  src=" assets/imgs/taqui-ilustration-activities.png" >\n                    <p text-center > Natureza</p>\n                    \n                  </ion-col>\n                  <ion-col>\n                    <img  src=" assets/imgs/taqui-ilustration-activities.png"  >\n                      <p text-center > Cinema</p>\n                  </ion-col>\n                  <ion-col >\n                    <img  src=" assets/imgs/taqui-ilustration-activities.png"   >\n                    <p text-center > Restaurante </p>\n                  </ion-col>\n                </ion-row>    \n              </ion-grid>\n             \n              <ion-grid>\n                  <h4> <b> Melhores Actividades</b></h4> \n                <ion-row class="row-padding">\n                  <ion-col >\n                    <img  src=" assets/imgs/praia.png"  >\n                    <p text-center > Canoagem</p>\n                    \n                  </ion-col>\n                  <ion-col>\n                    <img  src=" assets/imgs/campismo.png"   >\n                      <p text-center > Campismo</p>\n                  </ion-col>\n                  <ion-col >\n                    <img  src=" assets/imgs/judo.png"  >\n                    <p text-center > Jiu Jitsu Brasileiro </p>\n                  </ion-col>\n                </ion-row>    \n              </ion-grid>\n\n            \n\n\n              <ion-grid>\n                <h4> <b> Artigos do Blog</b></h4>\n              <ion-row   >\n                <div class="row-pad" *ngFor="let dat of data2; index as i">\n                <ion-card *ngIf=" i<3">\n                <ion-col auto >\n                <a href="{{dat.link}}"> <img  src="assets/imgs/taqui-ilustration-activities.png"  class="img-Artigos" ></a> \n               <a href=" {{dat.link}}"></a>   <h3 style="font-size:10px; font-weight:bold;" text-center> {{dat.title.rendered}}</h3>\n                </ion-col>\n              </ion-card>\n                </div>\n              </ion-row>    \n            </ion-grid>\n\n            </div>   \n\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/home/home.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__providers_movies_movies__["a" /* MoviesProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(200);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = (function () {
    function AboutPage(navCtrl, db, nabp, afs) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.nabp = nabp;
        this.afs = afs;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.startobs = this.startAt.asObservable();
        this.endobs = this.endAt.asObservable();
        this.manuel = this.getAll();
        this.teste = this.nabp.get("manuel");
        console.log(this.teste);
        console.log(this.manuel);
    }
    AboutPage.prototype.getAll = function () {
        return this.db.list('User')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getallclubs().subscribe(function (clubs) {
            _this.allclubs = clubs;
        });
        __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].combineLatest(this.startobs, this.endobs).subscribe(function (value) {
            _this.firequery(value[0], value[1]).subscribe(function (clubs) {
                _this.clubs = clubs;
            });
        });
    };
    /* getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();
    
        // set val to the value of the searchbar
        let val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      } */
    AboutPage.prototype.search = function ($event) {
        var q = $event.target.value;
        if (q && q.trim() != '') {
            this.startAt.next(q);
            this.endAt.next(q + "\uf8ff");
            this.clubs = this.clubs.filter(function (item) {
                return (item.toLowerCase().indexOf(q.toLowerCase()) > -1);
            });
        }
        else {
            this.clubs = this.allclubs;
        }
    };
    AboutPage.prototype.firequery = function (start, end) {
        if (this.teste == "Hotel") {
            this.afs.collection('Hotel', function (ref) { return ref.limit(4).orderBy('name').startAt(start).endAt(end); }).valueChanges();
        }
        if (this.teste == "Natureza") {
            this.afs.collection('natureza', function (ref) { return ref.limit(4).orderBy('name').startAt(start).endAt(end); }).valueChanges();
        }
        if (this.teste == "Actividade") {
            this.afs.collection('actividade', function (ref) { return ref.limit(4).orderBy('name').startAt(start).endAt(end); }).valueChanges();
        }
        if (this.teste == "Praia") {
            this.afs.collection('praia', function (ref) { return ref.limit(4).orderBy('name').startAt(start).endAt(end); }).valueChanges();
        }
        if (this.teste == "Restaurante") {
            this.afs.collection('restaurante', function (ref) { return ref.limit(4).orderBy('name').startAt(start).endAt(end); }).valueChanges();
        }
        else {
            return this.afs.collection('epl', function (ref) { return ref.limit(4).orderBy('club').startAt(start).endAt(end); }).valueChanges();
        }
    };
    AboutPage.prototype.getallclubs = function () {
        if (this.teste == "Hotel") {
            return this.afs.collection('Hotel', function (ref) { return ref.orderBy('name'); }).valueChanges();
        }
        if (this.teste == "Natureza") {
            return this.afs.collection('natureza', function (ref) { return ref.orderBy('name'); }).valueChanges();
        }
        if (this.teste == "Actividade") {
            return this.afs.collection('actividade', function (ref) { return ref.orderBy('name'); }).valueChanges();
        }
        if (this.teste == "Praia") {
            return this.afs.collection('praia', function (ref) { return ref.orderBy('name'); }).valueChanges();
        }
        if (this.teste == "Restaurante") {
            return this.afs.collection('restaurante', function (ref) { return ref.orderBy('name'); }).valueChanges();
        }
        else {
            return this.afs.collection('epl', function (ref) { return ref.orderBy('club'); }).valueChanges();
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/about/about.html"*/'<ion-header >\n  <ion-item  id="input">\n      <ion-label id="icon"><ion-icon name="search"></ion-icon></ion-label>\n    <ion-input placeholder="Ex: Hotel Tivoli" type="text" [(ngModel)]="searchterm" (keydown)="search($event)"> </ion-input>\n  </ion-item>\n  <ion-select [(ngModel)]="eventos" id="btn" cancelText="Cancelar" okText="OK" interface="action-sheet" >\n      <ion-option value="nes" selected>{{teste}}</ion-option>\n      <ion-option value="n64"> natureza</ion-option>\n      <ion-option value="ps">manuel</ion-option>\n    </ion-select>\n\n\n    <ion-row> \n        <ion-col id="row"> <button ion-button outline color="taqui" style="font-size:12px;"> Em Luanda </button> </ion-col>\n        <ion-col id="row"> <button ion-button outline color="gray" style="font-size:12px;"> Perto de mim</button> </ion-col>\n        <ion-col id="row"> <button ion-button outline color="gray" style="font-size:12px;">Mais filtro </button> </ion-col>\n   </ion-row>\n  </ion-header>\n\n<ion-content padding>\n    <div *ngIf="searchterm">\n    <div *ngFor="let club of clubs">\n        <ion-item>\n           <ion-avatar item-start> <img src="{{club.image}}"> </ion-avatar>\n          <h3>{{club.club | uppercase}}</h3>\n          <h3> {{club.name | uppercase}} </h3>\n          <h3  style="color:rgb(235, 98, 121)"><ion-icon name="ios-star"></ion-icon> <ion-icon name="ios-star"></ion-icon> <ion-icon name="ios-star"> </ion-icon> <ion-icon name="ios-star"></ion-icon>  <ion-icon name="ios-star-outline"></ion-icon> </h3>  \n          <h3>{{club.city}}</h3>  \n          <h3>{{club.country}}</h3>   \n        </ion-item>\n        <hr>\n      </div>\n</div>\n\n<div *ngIf="!searchterm">\n<div *ngFor="let manu of manuel | async">\n  <ion-item>\n  <ion-avatar item-start><img  src="https://firebasestorage.googleapis.com/v0/b/taquiclient.appspot.com/o/25398685_1466687843447834_8763177209878655648_n.jpg?alt=media&token=040e9581-ea10-4d3d-99bc-aa87389d1d2c"> </ion-avatar> \n       <p>{{manu.name}}</p>  \n       <p>{{manu.id}}</p>   \n </ion-item> \n <hr> \n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding="40px">\n \n    <ion-title text-center > ChatBot</ion-title>\n    <ion-avatar right top> <img src="http://lorempixel.com/400/200" id="avatar"></ion-avatar>\n \n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n    <ion-input placeholder="digite a sua mensagem"></ion-input>\n      <ion-buttons end id="buttons" >\n        <button ion-button icon-right  id="btn" color="light">\n         <ion-icon name="ios-send-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n   \n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritePage = (function () {
    function FavoritePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritePage');
    };
    FavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/favorite/favorite.html"*/'<!--\n  Generated template for the FavoritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding="40px"  height="70px">\n \n    <ion-title text-center>Locais e Atividades Favoritas</ion-title>\n    <ion-avatar right top> <img src="http://lorempixel.com/400/200" id="avatar"></ion-avatar>\n \n</ion-header>\n\n<ion-content padding>\n  <ion-item id="input"> \n      <ion-label id="icon"><ion-icon name="search"></ion-icon></ion-label>\n      <ion-input placeholder="Ex: Hotel Tivoli" > </ion-input>\n  </ion-item>\n  \n   \n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/favorite/favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FavoritePage);
    return FavoritePage;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.HomePage = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]); };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/login/login.html"*/'<ion-content padding>\n    <ion-grid padding>\n       <ion-row>\n       <ion-col text-center>\n           <img src="assets/imgs/Taqui.png" class="img-center">\n           <h6 >Faça Login</h6>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col text-center >\n            <ion-item class="item"> \n                 <ion-input placeholder="Numero de telefone ou email"></ion-input>\n            </ion-item>\n       </ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col text-center >\n           <ion-item class="item"> \n                <ion-input placeholder="Senha"></ion-input>\n           </ion-item>\n      </ion-col>\n      </ion-row>\n       <ion-row>\n         <ion-col text-center>\n         <button ion-button color="taqui" round (click)="HomePage()">Entrar</button>\n         </ion-col>\n         </ion-row>\n         <ion-row>\n             <ion-col text-center>\n             <p> <a> Esqueci a senha<br> Não tenho conta </a></p>\n             </ion-col>\n             </ion-row>\n       </ion-grid>\n    <p id="swallow">swallow, All rights reserved 2017 (c)</p>\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PhoneAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhoneAuthPage = (function () {
    function PhoneAuthPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.octavio = 0;
    }
    PhoneAuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneAuthPage');
    };
    PhoneAuthPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    PhoneAuthPage.prototype.SendCode = function () {
        var _this = this;
        var applicationVerifier = new __WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"].auth.RecaptchaVerifier('sign-in-button', { 'size': 'invisible' });
        var provider = new __WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"].auth.PhoneAuthProvider();
        provider.verifyPhoneNumber('+244' + this.PhoneNumber, applicationVerifier).then(function (data) {
            _this.verificationCode = data;
            _this.octavio = 1;
            console.log(data);
        });
    };
    PhoneAuthPage.prototype.Resendcode = function () {
        var _this = this;
        var credencial = __WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"].auth.PhoneAuthProvider.credential(this.verificationCode, this.code);
        __WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"].auth().signInWithCredential(credencial).then(function (data) {
            _this.octavio = 2;
            console.log(data);
        });
    };
    PhoneAuthPage.prototype.UserPassWord = function () {
        var _this = this;
        this.db.list('User').push({ id: this.PhoneNumber, name: this.displayName, senha: this.Senha })
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
            console.log(data);
        });
    };
    PhoneAuthPage.prototype.BackButton = function () {
        this.navCtrl.pop();
    };
    PhoneAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-phone-auth',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/phone-auth/phone-auth.html"*/'<ion-content padding>\n  <div *ngIf="octavio==0">\n    <ion-grid padding>\n    <ion-row>\n    <ion-col text-center>\n        <img src="assets/imgs/Taqui.png" class="img-center">\n        <h6 >Cadastra-se,é gratis</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center >\n         <ion-item class="item"> \n              <ion-label class="icon"><img src="assets/imgs/angola.ico"></ion-label>\n              <ion-input placeholder="insira o numero de telefone"  [(ngModel)]="PhoneNumber" ></ion-input>\n         </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n      <button ion-button color="taqui" round id="sign-in-button" (click)="SendCode()"> SEGUINTE</button>\n      </ion-col>\n      </ion-row>\n    </ion-grid>\n </div>\n <div  *ngIf="octavio==1">\n <ion-grid padding>\n    <ion-row>\n    <ion-col text-center>\n        <img src="assets/imgs/Taqui.png" class="img-center">\n        <h6 >Enviamos um código por SMS <br> para: +244 {{PhoneNumber}}</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center >\n         <ion-item class="item"> \n              <ion-label class="icon"><img src="assets/imgs/angola.ico"></ion-label>\n              <ion-input placeholder="Insira aqui o código" [(ngModel)]="code"></ion-input>\n         </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n      <button ion-button color="taqui" round (click)="Resendcode()">CONFIRMAR</button>\n      </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col text-center>\n          <p> <a>Não recebí o código, reenvie</a></p>\n          </ion-col>\n          </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="octavio==2">\n    <ion-grid padding>\n       <ion-row>\n       <ion-col text-center>\n           <img src="assets/imgs/Taqui.png" class="img-center">\n           <h6 >Só mais um passo para terminar</h6>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col text-center >\n            <ion-item class="item"> \n                 <ion-input placeholder="Nome Completo" [(ngModel)]="displayName"></ion-input>\n            </ion-item>\n       </ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col text-center >\n           <ion-item class="item"> \n                <ion-input placeholder="Nova senha" [(ngModel)]="Senha"></ion-input>\n           </ion-item>\n      </ion-col>\n      </ion-row>\n       <ion-row>\n         <ion-col text-center>\n         <button ion-button color="taqui" round (click)="UserPassWord()">TERMINAR</button>\n         </ion-col>\n         </ion-row>\n         <ion-row>\n             <ion-col text-center>\n             <p> Ao clicar em "TERMINAR", você concorda com <br> os nossos <a>termos e condições</a>.</p>\n             </ion-col>\n             </ion-row>\n       </ion-grid>\n     </div>\n     <div id="recaptcha-container"></div>\n    <p id="swallow">swallow, All rights reserved 2017 (c)</p>\n    \n    </ion-content>\n    '/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/phone-auth/phone-auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PhoneAuthPage);
    return PhoneAuthPage;
}());

//# sourceMappingURL=phone-auth.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phone_auth_phone_auth__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.PhoneAuthPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__phone_auth_phone_auth__["a" /* PhoneAuthPage */]);
    };
    SignupPage.prototype.signInWithFacebook = function () {
        this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_0__firebase_app__["firebase"].auth.FacebookAuthProvider())
            .then(function (res) { return console.log(res); });
    };
    SignupPage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    SignupPage.prototype.signInWithGoogle = function () {
        this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_0__firebase_app__["firebase"].auth.GoogleAuthProvider())
            .then(function (res) { return console.log(res); });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/signup/signup.html"*/'<ion-content padding>\n<ion-grid padding>\n<ion-row>\n<ion-col  text-center>\n    <img src="assets/imgs/Taqui.png" class="img-center">\n    <h6 >Cadastre-se, usando as <br>seguintes opões: </h6>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col text-center>\n<button ion-button color="taqui" round (click)="PhoneAuthPage()"> USAR O NÚMERO DE TELEFONE</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col text-center>\n<button ion-button color="primary" round (click)="signInWithFacebook()">USAR O FACEBOOK</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col  text-center>\n<button ion-button color="marron" round (click)="signInWithGoogle()">USAR O GOOGLE</button>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n <p  id="p"text-center> ja tenho conta</p>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n<p id="swallow"> swallow</p>\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 255;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity/activity.module": [
		908,
		12
	],
	"../pages/beach/beach.module": [
		909,
		11
	],
	"../pages/chat/chat.module": [
		910,
		10
	],
	"../pages/company/company.module": [
		911,
		9
	],
	"../pages/favorite/favorite.module": [
		912,
		8
	],
	"../pages/hotel/hotel.module": [
		913,
		7
	],
	"../pages/login/login.module": [
		914,
		6
	],
	"../pages/nature/nature.module": [
		915,
		5
	],
	"../pages/phone-auth/phone-auth.module": [
		916,
		4
	],
	"../pages/profile/profile.module": [
		917,
		3
	],
	"../pages/restaurante/restaurante.module": [
		918,
		2
	],
	"../pages/signup/signup.module": [
		919,
		1
	],
	"../pages/slide/slide.module": [
		920,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 299;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MoviesProvider = (function () {
    function MoviesProvider(http) {
        this.http = http;
        this.BasePath = "https://api.themoviedb.org/3";
        console.log('Hello MoviesProvider Provider');
    }
    MoviesProvider.prototype.getlastestMovies = function () {
        return this.http.get(this.BasePath + "/movie/latest/550?api_key=47bb1e079e91f4e1fe77c1494051f43b");
    };
    MoviesProvider.prototype.Movielatest = function () {
        return this.http.get("http://taqui.local/wp-json/wp/v2/posts/");
    };
    MoviesProvider.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = (_this.BasePath + '/movie/latest/550?api_key=47bb1e079e91f4e1fe77c1494051f43b');
            _this.http.get(url)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    MoviesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MoviesProvider);
    return MoviesProvider;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorite_favorite__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_0__favorite_favorite__["a" /* FavoritePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root"  tabIcon="home" ></ion-tab>\n  <ion-tab [root]="tab2Root"  tabIcon="ios-search-outline"></ion-tab>\n  <ion-tab [root]="tab5Root"  tabIcon="ios-heart-outline"></ion-tab>\n  <ion-tab [root]="tab4Root"  tabIcon="ios-chatboxes-outline"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabIcon="ios-settings-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/contact/contact.html"*/'<ion-header padding="40px">\n \n    <ion-title text-center > Configurações</ion-title>\n    <ion-avatar right top> <img src="http://lorempixel.com/400/200" id="avatar"></ion-avatar>\n \n</ion-header>\n\n<ion-content>\n        <ion-list >\n                <ion-item>\n                <ion-avatar item-start class="avatar">  <img  src="assets/imgs/taqui-ilustration-activities.png" >  </ion-avatar>\n                <ion-label > Minha Conta</ion-label>\n                <button item-right  style="background-color:transparent!important; color:rgb(236, 67, 95); font-size:25px;"> <b><ion-icon name="ios-arrow-forward-outline" >  </ion-icon> </b> </button>     \n               </ion-item>\n                <ion-item  >\n                        <ion-avatar item-start class="avatar">  <img  src="assets/imgs/taqui-ilustration-activities.png" >  </ion-avatar>\n                   <ion-label > Chat </ion-label>  \n                   <button item-right  style="background-color:transparent!important; color:rgb(231, 62, 90); font-size:25px;"  > <ion-icon name="ios-arrow-forward-outline" >  </ion-icon> </button> \n                  </ion-item>\n                 <ion-item >\n                        <ion-avatar item-start class="avatar">  <img  src="assets/imgs/taqui-ilustration-activities.png" >  </ion-avatar>\n                     <ion-label > Convidar Amigos </ion-label>   \n                     <button item-right  style="background-color:transparent!important; color:rgb(245, 66, 95); font-size:25px;" > <ion-icon name="ios-arrow-forward-outline" >  </ion-icon> </button> \n                </ion-item>\n                  <ion-item >\n                        <ion-avatar item-start class="avatar">  <img  src="assets/imgs/taqui-ilustration-activities.png" >  </ion-avatar>\n                     <ion-label > Lingua</ion-label>\n                       <button item-right  style="background-color:transparent!important; color:rgb(250, 84, 112); font-size:25px;" > <ion-icon name="ios-arrow-forward-outline"  >  </ion-icon> </button>\n                  </ion-item>\n                  <ion-item > \n                        <ion-avatar item-start class="avatar">  <img  src="assets/imgs/taqui-ilustration-activities.png" >  </ion-avatar>\n                     <ion-label > Feedback </ion-label>   \n                     <button item-right  style="background-color:transparent!important; color:rgb(250, 76, 105); font-size:25px;"> <ion-icon name="ios-arrow-forward-outline" >  </ion-icon> </button>\n                 </ion-item>\n                 <ion-item > \n                        <ion-avatar item-start class="avatar">  <img  src="assets/imgs/taqui-ilustration-activities.png" >  </ion-avatar>\n                        <ion-label >Ajuda </ion-label>   \n                        <button item-right  style="background-color:transparent!important; color:rgb(250, 76, 105); font-size:25px;"> <ion-icon name="ios-arrow-forward-outline" >  </ion-icon> </button>\n                    </ion-item>\n                    <ion-item > \n                            <ion-avatar item-start class="avatar">  <img  src="assets/imgs/taqui-ilustration-activities.png" ></ion-avatar>\n                            <ion-label >Terminar Sessão </ion-label>   \n                            <button item-right  style="background-color:transparent!important; color:rgb(250, 76, 105); font-size:25px;"> <ion-icon name="ios-arrow-forward-outline" >  </ion-icon> </button>\n                        </ion-item>\n               \n                     </ion-list>\n                      \n                   \n\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enviroment__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NaturePage = (function () {
    function NaturePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NaturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        console.log(__WEBPACK_IMPORTED_MODULE_2__enviroment__["a" /* environment */].algolia);
        console.log(instantsearch);
        this.search = instantsearch(__WEBPACK_IMPORTED_MODULE_2__enviroment__["a" /* environment */].algolia);
        // search box widget
        this.search.addWidget(instantsearch.widgets.searchBox({
            container: '#search-box',
            autofocus: false,
            placeholder: 'Search for actors',
            poweredBy: true
        }));
        // initialize hits widget
        this.search.addWidget(instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                empty: 'No results',
                item: "<img src=https://image.tmdb.org/t/p/w300{{image_path}} width=\"50px\">\n                <strong>Result {{objectID}}</strong>:\n                {{{_highlightResult.name.value}}}"
            },
            escapeHits: true
        }));
        this.search.addWidget(instantsearch.widgets.stats({
            container: '#stats'
        }));
        this.search.addWidget(instantsearch.widgets.pagination({
            container: '#pagination',
            maxPages: 20,
        }));
        this.search.addWidget(instantsearch.widgets.analytics({
            pushFunction: function (query, state, results) {
                console.log(query);
                console.log(state);
                console.log(results);
            }
        }));
        this.search.start();
    };
    NaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nature',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/nature/nature.html"*/'<!--\n  Generated template for the NaturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>nature</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div id="search-box">\n        <!-- SearchBox widget will appear here -->\n      </div>\n      <div id="stats">\n        <!-- stats widget will appear here -->\n      </div>\n      <div id="hits">\n        <!-- Hits widget will appear here -->\n      </div>\n      <div id="pagination">\n        <!-- pagination widget will appear here -->\n      </div>\n      \n\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/nature/nature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NaturePage);
    return NaturePage;
}());

//# sourceMappingURL=nature.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivityPage = (function () {
    function ActivityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityPage');
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/activity/activity.html"*/'<!--\n  Generated template for the ActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>activity</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/activity/activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ActivityPage);
    return ActivityPage;
}());

//# sourceMappingURL=activity.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BeachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeachPage = (function () {
    function BeachPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BeachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeachPage');
    };
    BeachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beach',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/beach/beach.html"*/'<!--\n  Generated template for the BeachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>beach</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/beach/beach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BeachPage);
    return BeachPage;
}());

//# sourceMappingURL=beach.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompanyPage = (function () {
    function CompanyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompanyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyPage');
    };
    CompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/company/company.html"*/'<ion-content>\n    <ion-grid>\n        <ion-row>\n        <ion-col text-center>\n            <img src=" assets/imgs/taqui-ilustration-activities.png" class="img-center">\n            <p>Restaurante são jão</p>\n            <h3  style="color:rgb(235, 98, 121)"><ion-icon name="ios-star"></ion-icon> <ion-icon name="ios-star"></ion-icon> <ion-icon name="ios-star"> </ion-icon> <ion-icon name="ios-star"></ion-icon>  <ion-icon name="ios-star"></ion-icon> </h3>  \n          </ion-col>\n        </ion-row>\n        </ion-grid>\n       <ion-row padding> \n         <ion-col style="margin-left:20px;">\n            <button ion-button style=" font-size:12px;" color="taqui" outline> Informações</button>\n            <button ion-button style=" font-size:12px;"  color="gray" outline> Fotografias</button>\n            <button ion-button style=" font-size:12px;" color="gray" outline> Rating</button>\n         </ion-col>\n       </ion-row>\n        <br>\n        <br>\n        \n       <p text-center> Im a mobile and web developer based in Angola <br> Luanda, Loking for a job and learning new skilis </p>\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/company/company.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CompanyPage);
    return CompanyPage;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelPage = (function () {
    function HotelPage(db) {
        this.db = db;
        this.countryRef = __WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"].database().ref('/User');
    }
    HotelPage.prototype.ngOnInit = function () {
        var _this = this;
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                countries.push(country.val());
                return false;
            });
            _this.countryList = countries;
            _this.loadedCountryList = countries;
        });
    };
    HotelPage.prototype.initializeItems = function () {
        this.countryList = this.loadedCountryList;
    };
    HotelPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.countryList = this.countryList.filter(function (v) {
            if (v.name && q) {
                if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.countryList.length);
    };
    HotelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-hotel',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/hotel/hotel.html"*/'<ion-header padding>\n    <ion-avatar right top> <img src="https://firebasestorage.googleapis.com/v0/b/taquiclient.appspot.com/o/25398685_1466687843447834_8763177209878655648_n.jpg?alt=media&token=040e9581-ea10-4d3d-99bc-aa87389d1d2c" id="avatar" (click)=" ProfilePage()"></ion-avatar>\n    </ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let country of countryList">\n        <h2> {{ country.name }} </h2>\n      </ion-item>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/hotel/hotel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HotelPage);
    return HotelPage;
}());

//# sourceMappingURL=hotel.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantePage = (function () {
    function RestaurantePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RestaurantePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantePage');
    };
    RestaurantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurante',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/restaurante/restaurante.html"*/'<ion-header padding>\n    <ion-item id="search"> \n      <ion-label id="icon"><ion-icon name="search"></ion-icon></ion-label>\n      <ion-input placeholder="Ex: Hotel Tivoli" type="text" [(ngModel)]="searchterm" (keydown)="search($event)"> </ion-input>\n    </ion-item>\n    <ion-avatar right top> <img src="https://firebasestorage.googleapis.com/v0/b/taquiclient.appspot.com/o/25398685_1466687843447834_8763177209878655648_n.jpg?alt=media&token=040e9581-ea10-4d3d-99bc-aa87389d1d2c" id="avatar" (click)=" ProfilePage()"></ion-avatar>\n </ion-header>\n\n\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/restaurante/restaurante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RestaurantePage);
    return RestaurantePage;
}());

//# sourceMappingURL=restaurante.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidePage = (function () {
    function SlidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SlidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidePage');
    };
    SlidePage.prototype.SignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__signup_signup__["a" /* SignupPage */]);
    };
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-slide',template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/slide/slide.html"*/'\n<ion-content padding>\n     \n  <ion-slides pager class="slides">\n\n    <ion-slide >\n      <img src="assets/imgs/taqui-slide-1.png"  class="slide-img">\n   <ion-row>\n     <ion-col>\n      <div style=" padding-top:50px; " > \n      <p text-center> <b>Encontre </b></p>\n     <h6 text-center > Encontre os melhores restaurantes, hotéis  <br> e praias próximos de si.</h6>\n    </div>\n  </ion-col>\n  </ion-row>  \n  </ion-slide>\n  \n    <ion-slide >\n        <img src="assets/imgs/taqui-slide-2.jpg" class="slide-img" >\n        <div >\n            <p text-center> <b>Classifica </b></p>\n           <h6 text-center > Classifique os locais por onde passou, <br> diga o que pensa deles.</h6>\n          </div>\n    </ion-slide>\n  \n    <ion-slide >\n     <img src="assets/imgs/taqui-slide-3.png" class="slide-img">\n     <div>\n        <p text-center><b> Reserve e Pague </b></p>\n       <h6 text-center >Brevemente, será possível também <br> fazer reservas e pagamentos. </h6>\n      </div>\n    </ion-slide>\n  \n  </ion-slides>\n  \n<div class="btn-slide" >\n  <button ion-button color="taqui" round >Começar a usar </button>\n  <button ion-button  color="taqui" outline round (click)="SignupPage()" > Cadastrar-se</button>\n  <p text-center><a>Ja tenho Conta</a> </p>\n</div>\n<p text-center id="p" > Swallow </p>\n</ion-content>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/pages/slide/slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(502);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_nature_nature__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favorite_favorite__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_slide_slide__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_phone_auth_phone_auth__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_company_company__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_movies_movies__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_hotel_hotel__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_beach_beach__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_restaurante_restaurante__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_activity_activity__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var config = {
    apiKey: "AIzaSyBxI01J-YRPJ9PUkyqldW_JX9ig7fcTxX0",
    authDomain: "taquiclient.firebaseapp.com",
    databaseURL: "https://taquiclient.firebaseio.com",
    projectId: "taquiclient",
    storageBucket: "taquiclient.appspot.com",
    messagingSenderId: "797680672567"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_phone_auth_phone_auth__["a" /* PhoneAuthPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_company_company__["a" /* CompanyPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hotel_hotel__["a" /* HotelPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_nature_nature__["a" /* NaturePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_beach_beach__["a" /* BeachPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_restaurante_restaurante__["a" /* RestaurantePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_activity_activity__["a" /* ActivityPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activity/activity.module#ActivityPageModule', name: 'ActivityPage', segment: 'activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beach/beach.module#BeachPageModule', name: 'BeachPage', segment: 'beach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company/company.module#CompanyPageModule', name: 'CompanyPage', segment: 'company', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite/favorite.module#FavoritePageModule', name: 'FavoritePage', segment: 'favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel.module#HotelPageModule', name: 'HotelPage', segment: 'hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nature/nature.module#NaturePageModule', name: 'NaturePage', segment: 'nature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phone-auth/phone-auth.module#PhoneAuthPageModule', name: 'PhoneAuthPage', segment: 'phone-auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurante/restaurante.module#RestaurantePageModule', name: 'RestaurantePage', segment: 'restaurante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide.module#SlidePageModule', name: 'SlidePage', segment: 'slide', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_phone_auth_phone_auth__["a" /* PhoneAuthPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_company_company__["a" /* CompanyPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hotel_hotel__["a" /* HotelPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_nature_nature__["a" /* NaturePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_beach_beach__["a" /* BeachPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_restaurante_restaurante__["a" /* RestaurantePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_activity_activity__["a" /* ActivityPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["a" /* AngularFirestore */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_movies_movies__["a" /* MoviesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    algolia: {
        appId: 'B2M4X5QZAD',
        apiKey: '0f005b9f844798c08766c023e2461975',
        indexName: 'getstarted_actors',
        urlSync: false
    }
};
//# sourceMappingURL=enviroment.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HotelPage } from './../pages/hotel/hotel';
//import { NaturePage } from './../pages/nature/nature';





//import { TabsPage } from '../pages/tabs/tabs';
//import { SlidePage } from '../pages/slide/slide';

//import firebase from 'firebase';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afth) {
        this.afth = afth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // this.user = this.afth.auth.currentUser;
        //console.log("here",this.user);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/manueloctavio/Local Sites/taqui/taqui-app-mobile/taquiclient2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[497]);
//# sourceMappingURL=main.js.map