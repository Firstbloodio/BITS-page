

<img src='https://github.com/Firstbloodio/firstblood-www/blob/master/resources/img/main/logo_shield_b.jpg' width = '22.5%'>

# FirstBlood BITS Tournament Landing Page
Repository responsible for FirstBlood.io upcoming tournament landing page.

# Resources Used
`Spectral by HTML5 UP` Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)<br>
`Node.js & npm`<br>
`http-server package`<br>
`Typeform`<br>



## Installing Node.js (if you don't have it)

If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from the Node.js download page. If you're using Linux, you can use the <a href ="https://nodejs.org/en/download/">installer</a>, or you can check <a href = "https://github.com/nodesource/distributions">NodeSource's binary distributions</a> to see whether or not there's a more recent version that works with your system.
    
Test: Run `node -v`. <br>
The version should be higher than `v0.10.32`.

## Updating npm

Node comes with npm installed so you should have a version of npm. <br>However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.<br>

    $ npm install npm@latest -g

# Install & Test Locally

    $ git clone https://github.com/Firstbloodio/BITS-page.git

First, install this light-weight http server node

    $ sudo npm install http-server
    
-OR install globally, if required*

    $ sudo npm install -g http-server
    
Access the directory that you cloned this git in

    $ cd [YOURFOLDERNAME]
    
Serve the website

    $ http-server


Development

    $ gulp serve
   
Load from local browser

    type `localhost:8080` or `http://127.0.0.1:8080` into your browser 
    


