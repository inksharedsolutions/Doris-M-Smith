import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book3 from '../../static/books/ashleealiebook.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'ashlee-alie',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book |  Ashlee Alie" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About the`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Militant Christian Parenting`,
                                spanFirst: `On a Whole New Level`,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        The book Militant Christian Parenting is based on building faith in God and doing it with militancy. It teaches parents to see that children are God's gift and next in line to the throne and that what parents do now will affect generations to come. Children are royalty, and it all starts with the parents training them for eternal life with Christ so that they can walk the golden pavements of heaven and be forever in the presence of God. It is time to start raising our children into their true purpose and destiny.
                                        </p>
                                        
                                        
                                        
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/beautiful-sunset-d-l-smith/1140316550?ean=9781648955815',
                                    amazon: 'https://www.amazon.com/Militant-Christian-Parenting-Whole-Level-ebook/dp/B096L8X47M/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1632429517&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Militant-Christian-Parenting-Whole-Level/dp/1643458612/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1632429517&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/militant-christian-parenting-ashlee-c-alie/1120209579?ean=9781643458618',
                                    booksamillion: 'https://www.booksamillion.com/p/Militant-Christian-Parenting/Ashlee-Alie/9781643458618?id=8414367126265#',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;