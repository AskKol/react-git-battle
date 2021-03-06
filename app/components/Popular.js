﻿var React = require('react'); //es5
var PropTypes = require('prop-types');//es5


import Loading from './Loading';
import * as Api from '../utils/Api';


function SelectLanguage(props) 
{

    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python', '.Net Foundation']
    return (
        <ul className='languages'>
            {
                languages.map(function (language)
                {

                    return (

                        <li
                            style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
                            key={language}
                            onClick={props.onSelect.bind(null, language)}>
                            {language}
                        </li>
                    );
                })
            }
        </ul>
    )

}

function RepoGrid(props)
{
    return (
        <ul className='popular-list'>
            {props.repos.map(function (repo, index)
            {
               return( <li key={repo.name} className='popular-item'>
                    <div className='popular-rank'>#{index + 1}</div>
                    <ul className='space-list-items'>
                        <li>

                            <img
                                className='avatar'
                                src={repo.owner.avatar_url}
                                alt={'Avatar for' + repo.owner.login} />
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>

                </li>)
            })
            }

        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount()
    {
        //Make Ajax requests

        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(language)
    {
        this.setState(function ()
        {
            return ({
                selectedLanguage: language,
                repos: null
            });
        });

        Api.fetchPopularRepos(language)
            .then(function (response)
            {
                this.setState(function ()
                {
                    return {
                        repos: response
                    }
                })
            }.bind(this));

      
    }


    render()
    {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />{!this.state.repos?<Loading/>:<RepoGrid repos={this.state.repos} />}
                
            </div>
        )
    }
}

module.exports = Popular;