import "./css/reset.css";
import NavSide from "./components/NavSide";
import NavHead from "./components/NavHead";
import Main from "./pages/Main";
import Video from "./pages/Video";
import Like from "./pages/Like";
import Dislike from "./pages/Dislike";
import Subscribe from "./pages/Subscribe";
import { Route, Router, Routes } from "react-router-dom";
import BodyWrapper from "./layout/BodyWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopularVideo } from "./store/store";
import axios from "axios";

const mockData = [
  {
    kind: "youtube#video",
    etag: "Ad60JLMT-wpSM37v51CcqZ-sE_4",
    id: "SQRb-W4T2AM",
    snippet: {
      publishedAt: "2023-01-21T04:29:33Z",
      channelId: "UCiWLfSweyRNmLpgEHekhoAg",
      title: "Shannon Sharpe, Tee Morant and the Grizzlies get into it | NBA on ESPN",
      description:
        "After the halftime buzzer, Shannon Sharpe and Tee Morant have to be separated by both referees and security, along with members of the Grizzlies bench.\n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SQRb-W4T2AM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/SQRb-W4T2AM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/SQRb-W4T2AM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/SQRb-W4T2AM/sddefault.jpg",
          width: 640,
          height: 480,
        },
      },
      channelTitle: "ESPN",
      tags: ["Los Angeles Lakers", "Memphis Grizzlies"],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title: "Shannon Sharpe, Tee Morant and the Grizzlies get into it | NBA on ESPN",
        description:
          "After the halftime buzzer, Shannon Sharpe and Tee Morant have to be separated by both referees and security, along with members of the Grizzlies bench.\n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV",
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "-o2-qcqfiaDuXBCbZ5pHVtjgKnw",
    id: "cKlEE_EYuNM",
    snippet: {
      publishedAt: "2023-01-20T05:00:06Z",
      channelId: "UCaO6TYtlC8U5ttz62hTrZgg",
      title: 'TWICE Pre-release english track "MOONLIGHT SUNRISE" M/V',
      description:
        'TWICE Pre-release english track "MOONLIGHT SUNRISE" M/V\n\nRelease on 2023.01.20 FRI 2PM KST/0AM EST\n\n💗Listen "MOONLIGHT SUNRISE" HERE👇\nhttps://TWICE.lnk.to/MoonlightSunrise\n \nTWICE Official Shop: https://TWICE.lnk.to/Shop\nTWICE Official YouTube: http://www.youtube.com/c/TWICE\nTWICE Official Facebook: http://www.facebook.com/JYPETWICE\nTWICE Official Twitter: http://www.twitter.com/JYPETWICE\nTWICE Official TikTok: https://www.tiktok.com/@twice_tiktok_official\nTWICE Official Instagram: http://www.instagram.com/TWICETAGRAM\nTWICE Official Homepage: http://TWICE.jype.com\nTWICE Official Fan\'s: http://fans.jype.com/TWICE\n\nⓒ 2023 JYP Entertainment. All Rights Reserved\n\n#TWICE #MOONLIGHTSUNRISE',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/cKlEE_EYuNM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/cKlEE_EYuNM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/cKlEE_EYuNM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/cKlEE_EYuNM/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/cKlEE_EYuNM/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "JYP Entertainment",
      tags: [
        "JYP Entertainment",
        "JYP",
        "TWICE",
        "트와이스",
        "MOONLIGHT SUNRISE",
        "문라이트 썬라이즈",
        "TWICE MOONLIGHT SUNRISE",
        "트와이스 문라이트 썬라이즈",
        "TWICE Pre-Release English Single",
        "트와이스 영어 선공개곡",
        "TWICE English Single",
        "트와이스 영어곡",
        "TWICE 컴백",
        "TWICE 신곡",
        "트와이스 컴백",
        "트와이스 신곡",
        "moonlightsunrise mv",
        "moonlightsunrise music video",
        "mlsr mv",
        "mlsr music video",
        "문라선라뮤비",
        "문라선라 뮤직비디오",
        "트와이스문라선라 뮤비",
        "twice mlsr mv",
        "twice mv",
        "mlsr twice",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title: 'TWICE Pre-release english track "MOONLIGHT SUNRISE" M/V',
        description:
          'TWICE Pre-release english track "MOONLIGHT SUNRISE" M/V\n\nRelease on 2023.01.20 FRI 2PM KST/0AM EST\n\n💗Listen "MOONLIGHT SUNRISE" HERE👇\nhttps://TWICE.lnk.to/MoonlightSunrise\n \nTWICE Official Shop: https://TWICE.lnk.to/Shop\nTWICE Official YouTube: http://www.youtube.com/c/TWICE\nTWICE Official Facebook: http://www.facebook.com/JYPETWICE\nTWICE Official Twitter: http://www.twitter.com/JYPETWICE\nTWICE Official TikTok: https://www.tiktok.com/@twice_tiktok_official\nTWICE Official Instagram: http://www.instagram.com/TWICETAGRAM\nTWICE Official Homepage: http://TWICE.jype.com\nTWICE Official Fan\'s: http://fans.jype.com/TWICE\n\nⓒ 2023 JYP Entertainment. All Rights Reserved\n\n#TWICE #MOONLIGHTSUNRISE',
      },
      defaultAudioLanguage: "ko",
    },
  },
  {
    kind: "youtube#video",
    etag: "w8nWruRwiJ6xcZn7CPhLDIkW3kc",
    id: "RYQXhLxPCrU",
    snippet: {
      publishedAt: "2023-01-20T21:00:13Z",
      channelId: "UCYAB7hh1ohA8-iX54EpMdeA",
      title: "Customizing An ENTIRE Deck of Cards (Pt. 1)",
      description:
        "Hey guys! So, today I am going to be doing a very long awaited request (or....demand) from my audience to paint/customize an entire deck of playing cards using my original characters. There are 52 cards in a deck, plus 2 jokers (which I am going to include), so this is a HUGE project. Let's see how far I get this week....\n\n___________WELCOME TO MY CHANNEL__________\n\nHey! my name is Moriah (pronounced muh-rye-yuh 😂 ) and this is my channel....obviously. I'm 28 and like doing anything creative...and being snarky.....just a lil. I make a lot of decorating, painting and general art videos here. I'm obsessed with editing and adding lil bits to my videos, so if that's not your thing....oof you may hate this haha. I paint on squishies, thrift store finds, and other random things I pick up. I also love to draw, but don't expect anything too skilled, I'm not the best at that haha. You will also find occasional crafting/testing crafting kits on my channel which are always a hot mess. And even some baking (REALLY bad at that, but it's fun to try). \n\nCURRENT SERIES:\nSquishy Makeovers: Fixing and decorating used squishies sent from my viewers\nThrift Store Makeovers: Fixing and decorating stuff I find at thrift stores/yard sales\nBake With ME: Recreating squishies I've decorated in real life\nCreate This Book: Drawing in the prompt book that I wrote (available to purchase and follow along)\nSquishy Unboxing: Opening used squishy packages sent from viewers\n\nFind Products I Use (contains affiliate links):\nhttps://a.co/4XDtrmV\n\n\n___UPLOAD SCHEDULE___\n\nEvery Friday at 4:00pm ET: Alternating Squishy Makeovers, Thrift Makeovers, Craft Kit Reviews, Create This Book, Mail Openings and Miscellaneous crafts and DIYs\n\n____DOWNLOAD SPARK____\nDownload Spark: https://apple.co/3gPrlWP\nJoin Discord Community: https://discord.gg/w48nSSm3s4\n\n____PURCHASE ME PRODUCTS____\n\nCREATE THIS BOOK:\nhttps://amzn.to/2vUerfI\n\nCREATE THIS BOOK 2:\nhttps://amzn.to/2Nx2G9f\n\nME Merchandise:\nhttps://moriahelizabethmerch.com/\n\n\n____ME SOCIALS____\n\nINSTAGRAM: \nhttps://www.instagram.com/moriahelizabethofficial/\n\nTIKTOK:\nhttps://www.tiktok.com/@moriahelizabeth\n\nFACEBOOK:\nhttps://www.facebook.com/Moriah-Elizabeth-102592864903627\n\nSNAPCHAT:\nMoriahOfficial\n\nVISIT ME WEBSITE:\nhttps://www.moriahelizabeth.com/\n\n\n____CONTACT ME____\n\nEMAIL PICTURES OF YOUR ART:\nArtwork@Moriah.video\n\nFOR BUSINESS INQUIRIES/OPPORTUNITIES ONLY:\nmoriah@nightmedia.co\n\n\n_____MAIL ME_____\n\nFor sending squishies, Letters, or general fan mail, please contact: FANMAIL@MORIAH.VIDEO to request my P.O. box address \n(must be 13+ to send mail)\nATTENTION: Unfortunately I can only give out my address to a small amount of people each week. This is to make sure that I get a reasonable amount of mail and can feature the maximum amount on camera. I apologize in advance if you do not recieve the address.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RYQXhLxPCrU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/RYQXhLxPCrU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/RYQXhLxPCrU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/RYQXhLxPCrU/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/RYQXhLxPCrU/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Moriah Elizabeth",
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title: "Customizing An ENTIRE Deck of Cards (Pt. 1)",
        description:
          "Hey guys! So, today I am going to be doing a very long awaited request (or....demand) from my audience to paint/customize an entire deck of playing cards using my original characters. There are 52 cards in a deck, plus 2 jokers (which I am going to include), so this is a HUGE project. Let's see how far I get this week....\n\n___________WELCOME TO MY CHANNEL__________\n\nHey! my name is Moriah (pronounced muh-rye-yuh 😂 ) and this is my channel....obviously. I'm 28 and like doing anything creative...and being snarky.....just a lil. I make a lot of decorating, painting and general art videos here. I'm obsessed with editing and adding lil bits to my videos, so if that's not your thing....oof you may hate this haha. I paint on squishies, thrift store finds, and other random things I pick up. I also love to draw, but don't expect anything too skilled, I'm not the best at that haha. You will also find occasional crafting/testing crafting kits on my channel which are always a hot mess. And even some baking (REALLY bad at that, but it's fun to try). \n\nCURRENT SERIES:\nSquishy Makeovers: Fixing and decorating used squishies sent from my viewers\nThrift Store Makeovers: Fixing and decorating stuff I find at thrift stores/yard sales\nBake With ME: Recreating squishies I've decorated in real life\nCreate This Book: Drawing in the prompt book that I wrote (available to purchase and follow along)\nSquishy Unboxing: Opening used squishy packages sent from viewers\n\nFind Products I Use (contains affiliate links):\nhttps://a.co/4XDtrmV\n\n\n___UPLOAD SCHEDULE___\n\nEvery Friday at 4:00pm ET: Alternating Squishy Makeovers, Thrift Makeovers, Craft Kit Reviews, Create This Book, Mail Openings and Miscellaneous crafts and DIYs\n\n____DOWNLOAD SPARK____\nDownload Spark: https://apple.co/3gPrlWP\nJoin Discord Community: https://discord.gg/w48nSSm3s4\n\n____PURCHASE ME PRODUCTS____\n\nCREATE THIS BOOK:\nhttps://amzn.to/2vUerfI\n\nCREATE THIS BOOK 2:\nhttps://amzn.to/2Nx2G9f\n\nME Merchandise:\nhttps://moriahelizabethmerch.com/\n\n\n____ME SOCIALS____\n\nINSTAGRAM: \nhttps://www.instagram.com/moriahelizabethofficial/\n\nTIKTOK:\nhttps://www.tiktok.com/@moriahelizabeth\n\nFACEBOOK:\nhttps://www.facebook.com/Moriah-Elizabeth-102592864903627\n\nSNAPCHAT:\nMoriahOfficial\n\nVISIT ME WEBSITE:\nhttps://www.moriahelizabeth.com/\n\n\n____CONTACT ME____\n\nEMAIL PICTURES OF YOUR ART:\nArtwork@Moriah.video\n\nFOR BUSINESS INQUIRIES/OPPORTUNITIES ONLY:\nmoriah@nightmedia.co\n\n\n_____MAIL ME_____\n\nFor sending squishies, Letters, or general fan mail, please contact: FANMAIL@MORIAH.VIDEO to request my P.O. box address \n(must be 13+ to send mail)\nATTENTION: Unfortunately I can only give out my address to a small amount of people each week. This is to make sure that I get a reasonable amount of mail and can feature the maximum amount on camera. I apologize in advance if you do not recieve the address.",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "jyEXktqBvR4rK56S--JofAXZnUU",
    id: "ImntsoxN9_4",
    snippet: {
      publishedAt: "2023-01-19T19:24:30Z",
      channelId: "UC0YatYmg5JRYzXJPxIdRd8g",
      title: "PSG vs Riyadh All-Star XI | RIYADH SEASON CUP 2023 HIGHLIGHTS | 1/19/2023 | beIN SPORTS USA",
      description:
        "The two GOATS scored for their respective teams, Messi opened the scoring and Cristiano responded with 2 goals. The victory was for PSG with a score of 5-4.\n\n#messi #cristianoronaldo #psg \n\nCatch the latest highlights of Ligue 1🇫🇷, Turkish Süper Lig🇹🇷, \nCopa Libertadores🏆, Copa Sudamericana🥇 on our YouTube channel.\nFollow the latest news on beIN SPORTS.com and stream all our matches on our beIN SPORTS CONNECT app or on our beIN XTRA channels.\nDownload beIN SPORTS CONNECT on Apple devices: https://tinyurl.com/y4bd3osh\nDownload beIN SPORTS CONNECT on Android devices: https://tinyurl.com/yxlst4vj",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ImntsoxN9_4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ImntsoxN9_4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ImntsoxN9_4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/ImntsoxN9_4/sddefault.jpg",
          width: 640,
          height: 480,
        },
      },
      channelTitle: "beIN SPORTS USA",
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title: "PSG vs Riyadh All-Star XI | RIYADH SEASON CUP 2023 HIGHLIGHTS | 1/19/2023 | beIN SPORTS USA",
        description:
          "The two GOATS scored for their respective teams, Messi opened the scoring and Cristiano responded with 2 goals. The victory was for PSG with a score of 5-4.\n\n#messi #cristianoronaldo #psg \n\nCatch the latest highlights of Ligue 1🇫🇷, Turkish Süper Lig🇹🇷, \nCopa Libertadores🏆, Copa Sudamericana🥇 on our YouTube channel.\nFollow the latest news on beIN SPORTS.com and stream all our matches on our beIN SPORTS CONNECT app or on our beIN XTRA channels.\nDownload beIN SPORTS CONNECT on Apple devices: https://tinyurl.com/y4bd3osh\nDownload beIN SPORTS CONNECT on Android devices: https://tinyurl.com/yxlst4vj",
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "bWDZHOCoew4Z8povYbM2EasYMYw",
    id: "vjDOpHuUppU",
    snippet: {
      publishedAt: "2023-01-20T16:59:59Z",
      channelId: "UCQJWtTnAHhEG5w4uN0udnUQ",
      title: "Invincible - Season 2 Teaser | Prime Video",
      description:
        "Welcome to Burger Mart! Enjoy a hot meal along with an update on Season 2 of INVINCIBLE. Featuring Steven Yeun as the voice of Invincible and Seth Rogen as the voice of Allen The Alien.\n\n» SUBSCRIBE: http://bit.ly/PrimeVideoSubscribe \n\nAbout Prime Video:\nWant to watch it now? We've got it. This week's newest movies, last night's TV shows, classic favorites, and more are available to stream instantly, plus all your videos are stored in Your Video Library. Over 150,000 movies and TV episodes, including thousands for Amazon Prime members at no additional cost.\n \nGet More Prime Video: \nStream Now: http://bit.ly/WatchMorePrimeVideo\nFacebook: http://bit.ly/PrimeVideoFB\nTwitter: http://bit.ly/PrimeVideoTW\nInstagram: http://bit.ly/primevideoIG\n \nInvincible - Season 2 Teaser | Prime Video\nhttps://youtu.be/vjDOpHuUppU\n \nPrime Video\nhttps://www.youtube.com/PrimeVideo\n\n#Invincible #Teaser #PrimeVideo",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vjDOpHuUppU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vjDOpHuUppU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vjDOpHuUppU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/vjDOpHuUppU/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/vjDOpHuUppU/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Prime Video",
      tags: [
        "invincible official teaser",
        "invincible teaser",
        "invincible 2022",
        "official teaser",
        "teaser",
        "teaser 2022",
        "new amazon teaser",
        "invincible prime video",
        "prime video invincible",
        "invincible",
        "prime video",
        "amazon prime video",
        "amazon prime",
        "prime",
        "amazon",
        "invincible season 2",
        "official teasers 2023",
        "invincible clips",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "Invincible - Season 2 Teaser | Prime Video",
        description:
          "Welcome to Burger Mart! Enjoy a hot meal along with an update on Season 2 of INVINCIBLE. Featuring Steven Yeun as the voice of Invincible and Seth Rogen as the voice of Allen The Alien.\n\n» SUBSCRIBE: http://bit.ly/PrimeVideoSubscribe \n\nAbout Prime Video:\nWant to watch it now? We've got it. This week's newest movies, last night's TV shows, classic favorites, and more are available to stream instantly, plus all your videos are stored in Your Video Library. Over 150,000 movies and TV episodes, including thousands for Amazon Prime members at no additional cost.\n \nGet More Prime Video: \nStream Now: http://bit.ly/WatchMorePrimeVideo\nFacebook: http://bit.ly/PrimeVideoFB\nTwitter: http://bit.ly/PrimeVideoTW\nInstagram: http://bit.ly/primevideoIG\n \nInvincible - Season 2 Teaser | Prime Video\nhttps://youtu.be/vjDOpHuUppU\n \nPrime Video\nhttps://www.youtube.com/PrimeVideo\n\n#Invincible #Teaser #PrimeVideo",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "EkWceNEw_hTKP1Xh6Uf5uDhLh3Y",
    id: "I5M7oEkQpWM",
    snippet: {
      publishedAt: "2023-01-20T17:49:06Z",
      channelId: "UChRlaISXbl2gECFAmDzxgzg",
      title: "We Built a Twin Turbo Ram TRX For Trailer Racing",
      description:
        "Check Out Hellion Turbos: https://www.hellionturbo.com/\nWe Built a Twin Turbo Ram TRX For Trailer Racing\nGet your Redneck Science Clothing ► https://westengw.com/\n\nADD ME ON\nInstagram: https://www.instagram.com/westengw​​\nFacebook: https://www.facebook.com/westengw",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/I5M7oEkQpWM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/I5M7oEkQpWM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/I5M7oEkQpWM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/I5M7oEkQpWM/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/I5M7oEkQpWM/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Westen Champlin",
      categoryId: "2",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title: "We Built a Twin Turbo Ram TRX For Trailer Racing",
        description:
          "Check Out Hellion Turbos: https://www.hellionturbo.com/\nWe Built a Twin Turbo Ram TRX For Trailer Racing\nGet your Redneck Science Clothing ► https://westengw.com/\n\nADD ME ON\nInstagram: https://www.instagram.com/westengw​​\nFacebook: https://www.facebook.com/westengw",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "crD4jr5ZeYscWy3b3fIsllEcf_w",
    id: "VYJtb2YXae8",
    snippet: {
      publishedAt: "2023-01-20T17:38:24Z",
      channelId: "UCLXo7UDZvByw2ixzpQCufnA",
      title: "Why we all need subtitles now",
      description:
        "It's not you — the dialogue in TV and movies has gotten harder to hear.\n\nSubscribe and turn on notifications 🔔 so you don't miss any videos: http://goo.gl/0bsAjO \n\nHave you ever been watching a show or movie, and then a character delivers a line so unintelligible you have to scramble to find the remote and rewind? For me, this moment came during the climax of the Pete Davidson film “The King of Staten Island,” where his most important line was impossible to understand. \n\nI had to rewind three times — and eventually put subtitles on — to finally pick up what he was saying.\n\nThis experience isn’t unique — gather enough people together and you can generally separate them into two categories: People who use subtitles, and people who don’t. And according to a not-so-scientific YouTube poll we ran on our Community tab, the latter category is an endangered species — 57% of you said you always use subtitles, while just 12% of you said you generally don’t.\n \nBut why do so many of us feel that we need subtitles to understand the dialogue in the things we watch?\n\nThe answer to that question is complex – and we get straight to the bottom of it in this explainer, with the help of dialogue editor Austin Olivia Kendrick.\n\nMake sure you never miss behind-the-scenes content in the Vox Video newsletter, sign up here: http://vox.com/video-newsletter\n\nVox.com is a news website that helps you cut through the noise and understand what's really driving the events in the headlines. Check out http://www.vox.com\n\nSupport Vox's reporting with a one-time or recurring contribution: http://vox.com/contribute-now\n\nShop the Vox merch store: http://vox.com/store\n\nWatch our full video catalog: http://goo.gl/IZONyE\n\nFollow Vox on Facebook: http://facebook.com/vox\nFollow Vox on Twitter: http://twitter.com/voxdotcom\nFollow Vox on TikTok: http://tiktok.com/@voxdotcom",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VYJtb2YXae8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VYJtb2YXae8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VYJtb2YXae8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/VYJtb2YXae8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/VYJtb2YXae8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vox",
      tags: [
        "Vox.com",
        "accessibility",
        "explain",
        "explainer",
        "hearing",
        "movies",
        "production",
        "sound mixing",
        "subtitles",
        "television",
        "theaters",
        "tv shows",
        "vox",
        "hard of hearing",
        "deaf",
        "mumbling",
        "tenet",
        "christopher nolan movie dialogue",
        "dialogue in movies",
        "dialogue in tv",
        "vox ed vega",
        "downmixing",
        "down mixing",
        "stereo",
        "5.1",
        "7.1",
        "atmos surround sound",
        "dolby sound",
        "audio mixing",
        "production mixing",
        "prerecording mix",
      ],
      categoryId: "25",
      liveBroadcastContent: "none",
      localized: {
        title: "Why we all need subtitles now",
        description:
          "It's not you — the dialogue in TV and movies has gotten harder to hear.\n\nSubscribe and turn on notifications 🔔 so you don't miss any videos: http://goo.gl/0bsAjO \n\nHave you ever been watching a show or movie, and then a character delivers a line so unintelligible you have to scramble to find the remote and rewind? For me, this moment came during the climax of the Pete Davidson film “The King of Staten Island,” where his most important line was impossible to understand. \n\nI had to rewind three times — and eventually put subtitles on — to finally pick up what he was saying.\n\nThis experience isn’t unique — gather enough people together and you can generally separate them into two categories: People who use subtitles, and people who don’t. And according to a not-so-scientific YouTube poll we ran on our Community tab, the latter category is an endangered species — 57% of you said you always use subtitles, while just 12% of you said you generally don’t.\n \nBut why do so many of us feel that we need subtitles to understand the dialogue in the things we watch?\n\nThe answer to that question is complex – and we get straight to the bottom of it in this explainer, with the help of dialogue editor Austin Olivia Kendrick.\n\nMake sure you never miss behind-the-scenes content in the Vox Video newsletter, sign up here: http://vox.com/video-newsletter\n\nVox.com is a news website that helps you cut through the noise and understand what's really driving the events in the headlines. Check out http://www.vox.com\n\nSupport Vox's reporting with a one-time or recurring contribution: http://vox.com/contribute-now\n\nShop the Vox merch store: http://vox.com/store\n\nWatch our full video catalog: http://goo.gl/IZONyE\n\nFollow Vox on Facebook: http://facebook.com/vox\nFollow Vox on Twitter: http://twitter.com/voxdotcom\nFollow Vox on TikTok: http://tiktok.com/@voxdotcom",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "i6W9_KKyXnT-AqVjxJSPpbDVO6M",
    id: "D6uhDK_u-2s",
    snippet: {
      publishedAt: "2023-01-20T17:59:18Z",
      channelId: "UCstw-41J8syXgdJ8xWvaizA",
      title: "Trippie Redd – ATLANTIS Feat. Chief Keef (Official Music Video)",
      description:
        'Official Music Video for "ATLANTIS Feat. Chief Keef"\nListen/Download to "Mansion Musik": https://trippieredd.lnk.to/mansionmusik\n\nDirected by Nolan Riddle\nProduced by Grade A Productions\n\nOfficial Merch: https://1400club.com/\n\nFollow Trippie Redd\nInstagram: https://instagram.com/trippieredd\nFacebook: http://www.facebook.com/trippieredd\nTwitter: http://www.twitter.com/trippieredd\nTIkTok: https://www.tiktok.com/@trippieatplay\nSnapchat: https://www.snapchat.com/add/trippieredd8383',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/D6uhDK_u-2s/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/D6uhDK_u-2s/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/D6uhDK_u-2s/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/D6uhDK_u-2s/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/D6uhDK_u-2s/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Trippie Redd",
      tags: ["Trippie Redd", "Trippi Red"],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title: "Trippie Redd – ATLANTIS Feat. Chief Keef (Official Music Video)",
        description:
          'Official Music Video for "ATLANTIS Feat. Chief Keef"\nListen/Download to "Mansion Musik": https://trippieredd.lnk.to/mansionmusik\n\nDirected by Nolan Riddle\nProduced by Grade A Productions\n\nOfficial Merch: https://1400club.com/\n\nFollow Trippie Redd\nInstagram: https://instagram.com/trippieredd\nFacebook: http://www.facebook.com/trippieredd\nTwitter: http://www.twitter.com/trippieredd\nTIkTok: https://www.tiktok.com/@trippieatplay\nSnapchat: https://www.snapchat.com/add/trippieredd8383',
      },
      defaultAudioLanguage: "en-US",
    },
  },
  {
    kind: "youtube#video",
    etag: "HoK5Pi4kWf7LC5Yk90-Wxp0ODgQ",
    id: "tzIxXesT2r8",
    snippet: {
      publishedAt: "2023-01-20T20:00:08Z",
      channelId: "UCucot-Zp428OwkyRm2I7v2Q",
      title: "FULL FACE OF TIKTOK VIRAL MAKEUP HACKS!",
      description:
        "HI SISTERS! In today's video, I did a FULL FACE of makeup using ONLY VIRAL Tiktok hacks!! Whipped cream sunscreen, foundation drops with your hands, Kendall & Hailey contour, lash curler eyeshadow, lip contouring, and more!! \n\n🎥 Previous Video » https://youtu.be/EixflMom1v0\n🛎 Subscribe to my channel & hit the notification bell so you never miss an upload! » http://bit.ly/JamesCharles for new videos!\n\n💞 Let's Be Sisters!\nInstagram » http://instagram.com/jamescharles\nFacebook » http://facebook.com/jamescharles\nTikTok » http://tiktok.com/@jamescharles\nTwitter » http://twitter.com/jamescharles\n\n💌 Business Inquiries » business@spinandco.com\n\n🔥 My Amazing Team\nCreative Director: Louis Gargiula\nhttp://instagram.com/louisgargiula\nCreative Assistant: Trevor Garcia\nhttp://instagram.com/igtrevor\nEditor: Ryan Allen\nhttp://instagram.com/helloxryan \nGraphics: Michael Rusakov\nhttp://instagram.com/michael.ny",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tzIxXesT2r8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/tzIxXesT2r8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/tzIxXesT2r8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/tzIxXesT2r8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/tzIxXesT2r8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "James Charles",
      tags: [
        "james",
        "james charles",
        "makeup artist",
        "mua",
        "cute",
        "easy makeup",
        "how-to",
        "reviews",
        "tutorials",
        "funny videos",
        "hacks",
        "beauty",
        "morphe",
        "james charles x morphe",
        "guru",
        "lips",
        "beauty hacks",
        "makeup routines",
        "makeup 2020",
        "prom makeup",
        "tik tok makeup",
        "tik tok hacks",
        "tik tok beauty hacks",
        "tiktok",
        "full face of makeup",
        "viral hacks",
        "full face of tiktok trends",
        "full face of tiktok makeup hacks",
        "tiktok trends",
        "2023",
        "meredith duxbury",
        "alix earle",
        "viral tiktok",
        "lip contouring",
        "contouring hack",
        "contour hack",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title: "FULL FACE OF TIKTOK VIRAL MAKEUP HACKS!",
        description:
          "HI SISTERS! In today's video, I did a FULL FACE of makeup using ONLY VIRAL Tiktok hacks!! Whipped cream sunscreen, foundation drops with your hands, Kendall & Hailey contour, lash curler eyeshadow, lip contouring, and more!! \n\n🎥 Previous Video » https://youtu.be/EixflMom1v0\n🛎 Subscribe to my channel & hit the notification bell so you never miss an upload! » http://bit.ly/JamesCharles for new videos!\n\n💞 Let's Be Sisters!\nInstagram » http://instagram.com/jamescharles\nFacebook » http://facebook.com/jamescharles\nTikTok » http://tiktok.com/@jamescharles\nTwitter » http://twitter.com/jamescharles\n\n💌 Business Inquiries » business@spinandco.com\n\n🔥 My Amazing Team\nCreative Director: Louis Gargiula\nhttp://instagram.com/louisgargiula\nCreative Assistant: Trevor Garcia\nhttp://instagram.com/igtrevor\nEditor: Ryan Allen\nhttp://instagram.com/helloxryan \nGraphics: Michael Rusakov\nhttp://instagram.com/michael.ny",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "ssP9FugD1_GvePyrj925DvW4lhs",
    id: "U762GRoHNHw",
    snippet: {
      publishedAt: "2023-01-20T17:30:10Z",
      channelId: "UCQ-YJstgVdAiCT52TiBWDbg",
      title: "Free Kicks vs the Best Free Kick Taker in the World",
      description:
        "Download Ellevate Football app now for your 2 week free trial https://www.ellevate-football.com/\nPromo Code: CHRISMD\n#EllevateYourGame \n\nScott Pollock Second Channel Video: https://youtu.be/eeRGsV4cZRg\n\nSubscribe to Arthur: https://www.youtube.com/@Arthur_TV\nSubscribe to Scott: https://www.youtube.com/@ScottyP77\nSubscribe to Spencer: https://www.youtube.com/@SpencerFC\nFollow Toby on Instagram: @tobyaromolaran \nSubscribe to Calfreezy: https://www.youtube.com/@Calfreezy\nSubscribe to Ollie: https://www.youtube.com/@PalmerandSon9\nSubscribe to Simon: https://www.youtube.com/@Miniminter\nFollow John on TikTok: @bigjohngk \n\n► Second channel: https://www.youtube.com/@chrismdixon10\n► Instagram: http://instagram.com/chrismd10\n► Twitter: https://twitter.com/chrismd10\n► Facebook: https://www.facebook.com/OfficialChrisMD\n\nIf you want to know how I use popular music in my content - Lickd provide an affordable service to license mainstream music for use in monetised content. Save 50% off your first track on Lickd and improve your video quality with popular music: https://lickd.co/affiliate/chrismd\n\nMusic:\n\n00:06, 02:43, 15:11, 17:19, 23:25 | Get Right Here Right Now by Fatboy Slim and over 1M + mainstream tracks here https://go.lickd.co/Music  License ID: 2ZEzOxWZLeQ\n\n09:38, 19:36 | Get Love Me Again by John Newman and over 1M + mainstream tracks here https://go.lickd.co/Music  License ID: WnZrQ5GK1o0 https://lickd.lnk.to/RqBy3dID!ChrisMD\n\n\nMusic by Epidemic Sound (http://www.epidemicsound.com) & others.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/U762GRoHNHw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/U762GRoHNHw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/U762GRoHNHw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/U762GRoHNHw/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/U762GRoHNHw/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "ChrisMD",
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "Free Kicks vs the Best Free Kick Taker in the World",
        description:
          "Download Ellevate Football app now for your 2 week free trial https://www.ellevate-football.com/\nPromo Code: CHRISMD\n#EllevateYourGame \n\nScott Pollock Second Channel Video: https://youtu.be/eeRGsV4cZRg\n\nSubscribe to Arthur: https://www.youtube.com/@Arthur_TV\nSubscribe to Scott: https://www.youtube.com/@ScottyP77\nSubscribe to Spencer: https://www.youtube.com/@SpencerFC\nFollow Toby on Instagram: @tobyaromolaran \nSubscribe to Calfreezy: https://www.youtube.com/@Calfreezy\nSubscribe to Ollie: https://www.youtube.com/@PalmerandSon9\nSubscribe to Simon: https://www.youtube.com/@Miniminter\nFollow John on TikTok: @bigjohngk \n\n► Second channel: https://www.youtube.com/@chrismdixon10\n► Instagram: http://instagram.com/chrismd10\n► Twitter: https://twitter.com/chrismd10\n► Facebook: https://www.facebook.com/OfficialChrisMD\n\nIf you want to know how I use popular music in my content - Lickd provide an affordable service to license mainstream music for use in monetised content. Save 50% off your first track on Lickd and improve your video quality with popular music: https://lickd.co/affiliate/chrismd\n\nMusic:\n\n00:06, 02:43, 15:11, 17:19, 23:25 | Get Right Here Right Now by Fatboy Slim and over 1M + mainstream tracks here https://go.lickd.co/Music  License ID: 2ZEzOxWZLeQ\n\n09:38, 19:36 | Get Love Me Again by John Newman and over 1M + mainstream tracks here https://go.lickd.co/Music  License ID: WnZrQ5GK1o0 https://lickd.lnk.to/RqBy3dID!ChrisMD\n\n\nMusic by Epidemic Sound (http://www.epidemicsound.com) & others.",
      },
      defaultAudioLanguage: "en-GB",
    },
  },
  {
    kind: "youtube#video",
    etag: "f8e0kVXC56gK5isYSsSyK9uW9rE",
    id: "kOERkIWCG1A",
    snippet: {
      publishedAt: "2023-01-20T20:35:04Z",
      channelId: "UCU-ZXqhx1xjsxO1ftXJELdg",
      title: "the final chapter 🤍",
      description:
        "Pregnancy Announcement \nKeren: http://instagram.com/kerenswan\nKhoa: https://instagram.com/khoa_nguyen\nBAYTS podcast\nAnchor\nhttps://anchor.fm/bayts\nSpotify\nhttps://open.spotify.com/show/6dzedSlYg7H1pbwUHaVUP5\nApple\nhttps://anchor.fm/s/a9077c0/podcast/rss\n\nOur NEW Merch!\nhttps://teespring.com/stores/kkandbabyj\nhttps://teespring.com/stores/kkandbabyj\nhttps://teespring.com/stores/kkandbabyj\n\nWatch Yesterday's Vlog:\nhttps://www.youtube.com/playlist?list=PLvhqjNEyQjYpgusAW3SYLnqKxUFeQk8zE\n\nMerch Link:\nhttps://teespring.com/stores/kkandbabyj\n\nInstagram:\nKeren: http://instagram.com/kerenswan\nKhoa: https://instagram.com/khoa_nguyen\nTwitter:\nKeren: https://twitter.com/Kerenswan\nKhoa: https://twitter.com/khoa_nguyen\nSnapchat\nKeren: kerenswanson\nKhoa: kuhwahh\n\nMusic Probably by one of these artists\nDj Quads\nhttps://soundcloud.com/aka-dj-quads\nDyalla Swain\nhttps://soundcloud.com/dyallas\nJoakim Karud\nhttps://soundcloud.com/joakimkarud\nAndrew Applepie\nhttps://soundcloud.com/andrewapplepie\nLake Inspired\nhttps://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q\nIf you need to know a specific song please comment or tweet @khoa_nguyen\n\nSHOP THIS VLOG:\nKeren's Vacuum Cleaner:\nhttp://amzn.to/2i1rWGK\nThe super comfy Lovesac:\nhttp://bit.ly/2hfFFUM\nKhoa's Projector:\nhttp://amzn.to/2eSjN5L\nBrown backpack: http://amzn.to/2ox9yni\nOUR GEAR:\nCanon g7x Mark II: http://amzn.to/2nnS0IZ\nCanon 70D: http://amzn.to/2nrRdHH\nMemory Card: http://amzn.to/2ok572J\nTripod: http://amzn.to/2ok94V6\nBendy Tripod: http://amzn.to/2oinh4h\nLarge Tripod: http://amzn.to/2nTnZon\nExternal Hard drive: http://amzn.to/2okaOOh\n\nKeren's Pinterest:\nhttp://pin.it/xT05ZxA\n\nBusiness Inquiry: \nkeren@kkandbabyj.com\nkhoa@kkandbabyj.com\n\nOur PO Box was closed but you can send letters to\n5503 West Colonial Drive\nOrlando Florida 32819\n\n*Some links may be affiliate",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/kOERkIWCG1A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/kOERkIWCG1A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/kOERkIWCG1A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/kOERkIWCG1A/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/kOERkIWCG1A/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "KKandbabyJ",
      tags: ["kkandbabyj", "khoa", "keren", "jackson", "Landon", "orlando", "florida", "pregnant", "birth", "vlog"],
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title: "the final chapter 🤍",
        description:
          "Pregnancy Announcement \nKeren: http://instagram.com/kerenswan\nKhoa: https://instagram.com/khoa_nguyen\nBAYTS podcast\nAnchor\nhttps://anchor.fm/bayts\nSpotify\nhttps://open.spotify.com/show/6dzedSlYg7H1pbwUHaVUP5\nApple\nhttps://anchor.fm/s/a9077c0/podcast/rss\n\nOur NEW Merch!\nhttps://teespring.com/stores/kkandbabyj\nhttps://teespring.com/stores/kkandbabyj\nhttps://teespring.com/stores/kkandbabyj\n\nWatch Yesterday's Vlog:\nhttps://www.youtube.com/playlist?list=PLvhqjNEyQjYpgusAW3SYLnqKxUFeQk8zE\n\nMerch Link:\nhttps://teespring.com/stores/kkandbabyj\n\nInstagram:\nKeren: http://instagram.com/kerenswan\nKhoa: https://instagram.com/khoa_nguyen\nTwitter:\nKeren: https://twitter.com/Kerenswan\nKhoa: https://twitter.com/khoa_nguyen\nSnapchat\nKeren: kerenswanson\nKhoa: kuhwahh\n\nMusic Probably by one of these artists\nDj Quads\nhttps://soundcloud.com/aka-dj-quads\nDyalla Swain\nhttps://soundcloud.com/dyallas\nJoakim Karud\nhttps://soundcloud.com/joakimkarud\nAndrew Applepie\nhttps://soundcloud.com/andrewapplepie\nLake Inspired\nhttps://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q\nIf you need to know a specific song please comment or tweet @khoa_nguyen\n\nSHOP THIS VLOG:\nKeren's Vacuum Cleaner:\nhttp://amzn.to/2i1rWGK\nThe super comfy Lovesac:\nhttp://bit.ly/2hfFFUM\nKhoa's Projector:\nhttp://amzn.to/2eSjN5L\nBrown backpack: http://amzn.to/2ox9yni\nOUR GEAR:\nCanon g7x Mark II: http://amzn.to/2nnS0IZ\nCanon 70D: http://amzn.to/2nrRdHH\nMemory Card: http://amzn.to/2ok572J\nTripod: http://amzn.to/2ok94V6\nBendy Tripod: http://amzn.to/2oinh4h\nLarge Tripod: http://amzn.to/2nTnZon\nExternal Hard drive: http://amzn.to/2okaOOh\n\nKeren's Pinterest:\nhttp://pin.it/xT05ZxA\n\nBusiness Inquiry: \nkeren@kkandbabyj.com\nkhoa@kkandbabyj.com\n\nOur PO Box was closed but you can send letters to\n5503 West Colonial Drive\nOrlando Florida 32819\n\n*Some links may be affiliate",
      },
      defaultAudioLanguage: "en-US",
    },
  },
  {
    kind: "youtube#video",
    etag: "qpNsgLxXTV3S5zKsXGiYH1D-z-8",
    id: "IM17Ex8Tgaw",
    snippet: {
      publishedAt: "2023-01-20T23:15:01Z",
      channelId: "UCnEifYQ_sawt9_U668KUatg",
      title: "I Survived 100 DAYS as THANOS in HARDCORE Minecraft!",
      description:
        "► Download Honkai Impact: https://bit.ly/3GGLFCO \nDownload the game NOW to redeem the gift code [TRUTH63] and get 30 Crystals, 2,888 Asterite, and a Herrscher trial card for free! There will be more value bundles for new players!\n\n► SHOP MY MERCH HERE! https://merchcraft.shop/collections/bronzo-collection\n\nFollow Bronzo as he spends 100 Days as Thanos, the Mad Titan! Learn the true story of the Avengers Infinity Saga from Thanos's perspective. See how he defeated the Nova Corps, Guardians of the Galaxy, and the Avengers! Can anything stop Thanos's mad quest?\n\nMods Used in this Video:\nAstemir’s Forestcraft - https://www.curseforge.com/minecraft/mc-mods/astemirs-forest-craft\nEpic Fight Mod - https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod\nGrappling Hook Mod - https://www.curseforge.com/minecraft/mc-mods/grappling-hook-mod\nMutant Beasts - https://www.curseforge.com/minecraft/mc-mods/mutant-beasts\nMutant More - https://www.curseforge.com/minecraft/mc-mods/mutant-more\nMutant Villager - https://www.curseforge.com/minecraft/mc-mods/mutant-more\nSpider Man Mod - https://www.curseforge.com/minecraft/mc-mods/the-spiderman-mod\nSuper Suit Mod - https://www.curseforge.com/minecraft/mc-mods/super-suit-mod\n\nArtifacts - https://www.curseforge.com/minecraft/mc-mods/artifacts\nCMD Cam - https://www.curseforge.com/minecraft/mc-mods/cmdcam\nCitadel - https://github.com/AlexModGuy/Citadel\nCollective - https://www.curseforge.com/minecraft/mc-mods/collective\nConfigure - https://mrcrayfish.com/mods?id=configured\nCretiveCore - https://mrcrayfish.com/mods?id=configured\nCurios API - https://www.curseforge.com/minecraft/mc-mods/curios\nCustom NPCs - http://www.kodevelopment.nl/minecraft/customnpcs\nCyclic - https://www.curseforge.com/minecraft/mc-mods/cyclic\nEffortless Building - https://www.curseforge.com/minecraft/mc-mods/effortless-building\nGeckolib - https://geckolib.com/\nJust Enough Items - https://www.curseforge.com/minecraft/mc-mods/jei\nL Ender’s Cataclysm - https://www.curseforge.com/minecraft/mc-mods/l_ender-s-cataclysm\nMahou Tsukai - https://www.curseforge.com/minecraft/mc-mods/mahou-tsukai\nMo’ Guns - https://www.curseforge.com/minecraft/mc-mods/moguns\nMore Player Models - http://www.kodevelopment.nl/minecraft/moreplayermodels/\nMr Crayfish’s Gun Mod - https://mrcrayfish.com/\nOlympic God’s Attributes - https://www.curseforge.com/minecraft/mc-mods/olympic-gods-attribues\nObfuscate - https://mrcrayfish.com/mods?id=obfuscate\nPehkui - https://www.curseforge.com/minecraft/mc-mods/pehkui/\nStructure Gel API  - https://moddinglegacy.com/\nSupplementaries - https://www.curseforge.com/minecraft/mc-mods/supplementaries\nThe Mighty Architect - https://www.curseforge.com/minecraft/mc-mods/the-mighty-architect\nThe Warp Mod - https://www.curseforge.com/minecraft/mc-mods/the-warp-mod\nXK’s Decorations - https://www.curseforge.com/minecraft/mc-mods/xks-decoration\n\n*This video is Sponsored by Honkai Impact*",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/IM17Ex8Tgaw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/IM17Ex8Tgaw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/IM17Ex8Tgaw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/IM17Ex8Tgaw/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/IM17Ex8Tgaw/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Bronzo",
      categoryId: "20",
      liveBroadcastContent: "none",
      localized: {
        title: "I Survived 100 DAYS as THANOS in HARDCORE Minecraft!",
        description:
          "► Download Honkai Impact: https://bit.ly/3GGLFCO \nDownload the game NOW to redeem the gift code [TRUTH63] and get 30 Crystals, 2,888 Asterite, and a Herrscher trial card for free! There will be more value bundles for new players!\n\n► SHOP MY MERCH HERE! https://merchcraft.shop/collections/bronzo-collection\n\nFollow Bronzo as he spends 100 Days as Thanos, the Mad Titan! Learn the true story of the Avengers Infinity Saga from Thanos's perspective. See how he defeated the Nova Corps, Guardians of the Galaxy, and the Avengers! Can anything stop Thanos's mad quest?\n\nMods Used in this Video:\nAstemir’s Forestcraft - https://www.curseforge.com/minecraft/mc-mods/astemirs-forest-craft\nEpic Fight Mod - https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod\nGrappling Hook Mod - https://www.curseforge.com/minecraft/mc-mods/grappling-hook-mod\nMutant Beasts - https://www.curseforge.com/minecraft/mc-mods/mutant-beasts\nMutant More - https://www.curseforge.com/minecraft/mc-mods/mutant-more\nMutant Villager - https://www.curseforge.com/minecraft/mc-mods/mutant-more\nSpider Man Mod - https://www.curseforge.com/minecraft/mc-mods/the-spiderman-mod\nSuper Suit Mod - https://www.curseforge.com/minecraft/mc-mods/super-suit-mod\n\nArtifacts - https://www.curseforge.com/minecraft/mc-mods/artifacts\nCMD Cam - https://www.curseforge.com/minecraft/mc-mods/cmdcam\nCitadel - https://github.com/AlexModGuy/Citadel\nCollective - https://www.curseforge.com/minecraft/mc-mods/collective\nConfigure - https://mrcrayfish.com/mods?id=configured\nCretiveCore - https://mrcrayfish.com/mods?id=configured\nCurios API - https://www.curseforge.com/minecraft/mc-mods/curios\nCustom NPCs - http://www.kodevelopment.nl/minecraft/customnpcs\nCyclic - https://www.curseforge.com/minecraft/mc-mods/cyclic\nEffortless Building - https://www.curseforge.com/minecraft/mc-mods/effortless-building\nGeckolib - https://geckolib.com/\nJust Enough Items - https://www.curseforge.com/minecraft/mc-mods/jei\nL Ender’s Cataclysm - https://www.curseforge.com/minecraft/mc-mods/l_ender-s-cataclysm\nMahou Tsukai - https://www.curseforge.com/minecraft/mc-mods/mahou-tsukai\nMo’ Guns - https://www.curseforge.com/minecraft/mc-mods/moguns\nMore Player Models - http://www.kodevelopment.nl/minecraft/moreplayermodels/\nMr Crayfish’s Gun Mod - https://mrcrayfish.com/\nOlympic God’s Attributes - https://www.curseforge.com/minecraft/mc-mods/olympic-gods-attribues\nObfuscate - https://mrcrayfish.com/mods?id=obfuscate\nPehkui - https://www.curseforge.com/minecraft/mc-mods/pehkui/\nStructure Gel API  - https://moddinglegacy.com/\nSupplementaries - https://www.curseforge.com/minecraft/mc-mods/supplementaries\nThe Mighty Architect - https://www.curseforge.com/minecraft/mc-mods/the-mighty-architect\nThe Warp Mod - https://www.curseforge.com/minecraft/mc-mods/the-warp-mod\nXK’s Decorations - https://www.curseforge.com/minecraft/mc-mods/xks-decoration\n\n*This video is Sponsored by Honkai Impact*",
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "ZkCnnXLpOYJWWAeCsqdgpa-Sod4",
    id: "nnsrXnXjcYQ",
    snippet: {
      publishedAt: "2023-01-20T05:00:23Z",
      channelId: "UCWICXNlSLc7eeNazpzUZcLg",
      title: "NLE Choppa - 23 (Official Music Video)",
      description:
        'Stream "23" now: https://nlechoppa.lnk.to/2023\n\nWEBSITE: HERBS \nhttps://www.nlehealthandwellness.com 💜\nWEBSITE: MERCH\nhttps://www.nlehealthandwellness.com/new-collection\n\nFollow NLE Choppa:\nTxt: (901)245-5603\nWeb: https://nlechoppa.com\nEmail:  https://nlechoppa.com/mailing-list\nInstagram: https://instagram.com/nlechoppamusic\nFacebook: https://facebook.com/nlechoppamusic\nTwitter: https://twitter.com/nlechoppa1\nSnapchat: https://snapchat.com/add/nlechoppamusic\nTikTok: https://www.tiktok.com/@nlechoppamusic\nTriller: https://triller.co/@nlechoppa\n\n#NLEChoppa #23 #hiphop',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/nnsrXnXjcYQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/nnsrXnXjcYQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/nnsrXnXjcYQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/nnsrXnXjcYQ/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/nnsrXnXjcYQ/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "NLE CHOPPA",
      tags: [
        "choppa",
        "nle choppa",
        "nle chopper",
        "23",
        "2023",
        "hip hop",
        "memphis rap",
        "memphis hip hop",
        "top shotta",
        "walk em down",
        "clover",
        "seven",
        "Choppa new hair",
        "NLE Choppa hair cut",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title: "NLE Choppa - 23 (Official Music Video)",
        description:
          'Stream "23" now: https://nlechoppa.lnk.to/2023\n\nWEBSITE: HERBS \nhttps://www.nlehealthandwellness.com 💜\nWEBSITE: MERCH\nhttps://www.nlehealthandwellness.com/new-collection\n\nFollow NLE Choppa:\nTxt: (901)245-5603\nWeb: https://nlechoppa.com\nEmail:  https://nlechoppa.com/mailing-list\nInstagram: https://instagram.com/nlechoppamusic\nFacebook: https://facebook.com/nlechoppamusic\nTwitter: https://twitter.com/nlechoppa1\nSnapchat: https://snapchat.com/add/nlechoppamusic\nTikTok: https://www.tiktok.com/@nlechoppamusic\nTriller: https://triller.co/@nlechoppa\n\n#NLEChoppa #23 #hiphop',
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "cryULziwzi061WCDF-Zg3PMDdCE",
    id: "9o3NvJJzRUw",
    snippet: {
      publishedAt: "2023-01-19T22:53:51Z",
      channelId: "UCqZQlzSHbVJrwrn5XvzrzcA",
      title: "Manchester City v. Tottenham | PREMIER LEAGUE HIGHLIGHTS | 1/19/2023 | NBC Sports",
      description:
        "Tottenham stunned Manchester City with a quickfire double minutes before halftime, but the champions netted three goals of their own in the span of 12 minutes to turn the tables for a comeback win. #NBCSports #PremierLeague #ManchesterCity #Tottenham \n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1\n» Watch Live Sports on NBCSports.com: http://www.nbcsports.com/live\n» Get more Premier League news on NBC Sports: https://nbcsports.com/soccer/premier-league\n\nWant more Premier League? Check out Peacock Premium: https://peacocktv.com/premierleague\n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France, French Open, IndyCar and many more.\n\nSubscribe to our channel for the latest sporting news and highlights!\n\nThe Premier League across NBC Sports Group launched in 2013 with their biggest and broadest programming commitment to-date in the United States. With live multi-platform coverage of all 380 games, analysis from best-in-class talent and extensive surrounding coverage all week long, NBC Sports Group has become the ultimate destination for new and existing Premier League fans.\n\nThe Premier League maintains strong and consistent reach across NBC, USA Network, CNBC, and NBC Sports Group’s live streaming products, led by the biggest stars and most prestigious teams in the world.\n\nVisit NBC Sports: https://www.nbcsports.com\nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports\nFollow NBC Sports on Twitter: https://twitter.com/nbcsports\nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/\n\nhttps://www.nbcsports.com/nfl/sunday-night-football\nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league\n\nManchester City v. Tottenham | PREMIER LEAGUE HIGHLIGHTS | 1/19/2023 | NBC Sports\nhttps://www.youtube.com/nbcsports",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9o3NvJJzRUw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/9o3NvJJzRUw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/9o3NvJJzRUw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/9o3NvJJzRUw/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/9o3NvJJzRUw/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "NBC Sports",
      tags: [
        "NBC Sports",
        "NBC",
        "NBCSN",
        "Premier",
        "League",
        "Premier League",
        "premier league highlights",
        "premier league highlights today",
        "premier league live",
        "premier league goals",
        "manchester city",
        "man city",
        "english premier league live",
        "english premier league",
        "english premier league today",
        "manchester city vs tottenham",
        "epl highlights",
        "tottenham hotspur",
        "tottenham highlights",
        "manchester city highlights",
        "man city vs tottenham highlights",
        "man city goals",
        "man city highlights",
        "premier league 2022/23",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title: "Manchester City v. Tottenham | PREMIER LEAGUE HIGHLIGHTS | 1/19/2023 | NBC Sports",
        description:
          "Tottenham stunned Manchester City with a quickfire double minutes before halftime, but the champions netted three goals of their own in the span of 12 minutes to turn the tables for a comeback win. #NBCSports #PremierLeague #ManchesterCity #Tottenham \n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1\n» Watch Live Sports on NBCSports.com: http://www.nbcsports.com/live\n» Get more Premier League news on NBC Sports: https://nbcsports.com/soccer/premier-league\n\nWant more Premier League? Check out Peacock Premium: https://peacocktv.com/premierleague\n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France, French Open, IndyCar and many more.\n\nSubscribe to our channel for the latest sporting news and highlights!\n\nThe Premier League across NBC Sports Group launched in 2013 with their biggest and broadest programming commitment to-date in the United States. With live multi-platform coverage of all 380 games, analysis from best-in-class talent and extensive surrounding coverage all week long, NBC Sports Group has become the ultimate destination for new and existing Premier League fans.\n\nThe Premier League maintains strong and consistent reach across NBC, USA Network, CNBC, and NBC Sports Group’s live streaming products, led by the biggest stars and most prestigious teams in the world.\n\nVisit NBC Sports: https://www.nbcsports.com\nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports\nFollow NBC Sports on Twitter: https://twitter.com/nbcsports\nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/\n\nhttps://www.nbcsports.com/nfl/sunday-night-football\nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league\n\nManchester City v. Tottenham | PREMIER LEAGUE HIGHLIGHTS | 1/19/2023 | NBC Sports\nhttps://www.youtube.com/nbcsports",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "WXlM70CuKMVPhOSXUAkQhzISR1I",
    id: "NtrPAiZr6y8",
    snippet: {
      publishedAt: "2023-01-20T17:00:11Z",
      channelId: "UCyQ-DUV6lZgoL8wiPusYiUg",
      title: "KEHLANI | CHICKEN SHOP DATE",
      description:
        "Amelia meets Kehlani for a date in a Chicken Shop \n\nCreated and Written by Amelia Dimoldenberg\nDirector: Amelia Dimoldenberg\nExecutive Producer: Liv West and Amelia Dimoldenberg\n\nCo-Writer: Ania Magliano\n\nCam A: Jonathan Moore\nCam B: Tayo Yusuff\n\nSound Op: Paul O’Hare\nEditor: Rob Mcguire\n\nConform: Lewis Ashley\nColourist: Fraser Twitchett @ Okay Studio\nSound Design/Mix: Mark Duckett @ Bounce\n\nAnimation by Naomi Anderson-Subryan\nSocial Media: Jade Whiteley and Ashleigh Kybert",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NtrPAiZr6y8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/NtrPAiZr6y8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/NtrPAiZr6y8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/NtrPAiZr6y8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/NtrPAiZr6y8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Amelia Dimoldenberg",
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "KEHLANI | CHICKEN SHOP DATE",
        description:
          "Amelia meets Kehlani for a date in a Chicken Shop \n\nCreated and Written by Amelia Dimoldenberg\nDirector: Amelia Dimoldenberg\nExecutive Producer: Liv West and Amelia Dimoldenberg\n\nCo-Writer: Ania Magliano\n\nCam A: Jonathan Moore\nCam B: Tayo Yusuff\n\nSound Op: Paul O’Hare\nEditor: Rob Mcguire\n\nConform: Lewis Ashley\nColourist: Fraser Twitchett @ Okay Studio\nSound Design/Mix: Mark Duckett @ Bounce\n\nAnimation by Naomi Anderson-Subryan\nSocial Media: Jade Whiteley and Ashleigh Kybert",
      },
      defaultAudioLanguage: "en-GB",
    },
  },
  {
    kind: "youtube#video",
    etag: "5tN7SCsXe-VGCt-jU42mi1pJXVU",
    id: "ZDyDpdFZHBo",
    snippet: {
      publishedAt: "2023-01-19T23:00:19Z",
      channelId: "UCbulh9WdLtEXiooRcYK7SWw",
      title: "Metallica: Screaming Suicide (Official Music Video)",
      description:
        "Metallica's official music video for “Screaming Suicide,” from the album “72 Seasons” available April 14th, 2023.\n\n“‘Screaming Suicide’ addresses the taboo word of suicide. The intention is to communicate about the darkness we feel inside. It's ridiculous to think we should deny that we have these thoughts. At one point or another, I believe most people have thought about it. To face it is to speak the unspoken. If it's a human experience, we should be able to talk about it. You are not alone.”\n\n------\n\nIf you or someone you know is struggling with thoughts of suicide, please reach out for help.\n\nUnited States\n988 Suicide & Crisis Lifeline - https://988lifeline.org, 1-800-273-8255 or 988\nOne Tribe Foundation - https://1tribefoundation.org, 1-214-462-7229\n\nAustralia\nheadspace - https://headspace.org.au, 1800 650 890 \nLifeline - https://www.lifeline.org.au, 13 11 14\nKids Helpline - https://kidshelpline.com.au, 1800 55 1800\nBeyond Blue - https://www.beyondblue.org.au, 1300 22 4636\n \nDenmark\nLivslinien - https://www.livslinien.dk, 70 201 201\n \nGermany\nTelefonSeelsorge Deutschland - https://www.telefonseelsorge.de, 0800 111 0 111, 0800 111 0 222, or 116 123\n \nNew Zealand\nNew Zealand Depression Helpline - https://www.depression.org.nz, 0800 111 757 or text 4202\n \nNorway\nSidetmedord Hjelpetelefonen - https://www.sidetmedord.no, 116 123 and, for young people, 116 111 \n \nUnited Kingdom\nSamaritans - https://www.samaritans.org, 116 123\n\n------\n\nListen to “Screaming Suicide”: https://metallica.lnk.to/ScreamingSuicide\nPre-order. Pre-save. Pre-add “72 Seasons”: https://metallica.lnk.to/72Seasons \nSubscribe for more videos: https://tallica.lnk.to/subscribe\n\nDirected by Tim Saccenti\nFilmed in Los Angeles, CA, on November 7, 2022\n\nVideo Premiere Date: January 19, 2023\n\nLYRICS\n\nWelcome to this life\nBorn into the fight\nHere to claim your dream\nLook you in the eye\nPatch the broken sky\nCraving dopamine\nThen my voice appears\nTeaching you of fears\nAre you good enough?\nYou don’t recognize\nHead is full of lies\nYou should just give up\n \nListen well, better listen well\nListen well, better listen well\n \nDon’t ever speak my name\nRemember you’re to blame\nKeep me inside\nKeep me inside\nMy name is suicide\n \nCurse another day\nSpirit locked away\nPunish and deprive\nHate to be awake\nLiving a mistake\nMore dead than alive\nThen a voice appears\nWhisper in your ears\n“You are good enough”\nThrowing down a rope\nA lifeline of hope\nNever give you up\n \nListen well, better listen well\nListen well, better listen well\n \nDon’t ever speak my name\nRemember you’re to blame\nKeep me inside\nKeep me inside\nMy name is suicide\n\nTerrified in sleepless nights\nCaught in spotlight dead to rights\nIsolate and fight your mind\nTelling you you’re left behind\n\nMy lying voice inside\nKeeps drinking cyanide\nAnd no more can you run\nInto the sun\n\nTerrified, sleepless nights\nCaught in spotlight dead to rights\nIsolate and fight your mind\nTelling you you’re left behind\n\nAnd now you speak my name\nYou’ve given back the blame\nKeep me deep inside\nDon’t you keep me inside\nScreaming suicide\n\nNow that I’m exposed inside\nShined a light on cyanide\nI’m no longer needed here\nNow you've faced your biggest fear\n\nWritten by James Hetfield, Lars Ulrich & Robert Trujillo\n\nCREDITS\n\nDirector: Tim Saccenti\nProducer: Daniel Lachman\nExecutive Producer: Jennifer Heath\nProd Company: Radical Media\nCreative Direction: Setta Studios\nDP: Joshua Zucker-Pluda\nProduction Designer: Kurt Gefke\nGaffer: Drew Valenti\nKey Grip: Charles Lenz\nSPFX: Kevin Watson\nEditor: Matt Posey\nEditorial: PS260\nColorist: Tom Poole\nColor: Company 3\nCo3 Producer: Shannen Troup, Nick Krasnic\nDigital Artwork: Chris Dammeyer\nVFX: Mark Szumski\nVFX Company: Hey Beautiful Jerk  \nExecutive Producer: Gina Niespodziani\nVisuals Curator: Dina Chang\nSound Designer: Nicole Pettigrew\nPS260 Executive Producer: Raná Martin\n\nProduction Supervisor: Kelsie Drinkwater Buchanan\nAssistant Director: Michael Estrella\nSteadicam: Chris Loh\n1st AC: Ethan McDonald\n2nd AC: Alan Certeza\nDIT: James Petersmeyer\nBB Electric: Arin Whitlock\nElectric: Tom Peña\nElectric: Chris Waldorf\nElectric: Darrel Ditri\nLighting Console Programmer: Zane Blanchard\nBB Grip: Andy Wilson\nGrip: Otis Mannick\nGrip: Matt King\nGrip: Derick Holub\nProjectionist: Ryan Griffin/Projected Visions\nVTR/Playback: Robert Buckholz\nLeadman: Dylan Robie\nSet Dresser: Kenny Davis\nSet Dresser: Sean Buckley\nHair & Makeup: Lily Beren\nStylist: Keith Wager\n \nMedic: Matt PayneCCO: Chris Howard\nCovid Coord: Danielle Rivera\n2nd AD: Janet Marin\nProduction Coordinator: Adam Sun\nProduction Assistant: Joe BlanaProduction Assistant: Xavier MustiProduction Assistant: Alicia EchevarriaProduction Assistant: Oscar Amaya\nProduction Assistant: Jackson Linn\n\nFollow Metallica:\nWebsite & Store: http://www.metallica.com\nInstagram: http://www.instagram.com/metallica\nFacebook: http://www.facebook.com/metallica\nTikTok: http://www.tiktok.com/@metallica\n\n© 2023 Blackened Recordings\n\n#Metallica #ScreamingSuicide #72Seasons",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ZDyDpdFZHBo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ZDyDpdFZHBo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ZDyDpdFZHBo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/ZDyDpdFZHBo/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/ZDyDpdFZHBo/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Metallica",
      tags: ["metallica", "metallica tour", "metallica live", "metallica concert", "metallica in concert", "metallica song", "metallica city", "metallica country"],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title: "Metallica: Screaming Suicide (Official Music Video)",
        description:
          "Metallica's official music video for “Screaming Suicide,” from the album “72 Seasons” available April 14th, 2023.\n\n“‘Screaming Suicide’ addresses the taboo word of suicide. The intention is to communicate about the darkness we feel inside. It's ridiculous to think we should deny that we have these thoughts. At one point or another, I believe most people have thought about it. To face it is to speak the unspoken. If it's a human experience, we should be able to talk about it. You are not alone.”\n\n------\n\nIf you or someone you know is struggling with thoughts of suicide, please reach out for help.\n\nUnited States\n988 Suicide & Crisis Lifeline - https://988lifeline.org, 1-800-273-8255 or 988\nOne Tribe Foundation - https://1tribefoundation.org, 1-214-462-7229\n\nAustralia\nheadspace - https://headspace.org.au, 1800 650 890 \nLifeline - https://www.lifeline.org.au, 13 11 14\nKids Helpline - https://kidshelpline.com.au, 1800 55 1800\nBeyond Blue - https://www.beyondblue.org.au, 1300 22 4636\n \nDenmark\nLivslinien - https://www.livslinien.dk, 70 201 201\n \nGermany\nTelefonSeelsorge Deutschland - https://www.telefonseelsorge.de, 0800 111 0 111, 0800 111 0 222, or 116 123\n \nNew Zealand\nNew Zealand Depression Helpline - https://www.depression.org.nz, 0800 111 757 or text 4202\n \nNorway\nSidetmedord Hjelpetelefonen - https://www.sidetmedord.no, 116 123 and, for young people, 116 111 \n \nUnited Kingdom\nSamaritans - https://www.samaritans.org, 116 123\n\n------\n\nListen to “Screaming Suicide”: https://metallica.lnk.to/ScreamingSuicide\nPre-order. Pre-save. Pre-add “72 Seasons”: https://metallica.lnk.to/72Seasons \nSubscribe for more videos: https://tallica.lnk.to/subscribe\n\nDirected by Tim Saccenti\nFilmed in Los Angeles, CA, on November 7, 2022\n\nVideo Premiere Date: January 19, 2023\n\nLYRICS\n\nWelcome to this life\nBorn into the fight\nHere to claim your dream\nLook you in the eye\nPatch the broken sky\nCraving dopamine\nThen my voice appears\nTeaching you of fears\nAre you good enough?\nYou don’t recognize\nHead is full of lies\nYou should just give up\n \nListen well, better listen well\nListen well, better listen well\n \nDon’t ever speak my name\nRemember you’re to blame\nKeep me inside\nKeep me inside\nMy name is suicide\n \nCurse another day\nSpirit locked away\nPunish and deprive\nHate to be awake\nLiving a mistake\nMore dead than alive\nThen a voice appears\nWhisper in your ears\n“You are good enough”\nThrowing down a rope\nA lifeline of hope\nNever give you up\n \nListen well, better listen well\nListen well, better listen well\n \nDon’t ever speak my name\nRemember you’re to blame\nKeep me inside\nKeep me inside\nMy name is suicide\n\nTerrified in sleepless nights\nCaught in spotlight dead to rights\nIsolate and fight your mind\nTelling you you’re left behind\n\nMy lying voice inside\nKeeps drinking cyanide\nAnd no more can you run\nInto the sun\n\nTerrified, sleepless nights\nCaught in spotlight dead to rights\nIsolate and fight your mind\nTelling you you’re left behind\n\nAnd now you speak my name\nYou’ve given back the blame\nKeep me deep inside\nDon’t you keep me inside\nScreaming suicide\n\nNow that I’m exposed inside\nShined a light on cyanide\nI’m no longer needed here\nNow you've faced your biggest fear\n\nWritten by James Hetfield, Lars Ulrich & Robert Trujillo\n\nCREDITS\n\nDirector: Tim Saccenti\nProducer: Daniel Lachman\nExecutive Producer: Jennifer Heath\nProd Company: Radical Media\nCreative Direction: Setta Studios\nDP: Joshua Zucker-Pluda\nProduction Designer: Kurt Gefke\nGaffer: Drew Valenti\nKey Grip: Charles Lenz\nSPFX: Kevin Watson\nEditor: Matt Posey\nEditorial: PS260\nColorist: Tom Poole\nColor: Company 3\nCo3 Producer: Shannen Troup, Nick Krasnic\nDigital Artwork: Chris Dammeyer\nVFX: Mark Szumski\nVFX Company: Hey Beautiful Jerk  \nExecutive Producer: Gina Niespodziani\nVisuals Curator: Dina Chang\nSound Designer: Nicole Pettigrew\nPS260 Executive Producer: Raná Martin\n\nProduction Supervisor: Kelsie Drinkwater Buchanan\nAssistant Director: Michael Estrella\nSteadicam: Chris Loh\n1st AC: Ethan McDonald\n2nd AC: Alan Certeza\nDIT: James Petersmeyer\nBB Electric: Arin Whitlock\nElectric: Tom Peña\nElectric: Chris Waldorf\nElectric: Darrel Ditri\nLighting Console Programmer: Zane Blanchard\nBB Grip: Andy Wilson\nGrip: Otis Mannick\nGrip: Matt King\nGrip: Derick Holub\nProjectionist: Ryan Griffin/Projected Visions\nVTR/Playback: Robert Buckholz\nLeadman: Dylan Robie\nSet Dresser: Kenny Davis\nSet Dresser: Sean Buckley\nHair & Makeup: Lily Beren\nStylist: Keith Wager\n \nMedic: Matt PayneCCO: Chris Howard\nCovid Coord: Danielle Rivera\n2nd AD: Janet Marin\nProduction Coordinator: Adam Sun\nProduction Assistant: Joe BlanaProduction Assistant: Xavier MustiProduction Assistant: Alicia EchevarriaProduction Assistant: Oscar Amaya\nProduction Assistant: Jackson Linn\n\nFollow Metallica:\nWebsite & Store: http://www.metallica.com\nInstagram: http://www.instagram.com/metallica\nFacebook: http://www.facebook.com/metallica\nTikTok: http://www.tiktok.com/@metallica\n\n© 2023 Blackened Recordings\n\n#Metallica #ScreamingSuicide #72Seasons",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "HAv-MAi6w-_TjRBheN5zReSM5Rk",
    id: "h74AXqw4Opc",
    snippet: {
      publishedAt: "2023-01-19T14:00:00Z",
      channelId: "UCF9imwPMSGz4Vq1NiTWCC7g",
      title: "Scream VI | Official Trailer (2023 Movie)",
      description:
        "This is unlike any other Ghostface. Watch the NEW trailer for #ScreamVI - Only in theatres March 10, 2023.\n\nFollowing the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter. In Scream VI, Melissa Barrera (“Sam Carpenter”), Jasmin Savoy Brown (“Mindy Meeks-Martin”), Mason Gooding (“Chad Meeks-Martin”), Jenna Ortega (“Tara Carpenter”), Hayden Panettiere (“Kirby Reed”) and Courteney Cox (“Gale Weathers”) return to their roles in the franchise alongside Jack Champion, Henry Czerny, Liana Liberato, Dermot Mulroney, Devyn Nekoda, Tony Revolori, Josh Segarra, and Samara Weaving. \n \nTikTok: https://www.tiktok.com/@screammovies \nInstagram: https://www.instagram.com/screammovies/\nTwitter: https://twitter.com/ScreamMovies\nFacebook: https://www.facebook.com/ScreamMovies\n \nParamount Pictures Corporation (PPC), a major global producer and distributor of filmed entertainment, is a unit of Viacom (NASDAQ: VIAB, VIA), home to premier global media brands that create compelling television programs, motion pictures, short-form content, apps, games, consumer products, social media experiences, and other entertainment content for audiences in more than 180 countries.\n \nConnect with Paramount Pictures Online:\n\nOfficial Site: http://www.paramount.com/\nTikTok: https://www.tiktok.com/@paramountpics\nInstagram: http://www.instagram.com/ParamountPics\nTwitter: https://twitter.com/paramountpics\nFacebook: https://www.facebook.com/Paramount",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/h74AXqw4Opc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/h74AXqw4Opc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/h74AXqw4Opc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/h74AXqw4Opc/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/h74AXqw4Opc/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Paramount Pictures",
      categoryId: "1",
      liveBroadcastContent: "none",
      localized: {
        title: "Scream VI | Official Trailer (2023 Movie)",
        description:
          "This is unlike any other Ghostface. Watch the NEW trailer for #ScreamVI - Only in theatres March 10, 2023.\n\nFollowing the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter. In Scream VI, Melissa Barrera (“Sam Carpenter”), Jasmin Savoy Brown (“Mindy Meeks-Martin”), Mason Gooding (“Chad Meeks-Martin”), Jenna Ortega (“Tara Carpenter”), Hayden Panettiere (“Kirby Reed”) and Courteney Cox (“Gale Weathers”) return to their roles in the franchise alongside Jack Champion, Henry Czerny, Liana Liberato, Dermot Mulroney, Devyn Nekoda, Tony Revolori, Josh Segarra, and Samara Weaving. \n \nTikTok: https://www.tiktok.com/@screammovies \nInstagram: https://www.instagram.com/screammovies/\nTwitter: https://twitter.com/ScreamMovies\nFacebook: https://www.facebook.com/ScreamMovies\n \nParamount Pictures Corporation (PPC), a major global producer and distributor of filmed entertainment, is a unit of Viacom (NASDAQ: VIAB, VIA), home to premier global media brands that create compelling television programs, motion pictures, short-form content, apps, games, consumer products, social media experiences, and other entertainment content for audiences in more than 180 countries.\n \nConnect with Paramount Pictures Online:\n\nOfficial Site: http://www.paramount.com/\nTikTok: https://www.tiktok.com/@paramountpics\nInstagram: http://www.instagram.com/ParamountPics\nTwitter: https://twitter.com/paramountpics\nFacebook: https://www.facebook.com/Paramount",
      },
      defaultAudioLanguage: "en-US",
    },
  },
  {
    kind: "youtube#video",
    etag: "PoM9uzNTP0et74WLlaSl5bfOqko",
    id: "gI-WEtw1vB4",
    snippet: {
      publishedAt: "2023-01-19T20:00:10Z",
      channelId: "UCaxOQZrF5llUMp-JjesUz1A",
      title: "Lil Durk & Future - Mad Max (Official Video)",
      description:
        'Listen to the album “Lil Durk Presents: Loyal Bros 2". Out Now!\nStream: https://music.empi.re/loyalbros2\n\n#OnlyTheFamily #LilDurk #Future\n\nShop: https://otfgear.com/\n\nSubscribe: http://bit.ly/Subscribe-to-Durk',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/gI-WEtw1vB4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/gI-WEtw1vB4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/gI-WEtw1vB4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/gI-WEtw1vB4/sddefault.jpg",
          width: 640,
          height: 480,
        },
      },
      channelTitle: "Lil Durk",
      tags: [
        "lil durk",
        "lil durk music",
        "lil durk music video",
        "just cause yall waited 2",
        "lil durk 2020",
        "just cause y'all waited 2",
        "durkio",
        "smurkio",
        "lil durk official",
        "drill",
        "drill music",
        "chicago hip hop",
        "only the family",
        "OTF",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title: "Lil Durk & Future - Mad Max (Official Video)",
        description:
          'Listen to the album “Lil Durk Presents: Loyal Bros 2". Out Now!\nStream: https://music.empi.re/loyalbros2\n\n#OnlyTheFamily #LilDurk #Future\n\nShop: https://otfgear.com/\n\nSubscribe: http://bit.ly/Subscribe-to-Durk',
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "cHnMxdspQLZWA56mUzuRB7g61RU",
    id: "U2_aX5lffHs",
    snippet: {
      publishedAt: "2023-01-20T17:05:00Z",
      channelId: "UCgluFk_59sS-hz8WdGuBX2g",
      title: "I Caught 355 Pokemon Before Beating a Single Gym",
      description:
        "Pokemon Scarlet and Violet are known for being open world games. If you want to go somewhere, you can. Because you're able to choose what you do with the story, I challenged myself to see how many Pokemon you could actually catch before having to obtain a badge in the game... and the result was pretty insane. This video took a lot of time and effort to put together, so I'd really appreciate it if you shared this with a friend. If you have any suggestions for the next video, leave it in the comments below! Have a great day :)\n_________________________________________________________________\n\nFollow me on Twitter!\nhttps://twitter.com/JohnstoneYT\n\nFollow me on Twitch!\nhttps://www.twitch.tv/johnstone\n\nFollow my Twitch Highlights Channel!\nhttp://youtube.com/c/johnstonelive\n\nEditing Help From DeadArizen: https://www.youtube.com/@DeadArizen\n\n0:00 - Intro\n0:50 - No Badges\n25:33 - 1 Badge\n28:06 - Badges 2-4\n30:20 - 18 Badges + Post Game\n31:29 - Post Game\n32:27 - Review\n\n#johnstone #pokemonscarletandviolet #professoroak",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/U2_aX5lffHs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/U2_aX5lffHs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/U2_aX5lffHs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/U2_aX5lffHs/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/U2_aX5lffHs/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Johnstone",
      tags: [
        "pokemon",
        "johnstone",
        "johnstone pokemon",
        "johnstone live",
        "johnstone twitch",
        "Pokemon Scarlet and Violet",
        "Pokemon Scarlet Professor Oak",
        "Pokemon Catch Em All",
        "I Caught Every Pokemon in Scarlet and Violet",
        "Catching Every Pokemon with no badges",
      ],
      categoryId: "20",
      liveBroadcastContent: "none",
      localized: {
        title: "I Caught 355 Pokemon Before Beating a Single Gym",
        description:
          "Pokemon Scarlet and Violet are known for being open world games. If you want to go somewhere, you can. Because you're able to choose what you do with the story, I challenged myself to see how many Pokemon you could actually catch before having to obtain a badge in the game... and the result was pretty insane. This video took a lot of time and effort to put together, so I'd really appreciate it if you shared this with a friend. If you have any suggestions for the next video, leave it in the comments below! Have a great day :)\n_________________________________________________________________\n\nFollow me on Twitter!\nhttps://twitter.com/JohnstoneYT\n\nFollow me on Twitch!\nhttps://www.twitch.tv/johnstone\n\nFollow my Twitch Highlights Channel!\nhttp://youtube.com/c/johnstonelive\n\nEditing Help From DeadArizen: https://www.youtube.com/@DeadArizen\n\n0:00 - Intro\n0:50 - No Badges\n25:33 - 1 Badge\n28:06 - Badges 2-4\n30:20 - 18 Badges + Post Game\n31:29 - Post Game\n32:27 - Review\n\n#johnstone #pokemonscarletandviolet #professoroak",
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "rY4M6hf2FBTTmzWCr3dnWMiC_XU",
    id: "kblyMKRnLQU",
    snippet: {
      publishedAt: "2023-01-20T00:47:57Z",
      channelId: "UCEB4a5o_6KfjxHwNMnmj54Q",
      title: "Lil Tjay - Clutchin My Strap (Official Video)",
      description:
        'Lil Tjay "Clutchin My Strap" Out Now: https://on.soundcloud.com/XYRyC  \n\nOfficial video for Lil Tjay "Clutchin My Strap"\n\nFollow Lil Tjay\nFacebook - https://www.facebook.com/LilTjay/\nInstagram - https://www.instagram.com/liltjay/\nTwitter - https://twitter.com/liltjay\nTikTok - https://www.tiktok.com/@liltjay\n \nhttps://www.liltjaymusic.com/\n \n#LilTjay #ClutchinMyStrap',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/kblyMKRnLQU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/kblyMKRnLQU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/kblyMKRnLQU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/kblyMKRnLQU/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/kblyMKRnLQU/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Lil Tjay",
      tags: ["liltjay", "lil tjay", "tjay", "clutchin my strap", "clutching my strap", "lil tjay new song", "lil tjay new video"],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title: "Lil Tjay - Clutchin My Strap (Official Video)",
        description:
          'Lil Tjay "Clutchin My Strap" Out Now: https://on.soundcloud.com/XYRyC  \n\nOfficial video for Lil Tjay "Clutchin My Strap"\n\nFollow Lil Tjay\nFacebook - https://www.facebook.com/LilTjay/\nInstagram - https://www.instagram.com/liltjay/\nTwitter - https://twitter.com/liltjay\nTikTok - https://www.tiktok.com/@liltjay\n \nhttps://www.liltjaymusic.com/\n \n#LilTjay #ClutchinMyStrap',
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "45UsGH7CsXukONE3Vtv7AvF-u2U",
    id: "ZkTFPVHA96U",
    snippet: {
      publishedAt: "2023-01-20T01:33:30Z",
      channelId: "UCbiNkxVMY5LVpA-_xLoIE0A",
      title: "BOUGHT MY PARENTS CARS & HOUSES!!",
      description:
        "#JESUSORTIZPAZ​​​​​​​ #JOP\n\nInstagram:  https://www.instagram.com/jesusortizp...​\n\nTwitter: https://twitter.com/jesusortizpazfr?l...​\n\nTik Tok: https://www.tiktok.com/@jesusortizpaz...​",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ZkTFPVHA96U/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ZkTFPVHA96U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ZkTFPVHA96U/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/ZkTFPVHA96U/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/ZkTFPVHA96U/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Jesus Ortiz",
      tags: [
        "jop",
        "jesusortizpaz",
        "mexicocity",
        "weoutside",
        "fuerzaregida",
        "sigochambeando",
        "eldineroloscambio",
        "radicamosensouthcentral",
        "mexico",
        "newjopmusic",
        "jopweoutside",
        "ranchohumilde",
        "streetmob",
        "latinos",
        "losangeles",
        "natanaelcano",
        "badbunny",
        "touring",
        "wereoutside",
        "fazerug",
        "faze",
        "music",
        "partryingwithjop",
        "cars",
        "houses",
        "top giving parents cars and houses",
        "jop surprising parents",
        "mexicodf",
        "San Bernardino",
        "mercedes",
        "corvette",
        "gifts",
        "Jayleen ojeda",
        "mr beast",
        "pa que hablen",
        "sigan hablando",
        "bebe dame",
        "mi terre cln",
        "mi vecindario",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "BOUGHT MY PARENTS CARS & HOUSES!!",
        description:
          "#JESUSORTIZPAZ​​​​​​​ #JOP\n\nInstagram:  https://www.instagram.com/jesusortizp...​\n\nTwitter: https://twitter.com/jesusortizpazfr?l...​\n\nTik Tok: https://www.tiktok.com/@jesusortizpaz...​",
      },
      defaultAudioLanguage: "en",
    },
  },
  {
    kind: "youtube#video",
    etag: "XFQWxwaYEMKGPNCgJnvOXUzlQss",
    id: "vYOQEvWVwbo",
    snippet: {
      publishedAt: "2023-01-21T00:00:24Z",
      channelId: "UCuxlXCfVyV-i5YLL30jkomw",
      title: "I Ripped Apart My Garage…And Almost Ruined It",
      description:
        "Go to https://buyraycon.com/colethecornstar to get 15% off your Raycon purchase!\n\nI almost cut my toes off and I started building my new shop. Today was a good day.\n\n►  Cornstar Shirts & Hats: https://farmfocused.com/cole-the-corn-star/\n\n► 15% off My Sunglasses: https://pitviper.biz/corncorn\n\n► Instagram: https://www.instagram.com/colethecornstar/\n\n► Disclosure: I receive a commission on items ordered through the links. Thank you for helping support the channel.\n\n► Business inquiries only: cornhubcole@gmail.com\n\n► Video Edited By: Cole",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vYOQEvWVwbo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vYOQEvWVwbo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vYOQEvWVwbo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/vYOQEvWVwbo/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/vYOQEvWVwbo/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Cole The Cornstar",
      tags: [
        "farming",
        "agriculture",
        "quads",
        "tractors",
        "farmers",
        "country boy",
        "heavy equipment",
        "mechanic",
        "renovation",
        "restoration",
        "construction",
        "engineers",
        "fabrication",
        "home projects",
        "family farm",
        "dogs",
        "Massy Ferguson",
        "corn",
        "John Deere",
        "case ih",
        "abandoned property",
        "farming simulator",
        "fs22",
        "food",
        "home improvement",
        "tools",
        "entrepreneurs",
        "transformation",
        "hoarder",
        "satisfying",
        "home remodel",
        "abandoned house",
        "junkyard",
        "organized",
        "farm videos for kids",
        "kid videos",
        "hoarders",
        "hoarding",
        "inspirational videos",
        "destroy",
        "Project",
      ],
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title: "I Ripped Apart My Garage…And Almost Ruined It",
        description:
          "Go to https://buyraycon.com/colethecornstar to get 15% off your Raycon purchase!\n\nI almost cut my toes off and I started building my new shop. Today was a good day.\n\n►  Cornstar Shirts & Hats: https://farmfocused.com/cole-the-corn-star/\n\n► 15% off My Sunglasses: https://pitviper.biz/corncorn\n\n► Instagram: https://www.instagram.com/colethecornstar/\n\n► Disclosure: I receive a commission on items ordered through the links. Thank you for helping support the channel.\n\n► Business inquiries only: cornhubcole@gmail.com\n\n► Video Edited By: Cole",
      },
      defaultAudioLanguage: "en-US",
    },
  },
  {
    kind: "youtube#video",
    etag: "jj3wtpPG_xdTrV4EpTN5BOUYKwg",
    id: "_f0-kIwBsqU",
    snippet: {
      publishedAt: "2023-01-21T02:10:36Z",
      channelId: "UCgKpcxVyF0qXU1h_Irzd7XA",
      title: "Bray Wyatt returns to the Firefly Funhouse and continues mind games with LA Knight | WWE on FOX",
      description:
        "The Firefly Funhouse is back on Friday Night SmackDown as Bray Wyatt warns LA Knight that he has “opened the door” and will be forced to deal with whatever comes out of it.\n\n#WWEonFOX #FridayNightSmackDown #BrayWyatt \n\nSUBSCRIBE for more from WWE ON FOX: https://foxs.pt/SubscribeWWEONFOX\nThe all-new FOX Sports App, built for the modern sports fan: https://tinyurl.com/y4uouolb\n\n►FOX Sports YouTube channel: http://foxs.pt/SubscribeFOXSPORTS\n►PBC ON FOX’s YouTube Channel: https://foxs.pt/SubscribePBCONFOX\n►CFB ON FOX YouTube channel: https://foxs.pt/SubscribeCFBonFOX\n►FOX Soccer’s YouTube channel: https://foxs.pt/SubscribeFOXSOCCER\n►NASCAR ON FOX YouTube channel: https://foxs.pt/SubscribeNASCARonFOX\n\nSee more from WWE ON FOX: https://foxs.pt/WWEONFOXFoxSports\nLike WWE ON FOX on Facebook: https://foxs.pt/WWEONFOXFacebook\nFollow WWE ON FOX on Twitter: https://foxs.pt/WWEONFOXTwitter\nFollow WWE ON FOX on Instagram: https://foxs.pt/WWEONFOXInstagram\n\nAbout WWE ON FOX:\nYour official home for all things WWE on FOX, from Friday Night SmackDown to NXT and everything in between! WWE highlights, WWE Backstage segments, original stories with your favorite Superstars, and much, much more — find it all right here on WWE on FOX!\n\nBray Wyatt returns to the Firefly Funhouse and continues mind games with LA Knight | WWE on FOX\nhttps://youtu.be/_f0-kIwBsqU\n\nWWE ON FOX\nhttps://www.youtube.com/c/WWEonFOX",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_f0-kIwBsqU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_f0-kIwBsqU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_f0-kIwBsqU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/_f0-kIwBsqU/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/_f0-kIwBsqU/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "WWE ON FOX",
      tags: [
        "wwe",
        "wwe on fox",
        "wrestling",
        "smackdown",
        "smackdown highlights",
        "friday night smackdown",
        "wwe backstage",
        "monday night raw",
        "monday night raw highlights",
        "fox sports",
        "fox",
        "fs1",
        "fox sports 1",
        "sports news",
        "sports fox",
        "fox sports highlights",
        "highlights",
        "Bray Wyatt",
        "Firefly Funhouse",
        "LA Knight",
        "Rumble",
        "SmackDown Match",
        "Royal Rumble",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title: "Bray Wyatt returns to the Firefly Funhouse and continues mind games with LA Knight | WWE on FOX",
        description:
          "The Firefly Funhouse is back on Friday Night SmackDown as Bray Wyatt warns LA Knight that he has “opened the door” and will be forced to deal with whatever comes out of it.\n\n#WWEonFOX #FridayNightSmackDown #BrayWyatt \n\nSUBSCRIBE for more from WWE ON FOX: https://foxs.pt/SubscribeWWEONFOX\nThe all-new FOX Sports App, built for the modern sports fan: https://tinyurl.com/y4uouolb\n\n►FOX Sports YouTube channel: http://foxs.pt/SubscribeFOXSPORTS\n►PBC ON FOX’s YouTube Channel: https://foxs.pt/SubscribePBCONFOX\n►CFB ON FOX YouTube channel: https://foxs.pt/SubscribeCFBonFOX\n►FOX Soccer’s YouTube channel: https://foxs.pt/SubscribeFOXSOCCER\n►NASCAR ON FOX YouTube channel: https://foxs.pt/SubscribeNASCARonFOX\n\nSee more from WWE ON FOX: https://foxs.pt/WWEONFOXFoxSports\nLike WWE ON FOX on Facebook: https://foxs.pt/WWEONFOXFacebook\nFollow WWE ON FOX on Twitter: https://foxs.pt/WWEONFOXTwitter\nFollow WWE ON FOX on Instagram: https://foxs.pt/WWEONFOXInstagram\n\nAbout WWE ON FOX:\nYour official home for all things WWE on FOX, from Friday Night SmackDown to NXT and everything in between! WWE highlights, WWE Backstage segments, original stories with your favorite Superstars, and much, much more — find it all right here on WWE on FOX!\n\nBray Wyatt returns to the Firefly Funhouse and continues mind games with LA Knight | WWE on FOX\nhttps://youtu.be/_f0-kIwBsqU\n\nWWE ON FOX\nhttps://www.youtube.com/c/WWEonFOX",
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "A6TjNBSzrUy5N4DofoZFWUce04k",
    id: "1IcyXFNmVwY",
    snippet: {
      publishedAt: "2023-01-19T18:00:00Z",
      channelId: "UCeGGpOehPGG7vQMUVc7tG8Q",
      title: "JINKIES! Velma Is OBNOXIOUSLY BAD...",
      description:
        "Check out http://rocketmoney.com/saberspark or scan the QR code on the screen to start managing your personal finances today. Thank you to Rocket Money for sponsoring today's video! #rocketmoney #personalfinance\n\n🔥Saber's Social Media🔥\n\n►Watch More of Saber's Reviews Here: https://tinyurl.com/y5e3ya5j\n►Follow Saber on Twitter: https://twitter.com/Saberspark\n►Follow Saber on Twitch - https://www.twitch.tv/saberspark_\n►Support Saber on Patreon: https://www.patreon.com/saberspark\n►Join and become a YouTube Member for exclusive perks: https://tinyurl.com/rbc4e9h\n\n✅Video Credits✅\n\n►Video Script by Saberspark \n►Additional Script and Research Assistance by Rishi\nhttps://twitter.com/rishicoyote\n►Video Edits and Thumbnail by Aficionados Chris\nhttps://www.youtube.com/@AficionadosChris\n►Audio Edits by dBPony\nhttps://www.youtube.com/user/dBPonyMusic\n►Intro Music/Outro Music by Hirosashii\nhttps://www.youtube.com/user/Hirosashii\n►Additional Avatar Pics by Flutter Spartan \nhttps://twitter.com/FlutterSpartan\n►Avatar Pics by Acid Neko\nhttps://twitter.com/xXacidnekoXx\n►Music by Home\nhttps://soundcloud.com/home-2001",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/1IcyXFNmVwY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/1IcyXFNmVwY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/1IcyXFNmVwY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/1IcyXFNmVwY/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/1IcyXFNmVwY/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Saberspark",
      tags: ["saberspark", "saber", "animation", "velma", "hbo max", "scooby doo", "velma hbo max", "mindy kaling", "velma series", "velma show", "review", "velma review"],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "JINKIES! Velma Is OBNOXIOUSLY BAD...",
        description:
          "Check out http://rocketmoney.com/saberspark or scan the QR code on the screen to start managing your personal finances today. Thank you to Rocket Money for sponsoring today's video! #rocketmoney #personalfinance\n\n🔥Saber's Social Media🔥\n\n►Watch More of Saber's Reviews Here: https://tinyurl.com/y5e3ya5j\n►Follow Saber on Twitter: https://twitter.com/Saberspark\n►Follow Saber on Twitch - https://www.twitch.tv/saberspark_\n►Support Saber on Patreon: https://www.patreon.com/saberspark\n►Join and become a YouTube Member for exclusive perks: https://tinyurl.com/rbc4e9h\n\n✅Video Credits✅\n\n►Video Script by Saberspark \n►Additional Script and Research Assistance by Rishi\nhttps://twitter.com/rishicoyote\n►Video Edits and Thumbnail by Aficionados Chris\nhttps://www.youtube.com/@AficionadosChris\n►Audio Edits by dBPony\nhttps://www.youtube.com/user/dBPonyMusic\n►Intro Music/Outro Music by Hirosashii\nhttps://www.youtube.com/user/Hirosashii\n►Additional Avatar Pics by Flutter Spartan \nhttps://twitter.com/FlutterSpartan\n►Avatar Pics by Acid Neko\nhttps://twitter.com/xXacidnekoXx\n►Music by Home\nhttps://soundcloud.com/home-2001",
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "D7uW39gLf6A2VP9D-_o1HJzt_Tk",
    id: "yRo5unHurVs",
    snippet: {
      publishedAt: "2023-01-20T05:00:21Z",
      channelId: "UCq74IOsZ_e2IWxSyhpQbf5Q",
      title: "HARDY - red (feat. Morgan Wallen) (Lyric Video)",
      description:
        "Listen to the new album here: https://HARDY.lnk.to/themockingbirdandTHECROW\n\nTo see all upcoming tour dates, visit: http://hardyofficial.com/\nInstagram - https://www.instagram.com/hardy/\nTikTok: https://www.tiktok.com/@hardy\nFacebook - https://www.facebook.com/Hardy/\nTwitter - https://twitter.com/HardyMusic\n📱Text me - (615) 205-0310 \n\nLYRICS:\nRed\nI’m talking ‘bout the sun coming up, and the sun going down\nOn a John Deere turning up a hard work check  \nMaking that blue collar country boy’s neck\nRed\nI’m talking ‘bout the color of them jerseys on a Friday night\nAt the end of another long hot dry summer\n‘Tween the dust and the rust the trucks are half covered in\nRed\nLike a bloodhound\nTracking some white tail buck down\n \nI ain't talking politics, I’m talking small town\nAnd if you’re from one you know what I’m talking ‘bout\nIt's everywhere I swear from the courthouse bricks\nTo a crushed bud heavy can fading in the ditch\nLike the book of John, like a barn door\nAnd heart your hands over cause you’re thankful for\nEvery shipped off soul that was born to fight\nFor a wind torn flag that’s blue and white\nAnd red\n \nRed\nI’m talkin’ ‘bout a county line stop sign full of bird shot\nThe cup your beer’s in sitting ‘round a fire\nLike your, bank account when you bought them tires\nThat led\nYou down a dirt road and got some red lips leaning cross the console\n \nI ain't talking politics, I’m talking small town\nAnd if you’re from one you know what I’m talking ‘bout\nIt's everywhere I swear from the courthouse bricks\nTo a crushed bud heavy can fading in the ditch\nLike the book of John, like a barn door\nAnd heart your hands over cause you’re thankful for\nEvery shipped off soul that was born to fight\nFor a wind torn flag that’s blue and white\nAnd red\n \nIt don’t matter who you are, got your back if that’s what you need\n‘Cause at the end of the day hey we all bleed\nRed\n \nI ain't talking politics, I’m talking small town\nAnd if you’re from one you know what I’m talking ‘bout\nIt's everywhere I swear from the courthouse bricks\nTo a crushed bud heavy can fading in the ditch\nLike the book of John, like a barn door\nAnd heart your hands over cause you’re thankful for\nEvery shipped off soul that was born to fight\nFor a wind torn flag that’s blue and white\nAnd red\nYeah a wind torn flag that’s blue and white\nAnd red\nYeah a wind torn flag that’s blue and white\nAnd red\n\n#HARDY #MorganWallen #red\n\nhttp://vevo.ly/l0f1re",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yRo5unHurVs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/yRo5unHurVs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/yRo5unHurVs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/yRo5unHurVs/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/yRo5unHurVs/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "HARDYVEVO",
      tags: ["HARDY", "Morgan Wallen", "Country", "Country Music", "red"],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title: "HARDY - red (feat. Morgan Wallen) (Lyric Video)",
        description:
          "Listen to the new album here: https://HARDY.lnk.to/themockingbirdandTHECROW\n\nTo see all upcoming tour dates, visit: http://hardyofficial.com/\nInstagram - https://www.instagram.com/hardy/\nTikTok: https://www.tiktok.com/@hardy\nFacebook - https://www.facebook.com/Hardy/\nTwitter - https://twitter.com/HardyMusic\n📱Text me - (615) 205-0310 \n\nLYRICS:\nRed\nI’m talking ‘bout the sun coming up, and the sun going down\nOn a John Deere turning up a hard work check  \nMaking that blue collar country boy’s neck\nRed\nI’m talking ‘bout the color of them jerseys on a Friday night\nAt the end of another long hot dry summer\n‘Tween the dust and the rust the trucks are half covered in\nRed\nLike a bloodhound\nTracking some white tail buck down\n \nI ain't talking politics, I’m talking small town\nAnd if you’re from one you know what I’m talking ‘bout\nIt's everywhere I swear from the courthouse bricks\nTo a crushed bud heavy can fading in the ditch\nLike the book of John, like a barn door\nAnd heart your hands over cause you’re thankful for\nEvery shipped off soul that was born to fight\nFor a wind torn flag that’s blue and white\nAnd red\n \nRed\nI’m talkin’ ‘bout a county line stop sign full of bird shot\nThe cup your beer’s in sitting ‘round a fire\nLike your, bank account when you bought them tires\nThat led\nYou down a dirt road and got some red lips leaning cross the console\n \nI ain't talking politics, I’m talking small town\nAnd if you’re from one you know what I’m talking ‘bout\nIt's everywhere I swear from the courthouse bricks\nTo a crushed bud heavy can fading in the ditch\nLike the book of John, like a barn door\nAnd heart your hands over cause you’re thankful for\nEvery shipped off soul that was born to fight\nFor a wind torn flag that’s blue and white\nAnd red\n \nIt don’t matter who you are, got your back if that’s what you need\n‘Cause at the end of the day hey we all bleed\nRed\n \nI ain't talking politics, I’m talking small town\nAnd if you’re from one you know what I’m talking ‘bout\nIt's everywhere I swear from the courthouse bricks\nTo a crushed bud heavy can fading in the ditch\nLike the book of John, like a barn door\nAnd heart your hands over cause you’re thankful for\nEvery shipped off soul that was born to fight\nFor a wind torn flag that’s blue and white\nAnd red\nYeah a wind torn flag that’s blue and white\nAnd red\nYeah a wind torn flag that’s blue and white\nAnd red\n\n#HARDY #MorganWallen #red\n\nhttp://vevo.ly/l0f1re",
      },
    },
  },
];
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const dispatch = useDispatch();

  const popularData = [];

  useEffect(() => {
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${"AIzaSyCgqThQwQoG8Rmexmh-3oZAKnxA8zckbig"}`)
      .then((res) => {
        console.log(res);
        popularData.push(res.data.items);
      })
      .catch((error) => console.log("error", error))
      .then((res) => {
        console.log(...popularData);

        const tempList = [...popularData];
        [...tempList].forEach((data) => {
          data.like = 0;
          data.dislike = 0;
          data.subscribe = 0;
        });
        console.log(...tempList);
        dispatch(setPopularVideo(...tempList));
      });
  }, []);

  return (
    <div className="App">
      <NavHead />
      <BodyWrapper>
        <NavSide />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/like" element={<Like />} />
          <Route path="/dislike" element={<Dislike />} />
        </Routes>
      </BodyWrapper>
    </div>
  );
}

export default App;
