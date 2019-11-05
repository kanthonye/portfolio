
var projects = [];
function write_links( proj )
{
    for (n = 0; n < proj.links.length; n++)
    {
        document.write( "                 <a href=\""+ proj.links[ n ].url +"\" class=\"elem fa fa-"+ proj.links[ n ].icon +"\"></a> \n" );
    }
}
function write_tools( proj )
{
    for (n = 0; n < proj.skills.length; n++)
    {
        document.write( "              <p class=\"elem\">"+ proj.skills[ n ] +"</p>\n" );
    }
}
function write_my_projects()
{
    for (i = 0; i < projects.length; i++)
    {
        var proj = projects[ i ];
        var k = i % 2;
        if ( k == 0 )
        {
            document.write( "<div class=\"row project\">" );
        }
        else 
        {
            document.write( "<div class=\"row project-r\">" );
        }
        document.write( "    <div class=\"row area-date\">" );
        document.write( "        <time class=\"row date\" datetime=\"2011-11\" >" );
        document.write( "            "+ proj.date.month +"-"+ proj.date.year );
        document.write( "        </time>" );
        document.write( "    </div>" );
        document.write( "    <div class=\"area-image\">" );
        document.write( "        <a class=\"row row-1\" href=\"#\">" );
        document.write( "            <img class=\"image circle\" src=\""+ proj.img +"\" onerror=\"this.src='img/no-image.png'\" />");
        document.write( "        </a>" );
        document.write( "    </div>" );
        document.write( "    <article class=\"area-article\">" );
        document.write( "        <div class=\"row row-2\">" );
        document.write( "            <article class=\"row title\"><p>"+ proj.title +"</p></article>" );
        document.write( "            <article class=\"row detail\">" );
        document.write( "                <p class=\"row description\">"+ proj.discription +"</p>" );
        document.write( "            </article>" );
        document.write( "            <div class=\"row footer\">" );

        document.write( "              <div class=\"col tools\">\n" );
            write_tools( proj ); 
        document.write( "              </div>\n" );

        document.write( "              <div class=\"col links\">" );
            write_links( proj ); 
        document.write( "              </div>" );

        document.write( "            </div>" );
        document.write( "        </div>" );
        document.write( "    </article>" );
        document.write( "</div>" );
    }
}


function AddProjects( _title, _date, _skills, _links, _url, _img, _discription )
{
    projects.push
    ( 
        { 
              title:       _title
            , date:        _date
            , skills:      _skills
            , links:       _links
            , discription: _discription
            , url:         _url
            , img:         _img 
        } 
    );
}

AddProjects
( 
    "My Web Portfolio"
,   { month: "Oct", year:  "2019" }
,   [ "Javascript", "HTML", "CSS" ]
,   [ ]
,   "#"
,   "img/site-img.png"
,   "My web portfolio is my place on the internet where I showcase my work, art and "+
    "ambitions in science. Since completing the requirement for my Bachelors' Degree "+
    "in Computer Science @ Queens College, I wanted to start sending out applications "+
    "and needed a place that make it easy to show and tell employer about myself, my "+
    "work, my art and ambitions in science. So I build this portfolio. From Scratch ( ^_^)."
);

AddProjects
( 
    "Programming Language Interpreter"
,   { month: "May", year:  "2019" }
,   [ "C++", "Java" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter" } ]
,   "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter"
,   "img/proj-interpreter-316.png"
,   "My Principles of Programming Languages course project. Before taking this course, I use to write brute force parsers. By brute force parsers I mean parsing character by character line by line looking for special characters or phrases. Its harder to do it this way, and not scalable. This course thought me how to use DFAs to build parsers to parse any programming, script, or markup language plus an interpreter to execute instruction from that language. This was one of the most fun and exciting school projects I have done. There was a lot of enlightenment happening with me in this course. And if you know me, you know I am into game development, and like doing things from scratch. With the new powers I have gained, I can write my own scripting language along with parser and interpreter for my other projects more efficiently."
);

AddProjects
( 
    "interactive 3D scene (Christmas Theme)"
,   { month: "Dec", year:  "2018" }
,   [ "C++" , "OpenGL 2.1" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/blob/master/qc/CS368/Basic3DInteractEnvironment.cpp" } ]
,   "https://github.com/kanthonye/school-projects/blob/master/qc/CS368/Basic3DInteractEnvironment.cpp"
,   "img/simple-scene.gif"
,   "My Intro to Computer Graphics course project. This was the final project. Everyone was free to their own thing using prior knowledge and what they have learned throughout the course. The purpose was to be creative. I had prior experience in 3D graphics programming with modern OpenGL 4.0 studying on my own. The purpose of taking this course was to see if there is anything technique thought that I may not know yet. Long story short there wasn't much, but I had fun making this scene. I did a scene base on Christmas, since it was that time of the year. It supports a free camera with rotation, so your able to move around in 3D space in any direction." 
);


AddProjects
( 
    "Collada Geometry Parser"
,   { month: "Oct", year:  "2015" }
,   [ "C++" ]
,   [ ]
,   "proj-url"
,   "proj-img"
,   "This was a final project for my Intro to Computer Graphics course " +
    "at Queens College.  For the final project everyone was free to their own thing "   +
    "using what they’ve learn throughout the course. I did a scene base on Christmas, " +
    "since it was that time of the year. It supports a free camera with rotation, so "  +
    "your able to move around in 3D space in any direction." 
);

AddProjects
( 
    "XML File Parser"
,   { month: "Oct", year:  "2015" }
,   [ "C++" ]
,   [ ]
,   "proj-url"
,   "proj-img"
,   "A simple xml parser. This project is part of a bigger project I am currently working on." 
);

AddProjects
( 
    "OBJ File Parser"
,   { month: "Jan", year:  "2015" }
,   [ "C++" ]
,   [ ]
,   "proj-url"
,   "proj-img"
,   "Back when I first started teaching my self 3D graphics programming for game development, I needed away to render complex geometry. I watch this video tutorial on how to parser 3D geometric data from a file with extension obj. An OBJ parser was one of the first parser I have ever written.." 
);


AddProjects
( 
    "Blogspot Template ( Orange )"
,   { month: "Feb", year:  "2013" }
,   [ "HTML", "CSS" ]
,   [ ]
,   "http://kae-demo-orange.blogspot.com/"
,   "img/blogspot-template-orange.png"
,   "Back when I use to draw alot, more than I do now. I had a blog to showoff my artworks. "+
    "And, I just couldn't find the right template that was the perfect fit. I\'ve alway "+
    "want to do my own template. So, I tinkered with the blogger template code until I "+
    "figured out how to build my own. After many template built and tried. I came up with "+
    "this template theme, which I've always loved. The "+
    "<a href=\"https://artwork-template-dark.blogspot.com/\" target=\"_blank\">Dark Version</a>. "+
    "Oh! If your wonder about My Blog Of Arts, "+
    "<a href=\"http://kaearts.blogspot.com/\" target=\"_blank\">click here</a>." 
);