var i=0;
var urls = [
  'http://avadl.uploadet.ir/Film2/Mystery/Prestige/Prestige.2006.BRRip.720p.Farsi.(Avadl.com).mp4',
  'http://sv4avadl.uploadet.ir/hamed/250Top/Twelve.Monkeys.1995.720p.BluRay_AVADL.BIZ.mkv',
  'http://avadl.uploadet.ir/DL7/Film/2012/The%20Hunt%20%282012%29%20720p%20BrRip%20x264_AVADL.Net.mkv'
];
setInterval(function(){
  //this is popup for letching when has ng-hide class there is no uploads
  if($('.center.leech-box.panel.panel-default').hasClass('ng-hide')){
    $('form').find('a.btn.btn-block').click();
    $('#fileAddress').focus();
    $('#fileAddress').val(urls[i]);
    $('#fileAddress').change();
    setTimeout(function(){
      $('.modal.in').find('button.btn.btn-primary').click();
      i++;
    }, 2000);
  }
},8000);
