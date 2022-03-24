import {Msdyn_casetopic_incident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_casetopic_incidentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_casetopic_incident {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_casetopic_incident();
}
