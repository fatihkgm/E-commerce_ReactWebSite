import React from 'react';
import SHOP_DATA from './shopydata.js';
import CollectionView from '../../components/collectionView/collection_view';

class ShopyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop_page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionView key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopyPage;
