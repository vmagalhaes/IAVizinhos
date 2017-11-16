import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  actionA: number[] = [0.09091, 0.07197, 0.09661, 0.04516, 0.05864, -0.00192, 0.11404, 0.06388, -0.05679, -0.03141, 0.05676, -0.08493];
  actionB: number[] = [0.06793, 0.13972, -0.03546, -0.03109, 0.00760, -0.03879, 0.08453, -0.01656, -0.04000, 0.04320, -0.11790, 0.19367];
  actionC: number[] = [0.00001, 0.00706, 0.07748, -0.01706, -0.06275, -0.00108, 0.03741, 0.00971, -0.03813, 0.09798, -0.04462, -0.02473];
  actionD: number[] = [0.00007, 0.01756, 0.06318, -0.03906, 0.05511, -0.02143, -0.00141, -0.00782, -0.05137, 0.05783, 0.00111, -0.01565];
  actionE: number[] = [0.00097, 0.01719, -0.04575, -0.01996, 0.03475, 0.00171, -0.00941, 0.00002, 0.00001, -0.01745, -0.00099, 0.02160];
  actionF: number[] = [0.00091, 0.01362, 0.09048, 0.01006, -0.04350, -0.00023, 0.02541, -0.00879, -0.02313, 0.03133, 0.00112, -0.00113];
  actionG: number[] = [0.00151, 0.05332, 0.05548, 0.00996, -0.04511, 0.00196, 0.03561, 0.06969, -0.01993, 0.00790, -0.07002, 0.02002];
  actionH: number[] = [-0.00011, -0.00011, 0.07655, -0.02306, -0.03350, -0.08787, 0.03871, 0.00697, 0.04545, 0.09798, -0.04462, -0.02473];
  actionI: number[] = [0.00579, 0.01336, -0.04575, 0.00996, 0.01169, 0.00199, -0.03001, -0.00699, 0.00709, 0.09798, -0.04462, -0.02473];
  actionJ: number[] = [-0.00045, 0.07992, 0.09900, 0.00696, 0.00697, -0.00978, 0.03891, 0.00579, -0.03813, 0.09798, -0.04462, -0.02473];
  //Porcentagem de cada ação * o retorno da ação que resulta no que ele vai receber

  resultMouth: any[] = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  resultYear: number = 0;
  lastBetterResult: number = 0.20635;
  firstWallet: any[] = [0.30, 0.25, 0.20, 0.15, 0.10, 0.0, 0.0, 0.0, 0.0, 0.0];
  wallet: any[] = [0.30, 0.25, 0.20, 0.15, 0.10, 0.0, 0.0, 0.0, 0.0, 0.0];
  vizinhosWallets: any[] = [];
  resultBetter: number[] = [];
  allResults: any[] = [];
  allTests: number[] = [];
  showResults = false;

  results: any[] = [];

  private calculate = false;

  ngOnInit() {

  }

  calculateYear(wallet?: any[]) {
    this.resultYear = 0;
    this.calculate = true;
    if (!wallet) {
      wallet = this.wallet;
    }

    this.resultMouth.splice(0, 1, ((this.actionA[0] * wallet[0])+ (this.actionB[0] * wallet[1])+ (this.actionC[0] * wallet[2])+ (this.actionD[0] * wallet[3])+ (this.actionE[0] * wallet[4])+ (this.actionF[0] * wallet[5])+ (this.actionG[0] * wallet[6])+ (this.actionH[0] * wallet[7])+ (this.actionI[0] * wallet[8])+ (this.actionJ[0] * wallet[9])).toFixed(5));
    this.resultMouth.splice(1, 1, ((this.actionA[1] * wallet[0])+ (this.actionB[1] * wallet[1])+ (this.actionC[1] * wallet[2])+ (this.actionD[1] * wallet[3])+ (this.actionE[1] * wallet[4])+ (this.actionF[1] * wallet[5])+ (this.actionG[1] * wallet[6])+ (this.actionH[1] * wallet[7])+ (this.actionI[1] * wallet[8])+ (this.actionJ[1] * wallet[9])).toFixed(5));
    this.resultMouth.splice(2, 1, ((this.actionA[2] * wallet[0])+ (this.actionB[2] * wallet[1])+ (this.actionC[2] * wallet[2])+ (this.actionD[2] * wallet[3])+ (this.actionE[2] * wallet[4])+ (this.actionF[2] * wallet[5])+ (this.actionG[2] * wallet[6])+ (this.actionH[2] * wallet[7])+ (this.actionI[2] * wallet[8])+ (this.actionJ[2] * wallet[9])).toFixed(5));
    this.resultMouth.splice(3, 1, ((this.actionA[3] * wallet[0])+ (this.actionB[3] * wallet[1])+ (this.actionC[3] * wallet[2])+ (this.actionD[3] * wallet[3])+ (this.actionE[3] * wallet[4])+ (this.actionF[3] * wallet[5])+ (this.actionG[3] * wallet[6])+ (this.actionH[3] * wallet[7])+ (this.actionI[3] * wallet[8])+ (this.actionJ[3] * wallet[9])).toFixed(5));
    this.resultMouth.splice(4, 1, ((this.actionA[4] * wallet[0])+ (this.actionB[4] * wallet[1])+ (this.actionC[4] * wallet[2])+ (this.actionD[4] * wallet[3])+ (this.actionE[4] * wallet[4])+ (this.actionF[4] * wallet[5])+ (this.actionG[4] * wallet[6])+ (this.actionH[4] * wallet[7])+ (this.actionI[4] * wallet[8])+ (this.actionJ[4] * wallet[9])).toFixed(5));
    this.resultMouth.splice(5, 1, ((this.actionA[5] * wallet[0])+ (this.actionB[5] * wallet[1])+ (this.actionC[5] * wallet[2])+ (this.actionD[5] * wallet[3])+ (this.actionE[5] * wallet[4])+ (this.actionF[5] * wallet[5])+ (this.actionG[5] * wallet[6])+ (this.actionH[5] * wallet[7])+ (this.actionI[5] * wallet[8])+ (this.actionJ[5] * wallet[9])).toFixed(5));
    this.resultMouth.splice(6, 1, ((this.actionA[6] * wallet[0])+ (this.actionB[6] * wallet[1])+ (this.actionC[6] * wallet[2])+ (this.actionD[6] * wallet[3])+ (this.actionE[6] * wallet[4])+ (this.actionF[6] * wallet[5])+ (this.actionG[6] * wallet[6])+ (this.actionH[6] * wallet[7])+ (this.actionI[6] * wallet[8])+ (this.actionJ[6] * wallet[9])).toFixed(5));
    this.resultMouth.splice(7, 1, ((this.actionA[7] * wallet[0])+ (this.actionB[7] * wallet[1])+ (this.actionC[7] * wallet[2])+ (this.actionD[7] * wallet[3])+ (this.actionE[7] * wallet[4])+ (this.actionF[7] * wallet[5])+ (this.actionG[7] * wallet[6])+ (this.actionH[7] * wallet[7])+ (this.actionI[7] * wallet[8])+ (this.actionJ[7] * wallet[9])).toFixed(5));
    this.resultMouth.splice(8, 1, ((this.actionA[8] * wallet[0])+ (this.actionB[8] * wallet[1])+ (this.actionC[8] * wallet[2])+ (this.actionD[8] * wallet[3])+ (this.actionE[8] * wallet[4])+ (this.actionF[8] * wallet[5])+ (this.actionG[8] * wallet[6])+ (this.actionH[8] * wallet[7])+ (this.actionI[8] * wallet[8])+ (this.actionJ[8] * wallet[9])).toFixed(5));
    this.resultMouth.splice(9, 1, ((this.actionA[9] * wallet[0])+ (this.actionB[9] * wallet[1])+ (this.actionC[9] * wallet[2])+ (this.actionD[9] * wallet[3])+ (this.actionE[9] * wallet[4])+ (this.actionF[9] * wallet[5])+ (this.actionG[9] * wallet[6])+ (this.actionH[9] * wallet[7])+ (this.actionI[9] * wallet[8])+ (this.actionJ[9] * wallet[9])).toFixed(5));
    this.resultMouth.splice(10, 1, ((this.actionA[10] * wallet[0])+ (this.actionB[10] * wallet[1])+ (this.actionC[10] * wallet[2])+ (this.actionD[10] * wallet[3])+ (this.actionE[10] * wallet[4])+ (this.actionF[10] * wallet[5])+ (this.actionG[10] * wallet[6])+ (this.actionH[10] * wallet[7])+ (this.actionI[10] * wallet[8])+ (this.actionJ[10] * wallet[9])).toFixed(5));
    this.resultMouth.splice(11, 1, ((this.actionA[11] * wallet[0])+ (this.actionB[11] * wallet[1])+ (this.actionC[11] * wallet[2])+ (this.actionD[11] * wallet[3])+ (this.actionE[11] * wallet[4])+ (this.actionF[11] * wallet[5])+ (this.actionG[11] * wallet[6])+ (this.actionH[11] * wallet[7])+ (this.actionI[11] * wallet[8])+ (this.actionJ[11] * wallet[9])).toFixed(5));
  
    for (let i = 0; this.resultMouth.length > i; i++) {
      this.resultYear = +this.resultMouth[i] + this.resultYear;
    }

    this.allResults.push({ result: this.resultYear, wallet: wallet });

    return this.resultYear;
  }

  shuffleWallet() {
    this.resultMouth = [];
    this.lastBetterResult = 0;
    this.resultYear = 0;
    this.calculate = false;
    this.wallet = _.shuffle(this.wallet);
    this.firstWallet = this.wallet;
    console.log(this.firstWallet);
    this.showResults = false;
  }

  makeWallets(wallet?: any) {    

    let auxWallet: any;
    
    if (wallet) {
      auxWallet = _.clone(wallet);
    } else {
      auxWallet = _.clone(this.wallet);
    }

    this.doAgain(auxWallet);
  }


  doAgain(auxWallet: any[]) {
    this.vizinhosWallets = [];
    this.resultBetter = [];

    console.log(auxWallet);
    console.log(this.vizinhosWallets);
    console.log(this.resultBetter);

    for (let i = 0; i < 10; i++) {
      let aux2 = this.wallet[i];
      for (let x = i; x < 10; x++) {
        let aux1 = this.wallet[x+1];
        auxWallet.splice(i, 1, aux1);
        auxWallet.splice(x+1, 1, aux2);
        this.vizinhosWallets.push(auxWallet);
        auxWallet = _.clone(this.wallet);
      }
    }

    this.vizinhosWallets.forEach((wallet: any) => {
      if (wallet.length > 10) {
        wallet.forEach((w: any) => {
          if (w === undefined) {
            let index = wallet.indexOf(w);

            if (index >= 0) {
              wallet.splice(index, 1, wallet[9]);
              wallet.splice(9, 1);
            }
          }
        })
      }
    });

    this.vizinhosWallets = _.uniqWith(this.vizinhosWallets, _.isEqual); //REMOVER TODOS OS IGUAIS
    this.vizinhosWallets.splice(35, 1); //O ÚLTIMO É O INICIAL

    this.vizinhosWallets.forEach((wallet: any) => {
      this.resultBetter.push(this.calculateYear(wallet));
    });

    console.log(this.resultBetter);

    let larger = Math.max.apply(Math, this.resultBetter);
    let largerResult = _.find(this.allResults, { result: larger });
    this.wallet = largerResult.wallet;
    console.log(larger);
    this.allTests.push(larger);

    if (larger > this.lastBetterResult) {
      this.lastBetterResult = larger;
      this.letsDoAgain(largerResult.wallet);
    } else {
      console.log(this.allTests);
      this.resultYear = this.lastBetterResult;
      this.showResults = true;
      this.results.push({ id: this.results.length + 1 , result: this.resultYear, wallet: this.wallet, lastWallet: this.firstWallet, vizinhos: this.vizinhosWallets, date: Date.now(), numbers: this.allTests, isOpened: false });     
    }
  }

  fix() {
    for (let i = 0; i < this.vizinhosWallets.length; i++) {
      let wallet = this.vizinhosWallets[i];

      this.vizinhosWallets.forEach((insideWallet: any) => {
        if (_.isEqual(insideWallet, wallet)) {
          let index = this.vizinhosWallets.indexOf(insideWallet);

          if (index >= 0) {
            this.vizinhosWallets.splice(index, 1);
          }
        }
      });
    }
  }

  changeResults() {
    this.showResults = !this.showResults;
  }

  letsDoAgain(wallet: any) {
    this.makeWallets(wallet);
  }
}
