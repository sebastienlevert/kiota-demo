import {Msdyn_rtvproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rtvproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rtvproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rtvproduct();
}
