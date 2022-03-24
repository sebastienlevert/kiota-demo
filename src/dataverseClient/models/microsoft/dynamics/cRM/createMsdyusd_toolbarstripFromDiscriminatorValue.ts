import {Msdyusd_toolbarstrip} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_toolbarstripFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_toolbarstrip {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_toolbarstrip();
}
