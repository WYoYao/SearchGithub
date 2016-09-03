import React, { Component } from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
import { mixin } from 'core-decorators';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import getGithubInfo from '../../util/helper';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            notes: ['1', '2', '3','1', '2', '3','1', '2', '3','1', '2', '3'],
            bio: {
            name: 'guoyongfeng'
            },
            repos: ['a', 'b', 'c']
        }
    }

    componentWillMount() {
        getGithubInfo( this.props.params.username )
        .then( ( data ) => {
            // 测试一下传入用户名后返回的数据
            console.log( data );
            // 更新state数据
            this.setState({
                bio: data.bio,
                repos: data.repos
            })
        });
    }
    componentWillUnMount(){

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                <UserProfile username={this.props.params.username}
                    bio={this.state.bio}
                 />
                </div>
                <div className="col-md-4">
                <UserRepos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                <Notes username={this.props.params.username} notes={this.state.notes}/>
                </div>
            </div>
        );
    }
}

export default Profile;