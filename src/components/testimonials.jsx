export const Testimonials = (props) => {
    return (
        <div id='testimonials'>
            <div className='container'>
                <div className='section-title text-center'>
                    <h2>{props.data.title}</h2>
                </div>
                <div className='row'>
                    {props.data.testimonialList
                        ? props.data.testimonialList.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-4'>
                                <div className='testimonial'>
                                    <div className='testimonial-image'>
                                        {' '}
                                        <img src={d.img} alt=''/>{' '}
                                    </div>
                                    <div className='testimonial-content'>
                                        <p>"{d.text}"</p>
                                        <div className='testimonial-meta'> - {d.name} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}
