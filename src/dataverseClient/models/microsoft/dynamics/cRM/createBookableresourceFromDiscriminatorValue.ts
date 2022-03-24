import {Bookableresource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookableresource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookableresource();
}
