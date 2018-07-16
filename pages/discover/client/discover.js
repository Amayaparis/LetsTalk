const ourSponsors = [
 {name:"CNN",date:"00/00/0000"},
 {name:"Fox",date:"00/00/0000"},
 {name:"Stay Tuned",date:"00/00/0000"},
 {name:"Breaking News",date:"00/00/0000"},
 {name:"Clevver",date:"00/00/0000"},
 {name:"ESPN",date:"00/00/0000"},
 {name:"NFA",date:"00/00/0000"},
 {name:"Cosmopolitan",date:"00/00/0000"},
 {name:"Buzzfeed",date:"00/00/0000"},
 {name:"iHeartRadio",date:"00/00/0000"},
 {name:"People Magazine",date:"00/00/0000"},
 {name:"Daily Mail",date:"00/00/0000"}
]


const ourEvents = [
  {name:" National Women's Equality Day/Anniversary of the 19th Amendment ",date:"Aug 18",
  photo:"https://brho.montgomery-group.com/wp-content/uploads/2017/08/Womens-Equality-Day-1-600x675.jpg"}
]
Template.discover.helpers({
	eventsData: function() {return ourEvents},
  sponsorData: function() {return ourSponsors}
})
