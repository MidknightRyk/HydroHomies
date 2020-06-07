# HydroHomies

<h3><a href="https://hydrohomies.herokuapp.com/">Live Website</h3>

<br>
<h3>Core Functionalities</h3>
<ul>
        <li>
        <h4>Authentication</h4>
        <ul>
        <li>Login</li>
        <li>Sign Up</li>
        </ul>
        </li>
       <li>
       <h4>Google Maps</h4>
       <ul>
       <li>View all fountain locations</li>
       <li>Display current location</li>
       <li>Direction service from current location to each fountain</li>
       </ul>
       </li>
       <li>
           <h4>User-related</h4>
           <ul>
           <li>Check fountain page</li>
           <li>Check saved fountains and routes</li>
           <li>Check profile</li>
           </ul>
           </li>
</ul>

<h3>Details</h3>
<h4>Authentication</h4>
<p>This functionality gives users ability to register a account or log in our website. 
Authentication is required if a user wants to access any information on the website.

Below is the demo login detail.</p>
<pre>
<code>username: demo
password: demo</code>
</pre>
   
<h5>Relevant URLs:</h5>
<ul>
    <li>https://hydrohomies.herokuapp.com/login </li>
    <li>https://hydrohomies.herokuapp.com/signup </li>
</ul>

<h5>Associated Routes:</h5>
```   
      HydroHomies
      ├── controllers
      │   ├── checkAuth.js
      │   └── loginController.js
      ├── models
      │   ├── user.js
      │   └── db.js
      ├── front-end
      │   └── src/Components/Auth       
      │       ├── Login.js
      │       └── SignUp.js
      └──  routes
          └── routes.js
```

<h4>Google Maps</h4>
<p>This functionality uses Google Maps APIs to fetch all the fountain data to display on the map provided as markers.
When the user clicks on the marker, the map will show them the route between their current location to the water fountain, provided that
they accept the location request.</p>

<h5>Relevant URL:</h5>
<ul>
    <li>https://hydrohomies.herokuapp.com/dashboard </li>
</ul>

<h5>Associated Routes:</h5>
```   
      HydroHomies
      └── front-end
          └── src/Components/Main       
              ├── Map.js
              └── Dashboard.js
```

<h4>User-related</h4>
<p>This functionality allows user to check the individual fountains' page when clicking on the fountain marker. 
After the authentication, they also have access to their profile page, their saved fountain page and saved route page.</p>

<h5>Relevant URL:</h5>
<ul>
    <li>https://hydrohomies.herokuapp.com/carousels </li>
     <li>https://hydrohomies.herokuapp.com/fountains </li>
      <li>https://hydrohomies.herokuapp.com/routes </li>
</ul>

<h5>Associated Routes:</h5>
```   
      HydroHomies
      ├── controllers
      │   ├── checkAuth.js
      │   ├── imageController.js
      │   └── fountainController.js
      ├── models
      │   ├── image.js
      │   ├── fountain.js
      │   ├── user.js
      │   └── db.js
      ├── front-end
      │   └── src/Components/Main       
      │       ├── Carousels.js
      │       ├── ProfilePage.js
      │       ├── Fountains.js
      │       └── Routes.js
      └──  routes
          ├── fountainRoute.js
          ├── imageRoute.js
          └── routes.js
```