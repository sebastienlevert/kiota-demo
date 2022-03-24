import {Msdyn_sessiondata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sessiondataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sessiondata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sessiondata();
}
