import {Msdyn_findworkevent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_findworkeventFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_findworkevent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_findworkevent();
}
