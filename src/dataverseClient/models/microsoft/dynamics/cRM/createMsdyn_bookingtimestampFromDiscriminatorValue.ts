import {Msdyn_bookingtimestamp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingtimestampFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingtimestamp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingtimestamp();
}
