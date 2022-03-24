import {Msdyn_federatedarticleincident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_federatedarticleincidentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_federatedarticleincident {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_federatedarticleincident();
}
