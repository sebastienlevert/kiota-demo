import {Msdyn_resourceassignmentdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourceassignmentdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourceassignmentdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourceassignmentdetail();
}
