//libraries
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import Product from '../pages/Product/Product';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

//style
import './Home.css';


class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(()=> {
        //     this.setState({
        //         showComponent: false
        //     })
        // },15000)   
    }
    render(){
        return(
            <Router>
                {/* <div>
                    <p>Youtube Component</p>
                    <hr/>
                    <YouTubeComp 
                        time="7.12" 
                        title="Tutorial React JS - Bagian 1"
                        desc="2x ditonton, 2 hari yang lalu"/>
                    <YouTubeComp 
                        time="8.02" 
                        title="Tutorial React JS - Bagian 2"
                        desc="200x ditonton, 10 hari yang lalu"/>
                    <YouTubeComp 
                        time="5.04" 
                        title="Tutorial React JS - Bagian 3"
                        desc="500x ditonton, 4 hari yang lalu"/>
                    <YouTubeComp 
                        time="4.12" 
                        title="Tutorial React JS - Bagian 4"
                        desc="1k ditonton, 14 hari yang lalu"/>
                    <YouTubeComp />
                
                    <p>Counter</p>
                    <hr/>
                    <Product />
                    <p>LifeCycle Component</p>
                    <hr/>
                    {
                        this.state.showComponent
                        ?
                        <LifeCycleComp />
                        : null
                    }
                    <p>Blog Post</p>
                    <hr/>
                    <BlogPost />
                </div> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                        <Link to="/youtube-component">Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YoutubeCompPage} />
                </Fragment>
            </Router>
        )
    }
}

export default Home;