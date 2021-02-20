import './Section-two.css';
import '../../Css/General.css';

function Frame() {

  return (
    <>
      <section className='courses-section d-flex'>
        <div className='web-design'>
          <h2 className='web-design-title'>WEB DESIGN</h2>
          <a className='web-design-link' href='#'>VIEW PROJECTS</a>
        </div>
        <div className='d-flex flex-column'>
          <div className='app-design'>
            <h2 className='app-design-title'>APP DESIGN</h2>
            <a className='app-design-link' href='#'>VIEW PROJECTS</a>
          </div>
          <div className='graphic-design'>
            <h2 className='graphic-design-title'>GRAPHIC DESIGN</h2>
            <a className='graphic-design-link' href='#'>VIEW PROJECTS</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Frame