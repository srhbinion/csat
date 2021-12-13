Nerdery Client Side Challenge
========

by: Sarah Binion

## Setting up my Environment
The goals I considered while setting up the environment for this project were:

* create something that could be integrated to a larger site in the future
* compile and organize my code
* test locally on multiple browsers during my development process
* save my progress (in case I lost my code or made a big mistake) 

My first step to ensuring support for four browsers (IE8, FireFox 46, Safari 9, and Chrome) is to make sure I have the correct versions of all four browsers. During the development process, I wanted to keep a close eye on the browser with the least CSS support and the oldest (ie8) so that I could be aware of my design decision changes before I built out a feature too much. After I confirmed I had the correct versions of the other three browsers I installed a virtual machine on [VirtualBox](https://www.virtualbox.org/wiki/Downloads) running IE8. Additionally, so that I could check my site progress locally I set up a server using [CodeKit](https://incident57.com/codekit/). Throughout the project, IE8 and Chrome where the two browsers I predominantly checked and (utilized the developer tools to problem solve any code issues) but I organized all my browsers to be easily viewed by putting each browser in a different desktop space on my computer. This way I could flip through my changes and not mix any of the browsers up with each other or the Photoshop comp. 

Once I started to organize my files, I broke up the visual styles ([Sass](http://sass-lang.com/)) into [SMACSS](https://smacss.com/) to keep the content sorted by category and make my Scss easily templatable. Additionally, this organization style reminded me to think about specificity and helped me avoid writing a body style that might overpower a specific class treatment because the categories are compiled from global variables to specific modules and states. (SMACSS file organization is something new I learned, but I believe in good notes and organized files to work collaboratively and maintain files over an extended time period. I believe implementing this organization style will also assist someone reviewing my code without my presence.)  

Finally, I wanted to maintain my versions and keep track of major save points. I used [Git](https://git-scm.com) version control through the terminal. This way, I could confidently break my code or change the structure dramatically on a branch and not have to worry about messing up my master working version of the file.

## Writing code
The goals I considered while writing the code for this project:

* keep code modularly, semantic, and accessible
* support an old browser but still design in a progressively enhanced manner for newer browsers
* make an interactive page for a desktop that is pixel perfect; keeping in mind fluidity and responsive breakpoints

The main layout of any well-designed site is a grid. Had I added breakpoints for a responsive site, that fit intelligently on different screens, it would be ideal to have content organized out into sections on a grid. I acquired my grid dimensions by analyzing the Photoshop file and gathering that it was a 10 column site. I created a 10 column fluid grid with gutters and used the guideline dimensions to figure out percentages.

To keep my code semantic and accessible, I made sure I used the HTML5 element tags to more informedly label my tags and give more meaning to my HTML outline. Since IE8 does not support the new tags I needed a way to convert the new element tags to a `div` in order to  be read by the browser. I used [the shiv](https://github.com/aFarkas/html5shiv) which is a shim. I asked some senior coders that I know and I looked at popular blogs like CSS tricks and WC3 and  "the shiv" was the most popular answer. I am unsure if this is an illegal move but I believe a shim is technically not a Frameworks, Plugins, and/or Polyfills so I made the decision to use it so I could support IE8. Additionally, to assist with accessibility, I included alt tags, ARIA tags, and hidden notes for screen readers and I reviewed the Nerdery's front-end coding standards to see the preferred options.

To ensure as close to pixel perfect as possible I took screen captures of my site and overlayed it on the Photoshop comp throughout the build process. The boxes line up but not all of the text lines up. Additionally, If I wanted to be more accurate with pixel perfect I would kern the text to match. I do think text is the hardest thing to control across browsers and user's computers. When it comes to thinking about text, I think it is important to try to forecast how the layout will shift if the screen needs to default to the lowest/plainest version of the font options or reflow in a responsive site.

**Some of the special features that this challenge called out were: **

###Buttons and States
One of the major design decisions I made while creating this site was adding states. I noticed a pattern with the primary navigation having a normal state, a hover state, and an active state. I made some design assumptions and applied these states to the other buttons and actions on the site. Additionally, I noticed that the cursor used the pointer on the comp so I have it activating over any links or buttons to hint to users what they can click on.

###Media
Extracting files to be assets by grabbing the layers in Photoshop and saving them to their own file. I saved all the files to PNG for consistency, making sure pictures were appropriately compressed for the web, and to maintain transparency for files without backgrounds. Additionally, If I needed to support retina display I would look into getting higher resolution graphics and swapping out the higher resolution in a media query. Also, If I had the font installed on my computer I could convert the logo into SVG. Again, I would have had to make adjustments for the SVG version of the video player button and logo with a media query as IE8 does not support but it would have been another opportunity for progressive enhancement.

###Form
After my first pass at styling some of the features on the form I realized that not all browsers treated the form elements the same so it would make pixel perfect a bit more difficult. I attempted to make the form the most like the Photoshop comp in IE8 and then I enhanced the visuals for the more modern day browsers with box shadows and placeholder text. I 
also ensured that I marked up my forms appropriately so that it was the most user-friendly to accessibility readers.

### Carousel
Last but not least, the Javascript portion of the challenge. The first thing I did was read through all the code in the carousel.js file. Then I traced what functions were being used in the initial active animation. I noticed that the carousel was already looping and would stop if the cursor was hovering over the carousel image area. I looked at how the controls were bound to the event listener, how they were triggered, and what actions they performed. Then I mapped out an outline of how I would extend or add to the provided code to:

* Add Prev and Next buttons that bring the user to the correct slide
* Add pagination indicators that update as the carousel rotates

My first task was to bind the "next" and "prev" buttons to an event listener. I chose the "mouse down" trigger so that it would not conflict with the "mouseover" and "mouse leave" triggers also it seems to be the most practical because the name mimics the desired user action if a user interacted with a button. While looking for the correct variables to use I utilized the Chrome developer tools to frequently console.log() and see what each object and function could/would printout. I was then able to create a selector and bind that to a function that would be carried out when the specific event that I set up was initiated. 
For the pagination dots, I was able to utilize a similar pattern that already existed for the carousel image loop. Again, I created a selector and a way to access the selector's children. Then I created a function to loop through the children of the selector that would swap out the class styles in the DOM making only the current child active and the other three inactive. Next steps for this carousel would be to allow users to select a specific indicator that would activate that indicator along with the appropriately paired slide picture.
