import {Msdyn_userworkhistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_userworkhistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_userworkhistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_userworkhistory();
}
