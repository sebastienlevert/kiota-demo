import {Msdyn_agreementbookingproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementbookingproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementbookingproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementbookingproduct();
}
