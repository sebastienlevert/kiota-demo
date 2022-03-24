import {Virtualresourcegroupresource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVirtualresourcegroupresourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Virtualresourcegroupresource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Virtualresourcegroupresource();
}
