import {Msdyn_transactionorigin} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transactionoriginFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transactionorigin {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transactionorigin();
}
