import {Bookableresourcecategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourcecategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookableresourcecategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookableresourcecategory();
}
