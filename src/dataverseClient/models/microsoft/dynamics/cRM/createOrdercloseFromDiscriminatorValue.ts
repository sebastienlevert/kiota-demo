import {Orderclose} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrdercloseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Orderclose {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Orderclose();
}
