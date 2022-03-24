import {Msdyn_quoteinvoicingproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quoteinvoicingproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quoteinvoicingproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quoteinvoicingproduct();
}
