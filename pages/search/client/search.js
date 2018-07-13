
Session.set("search", "");
const trendingObject =
  [
    {topic:"Kpop music culture",image:"https://www.dramafever.com/st/news/images/0399a530-0a02-4f4a-b1b8-1a05ae3bb566.png"},
    {topic:"Fifa World Cup Results", image:"http://topbet.eu/news/wp-content/uploads/2018/07/France-vs-Croatia-Predictions-640x300.png"},
    {topic:"How's Twenty one Pilots new music?",image:"https://image.cleveland.com/home/cleve-media/width600/img/ent_impact_home/photo/twenty-one-pilots-c944eae35c41c695.jpg" },
    {topic:"Trumps comments on NATO", image:"https://geopoliticsmadesuper.files.wordpress.com/2017/01/trump_nato-1014x487.jpg?w=816" }
  ]

  Template.search.helpers(
      {
        trending:function(){

          var toreturn = [];
          var counter = 0;
          if(Session.get("search") == ""){
            return trendingObject;
          }
            for (var i = 0; i < trendingObject.length; i++) {
              if(trendingObject[i].topic.toLowerCase().split(Session.get("search")).length > 1) {
                toreturn[counter] = trendingObject[i];
                console.log(trendingObject[i])
                counter++;
              }
            }

          return toreturn
        }
      }
    )
    Template.search.events({
      "click .js-search": function(event){
        Session.set("search",$("#search-js").val());

        /*event.preventDefault();
        console.log("the button was clicked")
        const theSearch = $("#search-js").val();
        const search=
        {search:theSearch,
         createdAt:new Date(),
         createdBy:Meteor.userId()
       };
       console.log(`just created ${JSON.stringify(post)}`)
        Router.go('search')*/
      },

    })
