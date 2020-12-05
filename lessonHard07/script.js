'use strict';

let menit,
date,
seconds,
jam,
hari,
tanggal,
bulan,
tahun;


setInterval(function(){
  date = new Date();
  seconds = date.getSeconds();
   menit = date.getMinutes();
   jam = date.getHours();
   hari = date.getDay();
   tanggal = date.getDate();
   bulan = date.getMonth();
   tahun = date.getFullYear();
  document.getElementById('date').innerHTML = tanggal+" "+((bulan+1)%12)+" "+tahun+"<br>"+jam+" : "+menit+" : "+seconds;
  },1000);
