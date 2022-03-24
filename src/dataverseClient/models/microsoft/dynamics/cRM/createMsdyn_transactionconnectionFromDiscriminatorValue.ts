import {Msdyn_transactionconnection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transactionconnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transactionconnection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transactionconnection();
}
