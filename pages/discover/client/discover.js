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
  photo:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F42557726%2F249281032365%2F1%2Foriginal.jpg?w=800&auto=compress&rect=294%2C0%2C2354%2C1177&s=71c37e544ac55dd1adb08eefcdb64ff8", link:"https://www.eventbrite.com/e/womens-march-nyc-2019-tickets-44430426602?aff=ebdssbdestsearch"},
  {name:"Zero Hour NYC Youth Climate March",date:"Sat, July 21, 2018",
  photo:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44688665%2F176477533446%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C192%2C720%2C360&s=582f26c1c613e9ccb0a058e63b1ac1fb", link:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44688665%2F176477533446%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C192%2C720%2C360&s=582f26c1c613e9ccb0a058e63b1ac1fb"},
  {name:"2018 Girls Matter Walk",date:"Sun, September 23, 2018",photo:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45933676%2F7318641369%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C390%2C720%2C360&s=35b1184cdf7f9f1a01530bc1869fb3d4",link:"https://www.eventbrite.com/e/2018-girls-matter-walk-tickets-46918658972?aff=ebdssbdestsearch"},
  {name:"Four years without justice for Eric Garner/ NYC Rally",date:" July 17 2018", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YLRA2CEG--sy-4KGMHlb2uPaUBENx4tS3jOUoNd87mdbSd9pSQ",link:"http://takeactionnyc.com/nyc-protest-event-calendar/"},
  {name:"Women's March Boston 2019", date:"Sun, January 20, 2019",photo:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F42733017%2F250136554390%2F1%2Foriginal.jpg?w=800&auto=compress&rect=294%2C0%2C2354%2C1177&s=50acd05d3f525ca817746c40d634cf25",link:"https://www.eventbrite.com/e/womens-march-boston-2019-tickets-44566073325?aff=ebdssbdestsearch"},
  {name:"MJE Youth Rally in Massachusetts",date:"Fri, August 10, 2018",photo:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46897382%2F262034215082%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C39%2C444%2C222&s=6d74acd54806cf44b0c31d017a82516f",link:"https://www.eventbrite.com/e/mje-youth-rally-tickets-47591852512?aff=ebdssbdestsearch"},
  {name:"RASW 2018 CPS DHS, and Family Court Corruption Protest Event in Massachusetts",date:"7-21-18",photo:"http://www.rallylist.com/wp-content/uploads/2018/05/DCSF-Boston-822x385.png",link:"http://www.rallylist.com/rasw-2018-cps-dhs-and-family-court-corruption-protest-event-7-21-18/"}
]
Template.discover.helpers({
	eventsData: function() {return ourEvents},
  sponsorData: function() {return ourSponsors}
})
