import React from 'react';

export class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='flex flex-row'>
        <div className='basis-1/12'></div>
        <div className="basis-9/12 bg-slate-50">Header Works!</div>
      </div>
    );
  }
}
