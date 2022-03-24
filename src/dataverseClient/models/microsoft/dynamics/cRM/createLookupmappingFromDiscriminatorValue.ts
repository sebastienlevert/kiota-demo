import {Lookupmapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLookupmappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Lookupmapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Lookupmapping();
}
