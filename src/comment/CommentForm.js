import React from 'react'
import { format } from 'path';


class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("submit")
        let author = this.refs.author.value,
        text=this.refs.text.value;
        console.log(author,text)
        this.props.onCommentSubmit({author,text,date:"刚刚"})

    }
    render(){
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <input type="text" placeholder='姓名' ref="author"/>
                </div>
                <div className="field">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                添加评论
                </button>
            </form>
        )
    }
}

export {CommentForm as default}

