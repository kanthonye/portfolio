
var employments = [];

function add_employment
( _job_title 
, _company_name
, _address
, _frm_month
, _frm_year
, _to_month
, _to_year
, _duties )
{
    employments.push( 
      { job_title:    _job_title 
      , company_name: _company_name
      , address:      _address
      , frm_month:    _frm_month
      , frm_year:     _frm_year
      , to_month:     _to_month
      , to_year:      _to_year
      , duties:       _duties } );
}

function write_duties( job )
{
    for ( n = 0; n < job.duties.length; n++ )
    {
        document.write( "<li class=\"row\">" ); 
        document.write( "   <div class=\"bullet bullet_circle\"></div>" );
        document.write( "   <p class=\"duty\">"+ job.duties[ n ] +"</p>\n" );
        document.write( "</li>\n" );
    }
}
function write_occupations()
{
    var job;
    for ( i = 0; i < employments.length; i++ )
    {
        job = employments[ i ];
        var k = i % 2;
        if ( k == 0 )
        {
            document.write( "<div class=\"row occupation\">\n" );
        }
        else 
        {
            document.write( "<div class=\"row occupation-r\">\n" );
        }
        //document.write( "<div class=\"row occupation\">\n" );
        document.write( "    <div class=\"row\">\n" );
        document.write( "    <div class=\"col left\">\n" );
        document.write( "        <div class=\"row\">\n" );
        document.write( "            <p class=\"date\">\n" );
        document.write( "                <span class=\"month\">"+ job.to_month +"</span>\n" );
        document.write( "                - \n" );
        document.write( "                <span class=\"year\">"+ job.to_year +"</span>\n" );
        document.write( "            </p>\n" );
        document.write( "        </div>\n" );
        document.write( "        <div class=\"row\">\n" );
        document.write( "            <p class=\"date\">\n" );
        document.write( "                <span class=\"month\">"+ job.frm_month +"</span>\n" );
        document.write( "                -\n" );
        document.write( "                <span class=\"year\">"+ job.frm_year +"</span>\n" );
        document.write( "            </p>\n" );
        document.write( "        </div>\n" );
        document.write( "    </div>\n" );
        document.write( "    <div class=\"col right\">\n" );
        document.write( "        <div class=\"row\">\n" );
        document.write( "            <div class=\"row\">\n" ); 
        document.write( "                <p class=\"title\"> "+ job.job_title +" </p>\n" );
        document.write( "            </div>\n" );
        document.write( "            <div class=\"row\"> \n" );
        document.write( "                <p class=\"company\">"+ job.company_name +"</p> \n" );
        document.write( "            </div>\n" );
        document.write( "            <div class=\"row\"> \n" );
        document.write( "                <p class=\"address\">"+ job.address +"</p> \n" );
        document.write( "            </div>\n" );
        document.write( "        </div>\n" );
        document.write( "    </div>\n" );
        document.write( "    </div>\n" );
        document.write( "    <div class=\"row duties\">\n" );
                                 write_duties( job )
        document.write( "    </div>\n" );
        document.write( "</div>\n" );
        document.write( "<div class=\"row separator\"></div>");
    }
}

add_employment
( "Wed Developer Intern"
, "LaGuardia Community College"
, "31-10 Thomson Ave | Long Island City, NY 11101"
, "Jul", 2014
, "Sep", 2014
, [
  "Developed landing pages, dashboards and online applications using Javascript, HTML and CSS.",
  "Developed user interfaces with modern JavaScript frameworks, HTML and CSS.",
  "Used newly learned programming capabilities in PHP, SQL and JavaScript to develop a scheduling system." 
] );


