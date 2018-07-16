
Session.set("search", "");
const trendingObject =
  [
    {topic:"Kpop music culture",image:"https://www.dramafever.com/st/news/images/0399a530-0a02-4f4a-b1b8-1a05ae3bb566.png"},
    {topic:"Fifa World Cup Results", image:"http://topbet.eu/news/wp-content/uploads/2018/07/France-vs-Croatia-Predictions-640x300.png"},
    {topic:"How's Twenty one Pilots new music?",image:"https://image.cleveland.com/home/cleve-media/width600/img/ent_impact_home/photo/twenty-one-pilots-c944eae35c41c695.jpg" },
    {topic:"Trumps comments on NATO", image:"https://geopoliticsmadesuper.files.wordpress.com/2017/01/trump_nato-1014x487.jpg?w=816" },
    {topic:"Opinions on Marvel's movie Ant-man and the Wasp",image:"https://mm.aiircdn.com/478/5b3fb3c561f66.png"},
    {topic:"Trump's child seperation policies",image:"https://compote.slate.com/images/b48d2aa4-fc60-4137-af59-f0fb2151c9ba.jpeg"},
    {topic:"Women's Right movement",image:"http://socialistworker.org/sites/default/files/images/2011/05/sipaphotosthree072008-sipausa.30068566000008.sm-a.jpg"},
    {topic:"Approval Rate of Trump",image:"https://timedotcom.files.wordpress.com/2017/08/screen-shot-2017-08-31-at-10-12-31-am.png"},
    {topic:" How should we fix Global Warming?",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvafUR_xCdYLTOglSmm0iHNCqWj83ZUypnmqaiBeInD0xZxKe"},
    {topic:"Environmental waste, Single plastic use",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGeYHZuWEoQGh0M4TkBFszzatuDqMTBCfoizSWHK-mfyBXjS-"},
    {topic:"Police Brutality effects the nation",image:"http://cocosouthla.org/wp-content/uploads/2016/09/Dennis-Story.jpg"},
    {topic:"Are you heard on other social media apps?",images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTi1daBIasQDx5PD5j1kH9f3yL9U4a_hAh9btwfOQGrgVnjUu"},
    {topic:"How Plastic surgery affects society",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqCBI-9xQ029OkarBM2bWEia0XLJEmYefgsV3yiw4WZ9meeYybg"},
    {topic:"Beauty Trends",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-summer-2018-hair-makeup-beauty-trends-1507655639.jpg?crop=1.00xw:1.00xh;0,0&resize=480"},
    {topic:"Beauty Donts",image:"https://i2-prod.mirror.co.uk/incoming/article11688451.ece/ALTERNATES/s615/Wacky-Beauty-Trends-MAIN.jpg"},
    {topic:"Acrylic vs. Gel",image:"https://www.differencebtw.com/wp-content/uploads/2017/04/acrylic-nails-vs-gel-nails-990x495.jpg"},
    {topic:"Fashion",image: "https://i.ytimg.com/vi/9wIn5vVwLeU/maxresdefault.jpg"},
    {topic:"models",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpnll-ekqaJkSR4G3osd118a-Tu5siGN0vH5JDocMsLNsmqalEg"},





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
