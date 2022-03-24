import {Productsalesliterature} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProductsalesliteratureFromDiscriminatorValue(parseNode: ParseNode | undefined) : Productsalesliterature {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Productsalesliterature();
}
