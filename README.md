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
Team Panda


guestId: '58e6c8af633af30011bd0120',  58ea6e9bd41a4600110ab785
roomId: '58e297c33d5e770011657a85'
 reservation ID (58e6ca83633af30011bd0121), 

## THINGS THAT NEED TO BE DONE

1. fix the homepage so that it looks like it does in the mockups
2. add the serif font
3. make it responsive
4. make sure everything has doc blocks
5. figure out why nothing is happening when you make a reservation
6. make sure the page goes to a single reservation when one is entered as a guest
7. figure out why nothing is working
