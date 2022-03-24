import {Msdyn_sessionparticipant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sessionparticipantFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sessionparticipant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sessionparticipant();
}
