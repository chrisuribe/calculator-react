import React, {Component, Fragment} from 'react';
import Button from 'react-bootstrap/Button';


class KeyPadComponent extends Component {

    render() {
        return (
<Fragment>
            <style type="text/css">
    {`
    .btn-operator {
        background-color: #ff9f0c;
        color: white;
      }
    .btn-number {
        background-color: #606264;
        color: white;
      }
    .btn-other {
        background-color: #414345;
        color: white;
      }

    `}
  </style>


            <div className="button rounded-bottom">
                <Button variant="other" name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button>
                <Button variant="other" name="±" onClick={e => this.props.onClick(e.target.name)}>±</Button>
                <Button variant="other" name="%" onClick={e => this.props.onClick(e.target.name)}>%</Button>
                <Button variant="operator" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br/>

                <Button variant="number" name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button variant="number" name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button variant="number" name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button variant="operator" name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button><br/>

                <Button variant="number" name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button variant="number" name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button variant="number" name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button variant="operator" name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>
   
                <Button variant="number" name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button variant="number" name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button variant="number" name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button variant="operator" name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>

                
                <Button variant="number" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button variant="number" name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <Button variant="operator" name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button><br/>
            </div>
            </Fragment>
            
        );
    }
}


export default KeyPadComponent;
