import {Msdyn_knowledgearticleimage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_knowledgearticleimageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_knowledgearticleimage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_knowledgearticleimage();
}
