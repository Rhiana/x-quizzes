Problem
-------

Company X is developing a new app for student education. Students complete quizzes and their progress is recorded.

Each quiz has 2-4 questions. There are 5 quizzes in total.

Students start from Quiz 1 and progress through to Quiz 5. They should only be allowed to access the next quiz (e.g. quiz 2) when they have finished the prior quiz (e.g. quiz 1).

Environments
------

The application was developed on macOS Mojave 10.14.5, ruby 2.6.1


System dependancies and configuration
------

* ruby 2.6.1

To check your version run:

`$ ruby -v`

To learn how to install ruby visit [https://www.ruby-lang.org/en/installation](https://www.ruby-lang.org/en/installation/).

* node 12.6.0

To check your version run:

`$ node -v`

To learn how to install node visit [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

* yarn 1.16.0

To check your version run:

`$ yarn --version`

To learn how to install yarn visit [https://yarnpkg.com/lang/en/docs/install](https://yarnpkg.com/lang/en/docs/install).


Installation Instructions
------
To clone a copy of the repo:

`git clone git@github.com:Rhiana/x-quizzes.git`

To install the application, cd to the root directory and invoke:

`gem install bundler`

`bundle install`

`yarn install`

`bundle exec rake db:setup`

Running the app
-----------------

To start a local server going run:

`rails s`

In one terminal, for hot module reloading run this in another terminal:

`bundle exec bin/webpack-dev-server`

Go to [http://localhost:3000/](http://localhost:3000/) to see the server running
