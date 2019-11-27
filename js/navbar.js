var navbar_links =
[
    {
        id:"about",
        url:"#about-me",
    },
    {
        id:"projects",
        url:"#my-projects",
    },
    {
        id:"work",
        url:"#my-employments",
    },
    {
        id:"resume",
        url:"WEB-Resume-2019_08.pdf",
    },
];

function MyNavBar()
{
    html = "<ul id=\"navbar-ui\">";
    for (i = 0; i < navbar_links.length; i++)
    {
        var link = navbar_links[ i ];
        html += "    <li class=\"navbar-li\" > <a href=\"" + link.url + "\" onmouseover=\"MouseIn('" + link.id + "')\" onmouseout=\"MouseOut('" + link.id + "')\" id=\"" + link.id + "\" > : " + link.id + " : </a> </li>";
    }
    html += "</ul>";
    document.getElementById( "navbar" ).innerHTML = html;
}