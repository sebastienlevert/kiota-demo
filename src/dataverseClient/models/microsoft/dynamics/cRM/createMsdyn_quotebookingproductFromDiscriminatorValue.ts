import {Msdyn_quotebookingproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotebookingproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotebookingproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotebookingproduct();
}
