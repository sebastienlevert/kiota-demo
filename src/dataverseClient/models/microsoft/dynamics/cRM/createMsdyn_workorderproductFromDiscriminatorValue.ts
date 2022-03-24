import {Msdyn_workorderproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderproduct();
}
