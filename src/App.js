import './App.css';
import ContainerTop from './Components/ContainerTop/ContainerTop';
import ContainerServices from './Components/ContainerServices/ContainerServices';
import ContainerSearch from './Components/ContainerSearch/ContainerSearch';
import ContainerBanner from './Components/ContainerBanner/ContainerBanner';
import ContainerServicesCards from './Components/ContainerServicesCards/ContainerServicesCards'
import WeatherCard from './Components/ContainerServicesCards/WeatherCard';
import VisitedCard from './Components/ContainerServicesCards/VisitedCard';
import ChannelsCard from './Components/ContainerServicesCards/ChannelsCard';
import BroadcastCard from './Components/ContainerServicesCards/BroadcastCard';

function App() {
  const visited = [
    {
      title: 'Недвижимость',
      description: 'о сталинках',
      link: '#'
    },
    {
      title: 'Маркет',
      description: 'люстры и светильники',
      link: '#'
    },
    {
      title: 'Авто.ру',
      description: 'привод 4x4 до 500 000',
      link: '#'
    }
  ];
  const channels = [
    {
      time: '02:00',
      title: 'ТНТ.Best',
      channel: 'ТНТ International',
      link: '#'
    },
    {
      time: '02:15',
      title: 'Джунглики',
      channel: 'Карусель INT',
      link: '#'
    },
    {
      time: '02:25',
      title: 'Наедине со всеми',
      channel: 'Первый',
      link: '#'
    }
  ];
  const broadcasts = [
    {
      icon: 'https://www.pngkit.com/png/detail/0-4191_circled-play-icon-message-icon-png.png',
      title: 'Управление как искусство',
      broadcast: 'Успех',
      link: '#'
    },
    {
      icon: 'https://www.pngkit.com/png/detail/0-4191_circled-play-icon-message-icon-png.png',
      title: 'Ночь. Мир в это время',
      broadcast: 'earthTV',
      link: '#'
    },
    {
      icon: 'https://www.pngkit.com/png/detail/0-4191_circled-play-icon-message-icon-png.png',
      title: 'Андрей Возн...',
      broadcast: 'Совершенно секретно',
      link: '#'
    },
  ];

  return (
    <div className="App">
      <ContainerTop />
      <ContainerServices />
      <ContainerSearch />
      <ContainerBanner />
      <div className="wrapper-card">   
        <div className="wrapper-card-block">    
          <ContainerServicesCards title="Погода">
            <WeatherCard 
              icon="https://yt3.ggpht.com/a/AATXAJxZLC22vQcgrouhnq03lFL20raYV5rOJAcI3K1d=s900-c-k-c0xffffffff-no-rj-mo"
              averageTemperature="+17"
              morningTemperature="+17"
              dayTemperature="+20"
            />
          </ContainerServicesCards>
          <ContainerServicesCards title="Посещаемое">
            {visited.map((item) => 
              <VisitedCard {...item} />
            )}
          </ContainerServicesCards>
        </div>
        <div className="wrapper-card-block">
          <ContainerServicesCards title="Карта Германии">
            <p>
              <a href="#">
                Расписания
              </a>
            </p>
          </ContainerServicesCards>
          <ContainerServicesCards title="Телепрограмма">
            <span className="airing">Эфир</span>
            {channels.map((item) => 
              <ChannelsCard {...item} />
            )}
          </ContainerServicesCards>
        </div>
        <div className="wrapper-card-block">
          <ContainerServicesCards title="Эфир">
            {broadcasts.map((item) => 
              <BroadcastCard {...item} />
            )}
          </ContainerServicesCards>
        </div>
      </div>
    </div>
  );
}

export default App;