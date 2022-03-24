import {Msdyn_resourcerequirementdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourcerequirementdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourcerequirementdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourcerequirementdetail();
}
