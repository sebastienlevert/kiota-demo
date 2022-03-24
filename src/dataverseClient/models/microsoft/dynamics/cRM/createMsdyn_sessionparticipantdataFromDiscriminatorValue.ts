import {Msdyn_sessionparticipantdata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sessionparticipantdataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sessionparticipantdata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sessionparticipantdata();
}
