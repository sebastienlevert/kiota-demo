import {Knowledgearticleincident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKnowledgearticleincidentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Knowledgearticleincident {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Knowledgearticleincident();
}
