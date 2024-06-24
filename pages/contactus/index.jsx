
// import "../../styles/globals.css";
import Contactpage from './contactpage';
import Contactform from './contactform';
import Contactusmap from './contactusmap';
// import Image from "next/image";
// import layer1 from "../../public/images/layer1.png";
// import layer2 from "../../public/images/layer2.png";
import Head from 'next/head';
// import ContactUs from './contactus';
import Nav from '@/components/navbar/nav';
import Footer from '@/components/footer/footer';


export default function Contactus() {
  return (
    <>
      <Head>
      <title>Contact Us : Prepsathi Contact Us</title>
      <meta property="og:type" content="website"/>
      <meta name="description" content={"Prepsathi"}/>
     <meta property="og:title" content={"Contact Us : Prepsathi Contact Us"}/>
      <meta name="description" content={"Contact Us : Prepsathi Contact Us"}/>
      <meta name="keywords" content={"Prepsathi"}/>
      <meta property="og:url" content={"www.Prepsathi.ai"}/>
      <meta property="og:description" content={"Contact Us : Prepsathi Contact Us"}/>
      <meta property="og:image" content={'https://ec-images.s3.ap-south-1.amazonaws.com/Prepsathi-logo-for-video.png'}/>
    </Head> 
      <main className="flex min-h-screen flex-col">
            <Nav/>
          <div className='-right-0  px-3 py-3 absolute inset-0 -z-0 h-full'>
           </div>
          <div className="w-full mx-auto z-10">
           <Contactpage/>
           <Contactform/>
           <Contactusmap/>
          </div>
          <div className='-right-0 top-[430px]  px-3 py-3 absolute inset-0 -z-0 h-full'>
           </div>
           <Footer/>
        </main>
    </>
  );
}
