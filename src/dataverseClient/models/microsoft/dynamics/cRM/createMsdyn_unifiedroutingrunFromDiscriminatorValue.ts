import {Msdyn_unifiedroutingrun} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_unifiedroutingrunFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_unifiedroutingrun {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_unifiedroutingrun();
}
