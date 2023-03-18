function main() {
  // create speakers object
  const speakers = [
    {
      id: 1,
      title: 'Yochai Benkler',
      mainText:
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      subText:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
      imageUrl: '../images/home/speaker-01.png',
    },
    {
      id: 2,
      title: 'SohYeong Noh',
      mainText: 'Director of Art Centre Nabi and a board member of CC Korea',
      subText:
        'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
      imageUrl: '../images/home/speaker-03.png',
    },
    {
      id: 3,
      title: 'Lila tretikov',
      mainText: 'Director of Art Centre Nabi and a board member of CC Korea',
      subText:
        'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
      imageUrl: '../images/home/speaker-03.png',
    },
    {
      id: 4,
      title: 'Kilnam Chon',
      mainText: '',
      subText:
        'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
      imageUrl: '../images/home/speaker-02.png',
    },
    {
      id: 5,
      title: 'Julia Leda',
      mainText: 'President of Young Pirates of Europe',
      subText:
        'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
      imageUrl: '../images/home/speaker-04.png',
    },
    {
      id: 6,
      title: 'Ryan Merkley',
      mainText: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
      subText: '',
      imageUrl: '../images/home/speaker-06.png',
    },
  ];

  // dynamically create speakers section
  const speakerDiv = document.querySelector('.speaker-group');
  speakers.forEach((speaker) => {
    speakerDiv.innerHTML += `
      <div class='speaker-container ${
  speaker.id > 2 ? 'hidden' : 'visible'
}' id='speaker-container'>
  <div class='speaker'>
<div class='image' style='background-image: url(${speaker.imageUrl})'></div>
            <div class='text-content'>
              <div class='title'>${speaker.title}</div>
              <div class='main-text'>${speaker.mainText}</div>
            <div class='sub-text'>${speaker.subText}</div>
          </div>
        </div>
      </div>
        `;
  }); 
}
main();
