
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
,   "The technologies use in for project are JavaScript, HTML, CSS. JavaScript is used to display certain information, like my project entries, banner links text effect, also add a few effects like smooth scroll, and page rearrangement when resized. CSS is used to adds the styled layout and color theme."
);

AddProjects
( 
    "Programming Language Interpreter"
,   { month: "May", year:  "2019" }
,   [ "C++" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter" } ]
,   "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter"
,   "img/proj-interpreter-316.png"
,   "Principles of Programming Languages course project, while I was attending Queen College. I was the only one to write this project in C++. Everyone else code it in Java which the professors sample code is written in. This project comes in 4 stages. The first is to build a DFA for the type free programming language, a language similar to Python and JavaScript. The next is to write a parser to parse instructions from the language. The 3rd stage is to write an interpreter to interpret the instructions parsed from the language. The 4th and final stage is to support array allocation and index operations."
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
,   "My Intro to Computer Graphics course project. A project done while attending Queens College. While there was more project done for this course. This one was one of my favorite during the course. It was the final project. This one is done using the OpenGL Graphics API version 2.1, and programming language C++. The premise for this project is to use prior knowledge and what you’ve learn throughout the course to build something in 2D or 3D. I had prior experience in 3D graphics programming with modern OpenGL, experience gain on my own before this course. I build a 3D scene made up of a snowman, table, chairs, a rotating ceiling fan, and a free moving 3D camera to move around the scene with." +
    "\n" +
    "Note: all object in the scene were built manually." 
);

AddProjects
( 
    "Realtime Continuous LOD Quadtrees Terrain Rendering"
,   { month: "Sep", year:  "2016" }
,   [ "C++", "OpenGL 4.0", "Xcode" ]
,   [ ]
,   "proj-url"
,   "img/landscape-0.png"
,   "Takes a square grid mesh, and a height map. Use height map image to displace vertex position height component. Quadtree-based LOD algorithm to subdivide grid mesh into smaller grid square base on the viewers position. This is done by including and excluding vertex indices from the grid mesh." 
);


AddProjects
( 
    "Collada Geometry Parser"
,   { month: "Oct", year:  "2015" }
,   [ "C++" ]
,   [ ]
,   "proj-url"
,   "proj-img"
,   "I have fun working on 3D graphics programs. It is what I do in my spear time when I’m not occupied by other things. I had written 3D geometry parser before for the .obj file. However, that file format does not support 3D animation data, and I want to animate my 3D objects. So, I wrote my own Collada file parser that parsers geometries, animations, controllers, and scene data from the file. Though, I had to write and XML file parser before hand, since the file data is in XML. The parser is written in C++." 
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
,   "Rendering multiple lights a few boxes and some spheres is cool and all. But rendering more complex 3d objects, rendering a scene is even cooler. Game Programming and Engine development has been an interest of mind for many years now. After graduating LaGuardia Community College, I was eager to learn 3D graphics programming. One thing that always come up while learning the OpenGL API is how to render more complex objects. Doing some research lead me to the OBJ file format. There is many information on the web about this, which was plenty of help while writing my first parser. The parser for this project is written in C++." 
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
