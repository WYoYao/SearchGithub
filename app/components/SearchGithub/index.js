import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

class SearchGithub extends Component {

    getRef(ref){
        //这个时候的this.usernameRef 值等于调用this.getRef(ref) 的标签的ref引用
        this.usernameRef = ref;
    }
    handleSubmit(event){
        //直接获取刚才调用Ref 的组件的值
        const username = this.usernameRef.value;
        this.usernameRef.value = '';

        const path = `/profile/${username}`;
        console.log(path);
        browserHistory.push(path);
    }
    render() {
        return (
        <div className="col-sm-12">
            <form onSubmit={() => this.handleSubmit()} >
            <div className="form-group col-sm-7">
            {/*
                绑定input 的时候将ref 传入getRef 的方法然后给this.usernameRef 赋值
            */}
                <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
            </div>
            <div className="form-group col-sm-5">
                <button type="submit" className="btn btn-block btn-primary">搜索 Github</button>
            </div>
            </form>
        </div>
        )
    }
}

SearchGithub.propTypes = {
    //history 的格式必须是一个Object类型
    history: PropTypes.object.isRequired
};

export default SearchGithub;