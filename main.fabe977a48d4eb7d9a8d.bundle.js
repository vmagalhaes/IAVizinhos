webpackJsonp([1],{0:function(t,n,i){t.exports=i("cDNt")},ATHs:function(t,n,i){"use strict";var o=i("/oeL");i.d(n,"a",function(){return a});var s=this&&this.__decorate||function(t,n,i,o){var s,a=arguments.length,e=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(t,n,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(e=(a<3?s(e):a>3?s(n,i,e):s(n,i))||e);return a>3&&e&&Object.defineProperty(n,i,e),e},a=function(){function t(){}return t.prototype.transform=function(t){return t.forEach(function(n){var i=t.indexOf(n);i>=0&&t.splice(i,1," "+100*n+"%"),console.log(t)}),t},t}();a=s([i.i(o.Y)({name:"percertual"})],a)},"aR8+":function(t,n,i){"use strict";var o=i("fc+i"),s=i("/oeL"),a=i("wQAS"),e=i("ATHs");i.d(n,"a",function(){return c});var l=this&&this.__decorate||function(t,n,i,o){var s,a=arguments.length,e=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(t,n,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(e=(a<3?s(e):a>3?s(n,i,e):s(n,i))||e);return a>3&&e&&Object.defineProperty(n,i,e),e},c=function(){function t(){}return t}();c=l([i.i(s.b)({declarations:[a.a,e.a],imports:[o.a],providers:[],bootstrap:[a.a]})],c)},cDNt:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=i("/oeL"),s=i("Qa4U"),a=i("aR8+");i("p5Ee").a.production&&i.i(o.a)(),i.i(s.a)().bootstrapModule(a.a)},efyd:function(t,n){t.exports='<div class="menu">\n  <div class="logo">\n    <span (click)="changeResults()">HEURÍSTICA</span>\n  </div>\n  <nav>\n    <ul>\n      <li>\n        <button class="button-app shuffleBtn" (click)="shuffleWallet()">NOVA CARTEIRA ALEATÓRIA</button>\n        <button *ngIf="!calculate" class="button-app calculateBtn" (click)="calculateYear()">CALCULAR RETORNO ANUAL</button>\n        <span class="calculate-done calculateDoneBtn" *ngIf="calculate">RETORNO ANUAL CALCULADO</span>\n        <button *ngIf="!showResults && calculate" (click)="makeWallets()" class="button-app go">GO</button>\n        <button *ngIf="!showResults && calculate" (click)="changeResults()" class="button-app results">RESULTADOS</button>\n      </li>\n    </ul>\n  </nav>\n</div>\n<main>\n  <div class="table-1">\n    <table *ngIf="!showResults" style="width: 100%" class="mdl-data-table mdl-js-data-table">\n      <thead>\n        <tr>\n          <th class="mdl-data-table__cell--non-numeric">Mês</th>\n          <th>Ação A</th>\n          <th>Ação B</th>\n          <th>Ação C</th>\n          <th>Ação D</th>\n          <th>Ação E</th>\n          <th>Ação F</th>\n          <th>Ação G</th>\n          <th>Ação H</th>\n          <th>Ação I</th>\n          <th>Ação J</th>\n          <th *ngIf="resultMouth?.length">Retorno</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 1</td>\n          <td>{{ actionA[0] }}</td>\n          <td>{{ actionB[0] }}</td>\n          <td>{{ actionC[0] }}</td>\n          <td>{{ actionD[0] }}</td>\n          <td>{{ actionE[0] }}</td>\n          <td>{{ actionF[0] }}</td>\n          <td>{{ actionG[0] }}</td>\n          <td>{{ actionH[0] }}</td>\n          <td>{{ actionI[0] }}</td>\n          <td>{{ actionJ[0] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[0] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 2</td>\n          <td>{{ actionA[1] }}</td>\n          <td>{{ actionB[1] }}</td>\n          <td>{{ actionC[1] }}</td>\n          <td>{{ actionD[1] }}</td>\n          <td>{{ actionE[1] }}</td>\n          <td>{{ actionF[1] }}</td>\n          <td>{{ actionG[1] }}</td>\n          <td>{{ actionH[1] }}</td>\n          <td>{{ actionI[1] }}</td>\n          <td>{{ actionJ[1] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[1] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 3</td>\n          <td>{{ actionA[2] }}</td>\n          <td>{{ actionB[2] }}</td>\n          <td>{{ actionC[2] }}</td>\n          <td>{{ actionD[2] }}</td>\n          <td>{{ actionE[2] }}</td>\n          <td>{{ actionF[2] }}</td>\n          <td>{{ actionG[2] }}</td>\n          <td>{{ actionH[2] }}</td>\n          <td>{{ actionI[2] }}</td>\n          <td>{{ actionJ[2] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[2] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 4</td>\n          <td>{{ actionA[3] }}</td>\n          <td>{{ actionB[3] }}</td>\n          <td>{{ actionC[3] }}</td>\n          <td>{{ actionD[3] }}</td>\n          <td>{{ actionE[3] }}</td>\n          <td>{{ actionF[3] }}</td>\n          <td>{{ actionG[3] }}</td>\n          <td>{{ actionH[3] }}</td>\n          <td>{{ actionI[3] }}</td>\n          <td>{{ actionJ[3] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[3] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 5</td>\n          <td>{{ actionA[4] }}</td>\n          <td>{{ actionB[4] }}</td>\n          <td>{{ actionC[4] }}</td>\n          <td>{{ actionD[4] }}</td>\n          <td>{{ actionE[4] }}</td>\n          <td>{{ actionF[4] }}</td>\n          <td>{{ actionG[4] }}</td>\n          <td>{{ actionH[4] }}</td>\n          <td>{{ actionI[4] }}</td>\n          <td>{{ actionJ[4] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[4] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 6</td>\n          <td>{{ actionA[5] }}</td>\n          <td>{{ actionB[5] }}</td>\n          <td>{{ actionC[5] }}</td>\n          <td>{{ actionD[5] }}</td>\n          <td>{{ actionE[5] }}</td>\n          <td>{{ actionF[5] }}</td>\n          <td>{{ actionG[5] }}</td>\n          <td>{{ actionH[5] }}</td>\n          <td>{{ actionI[5] }}</td>\n          <td>{{ actionJ[5] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[5] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 7</td>\n          <td>{{ actionA[6] }}</td>\n          <td>{{ actionB[6] }}</td>\n          <td>{{ actionC[6] }}</td>\n          <td>{{ actionD[6] }}</td>\n          <td>{{ actionE[6] }}</td>\n          <td>{{ actionF[6] }}</td>\n          <td>{{ actionG[6] }}</td>\n          <td>{{ actionH[6] }}</td>\n          <td>{{ actionI[6] }}</td>\n          <td>{{ actionJ[6] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[6] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 8</td>\n          <td>{{ actionA[7] }}</td>\n          <td>{{ actionB[7] }}</td>\n          <td>{{ actionC[7] }}</td>\n          <td>{{ actionD[7] }}</td>\n          <td>{{ actionE[7] }}</td>\n          <td>{{ actionF[7] }}</td>\n          <td>{{ actionG[7] }}</td>\n          <td>{{ actionH[7] }}</td>\n          <td>{{ actionI[7] }}</td>\n          <td>{{ actionJ[7] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[7] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 9</td>\n          <td>{{ actionA[8] }}</td>\n          <td>{{ actionB[8] }}</td>\n          <td>{{ actionC[8] }}</td>\n          <td>{{ actionD[8] }}</td>\n          <td>{{ actionE[8] }}</td>\n          <td>{{ actionF[8] }}</td>\n          <td>{{ actionG[8] }}</td>\n          <td>{{ actionH[8] }}</td>\n          <td>{{ actionI[8] }}</td>\n          <td>{{ actionJ[8] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[8] }}</td>\n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 10</td>\n          <td>{{ actionA[9] }}</td>\n          <td>{{ actionB[9] }}</td>\n          <td>{{ actionC[9] }}</td>\n          <td>{{ actionD[9] }}</td>\n          <td>{{ actionE[9] }}</td>\n          <td>{{ actionF[9] }}</td>\n          <td>{{ actionG[9] }}</td>\n          <td>{{ actionH[9] }}</td>\n          <td>{{ actionI[9] }}</td>\n          <td>{{ actionJ[9] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[9] }}</td>          \n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 11</td>\n          <td>{{ actionA[10] }}</td>\n          <td>{{ actionB[10] }}</td>\n          <td>{{ actionC[10] }}</td>\n          <td>{{ actionD[10] }}</td>\n          <td>{{ actionE[10] }}</td>\n          <td>{{ actionF[10] }}</td>\n          <td>{{ actionG[10] }}</td>\n          <td>{{ actionH[10] }}</td>\n          <td>{{ actionI[10] }}</td>\n          <td>{{ actionJ[10] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[10] }}</td>          \n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Mês 12</td>\n          <td>{{ actionA[11] }}</td>\n          <td>{{ actionB[11] }}</td>\n          <td>{{ actionC[11] }}</td>\n          <td>{{ actionD[11] }}</td>\n          <td>{{ actionE[11] }}</td>\n          <td>{{ actionF[11] }}</td>\n          <td>{{ actionG[11] }}</td>\n          <td>{{ actionH[11] }}</td>\n          <td>{{ actionI[11] }}</td>\n          <td>{{ actionJ[11] }}</td>\n          <td *ngIf="resultMouth?.length">{{ resultMouth[11] }}</td>          \n        </tr>\n        <tr>\n          <td class="mdl-data-table__cell--non-numeric">Carteira</td>\n          <td>{{ wallet[0] * 100 }}%</td>\n          <td>{{ wallet[1] * 100 }}%</td>\n          <td>{{ wallet[2] * 100 }}%</td>\n          <td>{{ wallet[3] * 100 }}%</td>\n          <td>{{ wallet[4] * 100 }}%</td>          \n          <td>{{ wallet[5] * 100 }}%</td>\n          <td>{{ wallet[6] * 100 }}%</td>\n          <td>{{ wallet[7] * 100 }}%</td>\n          <td>{{ wallet[8] * 100 }}%</td>\n          <td>{{ wallet[9] * 100 }}%</td>\n          <td *ngIf="resultMouth?.length">{{ resultYear.toFixed(5) }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div [hidden]="!showResults" id="results" *ngFor="let result of results">\n      <div class="media">\n        <div class="media-body">\n          <div class="header-result result">\n            <span><b>#{{ result.id }} Melhor resultado: {{ result.result.toFixed(5) }}</b></span> | <span><b>Melhor carteira: </b>[{{ result.wallet }} ]</span>\n          </div>\n          <div class="result-second result">\n            <span><b>Última carteira inicial:</b> [{{ result.lastWallet }} ]</span><br/>          \n          </div>\n          <div (click)="result.isOpened=!result.isOpened" class="result-third result">\n            <span><b>Últimos vizinhos </b></span><br/>\n          </div>\n          <div [hidden]="!result.isOpened" class="result-third-vizinhos">\n            <span *ngFor="let vizinho of result.vizinhos">[{{ vizinho }}] </span>              \n          </div>\n          <div class="result-fourth result">\n            <span><b>Todos os maiores resultados até chegar no maior:</b> <span *ngFor="let number of result.numbers">[{{ number.toFixed(5) }}] </span></span><br/>\n          </div>\n          <div class="result-fifty result">\n            <span><b>Data: {{ result.date | date: \'yyyy-MM-dd HH:mm\'}}</b></span>              \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>'},hxJY:function(t,n,i){n=t.exports=i("rP7Y")(!1),n.push([t.i,".menu{background:#9d00ff;height:60px;box-shadow:1px 5px 20px 5px rgba(0,0,0,.2)}ul{list-style-type:none;margin:0;padding:0}li a{display:block;width:60px}.button-app,li a{text-decoration:none}.button-app{height:35px;font-family:Montserrat,sans-serif;border-radius:20px;padding:5px 20px;font-size:12px;background:#fff;border:none;color:#9d00ff;text-align:center;transition:box-shadow 1s}.calculateBtn{right:15px}.calculateBtn,.go{position:absolute;top:10px}.go{right:880px}.results{position:absolute;right:950px;top:10px}.calculate-done{font-family:Montserrat,sans-serif;font-size:14px;font-weight:700;border:none;color:#fff;text-align:center}.calculateDoneBtn{position:absolute;right:15px;top:15px}.shuffleBtn{position:absolute;right:250px;top:10px}.calculate:hover{box-shadow:1px 2px 10px 2px rgba(76,76,76,.53)}main{height:100%}.logo{font-family:Montserrat,sans-serif;color:#fff;padding:10px 15px;font-size:30px;line-height:1.3}.header-result{background-color:#eaeaea}.result-second{background-color:#ddd}.result-third{background-color:#ccc;height:80px}.result-third-vizinhos{width:100%;height:auto;background-color:#ccc;color:#484848;line-height:auto;padding:15px}.result-fourth{background-color:#bebebe}.result-fifty{background-color:#afafaf}.result{width:100%;height:40px;color:#484848;line-height:40px;padding-left:15px}",""]),t.exports=t.exports.toString()},n7du:function(t,n){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id="n7du"},p5Ee:function(t,n,i){"use strict";i.d(n,"a",function(){return o});var o={production:!1}},wQAS:function(t,n,i){"use strict";var o=i("/oeL"),s=i("xrDH");i.n(s);i.d(n,"a",function(){return e});var a=this&&this.__decorate||function(t,n,i,o){var s,a=arguments.length,e=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(t,n,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(e=(a<3?s(e):a>3?s(n,i,e):s(n,i))||e);return a>3&&e&&Object.defineProperty(n,i,e),e},e=function(){function t(){this.actionA=[.09091,.07197,.09661,.04516,.05864,-.00192,.11404,.06388,-.05679,-.03141,.05676,-.08493],this.actionB=[.06793,.13972,-.03546,-.03109,.0076,-.03879,.08453,-.01656,-.04,.0432,-.1179,.19367],this.actionC=[1e-5,.00706,.07748,-.01706,-.06275,-.00108,.03741,.00971,-.03813,.09798,-.04462,-.02473],this.actionD=[7e-5,.01756,.06318,-.03906,.05511,-.02143,-.00141,-.00782,-.05137,.05783,.00111,-.01565],this.actionE=[97e-5,.01719,-.04575,-.01996,.03475,.00171,-.00941,2e-5,1e-5,-.01745,-99e-5,.0216],this.actionF=[91e-5,.01362,.09048,.01006,-.0435,-23e-5,.02541,-.00879,-.02313,.03133,.00112,-.00113],this.actionG=[.00151,.05332,.05548,.00996,-.04511,.00196,.03561,.06969,-.01993,.0079,-.07002,.02002],this.actionH=[-11e-5,-11e-5,.07655,-.02306,-.0335,-.08787,.03871,.00697,.04545,.09798,-.04462,-.02473],this.actionI=[.00579,.01336,-.04575,.00996,.01169,.00199,-.03001,-.00699,.00709,.09798,-.04462,-.02473],this.actionJ=[-45e-5,.07992,.099,.00696,.00697,-.00978,.03891,.00579,-.03813,.09798,-.04462,-.02473],this.resultMouth=[0,0,0,0,0,0,0,0,0,0,0,0],this.resultYear=0,this.lastBetterResult=.20635,this.firstWallet=[.3,.25,.2,.15,.1,0,0,0,0,0],this.wallet=[.3,.25,.2,.15,.1,0,0,0,0,0],this.vizinhosWallets=[],this.resultBetter=[],this.allResults=[],this.allTests=[],this.showResults=!1,this.results=[],this.calculate=!1}return t.prototype.ngOnInit=function(){},t.prototype.calculateYear=function(t){this.resultYear=0,this.calculate=!0,t||(t=this.wallet),this.resultMouth.splice(0,1,(this.actionA[0]*t[0]+this.actionB[0]*t[1]+this.actionC[0]*t[2]+this.actionD[0]*t[3]+this.actionE[0]*t[4]+this.actionF[0]*t[5]+this.actionG[0]*t[6]+this.actionH[0]*t[7]+this.actionI[0]*t[8]+this.actionJ[0]*t[9]).toFixed(5)),this.resultMouth.splice(1,1,(this.actionA[1]*t[0]+this.actionB[1]*t[1]+this.actionC[1]*t[2]+this.actionD[1]*t[3]+this.actionE[1]*t[4]+this.actionF[1]*t[5]+this.actionG[1]*t[6]+this.actionH[1]*t[7]+this.actionI[1]*t[8]+this.actionJ[1]*t[9]).toFixed(5)),this.resultMouth.splice(2,1,(this.actionA[2]*t[0]+this.actionB[2]*t[1]+this.actionC[2]*t[2]+this.actionD[2]*t[3]+this.actionE[2]*t[4]+this.actionF[2]*t[5]+this.actionG[2]*t[6]+this.actionH[2]*t[7]+this.actionI[2]*t[8]+this.actionJ[2]*t[9]).toFixed(5)),this.resultMouth.splice(3,1,(this.actionA[3]*t[0]+this.actionB[3]*t[1]+this.actionC[3]*t[2]+this.actionD[3]*t[3]+this.actionE[3]*t[4]+this.actionF[3]*t[5]+this.actionG[3]*t[6]+this.actionH[3]*t[7]+this.actionI[3]*t[8]+this.actionJ[3]*t[9]).toFixed(5)),this.resultMouth.splice(4,1,(this.actionA[4]*t[0]+this.actionB[4]*t[1]+this.actionC[4]*t[2]+this.actionD[4]*t[3]+this.actionE[4]*t[4]+this.actionF[4]*t[5]+this.actionG[4]*t[6]+this.actionH[4]*t[7]+this.actionI[4]*t[8]+this.actionJ[4]*t[9]).toFixed(5)),this.resultMouth.splice(5,1,(this.actionA[5]*t[0]+this.actionB[5]*t[1]+this.actionC[5]*t[2]+this.actionD[5]*t[3]+this.actionE[5]*t[4]+this.actionF[5]*t[5]+this.actionG[5]*t[6]+this.actionH[5]*t[7]+this.actionI[5]*t[8]+this.actionJ[5]*t[9]).toFixed(5)),this.resultMouth.splice(6,1,(this.actionA[6]*t[0]+this.actionB[6]*t[1]+this.actionC[6]*t[2]+this.actionD[6]*t[3]+this.actionE[6]*t[4]+this.actionF[6]*t[5]+this.actionG[6]*t[6]+this.actionH[6]*t[7]+this.actionI[6]*t[8]+this.actionJ[6]*t[9]).toFixed(5)),this.resultMouth.splice(7,1,(this.actionA[7]*t[0]+this.actionB[7]*t[1]+this.actionC[7]*t[2]+this.actionD[7]*t[3]+this.actionE[7]*t[4]+this.actionF[7]*t[5]+this.actionG[7]*t[6]+this.actionH[7]*t[7]+this.actionI[7]*t[8]+this.actionJ[7]*t[9]).toFixed(5)),this.resultMouth.splice(8,1,(this.actionA[8]*t[0]+this.actionB[8]*t[1]+this.actionC[8]*t[2]+this.actionD[8]*t[3]+this.actionE[8]*t[4]+this.actionF[8]*t[5]+this.actionG[8]*t[6]+this.actionH[8]*t[7]+this.actionI[8]*t[8]+this.actionJ[8]*t[9]).toFixed(5)),this.resultMouth.splice(9,1,(this.actionA[9]*t[0]+this.actionB[9]*t[1]+this.actionC[9]*t[2]+this.actionD[9]*t[3]+this.actionE[9]*t[4]+this.actionF[9]*t[5]+this.actionG[9]*t[6]+this.actionH[9]*t[7]+this.actionI[9]*t[8]+this.actionJ[9]*t[9]).toFixed(5)),this.resultMouth.splice(10,1,(this.actionA[10]*t[0]+this.actionB[10]*t[1]+this.actionC[10]*t[2]+this.actionD[10]*t[3]+this.actionE[10]*t[4]+this.actionF[10]*t[5]+this.actionG[10]*t[6]+this.actionH[10]*t[7]+this.actionI[10]*t[8]+this.actionJ[10]*t[9]).toFixed(5)),this.resultMouth.splice(11,1,(this.actionA[11]*t[0]+this.actionB[11]*t[1]+this.actionC[11]*t[2]+this.actionD[11]*t[3]+this.actionE[11]*t[4]+this.actionF[11]*t[5]+this.actionG[11]*t[6]+this.actionH[11]*t[7]+this.actionI[11]*t[8]+this.actionJ[11]*t[9]).toFixed(5));for(var n=0;this.resultMouth.length>n;n++)this.resultYear=+this.resultMouth[n]+this.resultYear;return this.allResults.push({result:this.resultYear,wallet:t}),this.resultYear},t.prototype.shuffleWallet=function(){this.resultMouth=[],this.lastBetterResult=0,this.allTests=[],this.resultYear=0,this.calculate=!1,this.wallet=s.shuffle(this.wallet),this.firstWallet=this.wallet,console.log(this.firstWallet),this.showResults=!1},t.prototype.makeWallets=function(t){var n;n=t?s.clone(t):s.clone(this.wallet),this.doAgain(n)},t.prototype.doAgain=function(t){var n=this;this.vizinhosWallets=[],this.resultBetter=[],this.resultYear=0,console.log(t),console.log(this.vizinhosWallets),console.log(this.resultBetter);for(var i=0;i<10;i++)for(var o=this.wallet[i],a=i;a<10;a++){var e=this.wallet[a+1];t.splice(i,1,e),t.splice(a+1,1,o),this.vizinhosWallets.push(t),t=s.clone(this.wallet)}this.vizinhosWallets.forEach(function(t){t.length>10&&t.forEach(function(n){if(void 0===n){var i=t.indexOf(n);i>=0&&(t.splice(i,1,t[9]),t.splice(9,1))}})}),this.vizinhosWallets=s.uniqWith(this.vizinhosWallets,s.isEqual),this.vizinhosWallets.splice(35,1),this.vizinhosWallets.forEach(function(t){n.resultBetter.push(n.calculateYear(t))}),console.log(this.resultBetter);var l=Math.max.apply(Math,this.resultBetter),c=s.find(this.allResults,{result:l});this.wallet=c.wallet,console.log(l),this.allTests.push(l),l>this.lastBetterResult?(this.lastBetterResult=l,this.letsDoAgain(c.wallet)):(console.log(this.allTests),this.resultYear=this.lastBetterResult,this.showResults=!0,console.log(this.results),this.results.push({id:this.results.length+1,result:this.resultYear,wallet:this.wallet,lastWallet:this.firstWallet,vizinhos:this.vizinhosWallets,date:Date.now(),numbers:this.allTests,isOpened:!1}))},t.prototype.fix=function(){for(var t=this,n=this,i=0;i<this.vizinhosWallets.length;i++)!function(i){var o=n.vizinhosWallets[i];n.vizinhosWallets.forEach(function(n){if(s.isEqual(n,o)){var i=t.vizinhosWallets.indexOf(n);i>=0&&t.vizinhosWallets.splice(i,1)}})}(i)},t.prototype.changeResults=function(){this.showResults=!this.showResults},t.prototype.letsDoAgain=function(t){this.makeWallets(t)},t}();e=a([i.i(o._0)({selector:"app-root",template:i("efyd"),styles:[i("hxJY")]})],e)}},[0]);