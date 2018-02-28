var ns = 'http://www.w3.org/2000/svg';
var stamp = function(e) {
    var cl = document.createElementNS( ns, "circle" );
    cl.setAttribute( 'cx', e.offsetX );
    cl.setAttribute( 'cy', e.offsetY );
    cl.setAttribute( 'r', 33 );

    svg.appendChild(cl);
    

}

var svg = document.getElementByIdNS( 'http://www.w3.org/2000/svg', 'svg' );
svg.addEventListener( 'click', stamp );
    

