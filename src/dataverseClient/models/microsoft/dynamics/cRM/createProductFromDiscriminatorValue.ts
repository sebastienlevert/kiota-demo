import {Product} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Product {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Product();
}
