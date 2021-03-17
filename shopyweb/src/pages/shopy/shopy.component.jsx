import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collection_overview/collection_overview';
import CollectionPage from '../collection/collection';

const ShopyPage = ({match}) => (
  <div className="shop_page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);

export default ShopyPage;


