import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionView from '../../components/collectionView/collection_view';
import { selectCollections } from '../../redux/shopy/shopy_selector';

const ShopyPage = ({ collections }) => (
  <div className="shop_page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionView key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections : selectCollections
})

export default connect (mapStateToProps) (ShopyPage);
