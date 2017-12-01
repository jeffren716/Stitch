# [Stitch](stitch-tv.herokuapp.com)

Stitch is a video streaming platform inspired by Twitch.  Various technologies
including Rails, React, Redux, and PostgreSQL were utilized to build this project
from the ground up over a 10 day period.  The current version displays a few
core features with more features being added in the future.

## Features

* Secure user authentication
* Stream both live and recorded video
* Search the wide range of channels and streamers
* Follow your favorite streamers with the click of a button

## Site Navigation
![navigation](https://imgur.com/3LdO1b8.gif 'Site navigation')

## Streaming content for everybody

The main aspect of this project is streaming.  Streaming content from popular sources
in an accessible manner is the first and foremost priority.  The goal is to leave
the user with easy access to all the content the site has to offer with added benefits
if they are logged in to the site.  Thus, logging into the site is an optional
feature; all content of the streams are visible to anybody who uses the site.  
Because of that, log in utilizes a homebrew modal that persists on every page of
the site.  Furthermore, logging in shouldn't interrupt any content the user is
viewing with the only exception being if they are on the splash page.

```javascript
if (nextProps.loggedIn && this.props.history.location.pathname === '/') {
  this.props.history.push('/directory');
}
```

Because the log in and sign up features reside in a persisting header nav bar,
the modal had to be nested within the nav bar component, yet still have the ability
to dynamically update the nav bar.  This posed some issues during development and
ultimately resulted in a method being passed down to the modal that let it update
its parent nav bar component.

```javascript
<ModalContainer
  processForm={this.state.processForm}
  isOpen={this.state.isOpen}
  handleCloseModal={this.handleCloseModal.bind(this)}
/>
```

However, the result is a fluid way to log in and stay logged in, given any location
on the site that the user may be on.
