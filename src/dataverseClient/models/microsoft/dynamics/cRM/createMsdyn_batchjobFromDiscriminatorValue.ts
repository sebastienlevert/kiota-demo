import {Msdyn_batchjob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_batchjobFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_batchjob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_batchjob();
}
