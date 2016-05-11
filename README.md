Client Side Challenge - Sarah Binion
========

#Requirements
- Write code conducive to making the site responsive
- If you may go over, we recommend commenting on how you'd accomplish certain tasks
- Fully functional static page that could be used for integration with a yet to be determined CMS
- Show us your best start to a code base that will be scalable, flexible, maintainable, semantic and accessible
- Progressively enhanced manner (emphasizes accessibility, semantic HTML markup, and external stylesheet and scripting technologies)


##Browser Support
- IE8+
- Chrome - Latest Stable Release
- Firefox - Latest Stable Release
- Safari - Latest Stable Release

# Setting up my Envoinment
Setting up my envionment I need to consider some of my goals for this project. 
* I want to create something that could be integated to a larger site in the future. 
* I want to be able to test on multiple browsers during my development process. 
* I want to save my progress or versions incase I lose my code or make a mistake. 

I choase to solve these issues by organizing my co
I set up a virtual machine so as i bult the site I could easly preview in IE8 and Chrome. Since IE8 is the oldest browser and most likely to not support newer code styles I wanted to keep my attention on that browser. Additionally, becasue I wanted to keep my code semantic and accessile I made sure I used the HTML5 element tags, alt tags(for my images), and additional notation for screen readers. Another area I added imprvment was by applying a SMACSS style organization to my Sass. I feel this keeps my code easy to naviagte and easy to template across a larger project. Additionally, I wrote my own grid and I used percentage used percentage veriables which would make expanding this site to be responsive even easier.

## Links to Build Tools
* [codekit](https://incident57.com/codekit/)
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* [the shiv](https://github.com/aFarkas/html5shiv)
* [SMACSS](https://smacss.com/)
* [Sass](http://sass-lang.com/)
* [Git](github)

##Carousel
- Add pagination dots to the carousel that update as the carousel rotates
- Add the previous and next arrows to the carousel that bring the user to the previous or next slide.
When I examined the carouel code, I mapped out an outline of how I would figure out how to use the provided code. I first noticed that the carousel was already looping and would stop if the couser was hovering over the carousel image area. I looked at how the controlls were bound to the event listener, how they were triggered, and what actions they performed. My first task was to bind the "next" and "prev" buttons to event listeners. I chose the "mousedown" trigger so that it would not conflict with the "mouseover" and "mouseleave" triggers also it seems to be the most practicle becasue the name mimics a user action if someone saw an arrow button. While looking for the correct varaibles to use I utilized the Chrome developer tools console frequently to see what each object and function could return. For the pagination dots I was able to utlize a similar pattern that already exhisted to loop though the list of dots similar to the way the carosel was looping thouh the list of pictures.

##Media
When I examined the Photoshop comp, I was able to extract the files for the media by grabing the layers in Photoshop and saving them to their own PNG format. I saved all the files to PNG for consistency, making sure pictures and approptately compressed for the web, and to maintain transperencey for files without backgrounds. Additionally, If I needed to support retina display I would have looked into getting higher resolution graphics and swapped out the higher resolution in a media query. Additionally, If I had the font installed on my computer I would have been able to convert the logo and vector art to SVG. Again, I would have included a SVG version of the video player and logo with a media query as IE8 does not support but it would have been another opportunity for progressive enhancement.

##Form
- Marked up appropriately to be a functional form
After my first pass at styling some of the features on the form I realized that not all browsers treated the form elements the same so it would make pixel perfect a bit more difficult. I attempted to make the form the most like the Photoshop comp in IE8 and then I enhanced the visuals for the more modern day browsers with box shadows and placeholder text.

##Design Assumptions Buttons and States
While Pixel Perfection was the goal I noticed a pattern with the primary navigation having an normal state, a hover state, and an active state. So I made some design assumtions and applied these states to the other buttons and actions on the site.