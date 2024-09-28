const karachiRestaurants = [
    {
      name: "Kolachi",
      cuisines: ["Pakistani", "BBQ"],
      location: "Do Darya, Karachi",
      rating: 4.8,
      priceRange: "$$$",
      contact: "021-111-111-001",
      openHours: "7:00 PM - 2:00 AM",
      website: "https://kolachi.com.pk",
      deliveryAvailable: false,
      imageUrl: "https://imgs.search.brave.com/AoskENRIwCFQcAsP0Oxed7x1jDPBtvFHgd2fGJP5tRM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9rZm9v/ZHMuY29tL2ltYWdl/cy9SZXN0LWltYWdl/cy85NjRfMi5qcGc"
    },
    {
      name: "Cafe Flo",
      cuisines: ["French", "Continental"],
      location: "Clifton, Karachi",
      rating: 4.7,
      priceRange: "$$$$",
      contact: "021-3583-5121",
      openHours: "12:00 PM - 11:00 PM",
      website: "https://cafeflo.com",
      deliveryAvailable: false,
      imageUrl: "https://imgs.search.brave.com/d4Ihc3I9NI3Sctj5qXfA51Qaw2RiRdvnEdCPaVETNTw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93cGFz/c2V0cy5ncmFhbmEu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDIv/YmFyQlEtdG9uaWdo/dC0xLmpwZw"
    },
    {
      name: "Butt Karahi",
      cuisines: ["Pakistani", "Desi"],
      location: "Gulshan-e-Iqbal, Karachi",
      rating: 4.5,
      priceRange: "$$",
      contact: "021-3497-1122",
      openHours: "12:00 PM - 12:00 AM",
      website: "https://buttkarahi.com",
      deliveryAvailable: true,
      imageUrl: "https://imgs.search.brave.com/VyzI7_L34xwL0jlMOceumGYvlqa97xCwZ6w3nHoigkw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9zc2Rvd24u/Y29tL2ltYWdlcy8w/MWY0MGRhYy0zYTFj/LTQwNTItOWM5YS1i/NGI1YjcwYzNhNWQu/d2VicA"
    },
    {
      name: "Xander's",
      cuisines: ["Italian", "Continental"],
      location: "DHA, Karachi",
      rating: 4.6,
      priceRange: "$$$",
      contact: "021-3587-4532",
      openHours: "9:00 AM - 12:00 AM",
      website: "https://xanders.com.pk",
      deliveryAvailable: true,
      imageUrl: "https://imgs.search.brave.com/zOK5jnH_69ZxguoVadafv_syhDsnSBN-DSNghBagjQw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MjYvNGMvMGQvMDIv/eGFuZGVyLXMuanBn"
    },
    {
      name: "Okra",
      cuisines: ["Mediterranean", "Healthy"],
      location: "Clifton, Karachi",
      rating: 4.8,
      priceRange: "$$$$",
      contact: "021-3530-0913",
      openHours: "7:30 PM - 11:30 PM",
      website: "https://okra.com.pk",
      deliveryAvailable: false,
      imageUrl: "https://imgs.search.brave.com/owF8kGITGXUPsnntrzoTvpFQJtuM3U_EA47f9JWuzRg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3Lmth/cmFjaGlzdGEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAxL09rcmEtVGVz/dC1LaXRjaGVuLUth/cmFjaGktMDA3Lmpw/Zz93PTY5MiZoPTky/MyZzc2w9MQ"
    },
    {
      name: "Cafe Aylanto",
      cuisines: ["Italian", "Continental"],
      location: "DHA, Karachi",
      rating: 4.7,
      priceRange: "$$$",
      contact: "021-3530-1884",
      openHours: "12:00 PM - 11:30 PM",
      website: "https://aylanto.com",
      deliveryAvailable: false,
      imageUrl: "https://imgs.search.brave.com/1sMQsg5IlTuf3_txHLxKG6JVvwSSDkiQynXku_vtc9g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9maW5k/YW1lbnVzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/Mi9nYWxsZXJ5XzA1/LmpwZw"
    },
    {
      name: "Ginsoy",
      cuisines: ["Chinese", "Asian Fusion"],
      location: "Multiple Locations, Karachi",
      rating: 4.4,
      priceRange: "$$",
      contact: "021-111-446-769",
      openHours: "12:00 PM - 11:00 PM",
      website: "https://ginsoy.com",
      deliveryAvailable: true,
      imageUrl: "https://imgs.search.brave.com/W6x44SNVkTHwYh0YlXjjFvJ0l8wMMV4tVSiWPMNGv2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWEvMWIvZjQvYzAv/Z2luc295LWxpdmUu/anBn"
    },
    {
      name: "Lal Qila",
      cuisines: ["Pakistani", "Mughlai"],
      location: "Shahrah-e-Faisal, Karachi",
      rating: 4.6,
      priceRange: "$$$",
      contact: "021-3432-2406",
      openHours: "6:30 PM - 12:00 AM",
      website: "https://lalqila.com.pk",
      deliveryAvailable: false,
      imageUrl: "https://imgs.search.brave.com/tkqpWktMUmxb11zCvUhCSqsEdVAPJZQfNO3p-xvC6GA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS9j/YmY2NTFfM2JiOWU0/OTYwNTdkNDllMDkz/ZjY0NjdhODJkNjA2/N2V-bXYyLnBuZy92/MS9maWxsL3dfMjU5/LGhfMjUyLGFsX2Ms/cV84NSx1c21fMC42/Nl8xLjAwXzAuMDEs/ZW5jX2F1dG8vTGFs/cWlsYS1jaXJjbGUt/bG9nby5wbmc"
    },
    {
      name: "Sakura",
      cuisines: ["Japanese", "Sushi"],
      location: "Pearl Continental Hotel, Karachi",
      rating: 4.7,
      priceRange: "$$$$",
      contact: "021-111-505-505",
      openHours: "7:00 PM - 11:00 PM",
      website: "https://pchotels.com",
      deliveryAvailable: false,
      imageUrl: "https://imgs.search.brave.com/R42BGLWk7haTjizFzkS1N_LGJ0jApF7rsLRaEypqKNc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pay5p/bWFnZWtpdC5pby9h/d3d5YmhobW8vc2F0/ZWxsaXRlX2ltYWdl/cy9qYXBhbmVzZS9n/cmF5L2Fib3V0X3Vz/LzEuanBnP3RyPXct/Mzg0MA"
    },
    {
      name: "Fuchsia",
      cuisines: ["Asian Fusion", "Thai"],
      location: "DHA, Karachi",
      rating: 4.6,
      priceRange: "$$$",
      contact: "021-3582-3916",
      openHours: "12:00 PM - 11:00 PM",
      website: "https://fuchsia.com.pk",
      deliveryAvailable: true,
      imageUrl: "https://imgs.search.brave.com/i93ltYM1VBZNF6j-yqA1FR__p-D-OaiUz3cDPVwH_tY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/bHkuNHNxaS5uZXQv/aW1nL2dlbmVyYWwv/MjAweDIwMC8yNTQy/NjEzX1dDNlQ0YU42/SnhVZDMyQ21PWS1C/QVdkYm1LQ1hFYUI3/YnZ0cVBYYXRpeWsu/anBn"
    }
  ];


export default karachiRestaurants;