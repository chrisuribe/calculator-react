import React, {Component, Fragment} from 'react';
import Button from 'react-bootstrap/Button';


class KeyPadComponent extends Component {

    render() {
        return (
<Fragment>
            <style type="text/css">
    {`
    .btn-operator {
        background-color: #f7a33b;
        color: white;
      }

    `}
  </style>


            <div className="button">
                <Button name="(" onClick={e => this.props.onClick(e.target.name)}>(</Button>
                <Button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</Button>
                <Button name=")" onClick={e => this.props.onClick(e.target.name)}>)</Button>
                <Button name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button><br/>


                <Button name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>


                <Button name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button variant="operator" name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>

                <Button name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button variant="operator" name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button><br/>


                <Button name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <Button name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button variant="operator" name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                <Button variant="operator" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br/>
            </div>
            </Fragment>
            
        );
    }
}


export default KeyPadComponent;
