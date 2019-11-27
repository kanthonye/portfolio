
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
        document.write( "    <div class=\"area-image\">" );
        document.write( "        <a class=\"row row-1\" target=\"_blank\" href=\""+ proj.url +"\">" );
        document.write( "            <img class=\"image circle\" src=\""+ proj.img +"\" onerror=\"this.src='img/no-image.png'\" />");
        document.write( "        </a>" );
        document.write( "    </div>" );
        document.write( "    <article class=\"area-article\">" );
        document.write( "        <div class=\"row area-date\">" );
        document.write( "           <time class=\"row date\" datetime=\"2011-11\" >" );
        document.write( "               "+ proj.date.month +"-"+ proj.date.year );
        document.write( "           </time>" );
        document.write( "        </div>" );
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
,   [ "C++" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter" } ]
,   "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter"
,   "img/proj-interpreter-316.png"
,   "My Principles of Programming Languages course project. Before taking this course, I use to write brute force parsers. By brute force parsers I mean parsing character by character line by line looking for special characters or phrases. Its harder to do it this way, and not scalable. This course thought me how to use DFAs to build parsers to parse any programming, script, or markup language plus an interpreter to execute instruction from that language. This was one of the most fun and exciting school projects I have done. There was a lot of enlightenment happening with me in this course. And if you know me, you know I am into game development, and like doing things from scratch. With the new powers I have gained, I can write my own scripting language along with parser and interpreter for my other projects more efficiently."
);

AddProjects
( 
    "Diamond Sqaure Algorithm"
,   { month: "Oct", year:  "2018" }
,   [ "C++" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/my-projects/blob/master/DSA/main.cpp" } ]
,   "https://github.com/kanthonye/my-projects/blob/master/DSA/main.cpp"
,   "img/dsa.jpg"
,   "Using the diamond square algorithm approach to generate a gray scale tga image file, which serves as a height map for terrain generation." 
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
,   "Since my OBJ File Parser, I need a way to load 3D Animations into my 3D scene. I wanted to use a common file extension. One that is supported in 3D modeling program Blender. I decided to go with the Collada file format, because it is in XML, and I had already written an XML parser. The Collada parser parses geometries, cameras, lights, controllers, animations, and scene data. Trying to get the animation part to animate properly was a difficult task. It took at least 3 attempts before figuring out that the problem was an error with my quaternion rotation." 
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
,   "This is one of the first file parser I have ever constructed. This project is a simple utility to be used with my 3D rendering projects. It is a simple parser to load complex 3D model aside form the basic shapes my program generates. It loads OBJ files .obj mesh objects and .mtl materials objects." 
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

AddProjects
( 
    "Realtime Continuous LOD Quadtrees Terrain Rendering"
,   { month: "Sep", year:  "2016" }
,   [ "C++", "OpenGL 4.0", "Xcode" ]
,   [ ]
,   "proj-url"
,   "proj-img"
,   "Takes a square grid mesh, and a height map. Use height map image to displace vertex position height component. Quadtree-based LOD algorithm to subdivide grid mesh into smaller grid square base on the viewers position. This is done by including and excluding vertex indices from the grid mesh." 
);
