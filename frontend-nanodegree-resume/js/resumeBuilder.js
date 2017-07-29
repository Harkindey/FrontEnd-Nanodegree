/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
   "name" : "Akinde Emmanuel",
   "role" : "React-Native Engineer",
   "contact": {
     "email": "ibukunbamise@yahoo.com",
     "mobile": "+2348077214285",
     "github": "@Harkindey",
     "twitter": "@I_AM_Harkindey",
     "location": "Lagos, Nigeria"
   },
   "biopic" : "https://github.com/harkindey.png?size=200",
   "welcome-message" : "We Rise By Lifting Others",
   "skills" : ['React.js', 'React-Native', 'Node.js', 'Vue.js']
 }

 var FormattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
 $('#header').append(FormattedPicture);

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 $("#header").append(formattedName);

 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 $('#header').append(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$('#header').append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
$('#header').append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
$('#header').append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$('#header').append(formattedTwitter);

var FormattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
$('#header').append(FormattedLocation);
