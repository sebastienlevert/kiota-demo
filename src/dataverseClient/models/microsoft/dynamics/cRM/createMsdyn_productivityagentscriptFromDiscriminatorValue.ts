import {Msdyn_productivityagentscript} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivityagentscriptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivityagentscript {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivityagentscript();
}
