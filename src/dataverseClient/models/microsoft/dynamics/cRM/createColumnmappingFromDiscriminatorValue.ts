import {Columnmapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnmappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Columnmapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Columnmapping();
}
