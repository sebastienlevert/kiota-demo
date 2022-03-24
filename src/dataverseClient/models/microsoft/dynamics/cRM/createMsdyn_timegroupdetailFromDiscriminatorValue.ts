import {Msdyn_timegroupdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_timegroupdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_timegroupdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_timegroupdetail();
}
