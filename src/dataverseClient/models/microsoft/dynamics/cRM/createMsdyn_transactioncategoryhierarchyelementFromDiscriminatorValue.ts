import {Msdyn_transactioncategoryhierarchyelement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transactioncategoryhierarchyelementFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transactioncategoryhierarchyelement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transactioncategoryhierarchyelement();
}
