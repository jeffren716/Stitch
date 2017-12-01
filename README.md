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
![navigation](https://imgur.com/exg9w0I.gif 'Happy little gifs')

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
// navbar.jsx

...

<ModalContainer
  processForm={this.state.processForm}
  isOpen={this.state.isOpen}
  handleCloseModal={this.handleCloseModal.bind(this)}
/>

...

```

However, the result is a fluid way to log in and stay logged in, given any location
on the site that the user may be on.

## Search

Given the potentially large amount of channels and users that can be supported,
a search function is imperative to supply the user with accessibility to any part
of the site.  Whether it is general channel of content or a specific streamer the
viewer wants to see, the search bar in the header handles all search queries.

The search component is not store information within the Redux cycle.  It instead
lies on the page as a presentational component that has its own internal state.
This allows our application state to stay clean and manageable while using AJAX
to keep searched channels/users and our actual channels/users separate.

![search](https://imgur.com/0lCIfnz.gif 'scrollable dropdown!')

## Follow users

This site relies heavily on users interacting with other users whether that be
through streaming or watching.  Thus, following is an integral aspect to support
and encourage user interaction.  Follows are utilized through a follow table and user
associations

```ruby
# schema.rb

create_table "follows", force: :cascade do |t|
  t.integer "user_id", null: false
  t.integer "follower_id", null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.index ["follower_id"], name: "index_follows_on_follower_id"
  t.index ["user_id"], name: "index_follows_on_user_id"
end

```

```ruby
# user.rb

has_many :follows,
primary_key: :id,
foreign_key: :follower_id,
class_name: :Follow

has_many :followers,
primary_key: :id,
foreign_key: :user_id,
class_name: :Follow

has_many :followed_users,
through: :follows,
source: :followee

```

<!-- Naming your associations in an understandable scope as to see who is the follower
and who is the followee as well as which follow belongs to which user.  Add through
associations into the mix and eventually results in...

![help](https://imgur.com/O67J4o0.gif 'help') -->

Once follows becomes part of the state, implementation is much easier.  Since users
can switch between channels under which they want to stream, my state must be constantly
updating.  This means I cannot store my followed users under the users slice of
state or else they will be thrown out when I update my channels slice of state.
Therefore, I made a specific follows slice of state tied to the current user that
returns user objects that we need handled from the back end.  

![follows](https://imgur.com/ehDNPbA.gif 'dynamic follows')

## Future aspirations

- [ ] Add live chat
- [ ] Be able to follow channels as well
- [ ] Support user changing their profile picture and channel
- [ ] Add video manipulation
