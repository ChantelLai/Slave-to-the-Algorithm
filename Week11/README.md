# Week 11
## Going down hill from here...
Struggling a lot with just the idea and on what to do which isn't really the ideal situation to be in in week 11. At this point kinetic typography has caught my eye for the input of text to become. However, im unsure how to achieve this. I have seen some examples like [Tim Rodenbroeker](https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/) kinetic typography and have played around with that as well as altering it. I've altered the starting game sketch by placing a text menu to orgainse the sketch. <br>

__Kinetic Typography__ <br>
<img src= "https://github.com/ChantelLai/Slave-to-the-Algorithm/blob/master/Week11/Screen%20Shot%202020-10-12%20at%204.33.00%20pm.png" width="550" height="300"> <br>

## Other Research 
Data visualisation experiment <br>
While trying to collect my thoughts and composure, I decided to experiment with data visualisation just to get my mind off things. I was generally researching about data visualisation and came across [tsne data visualisation](https://distill.pub/2016/misread-tsne/), which is a data visualisation tool used for high dimensional data. I found it really interesting how the use of clusters and perplexity works as well as the visuals being so mesmorizing. I wanted to explore and experiment with tsne, however, I found that it's not as easy as it seems... This is used for high dimensional data, bascially very complex data, in which I dont have. <br>

So instead I dug into JSON data files and implementing them into p5js. I followed The Coding Train' [Working with Data and APIs with p5.js](https://www.youtube.com/watch?v=xG6rc0Lcbks) to learn about JSON files. I made my own JSON file showcasing the amount of hours I spend on the top apps on my phone and representing them in different colours. <br> 
<img src="https://github.com/ChantelLai/Slave-to-the-Algorithm/blob/master/Week11/Screen%20Shot%202020-10-12%20at%204.49.55%20pm.png" width="400" height="400"> <br>
<img src="https://github.com/ChantelLai/Slave-to-the-Algorithm/blob/master/Week11/JSONData%20pm.png" width="200" height="400"> <br> 

Pseudocode Update <br>
FUNCTION make kinetic/deconstructing text <br>
INPUT confession text <br>
FOR text written <br>
DO show kinetic type <br>
IF text is > 0 < 10words <br>
	X and Y grid tiles = 20 <br>
	Speed = 0.2 <br>
ELSE IF text is > 10 < 20words <br>
X and Y grid tiles = 40 <br>
	Speed = 0.4 <br>
ELSE IF text is > 20 < 30words <br>
X and Y grid tiles = 70 <br>
	Speed = 0.8 <br>
ELSE IF keyPressed shows original confession text <br>
THEN produce art work (type) <br>
OUTPUT construction and deconstruction of confession <br>

__References/sources__ <br>
_[Kirell Benzi Data Visualisation](https://www.kirellbenzi.com/art/secret-knowledge)_ - An artist who specialises in this field<br>
_[Exploring Data Visalisation](https://www.creativebloq.com/how-to/data-visualisation-with-p5js)_ - Different tools, libaries and softwares for data visualisation <br>
_[Kinetic Typography p5js](https://editor.p5js.org/mehow_one/sketches/h5sdeQ4jc)_ - Kinetic type sketch in p5js <br>

 
