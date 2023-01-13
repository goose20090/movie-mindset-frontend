# Movie Mindset Review App

The Movie Mindset Review App is a single page React Application which works with a custom [Sinatra API backend](https://github.com/goose20090/phase-3-project-backend). It allows users to create personal accounts, see other accounts' reviews for particular movies and contribute their own. Changes made throughout the site will persist to the custom backend.

It was partly designed to fulfil a set of passing criteria for the phase 3 project of Flatiron's Software Engineering Course.

Exactly how this app fulfils those requrements can be found in the README of this [project's backend](https://github.com/goose20090/phase-3-project-backend). The README for this repository serves as a layout for the App's User experience.

## User Experience


### __Basic Navigation__
Client-side routes can be navigated via the nav bar:

![users clicking on navlinks](./gifs/users-navigating-clientside-routes.gif)

On the 'Movies' page, users can explore a list of movies. Each can be clicked to lead to a nested route with content specific to that film via a list-detail interface:

![users scrolling and clicking on nested routes, revealling specific info about each movie](./gifs/users-navigating-movies-nested-routes.gif)


Each rating can be clicked each Movie route, to provide info on each review it represents:

![users clicking each rating to reveal specific info about its review](./gifs/user-clicking-each-movie-rating-to-reveal-specific-review-info.gif)


### __Login features__

Users can click the "Login" button to pick an account to login to:

![users scrolling the login feature and logging in](./gifs/user-logging-in.gif)

Logging in provides a user with a custom page of their reviews. Again, each review can be clicked for more info and options:

![users accesssing their custom reviews page](./gifs/user-explores-my-reviews-page.gif)

Users can log out:

![user logs out with the Log Out button](./gifs/user-logs-out.gif)

...and create their own accounts, that will persist across renders, with a sign up pop-in form:

![user creates own account](./gifs/user-signs-up.gif)

### __Crud Actions__

In this app, there are 3 data sets: Users, Movies and Reviews. 

As shown above, with the signup form, the user can perform a create action for the 'Users' model, with the sign up pop-in form.

Users can click on reviews in their specific 'My Reviews' route, to update their contents:

![a user updating a review](./gifs/updating-a-review.gif)

Here, they can also delete their reviews:

![a user deleting a review](./gifs/deleting-a-review.gif)

On their page, users can use a search bar to find movies to create new reviews for:

![a user creating a new review](./gifs/create-review.gif)

From that search bar, they can create a new movie to be reviewable for all users:

![a user creating a new movie](./gifs/create-movie.gif)

## Notes

- The styling of buttons and NavLinks was taken from the ['Cool Buttons'](https://codepen.io/canvasplay/pen/WXWobd), codepen by canvasplay

- The star rater was built with the help of [this blog](https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6), by Michael Burrows

- This app uses the [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) font

- Some of the customStyles in the LoginSelect function were achieved by giving prompts to [ChatGPT](https://chat.openai.com/chat)