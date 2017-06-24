var React = require('react');
var PropTypes = require('prop-types');




function SelectLanguage(props) 
{

    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python', '.Net']
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
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(language)
    {
        this.setState(function ()
        {
            return ({
                selectedLanguage: language
            });
        });
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
                />
            </div>
        )
    }
}

module.exports = Popular;