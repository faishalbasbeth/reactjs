import React, {Component} from 'react';
import Axios from 'axios';

class DetailPost extends Component {
    state = {
        post: {
            title="",
            title=""
        }
    }
    componentDidMount(){
        let id = this.props.match.params.postID;
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            console.log('result', res);
        })

    }
    render(){
        return(
            <div>
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost;