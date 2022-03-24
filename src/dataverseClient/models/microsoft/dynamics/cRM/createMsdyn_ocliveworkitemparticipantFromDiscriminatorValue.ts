import {Msdyn_ocliveworkitemparticipant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocliveworkitemparticipantFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocliveworkitemparticipant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocliveworkitemparticipant();
}
