import {Sla} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSlaFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sla {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sla();
}
