import {Customapi} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomapiFromDiscriminatorValue(parseNode: ParseNode | undefined) : Customapi {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Customapi();
}
