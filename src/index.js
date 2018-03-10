
import React from "react"
import ReactDOM from "react-dom"

import CommentBox from "./comment/CommentBox"

var comments = [
    {"author":"swk","date":"5 分钟前",text:"天气不错啊"},
    {"author":"ncg","date":"3 分钟前",text:"出去玩啊"},
]

ReactDOM.render(<CommentBox url={"/data.json"}/>,document.getElementById("app"))