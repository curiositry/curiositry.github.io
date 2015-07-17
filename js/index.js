var nav = responsiveNav(".nav-collapse", { // Selector
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 284, // Integer: Speed of the transition, in milliseconds
    label: "MENU", // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "menu-icon", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative", // String: Position of the opened nav, relative or static
    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to <html> element
    init: function(){}, // Function: Init callback
    open: function(){}, // Function: Open callback
    close: function(){} // Function: Close callback
});



// Pullquotes
$(document).ready(function() {
  function pullQuote(el){
    var parentParagraph = el.parentNode;
    parentParagraph.style.position = 'relative';
    var clone = el.cloneNode(true);
    clone.setAttribute('class','semantic-pull-quote--pulled');
    // Hey y’all, watch this!
    parentParagraph.parentNode.parentNode.insertBefore(clone, parentParagraph.parentNode);
    
    if(!clone.getAttribute('data-content')){
      clone.setAttribute('data-content', clone.innerHTML );
      clone.innerHTML = null;
    }
  };
  
  var pullQuotes = document.getElementsByClassName('semantic-pull-quote');
  
  for(var i = 0; i < pullQuotes.length; i++) {
    pullQuote(pullQuotes[i]);
  }
  
});

$(document).ready(function() {
  computeBodyPadding();
});

window.onresize = function(event) {
  computeBodyPadding();
};

function computeBodyPadding(){
  var header = document.getElementById('main-header');
  var body = document.getElementsByTagName('body')[0];
  body.style.paddingTop = 50+header.clientHeight+"px";
}

/*
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/

;( function ( document, window, index )
{
  'use strict';

  var elSelector		= '.main-header',
    elClassNarrow	= 'main-header--narrow',
    elNarrowOffset	= 100,
    element			= document.querySelector( elSelector );

  if( !element ) return true;

  var elHeight		= 0,
    elTop			= 0,
    dHeight			= 0,
    wHeight			= 0,
    wScrollCurrent	= 0,
    wScrollBefore	= 0,
    wScrollDiff		= 0,

    hasElementClass		= function( element, className ){ return element.classList ? element.classList.contains( className ) : new RegExp( '(^| )' + className + '( |$)', 'gi' ).test( element.className ); },
    addElementClass		= function( element, className ){ element.classList ? element.classList.add( className ) : element.className += ' ' + className; },
    removeElementClass	= function( element, className ){ element.classList ? element.classList.remove( className ) : element.className = element.className.replace( new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' ); };

  window.addEventListener( 'scroll', function()
  {
    elHeight		= element.offsetHeight;
    dHeight			= document.body.offsetHeight;
    wHeight			= window.innerHeight;
    wScrollCurrent	= window.pageYOffset;
    wScrollDiff		= wScrollBefore - wScrollCurrent;
    elTop			= parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

    if( wScrollCurrent > elNarrowOffset ) // toggles "narrow" classname
    {
      if( !hasElementClass( element, elClassNarrow ) )
        addElementClass( element, elClassNarrow );
    }
    else removeElementClass( element, elClassNarrow );

    if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
      element.style.top = '0px';

    else if( wScrollDiff > 0 ) // scrolled up; element slides in
      element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';

    else if( wScrollDiff < 0 ) // scrolled down
    {
      if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
        element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

      else // scrolled down; element slides out
        element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
    }

    wScrollBefore = wScrollCurrent;
    
  });

}( document, window, 0 ));

