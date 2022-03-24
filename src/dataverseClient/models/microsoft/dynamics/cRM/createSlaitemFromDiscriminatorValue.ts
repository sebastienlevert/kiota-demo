import {Slaitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSlaitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Slaitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Slaitem();
}
