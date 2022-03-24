import {Uom} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUomFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uom {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uom();
}
