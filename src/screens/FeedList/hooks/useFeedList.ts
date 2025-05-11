import {SweetError} from '@/apis/error';
import {fetchFeedListAPI} from '@/apis/feedApi';
import {FeedSummary} from '@/models/domain/Feed/FeedSummary';
import {FollowStatus} from '@/models/domain/Feed/FollowStatus';
import {contentDtoToDomain} from '@/models/mapper/Feed';
import {useCallback, useState} from 'react';

export const useFeedList = () => {
  const [feeds, setFeeds] = useState<FeedSummary[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);

  const getFeedList = useCallback(
    (followStatus: FollowStatus) => {
      if (isLast) {
        return;
      } else {
        fetchFeedListAPI(page, followStatus)
          .then(res => {
            setPage(res.number + 1);
            setIsLast(res.last);
            setFeeds(prev => [...prev, ...contentDtoToDomain(res.content)]);
          })
          .catch(err => {
            if (err instanceof SweetError) {
              console.log(err.errorMessage);
            }
          });
      }
    },
    [isLast, page],
  );

  return {feeds, getFeedList};
};
