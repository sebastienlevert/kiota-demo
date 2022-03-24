import {Msfp_alertCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_alertCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_alertCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_alertCollectionResponse();
}
