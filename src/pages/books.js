import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book3 from '../../static/books/book3.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'joanne-m-baker',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book | Joanne M. Baker" />
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
                                title: `Trapped in Love'S Magic Spell`,
                                spanFirst: `Book 1: THE SHIPS`,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        Anne is the owner and there for in charge of the shipping company Paw Print when women were thought to be property; when the ship she is on is taken over by what she thinks are pirates. Anne soon learns that her beloved cats lives are in danger, she then must pull out all the stops to save them before it is too late. The captain of the privateers is use to doing as he pleases but is totally intrigued by this annoying beauty. Thomas sets out to teach her about her true place in the world and he thinks that is at his side, but Thomas has a lot to learn about Anne. When these two forces clash it is anything but smooth sailing on the high seas.
                                        </p>
                                        
                                        
                                        
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/trapped-in-loves-magic-spell-joanne-m-baker/1126345679?ean=9781648955204',
                                    amazon: 'https://www.amazon.ca/Trapped-Loves-Magic-Spell-Ships-ebook/dp/B09FNHR42S/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.ca/Trapped-Loves-Magic-Spell-Ships/dp/1648955193/ref=monarch_sidesheet',
                                    barnes: 'https://www.barnesandnoble.com/w/trapped-in-loves-magic-spell-joanne-m-baker/1126345679?ean=9781648955198',
                                    booksamillion: 'https://www.booksamillion.com/p/Trapped-Loves-Magic-Spell/Joanne-Baker/9781648955198?id=8330748555077',
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