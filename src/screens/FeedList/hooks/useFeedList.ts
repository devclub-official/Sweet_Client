import {SweetError} from '@/apis/error';
import {deleteFeedLike, fetchFeedListAPI, postFeedLike} from '@/apis/feedApi';
import { postFollows } from '@/apis/followApi';
import {FeedSummary} from '@/models/domain/Feed/FeedSummary';
import {FollowStatus} from '@/models/domain/Feed/FollowStatus';
import {contentDtoToDomain} from '@/models/mapper/Feed';
import { useUserStore } from '@/stores/useAuthStore';
import {useCallback, useState} from 'react';

export const useFeedList = () => {
  const [feeds, setFeeds] = useState<FeedSummary[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const user = useUserStore(state => state.user);

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

  const likeFeed = (feedId: string) => {
    if (user) {
      postFeedLike(Number(feedId), user.id)
          .then(() => {
            setFeeds((prevFeeds) => {
              const updated = prevFeeds.map((feed) => {
                if (feed.id === feedId) {
                  const newFeed = {
                    ...feed,
                    isLiked: !feed.isLiked,
                    likeCnt: feed.likeCnt + 1,
                  };
                  return newFeed;
                }
                return feed;
              });
              return updated;
            }
            );
          })
          .catch((err) => {
              if (err instanceof SweetError) {
                  console.log(err.errorMessage);
              }
          });
    } else {
      //TODO: 나중에 지워질 예정
      postFeedLike(Number(feedId), 1)
          .then(() => {
            setFeeds((prevFeeds) => {
              const updated = prevFeeds.map((feed) => {
                if (feed.id === feedId) {
                  const newFeed = {
                    ...feed,
                    isLiked: !feed.isLiked,
                    likeCnt: feed.likeCnt + 1,
                  };
                  return newFeed;
                }
                return feed;
              });
              return updated;
            }
            );
          })
          .catch((err) => {
              if (err instanceof SweetError) {
                  console.log(err.errorMessage);
              }
          });
      }
  };

  const unlikeFeed = (feedId: string) => {
    if (user) {
      deleteFeedLike(Number(feedId), user.id)
          .then(() => {
            setFeeds((prevFeeds) =>
              prevFeeds.map((feed) =>
                feed.id === feedId
                  ? {
                      ...feed,
                      isLiked: !feed.isLiked,
                      likeCnt: feed.likeCnt - 1,
                    }
                  : feed
              )
            );
          })
          .catch((err) => {
              if (err instanceof SweetError) {
                  console.log(err.errorMessage);
              }
          });
    } else {
      //TODO: 나중에 지워질 예정
      deleteFeedLike(Number(feedId), 1)
          .then(() => {
            setFeeds((prevFeeds) =>
              prevFeeds.map((feed) =>
                feed.id === feedId
                  ? {
                      ...feed,
                      isLiked: !feed.isLiked,
                      likeCnt: feed.likeCnt - 1,
                    }
                  : feed
              )
            );
          })
          .catch((err) => {
              if (err instanceof SweetError) {
                  console.log(err.errorMessage);
              }
          });
    }
  };

  const followUser = (userId: number) => {
    if (user) {
        postFollows(user.id, userId)
            .then(() => {
              setFeeds((prevFeeds) =>
                prevFeeds.map((feed) =>
                  feed.authorId === userId
                    ? {
                        ...feed,
                        followStatus: FollowStatus.FOLLOWING,
                      }
                    : feed
                )
              );
            })
            .catch((err) => {
                if (err instanceof SweetError) {
                    console.log(err.errorMessage);
                }
            });
    } else {
        //TODO: 나중에 지워질 예정
        postFollows(1, userId)
          .then(() => {
            console.log('followUser');
            setFeeds((prevFeeds) =>
              prevFeeds.map((feed) =>
                feed.authorId === userId
                  ? {
                      ...feed,
                      followStatus: FollowStatus.UNFOLLOWED,
                    }
                  : feed
              )
            );
          })
          .catch((err) => {
              if (err instanceof SweetError) {
                  console.log(err.errorMessage);
              }
          });
    }
};

  return {
    feeds,
    getFeedList,
    likeFeed,
    unlikeFeed,
    followUser,
  };
};
