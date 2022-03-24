import {Msdyn_dataflowrefreshhistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataflowrefreshhistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataflowrefreshhistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataflowrefreshhistory();
}
