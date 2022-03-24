import {Msdyn_richtextfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_richtextfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_richtextfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_richtextfile();
}
