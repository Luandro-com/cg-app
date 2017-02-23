import React from 'react';
import TimeAgo from 'timeago-react';

export default ({ date }) => <TimeAgo
  datetime={date}
  locale='pt_BR'
/>;
