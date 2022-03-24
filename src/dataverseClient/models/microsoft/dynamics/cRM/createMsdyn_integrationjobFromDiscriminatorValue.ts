import {Msdyn_integrationjob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_integrationjobFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_integrationjob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_integrationjob();
}
