import {Msdyn_aibfileattacheddata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aibfileattacheddataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aibfileattacheddata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aibfileattacheddata();
}
