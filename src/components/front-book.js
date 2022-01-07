import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/ashleealiebook.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >


                        <div className="content-wraps">

                            <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, and learn in various formats
                            </span>

                            <h1 className="heading--featured"  data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000" id='frontbook-p'>
                            The book Militant Christian Parenting is based on building faith in God and doing it with militancy. It teaches parents to see that children are God's gift and next in line to the throne and that what parents do now will affect generations to come.
                            </p>

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/books">
                                    Read More
                                </Link>
                            </button>

                        </div>
                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" alt="book cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook