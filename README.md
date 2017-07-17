# Hospital Frontdesk

This project is simple demo application to integrate rails api and react js
together.

Backend is powered by rails api `rails new <appname> --api` and Front end is
powered by `create-react-app` CLI. We are keeping both rails api and react
application together. You can find react application inside `client` directory.

## Setting up development servers

```sh
# bundle Gemfile
bundle
# migrate database
rails db:create db:migrate
# install npm packages
cd client/ && yarn
# start both servers together
bin/rails start:development
```

> NOTE: we are using proxy to api server for `create-react-app` in package.json
> file. And Procfile.dev is configured to run development.
> Heroku manages production version automatically.
