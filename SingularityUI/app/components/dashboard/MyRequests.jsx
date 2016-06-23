import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Utils from '../../utils';

import * as RequestsSelectors from '../../selectors/requests';

import RequestCounts from './RequestCounts';
import RequestCount from './RequestCount';

const MyRequests = ({userRequestTotals, userAPI}) => {
  const totals = userRequestTotals;
  const deployUser = Utils.maybe(userAPI.data, [
    'user',
    'id'
  ]);

  return (
    <RequestCounts>
      <RequestCount
        label={'total'}
        count={totals.total}
        link={`${config.appRoot}/requests/active/all/${deployUser}`}
      />
      <RequestCount
        label={'on demand'}
        count={totals.ON_DEMAND}
        link={`${config.appRoot}/requests/active/ON_DEMAND/${deployUser}`}
      />
      <RequestCount
        label={'worker'}
        count={totals.WORKER}
        link={`${config.appRoot}/requests/active/WORKER/${deployUser}`}
      />
      <RequestCount
        label={'scheduled'}
        count={totals.SCHEDULED}
        link={`${config.appRoot}/requests/active/SCHEDULED/${deployUser}`}
      />
      <RequestCount
        label={'run once'}
        count={totals.RUN_ONCE}
        link={`${config.appRoot}/requests/active/RUN_ONCE/${deployUser}`}
      />
      <RequestCount
        label={'service'}
        count={totals.SERVICE}
        link={`${config.appRoot}/requests/active/SERVICE/${deployUser}`}
      />
    </RequestCounts>
  );
};

const mapStateToProps = (state) => {
  return {
    userRequestTotals: RequestsSelectors.getUserRequestTotals(state),
    userAPI: state.api.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRequests);
