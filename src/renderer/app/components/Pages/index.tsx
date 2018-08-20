import { observer } from 'mobx-react';
import React from 'react';
import Page from '../Page';
import StyledPages from './styles';
import store from '@app/store';

@observer
export default class Pages extends React.Component {
  public render() {
    return (
      <StyledPages>
        {/* {store.pagesStore.pages.map(page => (
          <Page key={page.id} page={page} />
        ))} */}
      </StyledPages>
    );
  }
}
