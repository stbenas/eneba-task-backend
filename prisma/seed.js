import { Prisma, prisma }from "../lib/prisma.js";

async function main() {
  console.log("Seeding products...");

  await prisma.product.create({
    data: {
      name: "FIFA 23 Ultimate Edition (Xbox Series X)",
      description: "FIFA 23 brings the world’s game to life with unprecedented realism and authenticity. Powered by HyperMotion2 technology on next-gen consoles, FIFA 23 delivers smoother animations, more responsive gameplay, and enhanced matchday atmosphere driven by real-world football data. Play the biggest tournaments in football, including the FIFA World Cup Qatar 2022™ and the FIFA Women’s World Cup Australia & New Zealand 2023™, fully integrated into the game. Experience both the men’s and women’s competitions with dedicated modes, authentic stadiums, teams, and presentation. Build your dream squad in FIFA Ultimate Team™ with new chemistry mechanics that give you more freedom to create unique lineups, or take control in Career Mode with expanded manager and player features that add depth and realism to your journey. Pro Clubs and VOLTA Football offer fresh ways to play with friends, featuring refined progression and new customization options. With over 19,000 players, 700+ teams, 100+ stadiums, and 30+ leagues, FIFA 23 delivers the most complete and immersive football experience ever created, celebrating the global game in its final chapter under the FIFA name.",
      priceCents: 2599,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(10.0),
      cashbackPercent: new Prisma.Decimal(5.0),
      likes: 138,
      vendorName: "EA",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/5oB7QywcZwJur9Gy11oPvG8xF0v7Ni7QP6kMuIGr3Ek/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9Z/U01jN0FJNDFWN0to/M2VERE5OVnhDazY2/U0dQRE9kcXpVZWdD/Q2Z4Z2JRLmpwZw", isCover: true }] },
    },
  });

  // 2. Split Fiction (PlayStation 5)
  await prisma.product.create({
    data: {
      name: "Split Fiction (PlayStation 5)",
      description: "Split Fiction is a genre-bending cooperative action-adventure that blends fast-paced combat, puzzle-solving, and narrative experimentation into a constantly shifting experience. Players navigate interconnected worlds where science fiction and fantasy collide, switching perspectives and abilities to overcome environmental challenges and enemies that evolve alongside the story. Designed from the ground up for cooperative play, Split Fiction emphasizes teamwork, timing, and creative problem-solving, delivering a cinematic journey that continuously reinvents itself and keeps players engaged from start to finish.",
      priceCents: 1699,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(12.0),
      cashbackPercent: new Prisma.Decimal(2.5),
      likes: 102,
      vendorName: "Steam",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/v9HT4_ROFIILdcbZZAO9gj1BKl9muwLKHqiBu9SjKBQ/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/ZVRXQ1hUWWJVWndZ/SDdpbzYwYXRhQ2Et/aVlOUjJTS0dEb2pa/VWpHOWwwLmpwZw", isCover: true }] },
    },
  });

  // 3. RED DEAD REDEMPTION 2 (Xbox Series X)
  await prisma.product.create({
    data: {
      name: "RED DEAD REDEMPTION 2 (Xbox Series X)",
      description: "Red Dead Redemption 2 is an epic open-world Western that follows the story of former outlaw Arthur Morgan as he navigates the decline of the Wild West while dealing with internal gang conflicts and external threats. Set in a vast and beautifully realized frontier at the turn of the 20th century, the game blends intense gunfights, horseback exploration, and a deeply emotional narrative about loyalty, redemption, and the fading age of outlaws. With its rich storytelling, memorable characters, and immersive world, Red Dead Redemption 2 delivers a defining action-adventure experience that captures the spirit of the American West.",
      priceCents: 2199,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(18.0),
      cashbackPercent: new Prisma.Decimal(3.0),
      likes: 74,
      vendorName: "Rockstar Games",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/VZizlCMR_o8-ceIhVasms4GU8yWaeXp8y55vjcvAM7Q/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9C/aWJQUmJEcU5aVkEw/RzlEZ0MwcjBLV1J3/MHhvRjROWUFtODFf/MEJDZzA0LmpwZw", isCover: true }] },
    },
  });

  // 4. FIFA 23 (PC) – Discounted version
  await prisma.product.create({
    data: {
      name: "FIFA 23 Ultimate Edition (PC)",
      description: "FIFA 23 brings the world’s game to life with unprecedented realism and authenticity. Powered by HyperMotion2 technology on next-gen consoles, FIFA 23 delivers smoother animations, more responsive gameplay, and enhanced matchday atmosphere driven by real-world football data. Play the biggest tournaments in football, including the FIFA World Cup Qatar 2022™ and the FIFA Women’s World Cup Australia & New Zealand 2023™, fully integrated into the game. Experience both the men’s and women’s competitions with dedicated modes, authentic stadiums, teams, and presentation. Build your dream squad in FIFA Ultimate Team™ with new chemistry mechanics that give you more freedom to create unique lineups, or take control in Career Mode with expanded manager and player features that add depth and realism to your journey. Pro Clubs and VOLTA Football offer fresh ways to play with friends, featuring refined progression and new customization options. With over 19,000 players, 700+ teams, 100+ stadiums, and 30+ leagues, FIFA 23 delivers the most complete and immersive football experience ever created, celebrating the global game in its final chapter under the FIFA name.",
      priceCents: 1999,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(25.0),
      cashbackPercent: new Prisma.Decimal(6.0),
      likes: 145,
      vendorName: "EA App",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/5oB7QywcZwJur9Gy11oPvG8xF0v7Ni7QP6kMuIGr3Ek/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9Z/U01jN0FJNDFWN0to/M2VERE5OVnhDazY2/U0dQRE9kcXpVZWdD/Q2Z4Z2JRLmpwZw", isCover: true }] },
    },
  });

  // 5. Split Fiction (Nintendo Switch)
  await prisma.product.create({
    data: {
      name: "Split Fiction (Nintendo Switch)",
      description: "Split Fiction is a genre-bending cooperative action-adventure that blends fast-paced combat, puzzle-solving, and narrative experimentation into a constantly shifting experience. Players navigate interconnected worlds where science fiction and fantasy collide, switching perspectives and abilities to overcome environmental challenges and enemies that evolve alongside the story. Designed from the ground up for cooperative play, Split Fiction emphasizes teamwork, timing, and creative problem-solving, delivering a cinematic journey that continuously reinvents itself and keeps players engaged from start to finish.",
      priceCents: 1599,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(15.0),
      cashbackPercent: new Prisma.Decimal(1.0),
      likes: 88,
      vendorName: "Nintendo",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/v9HT4_ROFIILdcbZZAO9gj1BKl9muwLKHqiBu9SjKBQ/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/ZVRXQ1hUWWJVWndZ/SDdpbzYwYXRhQ2Et/aVlOUjJTS0dEb2pa/VWpHOWwwLmpwZw", isCover: true }] },
    },
  });

  // 6. RED DEAD REDEMPTION 2 (PlayStation 5)
  await prisma.product.create({
    data: {
      name: "RED DEAD REDEMPTION 2 (PlayStation 5)",
      description: "Red Dead Redemption 2 is an epic open-world Western that follows the story of former outlaw Arthur Morgan as he navigates the decline of the Wild West while dealing with internal gang conflicts and external threats. Set in a vast and beautifully realized frontier at the turn of the 20th century, the game blends intense gunfights, horseback exploration, and a deeply emotional narrative about loyalty, redemption, and the fading age of outlaws. With its rich storytelling, memorable characters, and immersive world, Red Dead Redemption 2 delivers a defining action-adventure experience that captures the spirit of the American West.",
      priceCents: 2299,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(12.0),
      cashbackPercent: new Prisma.Decimal(2.0),
      likes: 80,
      vendorName: "Rockstar Games",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/VZizlCMR_o8-ceIhVasms4GU8yWaeXp8y55vjcvAM7Q/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9C/aWJQUmJEcU5aVkEw/RzlEZ0MwcjBLV1J3/MHhvRjROWUFtODFf/MEJDZzA0LmpwZw", isCover: true }] },
    },
  });

  // 7. FIFA 23 (PlayStation 4)
  await prisma.product.create({
    data: {
      name: "FIFA 23 Ultimate Edition (PlayStation 4)",
      description: "FIFA 23 brings the world’s game to life with unprecedented realism and authenticity. Powered by HyperMotion2 technology on next-gen consoles, FIFA 23 delivers smoother animations, more responsive gameplay, and enhanced matchday atmosphere driven by real-world football data. Play the biggest tournaments in football, including the FIFA World Cup Qatar 2022™ and the FIFA Women’s World Cup Australia & New Zealand 2023™, fully integrated into the game. Experience both the men’s and women’s competitions with dedicated modes, authentic stadiums, teams, and presentation. Build your dream squad in FIFA Ultimate Team™ with new chemistry mechanics that give you more freedom to create unique lineups, or take control in Career Mode with expanded manager and player features that add depth and realism to your journey. Pro Clubs and VOLTA Football offer fresh ways to play with friends, featuring refined progression and new customization options. With over 19,000 players, 700+ teams, 100+ stadiums, and 30+ leagues, FIFA 23 delivers the most complete and immersive football experience ever created, celebrating the global game in its final chapter under the FIFA name.",
      priceCents: 2399,
      currency: "EUR",
      market: "Global",
      cashbackPercent: new Prisma.Decimal(3.5),
      likes: 120,
      vendorName: "EA",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/5oB7QywcZwJur9Gy11oPvG8xF0v7Ni7QP6kMuIGr3Ek/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9Z/U01jN0FJNDFWN0to/M2VERE5OVnhDazY2/U0dQRE9kcXpVZWdD/Q2Z4Z2JRLmpwZw", isCover: true }] },
    },
  });

  // 8. Split Fiction (PC) – No discount
  await prisma.product.create({
    data: {
      name: "Split Fiction (PC)",
      description: "Split Fiction is a genre-bending cooperative action-adventure that blends fast-paced combat, puzzle-solving, and narrative experimentation into a constantly shifting experience. Players navigate interconnected worlds where science fiction and fantasy collide, switching perspectives and abilities to overcome environmental challenges and enemies that evolve alongside the story. Designed from the ground up for cooperative play, Split Fiction emphasizes teamwork, timing, and creative problem-solving, delivering a cinematic journey that continuously reinvents itself and keeps players engaged from start to finish.",
      priceCents: 1499,
      currency: "EUR",
      market: "Global",
      cashbackPercent: new Prisma.Decimal(1.5),
      likes: 91,
      vendorName: "Steam",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/v9HT4_ROFIILdcbZZAO9gj1BKl9muwLKHqiBu9SjKBQ/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/ZVRXQ1hUWWJVWndZ/SDdpbzYwYXRhQ2Et/aVlOUjJTS0dEb2pa/VWpHOWwwLmpwZw", isCover: true }] },
    },
  });

  // 9. RED DEAD REDEMPTION 2 (PC)
  await prisma.product.create({
    data: {
      name: "RED DEAD REDEMPTION 2 (PC)",
      description: "Red Dead Redemption 2 is an epic open-world Western that follows the story of former outlaw Arthur Morgan as he navigates the decline of the Wild West while dealing with internal gang conflicts and external threats. Set in a vast and beautifully realized frontier at the turn of the 20th century, the game blends intense gunfights, horseback exploration, and a deeply emotional narrative about loyalty, redemption, and the fading age of outlaws. With its rich storytelling, memorable characters, and immersive world, Red Dead Redemption 2 delivers a defining action-adventure experience that captures the spirit of the American West.",
      priceCents: 2250,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(15.0),
      cashbackPercent: new Prisma.Decimal(1.5),
      likes: 62,
      vendorName: "Rockstar Games",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/VZizlCMR_o8-ceIhVasms4GU8yWaeXp8y55vjcvAM7Q/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9C/aWJQUmJEcU5aVkEw/RzlEZ0MwcjBLV1J3/MHhvRjROWUFtODFf/MEJDZzA0LmpwZw", isCover: true }] },
    },
  });

  // 10. FIFA 23 (Xbox One)
  await prisma.product.create({
    data: {
      name: "FIFA 23 Ultimate Edition (Xbox One)",
      description: "FIFA 23 brings the world’s game to life with unprecedented realism and authenticity. Powered by HyperMotion2 technology on next-gen consoles, FIFA 23 delivers smoother animations, more responsive gameplay, and enhanced matchday atmosphere driven by real-world football data. Play the biggest tournaments in football, including the FIFA World Cup Qatar 2022™ and the FIFA Women’s World Cup Australia & New Zealand 2023™, fully integrated into the game. Experience both the men’s and women’s competitions with dedicated modes, authentic stadiums, teams, and presentation. Build your dream squad in FIFA Ultimate Team™ with new chemistry mechanics that give you more freedom to create unique lineups, or take control in Career Mode with expanded manager and player features that add depth and realism to your journey. Pro Clubs and VOLTA Football offer fresh ways to play with friends, featuring refined progression and new customization options. With over 19,000 players, 700+ teams, 100+ stadiums, and 30+ leagues, FIFA 23 delivers the most complete and immersive football experience ever created, celebrating the global game in its final chapter under the FIFA name.",
      priceCents: 2499,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(8.0),
      cashbackPercent: new Prisma.Decimal(4.0),
      likes: 128,
      vendorName: "EA",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/5oB7QywcZwJur9Gy11oPvG8xF0v7Ni7QP6kMuIGr3Ek/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9Z/U01jN0FJNDFWN0to/M2VERE5OVnhDazY2/U0dQRE9kcXpVZWdD/Q2Z4Z2JRLmpwZw", isCover: true }] },
    },
  });

  // 11. Minecraft: Bedrock Edition (PC)
  await prisma.product.create({
    data: {
      name: "Minecraft: Java Edition (PC)",
      description: "Minecraft is the ultimate sandbox game that lets you build, explore, and survive in an infinite world of blocks. Create elaborate structures, mine valuable resources, and craft your own adventures alone or with friends. With endless mods, servers, and community content, Minecraft provides limitless possibilities for creativity, exploration, and fun.",
      priceCents: 2999,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(10.0),
      cashbackPercent: new Prisma.Decimal(3.0),
      likes: 200,
      vendorName: "Mojang Studios",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/IRglYcwilNc3GguGGpby0x_x0jFgdFvPVR1ngi-BkR0/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw", isCover: true }] },
    },
  });

  // 12. Minecraft: Bedrock Edition (Windows 10)
  await prisma.product.create({
    data: {
      name: "Minecraft: Bedrock Edition (Windows 10)",
      description: "Minecraft Bedrock Edition brings the same endless creativity and adventure as Java Edition, optimized for cross-platform play. Enjoy smooth performance, multiplayer compatibility across devices, and access to the marketplace with skins, maps, and add-ons created by the community.",
      priceCents: 3499,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(15.0),
      cashbackPercent: new Prisma.Decimal(2.0),
      likes: 180,
      vendorName: "Microsoft Store",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/IRglYcwilNc3GguGGpby0x_x0jFgdFvPVR1ngi-BkR0/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw", isCover: true }] },
    },
  });

  // 13. Minecraft: Bedrock Edition (Xbox Series X)
  await prisma.product.create({
    data: {
      name: "Minecraft: Bedrock Edition (Xbox Series X)",
      description: "Minecraft Bedrock Edition brings block-building adventures to consoles with optimized performance, multiplayer across platforms, and access to the in-game marketplace. Build, explore, and survive in your own world with friends online or offline.",
      priceCents: 3999,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(5.0),
      cashbackPercent: new Prisma.Decimal(4.0),
      likes: 160,
      vendorName: "Microsoft Store",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/IRglYcwilNc3GguGGpby0x_x0jFgdFvPVR1ngi-BkR0/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw", isCover: true }] },
    },
  });

  // 14. Minecraft: Bedrock Edition (Nintendo Switch)
  await prisma.product.create({
    data: {
      name: "Minecraft: Bedrock Edition (Nintendo Switch)",
      description: "Experience Minecraft on the go with the Nintendo Switch Bedrock Edition. Enjoy cross-platform multiplayer, a smooth gaming experience, and access to community-created skins, maps, and add-ons. Explore, build, and survive anywhere, anytime.",
      priceCents: 3799,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(12.0),
      cashbackPercent: new Prisma.Decimal(3.5),
      likes: 145,
      vendorName: "Nintendo",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/IRglYcwilNc3GguGGpby0x_x0jFgdFvPVR1ngi-BkR0/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw", isCover: true }] },
    },
  });

  // 15. Minecraft: Java Edition (PC) – Discounted
  await prisma.product.create({
    data: {
      name: "Minecraft: Java Edition (PC)",
      description: "Minecraft Java Edition offers endless possibilities for creativity and adventure. Join a huge community of players, explore mods, custom servers, and unique worlds crafted by fellow fans, and experience the ultimate sandbox game on PC.",
      priceCents: 2799,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(20.0),
      cashbackPercent: new Prisma.Decimal(5.0),
      likes: 210,
      vendorName: "Mojang Studios",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/IRglYcwilNc3GguGGpby0x_x0jFgdFvPVR1ngi-BkR0/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw", isCover: true }] },
    },
  });

  // 16. Grand Theft Auto V: Premium Online Edition (PC)
  await prisma.product.create({
    data: {
      name: "Grand Theft Auto V: Premium Online Edition (PC)",
      description: "Step into the sprawling world of Los Santos and Blaine County with GTA V: Premium Online Edition. Experience a thrilling open-world adventure combining single-player story missions and the online multiplayer universe. Customize vehicles, participate in heists, and explore the city with friends or go solo. With endless updates and content, the city is yours to conquer.",
      priceCents: 3499,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(15.0),
      cashbackPercent: new Prisma.Decimal(3.0),
      likes: 220,
      vendorName: "Rockstar Games",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/NPTcOweCXlSks45Mi9CxL3zxKAw6GwRaH7J_niMLheE/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9O/S3FOdDNGczlvbkNo/YlBoZlRaR1lCbVB1/ZGNhMjlGV0ZuNHlZ/NmJ3UkNZLmpwZWc", isCover: true }] },
    },
  });

  // 17. Grand Theft Auto V: Premium Online Edition (PlayStation 5)
  await prisma.product.create({
    data: {
      name: "Grand Theft Auto V: Premium Online Edition (PlayStation 5)",
      description: "Enjoy the ultimate Los Santos experience on PlayStation 5. GTA V: Premium Online Edition delivers stunning graphics, immersive gameplay, and access to GTA Online. Complete heists, explore the city, and interact with other players in this ever-evolving open-world adventure.",
      priceCents: 3999,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(10.0),
      cashbackPercent: new Prisma.Decimal(4.0),
      likes: 180,
      vendorName: "Rockstar Games",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/NPTcOweCXlSks45Mi9CxL3zxKAw6GwRaH7J_niMLheE/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9O/S3FOdDNGczlvbkNo/YlBoZlRaR1lCbVB1/ZGNhMjlGV0ZuNHlZ/NmJ3UkNZLmpwZWc", isCover: true }] },
    },
  });

  // 18. Grand Theft Auto V: Premium Online Edition (Xbox Series X)
  await prisma.product.create({
    data: {
      name: "Grand Theft Auto V: Premium Online Edition (Xbox Series X)",
      description: "Experience the high-octane world of Los Santos on Xbox Series X with enhanced graphics and performance. GTA V: Premium Online Edition combines the acclaimed story mode with GTA Online, offering endless fun, heists, and multiplayer action with friends worldwide.",
      priceCents: 3799,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(8.0),
      cashbackPercent: new Prisma.Decimal(3.5),
      likes: 195,
      vendorName: "Microsoft Store",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/NPTcOweCXlSks45Mi9CxL3zxKAw6GwRaH7J_niMLheE/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9O/S3FOdDNGczlvbkNo/YlBoZlRaR1lCbVB1/ZGNhMjlGV0ZuNHlZ/NmJ3UkNZLmpwZWc", isCover: true }] },
    },
  });

  // 19. Grand Theft Auto V: Premium Online Edition (PlayStation 4)
  await prisma.product.create({
    data: {
      name: "Grand Theft Auto V: Premium Online Edition (PlayStation 4)",
      description: "GTA V: Premium Online Edition brings Los Santos to life on PlayStation 4 with a combination of story-driven missions and the ever-expanding GTA Online universe. Customize vehicles, complete daring heists, and explore a city full of adventures with friends or solo.",
      priceCents: 3699,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(12.0),
      cashbackPercent: new Prisma.Decimal(2.5),
      likes: 170,
      vendorName: "Rockstar Games",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/NPTcOweCXlSks45Mi9CxL3zxKAw6GwRaH7J_niMLheE/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9O/S3FOdDNGczlvbkNo/YlBoZlRaR1lCbVB1/ZGNhMjlGV0ZuNHlZ/NmJ3UkNZLmpwZWc", isCover: true }] },
    },
  });

  // 20. Grand Theft Auto V: Premium Online Edition (PC) – Discounted
  await prisma.product.create({
    data: {
      name: "Grand Theft Auto V: Premium Online Edition (PC)",
      description: "Dive into the dynamic world of Los Santos with GTA V: Premium Online Edition. Experience story missions, GTA Online, and the limitless sandbox environment. Plan heists, interact with other players, and explore the vast city in this definitive edition for PC.",
      priceCents: 3299,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(20.0),
      cashbackPercent: new Prisma.Decimal(5.0),
      likes: 240,
      vendorName: "Rockstar Games",
      images: { create: [{ imageUrl: "https://imgproxy.eneba.games/NPTcOweCXlSks45Mi9CxL3zxKAw6GwRaH7J_niMLheE/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9O/S3FOdDNGczlvbkNo/YlBoZlRaR1lCbVB1/ZGNhMjlGV0ZuNHlZ/NmJ3UkNZLmpwZWc", isCover: true }] },
    },
  });
  
  console.log("Products seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
