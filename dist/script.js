var gameList = [
  ["https://worldscholarshipforum.com/wp-content/uploads/2019/03/league-of-legends-scholarships.jpg", "https://na.leagueoflegends.com/pt-br/"],
  ["https://img.elo7.com.br/product/original/1D0A5EF/poster-world-of-warcraft-battle-for-azeroth-tamanho-90x-0-cm-cartaz.jpg", "https://worldofwarcraft.com/pt-br/"],
  ["https://cdna.artstation.com/p/assets/images/images/009/623/746/large/luke-dowding-gw2-original-movie-cover.jpg?1519998631", "https://www.guildwars2.com/en/"], 
  ["https://thumbnails.pcgamingwiki.com/2/20/Black_Desert_Online_cover.jpg/300px-Black_Desert_Online_cover.jpg", "https://blackdesert.playredfox.com/black_desert/landing/update210316"], 
  ["https://images-na.ssl-images-amazon.com/images/I/81hIHJomPRL.jpg" ,"https://www.elderscrollsonline.com/en-us/home"],
  ["https://www.ro-spot.com/WebRoot/StoreLDE/Shops/64336758/Products/demo3/poster_3.png", "https://playragnarokonlinebr.com/"], 
  ["https://notadogame.com/uploads/game/cover/250x/5bfdc34e9c341.jpg", "https://na.finalfantasyxiv.com/"], 
  ["https://i.pinimg.com/originals/b4/e9/40/b4e940f7c1f77abaeeacc24879158c1f.jpg", "https://www.lineage2.com/freetoplay"], 
  ["https://i.pinimg.com/originals/69/2c/7f/692c7f9a1508c844932f7d2c71e2aac0.jpg", "https://www.dota2.com/news"], 
  ["https://cdnb.artstation.com/p/assets/covers/images/007/352/499/large/ryan-richmond-clericthumnail.jpg?1505527063", "https://ashesofcreation.com/"], 
  ["https://droidjournal.com/wp-content/uploads/2020/06/1-3.png", "https://www.newworld.com/en-us/"], 
  ["https://artfiles.alphacoders.com/132/thumb-132432.png", "https://blue-protocol.com/"],
  ["https://cdn2.unrealengine.com/egs-saturn-saturn-s2-1200x1600-986676379.jpg", "https://www.pathofexile.com/"],
  ["https://upload.wikimedia.org/wikipedia/pt/1/12/DiabloIIIcover.jpg", "https://us.diablo3.com/pt-br/"],
  ["https://cdn.game.tv/game-tv-content/images_3/07e71c74484a1cedd92dbc35fa0c0304/GameTile.jpg", "https://playvalorant.com/pt-br/"],
  ["https://s3.gaming-cdn.com/images/products/857/orig/dark-souls-3-cover.jpg", "https://store.steampowered.com/app/374320/DARK_SOULS_III/"],
  ["https://i.pinimg.com/474x/5e/9f/c5/5e9fc556aedeca23e388ea6147c0292a.jpg", "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"],
  ["https://static-cdn.jtvnw.net/ttv-boxart/Tibia.jpg", "https://www.tibia.com/news/?subtopic=latestnews"],
  ["https://levelupgames.uol.com.br/uploaded//levelup/2016.02.05/poster-_-_-20160205150517.jpg", "https://www.arcgames.com/en/games/forsaken-world?originLanguage=pt"],
  ["https://www.perfectworldrevolution.com/m/images/banner1.jpg", "https://perfectworld.uol.com.br"]
]

var gameNome = [
  "League of Legends", "World of Warcraft", "Guild Wars 2", "Black Desert", "The Elder Scrolls Online", "Ragnarök Online", "Final Fantasy XIV", "Lineage II", "Dota 2", "Ashes of Creation", "New World", "Blue Protocol", "Path of Exile", "Diablo III", "Valorant", "Dark Souls III", "Counter-Strike", "Tibia", "Forsaken World", "Perfect World"]

for (var i = 0; i < gameList.length; i++){
  document.write("<div id='imagem'>")
  document.write(`<a href="${gameList[i][1]}" target="_blank"><img src="${gameList[i][0]}" width="182" height="268"></a>`)

  document.write("<div id='nome'>" )
  document.write("<p>" + gameNome[i] + "</p>")
  
  document.write("</div>")
  document.write("</div>")
}