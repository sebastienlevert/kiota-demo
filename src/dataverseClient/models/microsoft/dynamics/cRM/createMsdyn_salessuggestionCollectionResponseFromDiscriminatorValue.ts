import {Msdyn_salessuggestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salessuggestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salessuggestionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salessuggestionCollectionResponse();
}
