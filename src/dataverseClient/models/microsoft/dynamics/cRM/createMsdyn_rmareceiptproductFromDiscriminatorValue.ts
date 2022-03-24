import {Msdyn_rmareceiptproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rmareceiptproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rmareceiptproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rmareceiptproduct();
}
