import './App.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
// import OverviewGoals from './components/Overview_Goals';
// import ChairmenMsg from './components/Chairmen_msg';
// import Packages from './components/Packages';
// import OfferedPlacements from './components/OfferedPlacements';
// import CompaniesVisited from './components/CompaniesVisited';
// import PercentagePlaced from './components/PercentagePlaced';

import TeamMembers from './pages/TeamMembers';
import Footer from './components/Footer';

function App() {
  const mainDiv = 'md:m-10 pl-8 pr-8 lg:pl-20 lg:pr-20 flex flex-col justify-self-center' //font-[Futura]

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Logo />
      <main className={mainDiv}>
        {/* <OverviewGoals />
        <ChairmenMsg/>
        <Packages />
        <OfferedPlacements />
        <CompaniesVisited />
        <PercentagePlaced /> */}

        {/* teams page */}

        <TeamMembers />

      </main>

      <Footer />
    </div>
  );
}

export default App;
