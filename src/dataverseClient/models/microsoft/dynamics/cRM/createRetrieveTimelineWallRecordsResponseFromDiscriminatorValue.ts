import {RetrieveTimelineWallRecordsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetrieveTimelineWallRecordsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RetrieveTimelineWallRecordsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RetrieveTimelineWallRecordsResponse();
}
