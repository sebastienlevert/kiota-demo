import {Msdyn_untrackedappointment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_untrackedappointmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_untrackedappointment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_untrackedappointment();
}
