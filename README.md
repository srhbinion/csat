Client Side Challenge
========

by: Sarah Binion

## Setting up my Environment
The goals, I needed to consider, while setting up the environment for this project:

* create something that could be integrated to a larger site in the future
* compile and organize my code.
* test locally on multiple browsers during my development process
* save my progress (in case I lost my code or make a big mistake). 

The first step to making ensuring support for four browsers (IE8, FireFox 46, Safari 9, and Chrome) is to make sure I have the correct versions of all four browsers. During the development process, I wanted to keep a close eye on the browser with the least CSS support and the oldest (ie8) so that I could be aware of my design decision changes before I built out a feature too much using a more modern  browser. So I set up a local server using [CodeKit](https://incident57.com/codekit/) and I installed a virtual machine on [VirtualBox](https://www.virtualbox.org/wiki/Downloads) running IE8. IE8 and Chrome where the two browsers I predominantly checked and used their developer tools to problem solve any code issues. Also, I organized all my browsers to be easily checked by putting each browser in a different desktop space on my computer so that I could flip through my changes and not mix any of the browsers up with each other or the Photoshop comp. 

Once I started organizing my files. I broke up and organized my visual styles ([Sass](http://sass-lang.com/)) into [SMACSS](https://smacss.com/) to keep my content organized by category and make it easily temptable. Additionally, this organization style reminds me to think about specificity and helps me avoid writing a body style that might overpower a specific class treatment because the categories are compiled from variable being the first thing to modules and states. (SMACSS file organization is something new I learned recently but I believe in good notes and organized files to work collaboratively and maintain files over an extended time period. So I believe implementing this organization style will also assist someone reviewing my code without my presence or ever meeting me.)  

Finally, I wanted to maintain my versions. I used [Git](https://git-scm.com) version control through the terminal. This way I could confidently break my code or change the structure dramatically on a branch and not have to worry about messing up my master working version of the file.

## Writing code
The goals, I needed to consider, writing the code for this project:

* keep code modularly, semantic, and accessible.
* support an old browser but still design in a progressively enhanced manner for newer browsers
* make an interactive page for a desktop that is pixel perfect; keeping in mind fluidity and responsive breakpoints

The main layout of any well-designed site is a grid. If I wanted to add breakpoints for a responsive site that fit intelligently on different screens it is ideal to have content organized out into sections on a grid. I acquired my grid dimensions by analyzing the Photoshop file and gathered that it was a 10 column site so I created a 10 column grid and used the other guideline dimensions to figure out the percentages to make a responsive grid and padding for gutters.

Additionally, I wanted to keep my code semantic and accessible. So I made sure I used the HTML5 element tags that were preferred on the Nerdery Front-end code standards on GitHub. Since IE8 does not support the new tags I needed a way to convert the new elements to 
divs in order to  be read by the browser. I used [the shiv](https://github.com/aFarkas/html5shiv). I asked some senior coders that I know and I looked at popular blogs like CSS tricks and WC3 and the shiv was the most popular answer. I am unsure if this is an illegal move but I believe a shim is technically not a Frameworks, Plugins, and Polyfills so I made the decision to use it so I could support IE8. To assist with accessibility, I included alt tags, ARIA tags, and notes for screen readers.

To ensure as close to pixel perfect as possible I took screen captures of my site and overlayed it on the Photoshop comp. Not all of the text lined so if I wanted to really make it perfect I would kern the text more. I do think the text is the hardest thing to control across browsers and user's computers and I try to think about how my layout will shift if the screen needs to default to the lowest/plainest version of the font options.

**Some of the special features that this challenge called out were: **

###Buttons and States
One of the major design decisions I made while creating this site was adding states. I noticed a pattern with the primary navigation having a normal state, a hover state, and an active state. So I made some design assumptions and applied these states to the other buttons and actions on the site. Additionally, I noticed that the cursor used the pointer on the comp so I have it activating over any links or buttons to hint to users what they can click on.

###Media
I was able to extract the files for the media by grabbing the layers in Photoshop and saving them to their own PNG format. I saved all the files to PNG for consistency, making sure pictures and appropriately compressed for the web, and to maintain transparency for files without backgrounds. Additionally, If I needed to support retina display I would have looked into getting higher resolution graphics and swapped out the higher resolution in a media query. Additionally, If I had the font installed on my computer I would have been able to convert the logo and vector art to SVG. Again, I would have included an SVG version of the video player and logo with a media query as IE8 does not support but it would have been another opportunity for progressive enhancement.

###Form
After my first pass at styling some of the features on the form I realized that not all browsers treated the form elements the same so it would make pixel perfect a bit more difficult. I attempted to make the form the most like the Photoshop comp in IE8 and then I enhanced the visuals for the more modern day browsers with box shadows and placeholder text. I 
also ensured that I marked up my forms appropriately so that it was the most usable and friendly to accessibility readers.

### Carousel
Last but not least, the Javascript portion of the challenge. The first thing I did was read through all the code in the carousel.js file. Then I mapped out what functions were being used in the initial active animation. I first noticed that the carousel was already looping and would stop if the course was hovering over the carousel image area. I looked at how the controls were bound to the event listener, how they were triggered, and what actions they performed. Then I mapped out an outline of how I would extend or add to the provided code to:

* Add Prev and Next buttons that bring the user to the correct slide
* Add pagination indicators that update as the carousel rotates

My first task was to bind the "next" and "prev" buttons to event listeners. I chose the "mouse down" trigger so that it would not conflict with the "mouseover" and "mouse leave" triggers also it seems to be the most practical because the name mimics the desired user action if a user interacted with a button. While looking for the correct variables to use I utilized the Chrome developer tools to frequently console.log() to see what each object and function could/would printout. I was then able to create a selector and bind that to a function that would be carried out when the specific event that I set up was initiated. For the pagination dots, I was able to utilize a similar pattern that already existed for the carousel images loop. Again, I created a selector and a way to access the selector's children. Then I created a function  to loop through the children of the selector that would swap out the class styles in the DOM making only the current child active and the other three inactive. Next steps for this carousel would be to allow users to select a specific indicator to be the current slide and the indicator.