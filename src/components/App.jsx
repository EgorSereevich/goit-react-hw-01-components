import { CreateProfile } from './profile/profile';
import user from './profile/user.json';
import { CreateStatistics } from './statistics/statistics';
import datas from './statistics/data.json';
import { CreateFriendList } from './friendlist/friendlist';
import friends from './friendlist/friends.json';
import { TransactionHistory } from './transactionhistory/transactionhistory';
import items from './transactionhistory/transactions.json';
export const App = () => {
  return (
    <div>
      <CreateProfile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <CreateStatistics title={'Upload stats'} stats={datas} />
      <CreateFriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
