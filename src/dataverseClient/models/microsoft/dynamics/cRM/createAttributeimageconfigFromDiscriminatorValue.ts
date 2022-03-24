import {Attributeimageconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeimageconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Attributeimageconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Attributeimageconfig();
}
