import {Msdyn_fieldservicesystemjob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_fieldservicesystemjobFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_fieldservicesystemjob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_fieldservicesystemjob();
}
