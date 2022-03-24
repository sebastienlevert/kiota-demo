import {Webresource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebresourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Webresource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Webresource();
}
