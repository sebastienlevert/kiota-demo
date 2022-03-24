import {Msdyn_federatedarticle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_federatedarticleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_federatedarticle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_federatedarticle();
}
