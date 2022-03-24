import {Msdyn_transcript} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transcriptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transcript {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transcript();
}
