import {Msdyn_recordingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_recordingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_recordingCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_recordingCollectionResponse();
}
