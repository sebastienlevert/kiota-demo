import {Msdyn_actioncardregarding} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_actioncardregardingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_actioncardregarding {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_actioncardregarding();
}
