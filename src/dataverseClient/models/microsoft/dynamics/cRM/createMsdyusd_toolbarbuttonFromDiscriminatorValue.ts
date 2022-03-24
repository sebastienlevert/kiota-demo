import {Msdyusd_toolbarbutton} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_toolbarbuttonFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_toolbarbutton {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_toolbarbutton();
}
