import {Msdyn_requirementstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_requirementstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_requirementstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_requirementstatus();
}
