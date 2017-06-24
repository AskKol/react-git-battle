
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
var App = require('./components/App');

//A component is concerned about 3 things
//state
//lifecycle events
// UI



class Badge extends React.Component
{
    render()
    {
        return (
            <div>
                <div><App /></div>
                <img
                    src={this.props.img}
                    alt='Avatar'
                    style={{ width: 100, height: 100 }} />
                <h1>Name: {this.props.name}</h1>
                <h3>Username: {this.props.username}</h3>
            </div>
        )
    }
}

class TagLabelBoxButton extends React.Component
{
    render()
    {
        let aBackgroundColor = this.props.labelButtonBackgroundColor ?
            this.props.labelButtonBackgroundColor : "tranparent";
        let aColor = this.props.labelButtonFontColor;
        let aTop = this.props.buttonInTagLabelTop ? this.props.buttonInTagLabelTop : -5;
        return (
            <input
                type="button"
                value="x"
                style={{
                    border: "none",
                    backgroundColor: aBackgroundColor,
                    cursor: "pointer",
                    outlineColor: "transparent",
                    position: "relative",
                    right: 0,
                    paddingRight: 0,
                    color: aColor,
                    top: aTop

                }} />
        )
    }
}

class TagLabelImg extends React.Component
{
    render()
    {
        return (
            <img src={this.props.imgSource} style={{
                paddingRight: 5,
                paddingLeft: 3,
                position: "relative",
                left: 0,
                top: 0,
                height: 20
            }} />
        )
    }
}

class A_LabelInTagLabel extends React.Component
{
    render()
    {
        let aTop = this.props.labelTop ? this.props.labelTop : -4;
        let aLabelVal = this.props.labelValue;
        let aBorderColor = this.props.labelBorderColor;
        let aColor = this.props.labeColor;
        let aPaddingLeft = this.props.paddingLeft ? this.props.paddingLeft : 0;
        return (
            <label style={{
                paddingRight: 5,
                borderColor: { aBorderColor },
                color: { aColor },
                position: "relative",
                top: aTop,
                paddingLeft: aPaddingLeft

            }}>{aLabelVal}</label>
        )
    }
}

class TagLabel extends React.Component
{
    render()
    {
        let anImgSource = this.props.labelImgSource ? this.props.labelImgSource : null;
        let aTop4Span = this.props.spanInTagLabelTop ? this.props.spanInTagLabelTop : 0;
        let aBorderColor = this.props.SpanBorderColor;
        let aLabelTop = this.props.labelInTagLabelTop;
        let aLabelValue = this.props.labelInTagLabelValue;
        let aColor = this.props.SpanFontColor;
        let aLabel = null;
        let anImage = null;
        let aTagButton = null;
        if (anImgSource != null)
        {
            anImage = <TagLabelImg imgSource={anImgSource} />;
            aLabel = <A_LabelInTagLabel labelTop={aLabelTop} labelValue={aLabelValue} borderColor={aBorderColor} labeColor={aColor} />;
            aTagButton = <TagLabelBoxButton labelButtonBackgroundColor="transparent" labelButtonFontColor={aColor} />;
        }
        else
        {
            aLabel = <A_LabelInTagLabel labelTop={aLabelTop} labelValue={aLabelValue} borderColor={aBorderColor} labeColor={aColor} paddingLeft={7} />;
            aTagButton = <TagLabelBoxButton labelButtonBackgroundColor="transparent" labelButtonFontColor={aColor} buttonInTagLabelTop={1} />;
        }
        return (
            <span style={{
                marginRight: 15,
                paddingRight: 5,
                height: 20,
                marginTop: 5,
                marginBottom: 5,
                position: "relative",
                display: "inline-block",
                borderRadius: 10,
                borderStyle: "solid",
                borderColor: aBorderColor,
                color: aColor,
                top: aTop4Span
            }}>
                {anImage}
                {aLabel}
                {aTagButton}

            </span>
        )
    }
}

class TagTextBoxButton extends React.Component
{
    render()
    {
        let aBackgroundColor = this.props.textBoxButtonBackgroundColor;
        return (
            <input
                type="button"
                value="Create"
                style={{
                    border: "none",
                    backgroundColor: aBackgroundColor,
                    cursor: "pointer",
                    outlineColor: "transparent",
                    position: "absolute",
                    right: 0,
                    top: 3,
                    borderLeftStyle: "solid",
                    borderLeftWidth: "thin",
                    borderLeftColor: "grey"

                }} />
        )
    }
}
class TagTextBox extends React.Component
{
    render()
    {
        let spanBackGroundColor = "whitesmoke";
        let closeButton = null;
        if (this.props.toCreateNewTag)
        {
            closeButton = <TagTextBoxButton textBoxButtonBackgroundColor={spanBackGroundColor} />
        }

        let aPlaceHolder = " + Add a new tag";
        if (this.props.placeHolder != null)
        {
            aPlaceHolder = this.props.placeHolder;
        }
        return (
            <span style={{
                border: "1px solid grey",
                display: "inline-block",
                borderRadius: 5,
                backgroundColor: spanBackGroundColor,
                position: "relative",
                top: -4,
                marginTop: 5,
                marginBottom: 5

            }}>
                <input
                    type="text"
                    placeholder={aPlaceHolder}
                    style={{
                        maxWidth: 200,
                        borderRadius: 5,
                        paddingRight: 10,
                        outlineColor: "pink",
                        textIndent:5
                    }} />
                {closeButton}

            </span>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,

}

TagTextBox.propTypes = {
    placeholder: PropTypes.string

}


ReactDOM.render
    (
    //<Badge name="Kolapo Abolarinwa" username="Kol" img="https://github.com/askkol.png" />, document.getElementById('app')

    //<div>
    //        <TagLabel labelImgSource="https://github.com/askkol.png" labelInTagLabelValue="A consultant" SpanBorderColor="#359a67" SpanFontColor="#2aaf6c" />
    //        <TagLabel labelImgSource="https://github.com/kol.png" labelInTagLabelValue="another consultant" SpanBorderColor="#e8e52f" SpanFontColor="#bfa82d" />
    //        <TagLabel spanInTagLabelTop={-5} SpanBorderColor="#f16f5f" SpanFontColor="#a5473c"
    //            labelInTagLabelValue="another consultant" labelInTagLabelTop={2} />
    //        <TagTextBox toCreateNewTag={true} placeHolder=" + Add tag" />
       
    //</div>, document.getElementById('app')

      <App />, document.getElementById('app')
    );