import {Msdyn_slakpi} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_slakpiFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_slakpi {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_slakpi();
}
