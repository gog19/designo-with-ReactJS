import './Section-three.css';
import '../../Css/General.css';

function Local() {

  return (
    <>
      <section className='local-section'>
        <ul className='list-unstyled d-flex align-items-center justify-content-between text-center'>
          <li className='local-items local-items-pass'>
            <h3 className='local-items-title'>PASSIONATE</h3>
            <p className='local-items-text'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          </li>
          <li className='local-items local-items-res'>
            <h3 className='local-items-title'>RESOURCEFUL</h3>
            <p className='local-items-text'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
          </li>
          <li className='local-items local-items-friends'>
            <h3 className='local-items-title'>FRIENDLY</h3>
            <p className='local-items-text'> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Local;