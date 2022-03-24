import {Appointment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppointmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appointment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appointment();
}
