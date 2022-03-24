import {Msdyn_salesroutingrunCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salesroutingrunCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salesroutingrunCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salesroutingrunCollectionResponse();
}
