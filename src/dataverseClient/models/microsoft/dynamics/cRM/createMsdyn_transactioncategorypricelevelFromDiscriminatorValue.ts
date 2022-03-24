import {Msdyn_transactioncategorypricelevel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transactioncategorypricelevelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transactioncategorypricelevel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transactioncategorypricelevel();
}
