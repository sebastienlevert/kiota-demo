import {Serviceappointment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceappointmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Serviceappointment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Serviceappointment();
}
