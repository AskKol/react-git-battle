var React = require('react');
var PropTypes = require('prop-types');

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

//class SelectLanguage extends React.Component
//{
//    render()
//    {
//        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python', '.Net']
//        return (
//            <ul className='languages'>
//                {
//                    languages.map(function (language)
//                    {
//                        console.log(this);
//                        return (

//                            <li
//                                style={language === this.props.selectedLanguage ? { color: '#d0021b' } : null}
//                                key={language}
//                                onClick={this.props.onSelect.bind(null, language)}>
//                                {language}
//                            </li>
//                        );
//                    }, this)
//                }
//            </ul>
//        )
//    }
//}

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
        //var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python', '.Net']
        return (

            //<ul className='languages'>
            //    {
            //        languages.map(function (language)
            //        {
            //            console.log(this);
            //            return (

            //                <li
            //                    style={language === this.state.selectedLanguage ? { color: '#d0021b' } : null}
            //                    key={language}
            //                    onClick={this.updateLanguage.bind(null, language)}>
            //                    {language}
            //                </li>
            //            );
            //        }, this)
            //    }
            //</ul>
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />{!this.state.repos?<p>loading...</p>:<RepoGrid repos={this.state.repos} />}
                
            </div>
        )
    }
}

module.exports = Popular;