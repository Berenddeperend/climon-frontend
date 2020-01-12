<template>
  
</template>

<script>
export default {

  
data() {
  return {
    Abetoo: function(){function m(){return{init:function(h,e){k=h;l=e;c=new WebSocket("ws://abetoo.com:15674/ws");c.onopen=function(){f=g.a;c.send("CONNECT\naccept-version:1.2\nlogin:abetoouser\npasscode:abetoopi\n\n\x00")};c.onclose=function(){init(k,l)};c.onmessage=function(a){d+=a.data;a:{a=d;for(var index=0;index<a.length;index++)if("\x00"===a.charAt(index)){a=index;break a}a=-1}if(-1!=a){a=d.substring(0,a);d=d.replace(a,"");d=d.replace(String.fromCharCode(0)+String.fromCharCode(10),"");if(null===a||0>=a.length)var b=
"";else b=a.split("\n"),b=0<b.length&&-1===b[0].indexOf(":")?b[0]:"";if("CONNECTED"===b){f=g.c;a="";for(b=0;50>b;b++)a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));c.send("SUBSCRIBE\nid:"+a+"\ndestination:/topic/"+k+"\nreceipt:subscribed\nclient:auto\n\n\x00")}else if("ERROR"===b)c.close();else if("MESSAGE"===b)b=atob,null===a||0>=a.length?a="":(a=a.match("\n\n[^\x00]+"),a=null===a?"":a),null!=l&&l(b(a));else{if(b="RECEIPT"===b)null===a||0>=
a.length?a="":(a=a.match("receipt-id:[^\n]+"),null===a?a="":(a=String(a).split(":"),a=2===a.length?a[1]:"")),b=0===a.localeCompare("subscribed");b&&(f=g.b)}}};c.onerror=function(){}},sendMessage:function(d,e,a){if(f!=g.b)return!1;e=btoa(e);c.send("SEND\ndestination:/topic/"+d+"\ncontent-type:text/plain\ncontent-length:"+e.length+"\ncorrelationid:"+a+"\nfrom:"+k+"\n\n"+e+"\x00");return!0},g:function(){return f.name}}}var d="",g={a:{value:0,name:"Disconnected"},c:{value:1,name:"Connected"},b:{value:2,
name:"Subscribed"}},f=g.a,k="",l=null,c=null,h=null;return{getInstance:function(){h||(h=m());return h}}}()
  }
},
mounted() {
  console.log('abetoo:', this.Abetoo);

  const abetoo = this.Abetoo.getInstance();
  abetoo.init("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e", callback);
  function callback(newmessage) {
    console.log('abetoo message recieved:')
    console.log(newmessage);
  }

  // window.setInterval(()=> {
  //   const doSendMessage = abetoo.sendMessage("-V898dmJStk-FIgeLCMbfhQ636307126199562031#970e53896952cb6fe023a0858025509fbc896d63", "vanaf js", "-");
  //   // const doSendMessage = abetoo.sendMessage("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e", "vanaf js", "-");
  //   console.log('doSendMessage: ', doSendMessage);
  // }, 1000);
}



}
</script>

<style>

</style>
