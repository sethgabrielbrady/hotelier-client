# Hotelier

A custom hotel reservation system.

Site URL: <https://panda-hotelier.herokuapp.com/>

## To Get Started...

First, clone this repo and install the dependencies with `npm install`. Then run the
`grunt` command in the project root (this will use the "default" task alias in the
grunt configuration). Now, run your http server from the `build/` directory.

## Application Deployment

This application is automatically deployed when a commit or merge occurs on the `master`
branch (this is called "continuous integration / deployment"). Before deploying the app, Heroku runs the
`grunt` command, because of this, **ALL dependencies** must be installed as regular app
`"dependencies"` in the `package.json`. This app **does not use `"devDependencies"`**.

> NOTE: Because `grunt` is run _when deploying the application on Heroku_, if the
build fails, the site will NOT be visible! Ensure the entire `grunt` build runs successfully
before merging into `master`.

## API Information

The base URL for the data API is `https://panda-hotelier-api.herokuapp.com/api/`

Git Command Review to make new branch:
```
git branch html2
git checkout html2
git push -u origin html2
```

## Current Build 04/09/17
The current build is is using Get and Post successfully with the API. All Guest
page is populated with the name, email, and phone number of all the guests
in the system. The Upcoming Reservations page shows all the future Reservations
with a option the delete it. If a non-staff user enters a reservation id into
the search input on the Home page, it will take them to the reservation information
on the Single-Reservation page. A staff user can create a guest as well as create a
reservation.
