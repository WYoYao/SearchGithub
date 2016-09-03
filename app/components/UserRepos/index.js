import React, {Component} from 'react';

class UserRepos  extends Component {
    render() {
        let repos = this.props.repos.map( (repo, index ) => {
        return (
                <li className="list-group-item" key={index}>
                {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                {repo.description && <p>{repo.description}</p>}
                </li>
            )
        });

        return (<div>
                    <h3> 用户的 Git 仓库 </h3>
                    <ul className="list-group">
                        {repos}
                    </ul>
         </div>)
    }
}

export default UserRepos ;