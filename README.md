# u3236562_11055_LachlanBegbie_OnePageSite
 u3236562_11055_LachlanBegbie_OnePageSite


Developer Notes

CSS Features

 - Snap Scrolling - this feature, which is a major part in the design of the website, was originally intended to be completed in 
   JavaScript, however the complexity of the JavaScript involved and the eventual simplicity with which it could be solved in CSS 
   proved to be the most valuable path to take. This did take away from the main feature I wished to show in JavaScript, however 
   it was much more valuable to learn this could be done in CSS. However, part of the nature of the CSS scroll snapping meant that 
   other features could not be included, mentioned below.


Javascript Features

 - The JavaScript for this website it the same technique utilised twice. It is how the pages containing the articles are revealed, 
   as well as how the user switches between the articles in those pages. Clicking on the element in the website will trigger the 
   corresponding function, which will set a position, and then funs the looping function, passing the element and the position 
   variable through into it. The loop will hide all the elements in the list, except the one which has the same position as the 
   position variable originally passed into the function.

   There was a refining process for this function. Originally, every action was hard coded, so every time, the function called 
   would be different, and would hide/show each element individually, however I was able to refine this into a loop by experimenting 
   and gaining further understanding of the limitations of JavaScript code.

   In the JavaScript I did use, I attempted to apply the learned knowledge and utilise all required constructs (variables, functions, 
   conditionals, loops and respond to events), however my still limited knowledge lead to me possibly not using them to the best they 
   are capable of.


Failed Features

 - There were a number of features which I attempted but abandoned either because they did not suit the site or I did not have the 
   skills to get them to work. 
   
   The main of these was the fading in and out of the articles. Originally, I had planned to have the articles hold a fixed position 
   on the site, and as you scrolled, the first one would fade out from the left half of the screen and the second would fade in on 
   the right, etc. In theory, I understand how this would work, comparing the scroll position to certain waypoints on the page, however 
   due to the snap scrolling, I discovered that the page height was limited to the size of the viewport, and so the scroll position 
   would always measure as 0. Instead of this, I implemented the click to reveal system seen in the final version.

   I also wanted to possibly include a text writing feature, possibly including it as a question, blog thing. However, early research 
   showed that to incorporate this properly, I would need to use techniques and technologies I didn't understand, such as databases and 
   servers.


Overall Reflection

      Although there is much in the website which I am happy with, there are many elements which my own skillset and insights into 
   the JavaScript language have prevented me from achieving. Overall, I feel as though the final product was lacking in areas, and 
   that the design turned out to be a little plain and unsatisfying. I am disappointed that I was only able to really include one 
   JavaScript feature, and would, if given the opportunity, seek out more applicable skills which would help me develop a more robust 
   and useful site.
