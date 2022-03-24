import {Msdyusd_uiievent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_uiieventFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_uiievent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_uiievent();
}
