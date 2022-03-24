import {Msdyn_ocliveworkitemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocliveworkitemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocliveworkitemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocliveworkitemCollectionResponse();
}
