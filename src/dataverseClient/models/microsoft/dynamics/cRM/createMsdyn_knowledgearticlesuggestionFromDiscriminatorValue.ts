import {Msdyn_knowledgearticlesuggestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_knowledgearticlesuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_knowledgearticlesuggestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_knowledgearticlesuggestion();
}
