import {GetQuantityDecimalResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetQuantityDecimalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetQuantityDecimalResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetQuantityDecimalResponse();
}
