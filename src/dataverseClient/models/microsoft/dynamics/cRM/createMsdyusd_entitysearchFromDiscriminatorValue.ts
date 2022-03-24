import {Msdyusd_entitysearch} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_entitysearchFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_entitysearch {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_entitysearch();
}
