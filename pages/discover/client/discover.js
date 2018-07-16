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
  {name:" Women's March NYC 2019 ",date:"Sat, April 20, 2019",
  photo:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F42557726%2F249281032365%2F1%2Foriginal.jpg?w=800&auto=compress&rect=294%2C0%2C2354%2C1177&s=71c37e544ac55dd1adb08eefcdb64ff8", link:"https://www.eventbrite.com/e/womens-march-nyc-2019-tickets-44430426602?aff=ebdssbdestsearch"}
]
Template.discover.helpers({
	eventsData: function() {return ourEvents},
  sponsorData: function() {return ourSponsors}
})
