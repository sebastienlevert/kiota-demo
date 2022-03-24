import {Msdyn_sequencetargetstep} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sequencetargetstepFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sequencetargetstep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sequencetargetstep();
}
