import {Msdyn_recording} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_recordingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_recording {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_recording();
}
