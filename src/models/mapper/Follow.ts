import { FollowStatus } from "../domain/Feed/FollowStatus";
import { GetFollowStatusDto } from "../dto/Follow/GetFollowStatusDto";

export const fetFollowStatusDtoToFollowStatus = (dto: GetFollowStatusDto): FollowStatus => {
    if (dto.following) {
        return FollowStatus.FOLLOWING;
    } else {
        return FollowStatus.UNFOLLOWED;
    }
};
