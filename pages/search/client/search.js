

const trending =
  [
    {topic:"Kpop music culture",image:"https://www.dramafever.com/st/news/images/0399a530-0a02-4f4a-b1b8-1a05ae3bb566.png"},
    {topic:"Fifa World Cup Results", image:"http://topbet.eu/news/wp-content/uploads/2018/07/France-vs-Croatia-Predictions-640x300.png"},
    {topic:"How's Twenty one Pilots new music?",image:"https://image.cleveland.com/home/cleve-media/width600/img/ent_impact_home/photo/twenty-one-pilots-c944eae35c41c695.jpg" },
    {topic:"Trumps comments on NATO", image:"https://geopoliticsmadesuper.files.wordpress.com/2017/01/trump_nato-1014x487.jpg?w=816" }
  ]

  Template.search.helpers(
      {
        trending(){return trending}
      }
    )
