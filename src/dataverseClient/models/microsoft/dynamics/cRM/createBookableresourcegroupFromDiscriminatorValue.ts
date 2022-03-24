import {Bookableresourcegroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourcegroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookableresourcegroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookableresourcegroup();
}
