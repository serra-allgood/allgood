export const BannerLanding = ({ header, summary }) => (
  <section id='banner' className='style2'>
    <div className='inner'>
      <header className='major'>
        <h1>{header}</h1>
      </header>
      <div className='content'>
        {summary()}
      </div>
    </div>
  </section>
)
