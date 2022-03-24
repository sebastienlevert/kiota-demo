import {Msdyn_unifiedroutingsetuptracker} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_unifiedroutingsetuptrackerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_unifiedroutingsetuptracker {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_unifiedroutingsetuptracker();
}
