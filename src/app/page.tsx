import LandingPage from './components/landingpage'
import Header from './components/header'
import MainPage from './components/mainpage'
import { Main } from 'next/document';


const Page = () => {
  return (
    <div>
     <Header />
     <LandingPage />
    </div>
  );
};

export default Page