import {Msdyn_knowledgearticletemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_knowledgearticletemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_knowledgearticletemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_knowledgearticletemplate();
}
