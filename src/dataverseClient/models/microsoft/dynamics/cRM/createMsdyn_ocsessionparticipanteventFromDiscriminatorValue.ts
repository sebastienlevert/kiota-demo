import {Msdyn_ocsessionparticipantevent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsessionparticipanteventFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsessionparticipantevent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsessionparticipantevent();
}
