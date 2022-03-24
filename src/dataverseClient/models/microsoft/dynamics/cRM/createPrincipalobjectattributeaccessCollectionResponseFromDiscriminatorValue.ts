import {PrincipalobjectattributeaccessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrincipalobjectattributeaccessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrincipalobjectattributeaccessCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrincipalobjectattributeaccessCollectionResponse();
}
