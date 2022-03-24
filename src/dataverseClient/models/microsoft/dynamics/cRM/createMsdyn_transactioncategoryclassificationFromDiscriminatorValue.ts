import {Msdyn_transactioncategoryclassification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transactioncategoryclassificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transactioncategoryclassification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transactioncategoryclassification();
}
