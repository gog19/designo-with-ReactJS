import SectionOne from './Section-one/Section-one';
// import SectionTwo from './Section-two/Section-two';
// import SectionThree from './Section-three/Section-three';
// import SectionFour from './Section-four/Section-four';
import './Main.css';

function Main() {

  return (
    <>
      <main className='site-main'>
          <div className='container'>
            <SectionOne />
            {/* <SectionTwo /> */}
            {/* <SectionThree /> */}
            {/* <SectionFour /> */}
          </div>
      </main>
    </>
  )
}

export default Main;