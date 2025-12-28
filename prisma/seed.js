#!/usr/bin/env node

import { Prisma, prisma }from "../lib/prisma.js";

async function main() {
  console.log("Seeding products...");

  await prisma.product.create({
    data: {
      name: "FIFA 23 Ultimate Edition (PC)",
      description: "FIFA 23 brings the world’s game to life with unprecedented realism and authenticity. Powered by HyperMotion2 technology on next-gen consoles, FIFA 23 delivers smoother animations, more responsive gameplay, and enhanced matchday atmosphere driven by real-world football data. Play the biggest tournaments in football, including the FIFA World Cup Qatar 2022™ and the FIFA Women’s World Cup Australia & New Zealand 2023™, fully integrated into the game. Experience both the men’s and women’s competitions with dedicated modes, authentic stadiums, teams, and presentation. Build your dream squad in FIFA Ultimate Team™ with new chemistry mechanics that give you more freedom to create unique lineups, or take control in Career Mode with expanded manager and player features that add depth and realism to your journey. Pro Clubs and VOLTA Football offer fresh ways to play with friends, featuring refined progression and new customization options. With over 19,000 players, 700+ teams, 100+ stadiums, and 30+ leagues, FIFA 23 delivers the most complete and immersive football experience ever created, celebrating the global game in its final chapter under the FIFA name.",
      priceCents: 2449,
      currency: "EUR",
      market: "Global",
      cashbackPercent: new Prisma.Decimal(6.0),
      likes: 124,
      vendorName: "EA App",

      images: {
        create: [
          {
            imageUrl: "https://imgproxy.eneba.games/5oB7QywcZwJur9Gy11oPvG8xF0v7Ni7QP6kMuIGr3Ek/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9Z/U01jN0FJNDFWN0to/M2VERE5OVnhDazY2/U0dQRE9kcXpVZWdD/Q2Z4Z2JRLmpwZw",
            isCover: true,
          },
          {
            imageUrl: "https://imgproxy.eneba.games/6Mx7xmO9smqboeuEBNAgR_qXEON1nCPjunjq6-3FhMY/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9P/TFdfclQtbEw0LVlj/NzI5Wl93ZlNTRXJo/SHdtd2tkal8xNGsx/Q2Y4VUhzLmpwZw",
          },
          {
            imageUrl: "https://imgproxy.eneba.games/XE_bVgV_mg-w1dhBStlQZ_kB5tmEJ69TkLSFYZdF0Y4/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9k/NG1pMjh2Q05YdERD/UFlDM0M4cWRfVnpV/ZlZIMGlJbC0yZC0w/czlVbzRZLmpwZw",
          },
        ],
      },

      reviews: {
        create: [
          {
            rating: 5,
            title: "Perfect game, nice graphics",
            body: "I liked the game, although the physiscs could be improved.",
            likes: 12,
          },
          {
            rating: 4,
            title: "Great but pricey",
            body: "Love the game, but wish it was a bit cheaper.",
            likes: 5,
          },
        ],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Split Fiction (PC)",
      description: "Split Fiction is a genre-bending cooperative action-adventure that blends fast-paced combat, puzzle-solving, and narrative experimentation into a constantly shifting experience. Players navigate interconnected worlds where science fiction and fantasy collide, switching perspectives and abilities to overcome environmental challenges and enemies that evolve alongside the story. Designed from the ground up for cooperative play, Split Fiction emphasizes teamwork, timing, and creative problem-solving, delivering a cinematic journey that continuously reinvents itself and keeps players engaged from start to finish.",
      priceCents: 1499,
      currency: "EUR",
      market: "Global",
      discountPercent: new Prisma.Decimal(18.0),
      cashbackPercent: new Prisma.Decimal(1.5),
      likes: 89,
      vendorName: "Steam",

      images: {
        create: [
          {
            imageUrl: "https://imgproxy.eneba.games/v9HT4_ROFIILdcbZZAO9gj1BKl9muwLKHqiBu9SjKBQ/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/ZVRXQ1hUWWJVWndZ/SDdpbzYwYXRhQ2Et/aVlOUjJTS0dEb2pa/VWpHOWwwLmpwZw",
            isCover: true,
          },
          {
            imageUrl: "https://imgproxy.eneba.games/87g1p3OA3cWikgxvg9safF5hfq9G7to4mqbvZdNgBYA/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9X/V0xBcV8td2pyYTBy/REpkeDRzcHVNZjFa/Z1dJel9NWlJHXzNT/RmRYbU9JLmpwZw",
          },
          {
            imageUrl: "https://imgproxy.eneba.games/VoPC3Z8KuIdXoZ90b3s030jiTI98DcVTWFIybXURUNM/rs:fit:1920/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9V/VERNR1MyTHBMazFz/dVVCdGR6anZ0WFlG/c2VHZzlHZFF1aEpO/Zlh3aFNZLmpwZw",
          },
          {
            imageUrl: "https://imgproxy.eneba.games/l09NZqvUr_DZc9bYYbuogtTWuhmM87Ce7UivMQpmYLM/rs:fit:1920/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9p/S3ZGNGg1X0h4eFUy/NVc3LVdtUnNka2xS/VlBnUjV2RWJlRDZC/R1ZHQjl3LmpwZw",
          },
        ],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "RED DEAD REDEMPTION 2 (PC)",
      description: "Red Dead Redemption 2 is an epic open-world Western that follows the story of former outlaw Arthur Morgan as he navigates the decline of the Wild West while dealing with internal gang conflicts and external threats. Set in a vast and beautifully realized frontier at the turn of the 20th century, the game blends intense gunfights, horseback exploration, and a deeply emotional narrative about loyalty, redemption, and the fading age of outlaws. With its rich storytelling, memorable characters, and immersive world, Red Dead Redemption 2 delivers a defining action-adventure experience that captures the spirit of the American West.",
      priceCents: 2250,
      currency: "EUR",
      market: "Europe",
      discountPercent: new Prisma.Decimal(15.0),
      likes: 56,
      vendorName: "Rockstar Games",

      images: {
        create: [
          {
            imageUrl: "https://imgproxy.eneba.games/VZizlCMR_o8-ceIhVasms4GU8yWaeXp8y55vjcvAM7Q/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9C/aWJQUmJEcU5aVkEw/RzlEZ0MwcjBLV1J3/MHhvRjROWUFtODFf/MEJDZzA0LmpwZw",
            isCover: true,
          },
          {
            imageUrl: "https://imgproxy.eneba.games/NTfxfRsX9y73DPJjqf196yWvfCsFbAanVO0cDrxZS28/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy84/V1ZQOUtIZU55ZHl3/NjV5T1RNSGctbUFp/a1hWOHNqOHF5SjNP/S2FXd0Y0LmpwZw",
          },
        ],
      },

      reviews: {
        create: [
          {
            rating: 4,
            title: "Great storyline",
            body: "I just bought this game and it's been amazing so far.",
            likes: 9,
          },
          {
            rating: 4,
            title: "Great value for money",
            body: "The game offers hours of entertainment for its price.",
            likes: 6,
          },
        ],
      },
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
