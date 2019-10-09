import React,{Component} from 'react'


const DropDown = ({ selectedValue, disabled, options, onChange }) => {
    return (
      <select onChange={onChange} disabled={disabled}>
        {
          options.map(o => <option value={o} selected={o == selectedValue}>{o}</option>)
        }
      </select>
    );
  }

  // class DropDown extends Component {
  //   constructor(props){
  //     super(props)
  //   }
  //   render(){
  //     const {selectedValue, disabled, options, onChange} = this.props;
  //     return (
       
  //       <div>
  //         <select onChange={onChange} disabled={disabled}>
  //           {
  //             options.map(o => <option value={o} selected={o == selectedValue}>{o}</option>)
  //           }
  //         </select>
  //       </div>
  //     )
  //   }
  // }

  class Appp extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        numbers: [1, 2, 3, 4, 5], // 3 should disable the second dropdown
        names: ['john', 'jane', 'eric'],
        selectedNumber: '',
        selectedName: ''
      }
  
      this.onNumbersChange = this.onNumbersChange.bind(this);
      this.onNamesChange = this.onNamesChange.bind(this);
    }
  
    onNumbersChange(e) {
      this.setState({ selectedNumber: e.target.value });
    }
  
    onNamesChange(e) {
      this.setState({ selectedName: e.target.value });
    }
  
    render() {
      const { numbers, names, selectedNumber, selectedName } = this.state;
      return (
        <div>
          <DropDown
            options={numbers}
            selectedValue={selectedNumber}
            onChange={this.onNumbersChange}
  
          />
          <DropDown
            options={names}
            selectedValue={selectedName}
            onChange={this.onNamesChange}
            disabled={selectedNumber == 3} // this will be disabled if selected value of the first dropdown is 3
          />
        </div>
      );
    }
  }
  
export default Appp;
  