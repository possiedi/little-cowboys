(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.btnMenu=document.getElementById(e),this.nav=document.getElementById(n),this.menuMobile=this.menuMobile.bind(this)}var n,i;return n=t,(i=[{key:"menuMobile",value:function(e){"touchstart"===e.type&&e.preventDefault(),this.nav.classList.toggle("active");var t=this.nav.classList.contains("active");e.currentTarget.setAttribute("aria-expanded",t),t?e.currentTarget.setAttribute("aria-label","Fechar Menu"):e.currentTarget.setAttribute("aria-label","Abrir Menu")}},{key:"addEventMenuMobile",value:function(){this.btnMenu.addEventListener("touchstart",this.menuMobile),this.btnMenu.addEventListener("click",this.menuMobile)}},{key:"init",value:function(){return this.btnMenu&&this.nav&&this.addEventMenuMobile(),this}}])&&e(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),t}())("btn-menu","nav").init()})();