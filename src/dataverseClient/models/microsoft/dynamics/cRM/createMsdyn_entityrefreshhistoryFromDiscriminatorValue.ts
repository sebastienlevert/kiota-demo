import {Msdyn_entityrefreshhistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_entityrefreshhistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_entityrefreshhistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_entityrefreshhistory();
}
