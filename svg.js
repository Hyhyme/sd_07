var cvs = document.getElementById( 'cvs' );
var ns = 'http://www.w3.org/2000/svg';
var clear = document.getElementById( 'clearButt' );

var lastX;
var lastY;
var start = false;

var circle = function(e) {
    
    var cl = document.createElementNS( ns, "circle" );
    cl.setAttribute( 'cx', e.offsetX );
    cl.setAttribute( 'cy', e.offsetY );
    cl.setAttribute( 'r', 33 );
    cl.setAttribute( 'fill', 'coral' );
    cvs.appendChild(cl);
    
    lastX = e.offsetX;
    lastY = e.offsetY;
}

var line = function(e) {
    var ln = document.createElementNS( ns, "line");
    ln.setAttribute( "x1", lastX );
    ln.setAttribute( "y1", lastY );
    ln.setAttribute( "x2", e.offsetX );
    ln.setAttribute( "y2", e.offsetY );
    ln.setAttribute( 'stroke', 'coral' );
    cvs.appendChild(ln);
}    

var stamp = function(e) {
    if( start ) {
	line(e);
	circle(e);
    } else {
	circle(e);
    }
    start = true;
}

var clearIt = function() {
    while( cvs.lastChild ) {
	cvs.removeChild( cvs.lastChild);
    }
    start = false;
}

cvs.addEventListener( 'click', stamp );
clear.addEventListener( 'click', clearIt );
    

