import {Msdyn_transactiontype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transactiontypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transactiontype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transactiontype();
}
