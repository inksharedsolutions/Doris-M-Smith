import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="Author | Joanne M. Baker" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Joanne M. Baker"/>
                            </div>

                            {/* <div className="heading-quote"> */}
                            {/* <span className="ata-span-fx"> */}
                                <h4> 
                                                              
                                </h4>
                                {/* </span> */}
                    
                            

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            I started writing TRAPPED IN LOVE'S MAGIC SPELL as a junior in high school because a teacher told me I had to do something in study hall I couldn't just sit there. 
                            </p>
                            <p> 
                            Twelve years and 4,378 handwritten pages later I finished it.                            

                                There was a lot of life in that twelve years: junior, senior in high school, graduating, working, college, getting an associate degree in psychology, in 1999 breaking both upper arms, recovering from that, but finally finishing it.
                            </p> 
                            <p>
                                 At age 40 when I wanted to get it published I thought it would be a good idea to break it down to more manageable novels for people to read.  Now at 44, I am releasing novel 1 the ships, hoping it does well.
                               
                             </p>  
                            <p>
                                I lived in Maine most of my life, I moved to Alaska for three years, now I live in New Hampshire.
                            </p>

                                             
            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Joanne M. Baker</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;