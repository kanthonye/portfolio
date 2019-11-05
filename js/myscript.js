
var prevScrollpos = window.pageYOffset;
window.onscroll = function()
{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos)
    {
        document.getElementById("navbar").style.top = "0";
    }
    else
    {
        document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

function MouseOut( name )
{
    document.getElementById( name ).innerHTML = ": " + name + " :";
}

function MouseIn( name )
{
    document.getElementById( name ).innerHTML = "[ " + name + " ]";
}


/*
    This function gets all elements named "resizable" and check if 
    the elements size is lessthan a certain value. if the element 
    is lessthan that value. it toggle a given class (adding and 
    removing it from the elements classlist base on the size of the 
    body element). 

    The purpose of this is to re-organize div's when window resize.
*/
let MIN_SIZE = 600;
let LAPTOP_MODE = 1;
let TABLET_MODE = 2;
var resized = false;
var mode = LAPTOP_MODE;
function tablet_mode() 
{
    doms = document.getElementsByName("repos")
    for(i=0; i<doms.length; i++)
    {
        elem = doms[i];
        if ( !elem.classList.contains("repos") )
        {
            elem.classList.add( "repos" );
        }
    }
    mode = TABLET_MODE;
}
function laptop_mode() 
{
    doms = document.getElementsByName("repos");
    for(i=0; i<doms.length; i++)
    {
        elem = doms[i];
        elem.classList.remove( "repos" );
    }
    mode = LAPTOP_MODE;
}
function resize_function() 
{
    if ( document.body.offsetWidth < MIN_SIZE && mode == LAPTOP_MODE )
    {
        tablet_mode();
    }
    else if ( document.body.offsetWidth >= MIN_SIZE && mode == TABLET_MODE )
    {
        laptop_mode();
    }
}