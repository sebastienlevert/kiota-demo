import {Msdyusd_search} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_searchFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_search {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_search();
}
