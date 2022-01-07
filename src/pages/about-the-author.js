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
                <Helmet title="Author |  Ashlee Alie" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt=" Ashlee Alie"/>
                            </div>

                        
                            <span className="ata-span-fx">
                                <h4> 
                                                 
                                </h4>
                                </span>
                    
                            

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Ashlee Christina Alie is a quiet young 31 year-old woman who grew up in a sheltered environment on the beautiful tropical island of Barbados.  During my teenage years, I developed an interest in song writing and poetry and had a passion for music, which led me to enter a song competition, although not successful.   I also enjoy watching movies.
                            </p>
                            <p> 
                            I was 22 years old when I wrote ‘Militant Christian Parenting’, although I had no children when I wrote the book and I still don’t, sad to say.  However, seeing how many parents were raising children and my own experience propelled me to write this book as a guide. 
                            </p> 
                            <p>
                            The book was written to be an inspiration and motivation for parents and even those who are not yet parents to take note of how they are raising their children in this day and age and to be cognizant of their duty as parents.
                             </p>  
                            <p>
                            I hope that this book continues to inspire and help parents on their life’s journey to improve their parenting skills as well as encourage other young writers who might now be on the path of becoming young authors.
                            </p>

                                             
            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name"> Ashlee Alie</span>
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