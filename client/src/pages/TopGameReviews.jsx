import React from 'react';

const topGames = [
  {
    name: 'Elden Ring',
    image: 'https://www.cnet.com/a/img/resize/87ec9928b1d7c91821f3fe9dc8b844f98a43fab4/hub/2022/02/23/dbc979d5-4fd1-4bc0-8fdf-c938403b134a/elden-ring-30.jpg?auto=webp&fit=crop&height=900&width=1200',
    description: 'Elden Ring offers a vast open world where players explore dungeons, face challenging enemies, and unravel a dark fantasy plot. The game’s intricate design, immersive combat mechanics, and stunning visual world make it a game for the ages.',
  },
  {
    name: 'God of War: Ragnarok',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg?t=1723138949',
    description: 'Kratos returns in God of War: Ragnarok, set in a breathtaking Norse world filled with gods, monsters, and deep story arcs. The stunning visuals, intense combat, and emotional storyline make it an unforgettable adventure.',
  },
  {
    name: 'The Last of Us Part II',
    image: 'https://s3.us-east-1.amazonaws.com/nd.images/uploads/T2R_Blog_ComingSoon.png',
    description: 'Set in a post-apocalyptic world, The Last of Us Part II delves into revenge, loss, and survival. The game excels with its emotionally charged narrative, intense combat, and stunning world design that keeps players hooked from start to finish.',
  },
  {
    name: 'Red Dead Redemption 2',
    image: 'https://i.ytimg.com/vi/Dw_oH5oiUSE/maxresdefault.jpg',
    description: 'Red Dead Redemption 2 is a sprawling Western epic filled with incredible storytelling, open-world exploration, and realistic character development. With its rich details and emotional depth, it stands as one of the most immersive games of all time.',
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    image: 'https://cdn-l-thewitcher.cdprojektred.com/meta/TW3NG_thumbnail_en.png',
    description: 'The Witcher 3 sets a benchmark for open-world RPGs with its captivating narrative, dynamic combat system, and beautifully designed landscapes. As Geralt of Rivia, players embark on a journey filled with monster hunts and rich storytelling.',
  },
  {
    name: 'Cyberpunk 2077',
    image: 'https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-en@2x-cd66fd0d.jpg',
    description: 'Cyberpunk 2077 immerses players in a futuristic city teeming with life, crime, and corporate intrigue. With its deep RPG mechanics, stunning visuals, and expansive open-world setting, it offers a unique and thought-provoking gaming experience.',
  },
  {
    name: 'Horizon Forbidden West',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/capsule_616x353.jpg?t=1725653368',
    description: 'In Horizon Forbidden West, players continue Aloy’s journey through a beautifully crafted post-apocalyptic world filled with robotic creatures. The game shines with its innovative combat system, breathtaking vistas, and compelling narrative.',
  },
  {
    name: 'Ghost of Tsushima',
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/b3iB2zf2xHj9shC0XDTULxND.png',
    description: 'Ghost of Tsushima transports players to feudal Japan during the Mongol invasion. With its stunning art direction, fluid combat, and rich world design, the game offers an emotional and thrilling samurai experience unlike any other.',
  },
  {
    name: 'Resident Evil Village',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/capsule_616x353.jpg?t=1719197703',
    description: 'Resident Evil Village combines survival horror with a deep, immersive storyline set in a hauntingly atmospheric world. The game’s tense encounters, chilling environments, and surprising twists make it a standout in the Resident Evil series.',
  },
  {
    name: 'Marvel\'s Spider-Man: Miles Morales',
    image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2417/tnCutdREPv6Pa7atqb8MTxGW.png',
    description: 'Swing through New York City as Miles Morales in this exhilarating superhero adventure. The game offers fast-paced action, gorgeous visuals, and a heartfelt story that explores what it means to be a new kind of hero in the Spider-Man universe.',
  },
  {
    name: 'Final Fantasy VII Remake',
    image: 'https://gaming-cdn.com/images/products/5913/616x353/final-fantasy-vii-remake-intergrade-pc-game-steam-cover.jpg?v=1715269543',
    description: 'The Final Fantasy VII Remake reimagines the classic RPG with stunning visuals, updated gameplay mechanics, and a fresh take on the iconic story. The game strikes a balance between nostalgia and innovation, captivating both new players and fans.',
  },
  {
    name: 'Assassin\'s Creed Valhalla',
    image: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZAlQrGYxXi8Bo8PuhJd5g/206c57ecb27e58b4555089c6c80d3db5/ACV_meta.png',
    description: 'Assassin\'s Creed Valhalla takes players on a Viking adventure through England’s Dark Ages. With a rich open world, deep customization options, and fluid combat, the game delivers an epic journey through Norse mythology and history.',
  },
  {
    name: 'Death Stranding',
    image: 'https://www.kojimaproductions.jp/sites/default/files/2021-09/tc_DSPS4.jpg',
    description: 'Death Stranding is a unique and enigmatic journey through a fractured world, where players deliver critical supplies across hostile terrains. The game’s artistic direction, emotional storytelling, and gameplay mechanics create a surreal and gripping experience.',
  },
  {
    name: 'Sekiro: Shadows Die Twice',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg?t=1721684463',
    description: 'Sekiro: Shadows Die Twice challenges players with its intense combat, set in a beautifully crafted feudal Japan. The game’s fast-paced swordplay, intricate level design, and rewarding difficulty make it a standout among FromSoftware’s titles.',
  },
  {
    name: 'Doom Eternal',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/capsule_616x353.jpg?t=1702308063',
    description: 'Doom Eternal delivers fast-paced, visceral combat where players battle demons in explosive arenas. The game’s high-energy gameplay, pulse-pounding soundtrack, and iconic Doom Slayer make for an adrenaline-fueled experience.',
  },
  {
    name: 'Monster Hunter: World',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg?t=1711328912',
    description: 'Monster Hunter: World offers a thrilling action-RPG experience where players hunt down massive creatures. The game features deep crafting systems, cooperative gameplay, and a vast ecosystem filled with lifelike monsters to conquer.',
  },
  {
    name: 'Dark Souls III',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_YK-NZieffUedUvrKV_GCWMqXPSi5SIIyA&s',
    description: 'Dark Souls III is a punishing yet rewarding action RPG known for its difficult but fair gameplay. The game’s dark, mysterious world, intricate combat system, and compelling lore create an unforgettable experience for players seeking a challenge.',
  },
  {
    name: 'Control',
    image: 'https://i.ytimg.com/vi/F74LLDhAhhI/maxresdefault.jpg',
    description: 'Control combines supernatural powers with mind-bending puzzles in a beautifully strange world. The game’s incredible physics, deep storytelling, and surreal environments create a one-of-a-kind gaming experience that keeps players intrigued.',
  },
  {
    name: 'Borderlands 3',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/capsule_616x353.jpg?t=1693524259',
    description: 'Borderlands 3 takes the loot-shooter genre to the next level with its vibrant worlds, hilarious characters, and endless weapon variety. The game’s fast-paced gameplay and zany humor make it a blast to play solo or with friends.',
  },
  {
    name: 'Overwatch',
    image: 'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt030bf3d606661d3c/633f5be164fe5a7d4481a16c/overwatch-section1-feature1.png?imwidth=1920&imdensity=2.625',
    description: 'Overwatch is a team-based multiplayer shooter with a diverse roster of heroes, each with unique abilities. The game excels in offering fast, strategic gameplay, colorful visuals, and a community-driven competitive experience.',
  },
  {
    name: 'GTA V',
    image: 'https://images.ctfassets.net/wn7ipiv9ue5v/3yVDlCOrJnXMrb0yS4ea0y/ff2ba91de136504ac791401516d5053b/GTAV_Gen9_MFT_Webstore_Hero_3840x2160_DELIV.jpg',
  },
];

const TopGameReviews = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 animate-glow">Top Game Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {topGames.map((game, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
          >
            <a href={game.image} target="_blank" rel="noopener noreferrer">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </a>
            <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
            <p className="text-gray-400 mb-4">{game.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGameReviews;
