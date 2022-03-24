import {Msdyusd_scriptlet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_scriptletFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_scriptlet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_scriptlet();
}
