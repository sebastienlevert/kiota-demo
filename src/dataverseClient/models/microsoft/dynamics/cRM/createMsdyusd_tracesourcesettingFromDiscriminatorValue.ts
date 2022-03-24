import {Msdyusd_tracesourcesetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_tracesourcesettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_tracesourcesetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_tracesourcesetting();
}
