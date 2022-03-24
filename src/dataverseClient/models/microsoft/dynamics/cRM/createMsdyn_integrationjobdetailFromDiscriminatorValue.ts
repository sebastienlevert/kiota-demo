import {Msdyn_integrationjobdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_integrationjobdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_integrationjobdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_integrationjobdetail();
}
