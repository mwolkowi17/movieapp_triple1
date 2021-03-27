import Vue from 'vue/dist/vue.js';
import { backgrounds } from './backgroundData.js';
import { ikonyglowne } from './icons.js';
import { planszeA } from './planszeAdane.js';
import { planszeB } from './planszeBdane.js';
import { planszeC } from './planszeCdane.js';

var app = new Vue({
  el: '#app',
  data: () => {
    return {
      message: "hello vue",
      appbackground: {
        src: backgrounds[0]
      },
      ikon1: {
        src: ikonyglowne.first,
        src2: ikonyglowne.firtscliced,
        seen: true,
        hover: false
      },
      ikon2: {
        src: ikonyglowne.second,
        src2: ikonyglowne.secondcliced,
        seen: true,
        hover: false
      },
      ikon3: {
        src: ikonyglowne.third,
        src2: ikonyglowne.thirdcliced,
        seen: true,
        hover: false
      },
      homeicon: {
        src:ikonyglowne.home,
        src2:ikonyglowne.homeclicked,
        seen: false,
        hover: false
      },
      video: {

        src: "",
        seen: false
      },
      buttonforward1: {
        seen: false
      },
      buttonreverse1: {
        seen: false
      },
      buttonforward2: {
        seen: false
      },
      buttonreverse2: {
        seen: false
      },
      buttonforward3: {
        seen: false
      },
      buttonreverse3: {
        seen: false
      },
      licznik: {
        planszeAlicz: 0,
        planszeBlicz: 0,
        planszeClicz: 0
      }
    }
  },
  methods: {
    ikon1change1: function () {
      this.ikon1.hover = false;
      this.appbackground.src = planszeA[0];
      this.ikon2.seen = false;
      this.ikon3.seen = false;
      this.buttonreverse1.seen = true;
      this.buttonforward1.seen = true;
      this.homeicon.seen = true;
    },
    ikon2change1: function () {
      this.ikon2.hover = false;
      this.appbackground.src = backgrounds[1];
      this.ikon1.seen = false;
      this.ikon3.seen = false;
      this.video.seen = true;
      this.buttonreverse2.seen = true;
      this.buttonforward2.seen = true;
      this.homeicon.seen = true;
    },
    ikon3change1: function () {
      this.ikon3.hover = false;
      this.appbackground.src = backgrounds[1];
      this.ikon1.seen = false;
      this.ikon2.seen = false;
      this.video.seen = true;
      this.buttonreverse3.seen = true;
      this.buttonforward3.seen = true;
      this.homeicon.seen = true;
    },
    btnforA: function () {
      this.licznik.planszeAlicz++;
      this.appbackground.src = planszeA[this.licznik.planszeAlicz];
      if (this.licznik.planszeAlicz === 8) {
        this.appbackground.src = backgrounds[1];
        this.video.seen = true;
      }
      if (this.licznik.planszeAlicz === 9) {
        this.licznik.planszeAlicz = 0;
        this.video.seen = false;
        this.appbackground.src = backgrounds[0];
        this.buttonreverse1.seen = false;
        this.buttonforward1.seen = false;
        this.ikon1.seen = true;
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.homeicon.seen = false;

      }
    },
    btnrevA: function () {
      if (this.licznik.planszeAlicz != 0) {
        this.licznik.planszeAlicz--;
      }
      this.appbackground.src = planszeA[this.licznik.planszeAlicz];
      if (this.appbackground.src === planszeA[0]) {
        this.appbackground.src = backgrounds[0];
        this.ikon1.seen = true;
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.buttonreverse1.seen = false;
        this.buttonforward1.seen = false;
        this.homeicon.seen = false;
        this.licznik.planszeAlicz = 0;
      }

      if (this.video.seen === true) {
        this.video.seen = false;
      }

    },
    btnforB: function () {
      if (this.video.seen === false) {
        this.licznik.planszeBlicz++;
        this.appbackground.src = planszeB[this.licznik.planszeBlicz];
      }

      if (this.licznik.planszeBlicz === 0) {
        this.video.seen = false;
        this.appbackground.src = planszeB[0];
      }

      if (this.licznik.planszeBlicz === 1) {
        this.licznik.planszeBlicz = 0;
        this.appbackground.src = backgrounds[0];
        this.ikon1.seen = true;
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.buttonreverse2.seen = false;
        this.buttonforward2.seen = false;
        this.homeicon.seen = false;

      }
    },
    btnrevB: function () {
      if (this.licznik.planszeBlicz != 0) {
        this.licznik.planszeBlicz--;

      }

      if (this.video.seen === true) {
        this.video.seen = false;
        this.appbackground.src = backgrounds[0];
        this.ikon1.seen = true;
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.buttonreverse2.seen = false;
        this.buttonforward2.seen = false;
        this.homeicon.seen = false;
      }

      if (this.appbackground.src === planszeB[0]) {
        this.appbackground.src = backgrounds[1];
        this.video.seen = true;
        this.licznik.planszeBlicz = 0;
      }

      if (this.appbackground.src != backgrounds[0]) {
        this.appbackground.src = planszeB[this.licznik.planszBClicz]
        if (this.video.seen === true) {
          this.appbackground.src = backgrounds[1];
        }
      }


    },
    btnforC: function () {
      if (this.video.seen === false) {
        this.licznik.planszeClicz++;
        this.appbackground.src = planszeC[this.licznik.planszeClicz]
      }

      if (this.licznik.planszeClicz === 0) {
        this.video.seen = false;
        this.appbackground.src = planszeC[0];
      }

      if (this.licznik.planszeClicz === 6) {
        this.licznik.planszeClicz = 0;
        this.appbackground.src = backgrounds[0];
        this.ikon1.seen = true;
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.buttonreverse3.seen = false;
        this.buttonforward3.seen = false;
        this.homeicon.seen = false;

      }


    },
    btnrevC: function () {
      if (this.licznik.planszeClicz != 0) {
        this.licznik.planszeClicz--;
      }

      if (this.video.seen === true) {
        this.video.seen = false;
        this.appbackground.src = backgrounds[0];
        this.ikon1.seen = true;
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.buttonreverse3.seen = false;
        this.buttonforward3.seen = false;
        this.homeicon.seen = false;
      }

      if (this.appbackground.src === planszeC[0]) {
        this.appbackground.src = backgrounds[1];
        this.video.seen = true;
        this.licznik.planszeClicz = 0;
      }

      if (this.appbackground.src != backgrounds[0]) {
        this.appbackground.src = planszeC[this.licznik.planszeClicz]
        if (this.video.seen === true) {
          this.appbackground.src = backgrounds[1];
        }
      }

    },
    home_click: function () {
      this.licznik.planszeAlicz = 0;
      this.licznik.planszBClicz = 0;
      this.licznik.planszeClicz = 0;
      this.video.seen = false;
      this.appbackground.src = backgrounds[0];
      this.buttonreverse1.seen = false;
      this.buttonforward1.seen = false;
      this.buttonreverse2.seen = false;
      this.buttonforward2.seen = false;
      this.buttonreverse3.seen = false;
      this.buttonforward3.seen = false;
      this.ikon1.seen = true;
      this.ikon2.seen = true;
      this.ikon3.seen = true;
      this.homeicon.seen = false;
      this.homeicon.hover = false;
    }
  }
})