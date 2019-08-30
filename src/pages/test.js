import React from 'react';

class Tester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        'List item 1',
        'List item 2',
        'List item 3',
      ],
    };

    // this.displayStateData = this.displayStateData.bind(this);
  }

  displayStateData = () => {
    // const { listItems } = this.state;

    this.state.listItems.map(listItem => (
      <div>{listItem}</div>
    ));
  }


  render() {
    return (

      <input type="file" id="file" name="file" multiple />

    );
  }
}

export default Tester;
