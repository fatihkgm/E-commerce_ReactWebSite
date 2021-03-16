import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory_selector';
import MenuItem from '../menu-item/menu-item.component';
import './directory_style.scss';
//Need to be class in order to store the state value of menu items to pass and create our menu

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToPops = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToPops)(Directory);
