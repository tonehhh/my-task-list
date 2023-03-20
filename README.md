
# My Task List

The website "What is the Bauhuas" serves as a landing point for anyone who are either familiar with or curious about the background of the renowned Bauhaus school of design.
What is the Bauhaus presents a succinct history of the institution, its founder Walter Gropius, and its design philosophies together with pertinent photos and videos.

People will be able to learn about Bauhaus's brief but informative history in the website's introduction as well as the beauty of its designs and artworks in the gallery section. They can also sign up for a newsletter in the sign-up section to receive additional information, the most recent news, and resources related to Bauhaus.

![Website Preview](./assets/readme%20images/website-preview.png)


## Features

- #### Navigation

    - Featured at the top of the page, the navigation shows the name "Bauhaus" in the left corner that links to the top of the page.
    - The navigation links ot the rigth: Intro, Gallery and Sign Up link ot different sections of the same page.
    - The navigation is in a font that is similar to the commonly used font from Bauhaus in black and the background color of the blue sky that matches with the hero image which also contrasts well.
    - The navigation is very clear for users to find what information they're looking for.




![Navigation Bar](./assets/readme%20images/navigation-bar.png)


- #### The Header
    - The header displays some empty space filled with a calm blue sky leading us to the focus point being some peaks ontop of a building.
    - It gives us a decent idea of what to expect in the rest of the site, showing off the design philosophy of Bauhaus.

![Header](./assets/readme%20images/header.png)




- #### The Introduction Section

    - The introduction section is split into 3 parts, it gives us a short summary of the history of the school of Bauhaus and it's founder, Walter Gropius followed up with how it inspired students to join the infamous school.
    - While also providing images of the school, founder, famous designs and group photo of some influencial people.

![Introduction Part 1](./assets/readme%20images/intro1.png)

![Introduction Part 2](./assets/readme%20images/intro2.png)

![Introduction Part 3](./assets/readme%20images/intro3.png)


- #### Video

    - At the end of the introduction user's a treated with a beautiful video animation, heavily inspired by one of the schools teachers,  Wassily Klandisky. Famous for his seminars on color and shapes.
    - The video gives users options to play it and to switch the audio on/off.


![Shapes Video](./assets/readme%20images/video.png)


- #### The Gallery Section

    - The Gallery section provides users with both recent and past designs/art pieces that were inspired or made by members of the Bauhaus school.
    - To help users understand what the school has accomplished and what the website can offer in terms of education, images of things like architecture, designs, art and products are displayed.

![Gallery](./assets/readme%20images/gallery.png)


- #### The Sign Up/Footer Section

    - Students can sign up for a newsletter in the Sign Up area to learn more about the school, receive notifications of related events, and access resources to help users understand the Bauhaus school of thought.
    - Links to social media sites are also provided to guide readers to the appropriate channels for news (Twitter), events (Facebook), and design inspiration (Instagram).

![Sign Up & Newsletter](./assets/readme%20images/signup-footer.png)


## Testing
- I've tested the page and everything works fine on different browsers such as Chrome, Brave and Safari.
- I can also confirm that the page's responsiveness looks good on both mobile and tablet screens using relevant devices and devtools device toolbar.
- The navigation, header, introduction, gallery, sign up and footer sections and text are all readable and are clear.
- The sign up sections works perfectly, requiring and only accepting emails in the email field. The submit button also works and has a added animation for confirmation of action.

#### Bugs
- ##### Solved Bugs
    - When i first deployed my project to GitHub I noticed that my project was broken, none of the CSS was working.
    - I realised I had used an absolute file path was causing the issue like below
##

    <link rel="stylesheet" href="style.css">

- Performance
    - I also realised that the performance was alot slower than expected.
    - I figured out the performance was lacking due to using large PNG files for the images and originally having an autoplay video was causing it.
    - I compressed and converted the images to WEBP files and changed from having a video autoplaying in the background to one having controls and giving users the option to play when they need to.
    - This resulted in the page having almost a doubled performance score from previous and was no longer suffering from any unnecessary lag.
  

#### Validator Testing
- ##### HTML
    - No errors were found when testing through the official W3C validator.
- ##### CSS
    - No errors were found when testing through the official Jigsaw validator.

![Lighthouse Score](./assets/readme%20images/lighthouse-score.png)

![Performance Score](./assets/readme%20images/performance-score.png)


#### Unfixed Bugs
- No unfixed bugs

## Deployment
- The site was deployed to GitHub pages in the GitHub repository via the Settings Tab
- From the source section drop-down menu then selected the Main Branch
- Once the master main branch was selected, a link to the completed site was provided.
## Acknowledgements

 #### Content
 - The Gallery & social media links were taken from the CI [Love Running](https://github.com/Code-Institute-Solutions/readme-template#love-running) Project
 - 
 #### Media
 - Images were sourced primarly from [Unsplash](www.unsplash.com) & [Pinterest](www.pinterest.com)
 - Video was sourced from [@Buahuas Movement](https://twitter.com/BauhausMovement)
