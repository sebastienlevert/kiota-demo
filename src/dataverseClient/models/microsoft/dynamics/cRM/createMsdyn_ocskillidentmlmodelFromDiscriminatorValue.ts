import {Msdyn_ocskillidentmlmodel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocskillidentmlmodelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocskillidentmlmodel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocskillidentmlmodel();
}
